import React from 'react';
import classes from './AssignedJob.module.scss';
import { capitaliseFirstLetters } from '../../../../../../GlobalFunctions/stringOperations';
import { useJobs } from '../../../../../../Context/JobsContext';

const AssignedJob = ({ id, title, time, location }) => {
  const setJobs = useJobs()[1];

  const deleteHandler = () => {
    setJobs((prev) => {
      const newState = [...prev];
      newState[newState.findIndex((el) => el['id'] === id)]['assigned'] = -1;
      return newState;
    });
  };

  return (
    <div className={classes.job}>
      <h6 className='truncate'>{capitaliseFirstLetters(title)}</h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{time}</p>
      </div>
      <i onClick={deleteHandler} className='material-icons'>
        clear
      </i>
    </div>
  );
};

export default AssignedJob;
