import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import classes from './SelectedWeek.module.scss';

const SelectedWeek = () => {
  const [day, setDay] = useState(0);

  const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  useEffect(() => {
    let elems = document.querySelectorAll('.selectedWeek');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      noWrap: true,
      onCycleTo: () => {
        const instance = M.Carousel.getInstance(
          document.querySelector('.selectedWeek')
        );
        setDay(instance.center);
      },
    });
  }, []);

  const selectDayHandler = (index) => {
    setDay(index);
    M.Carousel.getInstance(document.querySelector('.selectedWeek')).set(index);
  };

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
    <div className='container'>
      <div
        className={`col s12 green lighten-1 green-text text-lighten-5 ${classes.days}`}
      >
        {daysNav}
      </div>
      <div className='carousel carousel-slider center selectedWeek'>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#one!'
        >
          <h2>Monday</h2>
          <p className='grey-text text-darken-3'>This is your first panel</p>
        </div>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#two!'
        >
          <h2>Tuesday</h2>
          <p className='grey-text text-darken-3'>This is your second panel</p>
        </div>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#three!'
        >
          <h2>Wednesday</h2>
          <p className='grey-text text-darken-3'>This is your third panel</p>
        </div>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#four!'
        >
          <h2>Thursday</h2>
          <p className='grey-text text-darken-3'>This is your fourth panel</p>
        </div>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#four!'
        >
          <h2>Friday</h2>
          <p className='grey-text text-darken-3'>This is your fourth panel</p>
        </div>
        <div
          className='carousel-item grey lighten-3 grey-text text-darken-3'
          href='#four!'
        >
          <h2>Saturday</h2>
          <p className='grey-text text-darken-3'>This is your fourth panel</p>
        </div>
      </div>
    </div>
  );
};

export default SelectedWeek;
