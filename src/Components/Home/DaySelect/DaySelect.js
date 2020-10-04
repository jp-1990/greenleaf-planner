import React from 'react';
import { days } from '../../../GlobalFunctions/dateOperations';
import classes from './DaySelect.module.scss';

const DaySelect = ({ activeDay, setActiveDay }) => {
  console.log(activeDay);
  const daysJsx = days.map((el, i) => {
    return (
      <p
        key={el}
        onClick={() => setActiveDay(i)}
        className={`${classes.day} ${
          activeDay === i ? classes.active : 'grey-text'
        }`}
      >
        {el}
      </p>
    );
  });

  return (
    <div className={`${classes.days} container grey lighten-4`}>{daysJsx}</div>
  );
};

export default DaySelect;
