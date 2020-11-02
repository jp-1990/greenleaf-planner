import React, { useState, useEffect } from 'react';
import classes from './Job.module.scss';
import { debounce } from 'lodash';
import M from 'materialize-css';
import { useJobs } from '../../../../../../Context/JobsContext';
import { useStaff } from '../../../../../../Context/StaffContext';
import { capitaliseFirstLetters } from '../../../../../../GlobalFunctions/stringOperations';

const Job = ({
  name,
  id,
  bookedFrom,
  location,
  address,
  rebook,
  rebooked,
  prevVisit,
  nextVisit,
  numbers,
  complete,
  assigned,
  notes,
  time,
  day,
}) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [rebookedState, setRebookedState] = useState(rebooked);
  const [rebookValue, setRebookValue] = useState(rebook);
  const [completeState, setCompleteState] = useState(complete);
  const [menuStyle, setMenuStyle] = useState('default');
  const [iconColor, setIconColor] = useState('#000000');
  const { jobList, jobsDatabaseRef, setUpdateTrigger } = useJobs();
  const { colors } = useStaff();

  // first monday of the year from the next visit prop
  const firstMonday = (date) => {
    let output;
    for (let i = 0; i < 7; i++) {
      if (new Date(date.split('/')[2], 0, i).getDay() === 1) {
        output = new Date(date.split('/')[2], 0, i);
      }
    }
    return output;
  };

  // build database ref based on relevent week of the year
  const databaseYear = (date, increment) => {
    // date from next visit prop
    const targetDate = new Date(
      date.split('/')[2],
      date.split('/')[1] - 1,
      date.split('/')[0]
    );

    // the relevant year in the database based on full weeks
    const relevantYear = () => {
      if (targetDate.getTime() < firstMonday(date).getTime() && increment < 0)
        return targetDate.getFullYear() - 1;
      if (
        targetDate.getTime() >= new Date(date.split('/')[2], 0, 1).getTime() &&
        targetDate.getTime() < firstMonday(date).getTime()
      ) {
        return targetDate.getFullYear() - 1;
      }
      if (targetDate.getTime() === firstMonday(date).getTime() && increment > 0)
        return targetDate.getFullYear();
      return targetDate.getFullYear();
    };

    return relevantYear();
  };

  const database = jobsDatabaseRef(
    new Date(
      nextVisit.split('/')[2],
      nextVisit.split('/')[1] - 1,
      nextVisit.split('/')[0]
    ).getFullYear()
  );

  // if assigned, icon color should be that of relevant employee
  useEffect(() => {
    const colorsValue = Object.values(colors).map((el) => el);
    const newColor =
      colorsValue[
        jobList[jobList.findIndex((el) => el['id'] === id)]['assigned']
      ];
    setIconColor(newColor);
  }, [colors, id, jobList]);

  // toggle menu
  const dropdownHandler = () => {
    setMenuStyle('inactive');
    setMenuToggle((prevState) => !prevState);
  };

  // send job to next/prev day
  const moveJobHandler = (increment) => {
    const newDate = new Date(
      nextVisit.split('/')[2],
      nextVisit.split('/')[1] - 1,
      nextVisit.split('/')[0]
    );
    // if target day is sunday, increment again
    if (
      new Date(newDate.setDate(newDate.getDate() + increment)).getDay() === 0
    ) {
      newDate.setDate(newDate.getDate() + increment);
    }

    // get correct database year for update
    const targetYear = databaseYear(newDate.toLocaleDateString(), increment);
    const database = jobsDatabaseRef(targetYear);

    // if still in the same database year, update, otherwise delete and rebook in relevant database year
    if (
      newDate.getTime() < firstMonday(newDate.toLocaleDateString()).getTime() &&
      increment < 0
    ) {
      // data to send
      const rebookObject = {
        id: null,
        bookedFrom: bookedFrom || '',
        address: address,
        assigned: -1,
        location: location,
        name: name,
        nextVisit: newDate.toLocaleDateString(),
        notes: notes,
        numbers: numbers,
        prevVisit: prevVisit,
        rebook: rebook,
        rebooked: false,
        time: time,
      };

      // database ref
      const ref = jobsDatabaseRef(targetYear).push();
      ref.set({ ...rebookObject, id: ref.key });

      // delete entry from next year
      jobsDatabaseRef(targetYear + 1)
        .child(id)
        .remove();

      setUpdateTrigger((prev) => !prev);
    } else if (
      newDate.getTime() ===
        firstMonday(newDate.toLocaleDateString()).getTime() &&
      increment > 0
    ) {
      // data to send
      const rebookObject = {
        id: null,
        bookedFrom: bookedFrom || '',
        address: address,
        assigned: -1,
        location: location,
        name: name,
        nextVisit: newDate.toLocaleDateString(),
        notes: notes,
        numbers: numbers,
        prevVisit: prevVisit,
        rebook: rebook,
        rebooked: false,
        time: time,
      };

      // database ref
      const ref = jobsDatabaseRef(targetYear).push();
      ref.set({ ...rebookObject, id: ref.key });

      // delete from previous year in database
      jobsDatabaseRef(targetYear - 1)
        .child(id)
        .remove();

      setUpdateTrigger((prev) => !prev);
    } else {
      database.child(id).update({ nextVisit: newDate.toLocaleDateString() });
    }

    setTimeout(() => {
      M.toast({
        html: `${capitaliseFirstLetters(
          name
        )} moved to ${newDate.toLocaleDateString()}`,
        displayLength: 2000,
      });
    }, 100);
  };

  // assign job to employee
  const assignJobHandler = (employeeIndex) => {
    dropdownHandler();
    setIconColor(Object.values(colors)[employeeIndex]);

    const database = jobsDatabaseRef(databaseYear(nextVisit, 0));

    database.child(id).update({ assigned: employeeIndex });

    setTimeout(() => {
      M.toast({
        html: `${capitaliseFirstLetters(name)} ${
          employeeIndex !== -1
            ? 'assigned to ' +
              Object.keys(colors)[employeeIndex] +
              ' for ' +
              day
            : 'unassigned'
        }`,
        displayLength: 2000,
      });
    }, 100);
  };

  // rebook job
  const rebookingHandler = () => {
    setRebookedState(true);

    const curVisit = new Date(
      nextVisit.split('/')[2],
      nextVisit.split('/')[1] - 1,
      nextVisit.split('/')[0]
    );

    // new visit date, either user input, or default value
    const rebookFinalValue = rebookValue > 0 ? rebookValue : rebook;
    const newVisit = new Date(
      curVisit.setDate(curVisit.getDate() + rebookFinalValue)
    );

    // if target is Sunday, book for Monday instead
    let modifiedRebookValue = rebookValue;
    if (newVisit.getDay() === 0) {
      newVisit.setDate(newVisit.getDate() + 1);
      modifiedRebookValue += 1;
    }

    // data to send
    const rebookObject = {
      id: null,
      bookedFrom: id,
      address: address,
      assigned: -1,
      location: location,
      name: name,
      nextVisit: newVisit.toLocaleDateString(),
      notes: '',
      numbers: numbers,
      prevVisit: nextVisit,
      rebook: rebook,
      rebooked: false,
      time: time,
    };

    // database ref
    const rebookRef = jobsDatabaseRef(
      databaseYear(newVisit.toLocaleDateString())
    ).push();
    rebookRef.set({ ...rebookObject, id: rebookRef.key });

    // find host job and mark as rebooked
    if (
      firstMonday(newVisit.toLocaleDateString()).getTime() >= newVisit.getTime()
    ) {
      jobsDatabaseRef(+newVisit.toLocaleDateString().split('/')[2] - 1)
        .child(id)
        .update({ rebooked: true });
    } else {
      database.child(id).update({ rebooked: true });
    }

    setUpdateTrigger((prev) => !prev);

    setTimeout(() => {
      M.toast({
        html: `${capitaliseFirstLetters(
          name
        )} rebooked for ${modifiedRebookValue} day(s) from now`,
        displayLength: 2000,
      });
    }, 100);
  };

  // job complete toggle
  const completeHandler = debounce(
    () => {
      database.child(id).update({ complete: !completeState });

      setCompleteState((prevState) => {
        return !prevState;
      });

      setTimeout(() => {
        M.toast({
          html: `${capitaliseFirstLetters(name)} ${
            completeState ? `unmarked as complete` : `marked as complete`
          }`,
          displayLength: 2000,
        });
      }, 100);
    },
    1000,
    { leading: false, trailing: true }
  );

  // delete job handler
  const deleteHandler = debounce(
    () => {
      if (bookedFrom) {
        database.child(bookedFrom).update({ rebooked: false });
      }
      database.child(id).remove();

      setUpdateTrigger((prev) => !prev);

      setTimeout(() => {
        M.toast({
          html: `Job for ${capitaliseFirstLetters(name)} deleted`,
          displayLength: 2000,
        });
      }, 100);
    },
    1000,
    { leading: false, trailing: true }
  );

  // jsx for menu to assign jobs
  const assignJobMenuJsx = () => {
    return Object.keys(colors).map((el, i) => {
      return (
        <i
          key={el}
          onClick={() => assignJobHandler(i)}
          style={{ color: colors[el] }}
          className={`material-icons ${classes.personAdd}`}
        >
          person
        </i>
      );
    });
  };

  return (
    <div
      style={
        completeState
          ? {
              border: '1px solid #43a047',
              boxShadow: '0 0 3px #2e7d32',
            }
          : null
      }
      className={classes.jobCard}
    >
      <div className={classes.top}>
        <i
          onClick={
            rebookedState || completeState ? null : () => moveJobHandler(-1)
          }
          className={`material-icons ${classes.prev}`}
        >
          chevron_left
        </i>
        <h6 className='truncate'>{name}</h6>
        <div className={classes.rebook}>
          {rebookedState ? (
            <span>{rebookValue}</span>
          ) : (
            <input
              value={rebookValue}
              onChange={(e) => setRebookValue(e.target.value * 1)}
            ></input>
          )}
          <i
            onClick={rebookedState ? null : rebookingHandler}
            className='material-icons'
          >
            replay
          </i>
        </div>
        <i
          onClick={rebookedState || completeState ? null : deleteHandler}
          className={`material-icons ${classes.clear}`}
        >
          clear
        </i>
        <i
          onClick={
            rebookedState || completeState ? null : () => moveJobHandler(1)
          }
          className={`material-icons ${classes.next}`}
        >
          chevron_right
        </i>
      </div>
      <div className={classes.bottom}>
        <i
          style={menuToggle ? { color: '#000000' } : { color: iconColor }}
          onClick={() => {
            if (!rebookedState || !completeState) {
              dropdownHandler();
            }
            if (menuToggle) {
              assignJobHandler(-1);
              dropdownHandler();
            }
          }}
          className={`material-icons ${classes.person}`}
        >
          {!iconColor ? 'person_add' : 'person'}
        </i>
        <div
          className={
            menuToggle
              ? `${classes.dropdown}`
              : `${classes.dropdown} ${classes[menuStyle]}`
          }
        >
          <i className={`material-icons ${classes.arrow}`}>chevron_right</i>
          {assignJobMenuJsx()}
        </div>
        <span
          className={`${rebookedState && rebooked ? classes.rebooked : null}`}
        >
          {rebookedState && rebooked ? `REBOOKED` : `Last visit: ${prevVisit}`}
        </span>
        <i
          onClick={completeHandler}
          className={`material-icons ${classes.check}`}
        >
          check
        </i>
      </div>
    </div>
  );
};

export default Job;
