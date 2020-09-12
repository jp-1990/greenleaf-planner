import React from 'react';
import classes from './WeekSelectorCSS/WeekCard.module.scss';
import {
  months,
  days,
  suffix,
  daysInMonth,
  monthOverflowCheck,
} from '../../../DateOperations/dateOperations';

const WeekCard = (props) => {
  const endDate = () => {
    const date = monthOverflowCheck(
      props.dates.monday + 6,
      props.month,
      props.year
    ).date;
    const month = monthOverflowCheck(
      props.dates.monday + 6,
      props.month,
      props.year
    ).month;
    return `${date}${suffix(date)} ${months[month]}`;
  };

  // populate days in the week on card
  const daysOnCard = days.map((el, i) => {
    return (
      <li key={i}>
        <p>{el.substring(0, 3)}</p>
        <p>
          {props.dates[el.toLowerCase()] > daysInMonth(props.year, props.month)
            ? `${
                props.dates[el.toLowerCase()] -
                daysInMonth(props.year, props.month)
              }${suffix(
                props.dates[el.toLowerCase()] -
                  daysInMonth(props.year, props.month)
              )}`
            : `${props.dates[el.toLowerCase()]}${suffix(props.dates[el])}`}
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
            <p className={classes.dateSpan}>{`${props.dates.monday}${suffix(
              props.dates.monday
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
