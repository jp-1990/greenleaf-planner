import React from 'react';
import classes from './AddJob.module.scss';

const AddJob = ({ setModalState }) => {
  return (
    <div onClick={() => setModalState('createjob')} className={classes.add}>
      <i className='material-icons'>add_circle</i>
      <p>Add new job...</p>
    </div>
  );
};

export default AddJob;
