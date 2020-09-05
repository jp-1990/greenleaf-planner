import React, { useEffect } from 'react';
import M from 'materialize-css';
import classes from './SelectedWeek.module.scss';

const SelectedWeek = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.selectedWeek');
    M.Carousel.init(elems, { fullWidth: true, indicators: true, noWrap: true });
  });

  return (
    <div className='container'>
      <div
        className={`col s12 green lighten-2 green-text text-lighten-5 ${classes.days}`}
      >
        <p>Monday</p>
        <p className={classes.active}>Tuesday</p>
        <p>Wednesday</p>
        <p>Thursday</p>
        <p>Friday</p>
        <p>Saturday</p>
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
