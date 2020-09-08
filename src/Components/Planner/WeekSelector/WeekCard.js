import React from 'react';
import classes from './WeekSelectorCSS/WeekCard.module.scss';

const WeekCard = (props) => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
    'January',
  ];

  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  // add appropriate suffix to date
  const suffix = (el) => {
    if (el === 1 || el === 21 || el === 31) {
      return 'st';
    } else if (el === 2 || el === 22) {
      return 'nd';
    } else if (el === 3 || el === 23) {
      return 'rd';
    } else {
      return 'th';
    }
  };

  // get days in props.month
  const daysInMonth = new Date(props.year, props.month + 1, 0).getDate();

  // handle case where week spans two months
  const monthOverflowCheck = (el, month) => {
    if (el > daysInMonth) {
      const newDay = el - daysInMonth;
      return `${newDay}${suffix(newDay)} ${months[month + 1]}`;
    } else {
      return `${el}${suffix(el)} ${months[month]}`;
    }
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
          {props.monday + date > daysInMonth
            ? `${props.monday + date - daysInMonth}${suffix(
                props.monday + date - daysInMonth
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
            )} ${months[props.month]} - ${monthOverflowCheck(
              props.monday + 6,
              props.month
            )}`}</p>
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
