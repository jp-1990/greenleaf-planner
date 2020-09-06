import React, { useEffect } from 'react';
import '../../../sass/materialize.scss';
import classes from './WeekCarousel.module.scss';
import M from 'materialize-css';
import SelectedMonth from './SelectedMonth';
import WeekCard from './WeekCard';

const WeekCarousel = () => {
  useEffect(() => {
    let elems = document.querySelectorAll('.weeks');
    M.Carousel.init(elems, {
      fullWidth: false,
      indicators: false,
      numVisible: 7,
    });
  });

  return (
    <div className='container'>
      <div style={{ margin: 0 }} className='row'>
        <div className={`col s2 offset-s5 ${classes.titleBox}`}>
          <i className='material-icons'>chevron_left</i>
          <p className={classes.title}>Week 36</p>
          <i className='material-icons'>chevron_right</i>
        </div>
      </div>
      <div
        style={{ maxHeight: '300px', perspective: '700px' }}
        className='carousel weeks'
      >
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#one!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#two!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#three!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#four!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#five!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#five!'
        >
          <WeekCard />
        </a>
        <a
          style={{ width: '380px', height: '310px' }}
          className='carousel-item'
          href='#five!'
        >
          <WeekCard />
        </a>
      </div>
      <SelectedMonth active={7} />
    </div>
  );
};

export default WeekCarousel;
