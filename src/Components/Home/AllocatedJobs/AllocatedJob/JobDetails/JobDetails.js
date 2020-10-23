import React from 'react';
import classes from './JobDetails.module.scss';

const JobDetails = ({ title, notes, time, address, numbers }) => {
  const addressJsx = [];
  address.forEach((el) => {
    if (el) {
      addressJsx.push(<p key={el}>{el}</p>);
    }
  });

  const numbersJsx = [];
  numbers.forEach((el) => {
    if (el) {
      numbersJsx.push(<p key={el}>{el}</p>);
    }
  });

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
        <div className={classes.address}>{addressJsx}</div>
        <div className={classes.notes}>{notes}</div>
        <div className={classes.numbers}>{numbersJsx}</div>
      </div>
    </div>
  );
};

export default JobDetails;
