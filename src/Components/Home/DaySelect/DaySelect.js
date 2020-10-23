import React from 'react';
import { days } from '../../../GlobalFunctions/dateOperations';
import { useStaff } from '../../../Context/StaffContext';
import classes from './DaySelect.module.scss';

const DaySelect = ({ user, activeDay, setActiveDay }) => {
  const { colors } = useStaff();
  const color = colors[user];
  const daysJsx = days.map((el, i) => {
    return (
      <p
        key={el}
        onClick={() => setActiveDay(i)}
        className={`${classes.day} ${
          activeDay === i ? classes.active : 'grey-text'
        }`}
        style={activeDay === i ? { color: color } : null}
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
