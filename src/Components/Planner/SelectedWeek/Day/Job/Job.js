import React, { useState } from 'react';
import classes from './Job.module.scss';
import M from 'materialize-css';
import { useAssignJobs } from '../../../../../Context/JobsContext';
import { capitaliseFirstLetters } from '../../../../../GlobalFunctions/stringOperations';

const Job = (props) => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [assignedJobs, setAssignedJobs] = useAssignJobs();

  // toggle menu
  const dropdownHandler = () => {
    setMenuToggle((prevState) => !prevState);
  };

  // assign job to employee
  const assignJobHandler = (name, index) => {
    const mutate = { ...assignedJobs };
    mutate[props.day.toLowerCase()][index].push({
      name: props.name,
      location: props.location,
      time: props.time,
    });

    setAssignedJobs(mutate);

    M.toast({
      html: `${capitaliseFirstLetters(props.name)} assigned to ${name} for ${
        props.day
      }`,
      displayLength: 1500,
    });
    dropdownHandler();
  };

  // rebook job
  const rebookingHandler = () => {
    M.toast({
      html: `Rebooked ${capitaliseFirstLetters(props.name)} for ${
        props.rebook
      } days from now`,
      displayLength: 1500,
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
    <div className={classes.jobCard}>
      <div className={classes.top}>
        <h6 className='truncate'>{props.name}</h6>
        <div className={classes.rebook}>
          <span>{props.rebook}</span>
          <i onClick={rebookingHandler} className='material-icons'>
            replay
          </i>
        </div>
        <i className={`material-icons ${classes.clear}`}>clear</i>
      </div>
      <div className={classes.bottom}>
        <i
          onClick={dropdownHandler}
          className={`material-icons ${classes.person}`}
        >
          person_add
        </i>
        <div
          className={
            menuToggle
              ? `${classes.dropdown}`
              : `${classes.dropdown} ${classes.inactive}`
          }
        >
          <i className={`material-icons ${classes.arrow}`}>chevron_right</i>
          {assignJobMenuJsx()}
        </div>
        <span>Last visit: {props.prevVisit}</span>
        <i className={`material-icons ${classes.check}`}>check</i>
      </div>
    </div>
  );
};

export default Job;
