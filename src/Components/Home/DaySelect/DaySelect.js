import React from 'react';
import { days } from '../../../GlobalFunctions/dateOperations';
import classes from './DaySelect.module.scss';

const DaySelect = () => {
  const daysJsx = days.map((el) => {
    return (
      <p key={el} onClick={null} className={`${classes.day} grey-text`}>
        {el}
      </p>
    );
  });

  return (
    <div className={`${classes.days} container grey lighten-4`}>{daysJsx}</div>
  );
};

export default DaySelect;
