import React from 'react';
import classes from './AllocatedJob.module.scss';
import JobDetails from './JobDetails/JobDetails';

const AllocatedJob = ({ title, time, id }) => {
  const testData =
    id === 1 ? (
      <JobDetails
        title={title}
        notes='Some notes about this job'
        time={time}
        contact='405 Some street, Norwich, Norfolk'
      />
    ) : null;

  return (
    <div className={classes.job}>
      <h6 className='truncate'>{title}</h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{time}</p>
      </div>
      {testData}
    </div>
  );
};

export default AllocatedJob;
