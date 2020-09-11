import React from 'react';
import classes from './Job.module.scss';

const Job = (props) => {
  return (
    <div className={classes.jobCard}>
      <div className={classes.top}>
        <h6 className='truncate'>{props.name}</h6>
        <div className={classes.rebook}>
          <span>{props.rebook}</span>
          <i className='material-icons'>replay</i>
        </div>
        <i className={`material-icons ${classes.clear}`}>clear</i>
      </div>
      <div className={classes.bottom}>
        <i className={`material-icons ${classes.person}`}>person_add</i>
        <span>Last visit: x days({props.prevVisit})</span>
        <i className={`material-icons ${classes.check}`}>check</i>
      </div>
    </div>
  );
};

export default Job;
