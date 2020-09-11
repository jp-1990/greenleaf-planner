import React from 'react';
import classes from './WeekSelectorCSS/WeekCard.module.scss';
import {
  months,
  daysAbr,
  suffix,
  daysInMonth,
  monthOverflowCheck,
} from '../../../DateOperations/dateOperations';

const WeekCard = (props) => {
  const days = daysAbr;

  const endDate = () => {
    const date = monthOverflowCheck(props.monday + 6, props.month, props.year)
      .date;
    const month = monthOverflowCheck(props.monday + 6, props.month, props.year)
      .month;
    return `${date}${suffix(date)} ${months[month]}`;
  };

  // populate days in the week on card
  let count = 0;
  const daysOnCard = days.map((el, i) => {
    const date = count;
    count += 1;
    return (
      <li key={i}>
        <p>{el}</p>
        <p>
          {props.monday + date > daysInMonth(props.year, props.month)
            ? `${
                props.monday + date - daysInMonth(props.year, props.month)
              }${suffix(
                props.monday + date - daysInMonth(props.year, props.month)
              )}`
            : `${props.monday + date}${suffix(props.monday + date)}`}
        </p>
      </li>
    );
  });

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div
            className={`card-content green brown-text text-darken-3 ${classes.top}`}
          >
            <h6>- {props.year} -</h6>
            <h2 className={classes.title}>{months[props.month]}</h2>
            <p className={classes.dateSpan}>{`${props.monday}${suffix(
              props.monday
            )} ${months[props.month]} - ${endDate()}`}</p>
          </div>
          <div
            className={`card-content grey lighten-2 grey-text text-darken-2 ${classes.bottom}`}
          >
            <ul className={classes.dates}>{daysOnCard}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCard;
