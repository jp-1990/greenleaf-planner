import React from 'react';
import classes from './AssignedJob.module.scss';
import { capitaliseFirstLetters } from '../../../../../../GlobalFunctions/stringOperations';

const AssignedJob = ({ title, time, location }) => {
  return (
    <div className={classes.job}>
      <h6 className='truncate'>{capitaliseFirstLetters(title)}</h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{time}</p>
      </div>
      <i className='material-icons'>clear</i>
    </div>
  );
};

export default AssignedJob;
