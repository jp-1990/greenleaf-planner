import React from 'react';
import classes from './VisibleWeeks.module.scss';
import { days } from '../../../GlobalFunctions/dateOperations';

const VisibleWeeks = () => {
  // generate days of week with relevant dates
  const daysJsx = days.map((el) => {
    return (
      <div key={el} className={classes.day}>
        <p>{el.substring(0, 3)}</p>
        <p>1st</p>
      </div>
    );
  });

  // generate 3 week cards for prev/cur/next week
  const weeksJsx = [];
  for (let i = 0; i < 3; i++) {
    weeksJsx.push(
      <div key={i} className={classes.week}>
        <h4>September</h4>
        <div className={classes.days}>{daysJsx}</div>
      </div>
    );
  }

  return <div className={`${classes.weeks} container`}>{weeksJsx}</div>;
};

export default VisibleWeeks;
