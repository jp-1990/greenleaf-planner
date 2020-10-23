import React from 'react';
import classes from './WeekSelectorCSS/WeekCard.module.scss';
import { months, days, suffix } from '../../../GlobalFunctions/dateOperations';

const WeekCard = ({ dates }) => {
  // populate days in the week on card
  const daysOnCard = days.map((el, i) => {
    return (
      <li key={i}>
        <p>{el.substring(0, 3)}</p>
        <p>
          {`${dates[el.toLowerCase()].getDate()}${suffix(
            dates[el.toLowerCase()].getDate()
          )}`}
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
            <h6>- {dates.monday.getFullYear()} -</h6>
            <h2 className={classes.title}>{months[dates.monday.getMonth()]}</h2>
            <p className={classes.dateSpan}>{`${dates.monday.getDate()}${suffix(
              dates.monday.getDate()
            )} ${
              months[dates.monday.getMonth()]
            } - ${dates.sunday.getDate()}${suffix(dates.sunday.getDate())} ${
              months[dates.sunday.getMonth()]
            }`}</p>
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
