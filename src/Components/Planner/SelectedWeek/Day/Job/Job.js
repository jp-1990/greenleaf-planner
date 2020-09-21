import React, { useState, useEffect } from 'react';
import classes from './Job.module.scss';
import M from 'materialize-css';
import { useJobs } from '../../../../../Context/JobsContext';
import { capitaliseFirstLetters } from '../../../../../GlobalFunctions/stringOperations';
import { incrementDay } from '../../../../../GlobalFunctions/dateOperations';

const Job = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [rebooked, setRebooked] = useState(false);
  const [complete, setComplete] = useState(false);
  const [menuStyle, setMenuStyle] = useState('default');
  const [iconColor, setIconColor] = useState('#000000');
  const [jobs, setJobs] = useJobs();

  // if assigned, icon color should be that of relevant employee
  useEffect(() => {
    const colors = Object.values(props.colors).map((el) => el);
    const newColor =
      colors[jobs[jobs.findIndex((el) => el['id'] === props.id)]['assigned']];
    setIconColor(newColor);
  }, [props.colors, props.id, jobs]);

  // toggle menu
  const dropdownHandler = () => {
    setMenuStyle('inactive');
    setMenuToggle((prevState) => !prevState);
  };

  // send job to next/prev day
  const moveJobHandler = (operator) => {
    const newDate = incrementDay(props.nextVisit, operator);

    const newState = [...jobs];
    newState[
      newState.findIndex((el) => el['id'] === props.id)
    ].nextVisit = newDate;
    newState[newState.findIndex((el) => el['id'] === props.id)].assigned = -1;

    setJobs(newState);
  };

  // assign job to employee
  const assignJobHandler = (name, index) => {
    setJobs((prev) => {
      const newState = [...prev];
      newState[newState.findIndex((el) => el['id'] === props.id)][
        'assigned'
      ] = index;
      return newState;
    });

    setIconColor(props.colors[name]);

    M.toast({
      html: `${capitaliseFirstLetters(props.name)} assigned to ${name} for ${
        props.day
      }`,
      displayLength: 2000,
    });
    dropdownHandler();
  };

  // rebook job
  const rebookingHandler = () => {
    setRebooked(true);
    setIconColor('#000000');
    M.toast({
      html: `${capitaliseFirstLetters(props.name)} rebooked for ${
        props.rebook
      } days from now`,
      displayLength: 2000,
    });
  };

  // job complete toggle
  const completeHandler = () => {
    setComplete((prevState) => !prevState);
  };

  // delete job handler
  const deleteHandler = () => {
    const newState = [...jobs];
    newState.splice(
      newState.findIndex((el) => el.id === props.id),
      1
    );
    setJobs(newState);

    M.toast({
      html: `${capitaliseFirstLetters(
        props.name
      )} deleted from booking schedule`,
      displayLength: 2000,
    });
  };

  // jsx for menu to assign jobs
  const assignJobMenuJsx = () => {
    return Object.keys(props.colors).map((el, i) => {
      return (
        <i
          key={el}
          onClick={() => assignJobHandler(el, i)}
          style={{ color: props.colors[el] }}
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
        complete
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
          onClick={() => moveJobHandler('-')}
          className={`material-icons ${classes.prev}`}
        >
          chevron_left
        </i>
        <h6 className='truncate'>{props.name}</h6>
        <div className={classes.rebook}>
          <span>{props.rebook}</span>
          <i
            onClick={rebooked ? null : rebookingHandler}
            className='material-icons'
          >
            replay
          </i>
        </div>
        <i
          onClick={deleteHandler}
          className={`material-icons ${classes.clear}`}
        >
          clear
        </i>
        <i
          onClick={() => moveJobHandler('+')}
          className={`material-icons ${classes.next}`}
        >
          chevron_right
        </i>
      </div>
      <div className={classes.bottom}>
        <i
          style={{ color: iconColor }}
          onClick={rebooked ? null : dropdownHandler}
          className={`material-icons ${classes.person}`}
        >
          person_add
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
        <span className={`${rebooked ? classes.rebooked : null}`}>
          {rebooked ? `REBOOKED` : `Last visit: ${props.prevVisit}`}
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
