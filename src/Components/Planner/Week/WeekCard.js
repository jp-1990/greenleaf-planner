import React from 'react';
import classes from './WeekCard.module.scss';

const WeekCard = () => {
  return (
    <div className='row'>
      <div className='col s12'>
        <div className='card'>
          <div
            className={`card-content green lighten-2 green-text text-darken-4 ${classes.top}`}
          >
            <h2 className={classes.title}>August</h2>
            <p className={classes.dateSpan}>31st August - 6th Sepember</p>
          </div>
          <div
            className={`card-content grey lighten-2 grey-text text-darken-2 ${classes.bottom}`}
          >
            <ul className={classes.dates}>
              <li>
                <p>Mon</p>
                <p>31st</p>
              </li>
              <li>
                <p>Tue</p>
                <p>1st</p>
              </li>
              <li>
                <p>Wed</p>
                <p>2nd</p>
              </li>
              <li>
                <p>Thu</p>
                <p>3rd</p>
              </li>
              <li>
                <p>Fri</p>
                <p>4th</p>
              </li>
              <li>
                <p>Sat</p>
                <p>5th</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeekCard;
