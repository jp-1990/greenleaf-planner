import React from 'react';
import classes from './AllocatedJob.module.scss';
import JobDetails from './JobDetails/JobDetails';

const AllocatedJob = ({
  title,
  time,
  id,
  address,
  numbers,
  notes,
  details,
  setDetails,
}) => {
  const displayDetails =
    id === details ? (
      <JobDetails
        title={title}
        notes={notes}
        time={time}
        address={address}
        numbers={numbers}
      />
    ) : null;

  const displayDetailsHandler = () => {
    if (details === id) {
      setDetails(null);
    } else {
      setDetails(id);
    }
  };

  return (
    <div className={classes.job}>
      <h6 className='truncate' onClick={displayDetailsHandler}>
        {title}
      </h6>
      <div className={classes.time}>
        <i className='material-icons'>query_builder</i>
        <p>{time}</p>
      </div>
      {displayDetails}
    </div>
  );
};

export default AllocatedJob;
