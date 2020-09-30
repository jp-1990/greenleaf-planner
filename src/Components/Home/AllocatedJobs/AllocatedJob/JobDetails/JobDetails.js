import React from 'react';
import classes from './JobDetails.module.scss';

const JobDetails = ({ title, notes, time, contact }) => {
  return (
    <div className={`${classes.details} grey lighten-4`}>
      <div className={classes.titleBox}>
        <h5 className='grey-text text-darken-2'>{title}</h5>
        <div className={classes.time}>
          <i className='material-icons'>query_builder</i>
          <p>{time}</p>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.contact}>{contact}</div>
        <div className={classes.notes}>{notes}</div>
      </div>
    </div>
  );
};

export default JobDetails;
