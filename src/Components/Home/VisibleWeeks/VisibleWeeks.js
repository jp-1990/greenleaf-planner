import React, { useEffect } from 'react';
import classes from './VisibleWeeks.module.scss';
import {
  days,
  months,
  currentDate,
  suffix,
} from '../../../GlobalFunctions/dateOperations';
import { useWeeks } from '../../../Context/WeeksContext';
import { useStaff } from '../../../Context/StaffContext';

const VisibleWeeks = ({ activeWeek, setActiveWeek, screenWidth, user }) => {
  const weeksArray = useWeeks();
  const { colors } = useStaff();
  const color = colors[user];

  // find the index of the current week of the year
  const currentWeek = weeksArray.findIndex((el) => {
    let result;
    const today = currentDate();
    const week = Object.values(el).map((e, i) => {
      return e.toLocaleDateString();
    });

    if (
      week.findIndex(
        (element) =>
          element ===
          new Date(today.year, today.month, today.date).toLocaleDateString()
      ) > -1
    ) {
      result = true;
    }
    return result;
  });

  useEffect(() => {
    setActiveWeek(currentWeek);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // generate array of prev/cur/next weeks
  const relevantWeeks = [
    weeksArray[currentWeek - 1],
    weeksArray[currentWeek],
    weeksArray[currentWeek + 1],
  ];

  // generate 3 week cards for prev/cur/next week for bigger screens
  const standardWeeksJsx = relevantWeeks.map((el, i) => {
    // generate days of week with relevant dates
    const daysJsx = days.map((e, index) => {
      return (
        <div key={e} className={classes.day}>
          <p>{e.substring(0, 3)}</p>
          <p>{`${Object.values(el)[index].getDate()}${suffix(
            Object.values(el)[index].getDate()
          )}`}</p>
        </div>
      );
    });

    return (
      <div
        key={i}
        className={`${classes.week} ${
          activeWeek === currentWeek - 1 + i ? classes.active : null
        }`}
        onClick={() => setActiveWeek(currentWeek - 1 + i)}
      >
        <h4>{months[el.monday.getMonth()]}</h4>
        <div className={classes.days}>{daysJsx}</div>
      </div>
    );
  });

  // generate 3 week cards for prev/cur/next week for smaller screens
  const mobileWeeksJsx = relevantWeeks.map((el, i) => {
    // generate days of week with relevant dates
    const daysJsx = () => {
      return (
        <>
          <div className={classes.day}>
            <p>
              {`${Object.values(el)[0].getDate()}${suffix(
                Object.values(el)[0].getDate()
              )} ${months[el.monday.getMonth()].substring(0, 3)}
              -
              ${Object.values(el)[5].getDate()}${suffix(
                Object.values(el)[5].getDate()
              )} ${months[el.saturday.getMonth()].substring(0, 3)}`}
            </p>
          </div>
        </>
      );
    };

    return (
      <div
        key={i}
        className={`${classes.week} ${
          activeWeek === currentWeek - 1 + i ? classes.active : null
        }`}
        style={
          activeWeek === currentWeek - 1 + i
            ? {
                border: `1px solid ${color}90`,
                boxShadow: `0px 0px 4px ${color}`,
              }
            : null
        }
        onClick={() => setActiveWeek(currentWeek - 1 + i)}
      >
        <h4>{months[el.monday.getMonth()]}</h4>
        <div className={classes.days}>{daysJsx()}</div>
      </div>
    );
  });

  return (
    <div className={`${classes.weeks}`}>
      {screenWidth < 600 ? mobileWeeksJsx : standardWeeksJsx}
    </div>
  );
};

export default VisibleWeeks;
