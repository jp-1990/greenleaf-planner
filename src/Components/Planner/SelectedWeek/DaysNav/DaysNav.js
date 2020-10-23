import React from 'react';
import M from 'materialize-css';
import { days } from '../../../../GlobalFunctions/dateOperations';
import classes from './DaysNav.module.scss';

const DaysNav = ({ day, setDay }) => {
  const selectDayHandler = (index) => {
    // hack to get around weird carousel behaviour where going from index 5 to 0
    // causes index 0 to display behind index 5. Any other combination highlighted
    // zero issues. Quickly switching to index 1 before 0 'solves' the problem.
    if (day === 5 && index === 0) {
      setTimeout(() => {
        M.Carousel.getInstance(document.querySelector('.selectedWeek')).set(0);
      }, 100);
      M.Carousel.getInstance(document.querySelector('.selectedWeek')).set(1);
    } else {
      M.Carousel.getInstance(document.querySelector('.selectedWeek')).set(
        index
      );
    }
    setDay(index);
  };

  // jsx for days nav
  const daysNav = days.map((el, i) => {
    if (i === day) {
      return (
        <p
          key={el}
          onClick={() => selectDayHandler(i)}
          className={`${classes.day} ${classes.active}`}
        >
          {el}
        </p>
      );
    }
    return (
      <p key={el} onClick={() => selectDayHandler(i)} className={classes.day}>
        {el}
      </p>
    );
  });
  return (
    <div
      className={`col s12 green lighten-1 green-text text-lighten-5 ${classes.days}`}
    >
      {daysNav}
    </div>
  );
};

export default DaysNav;
