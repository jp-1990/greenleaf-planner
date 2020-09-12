/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import '../../../sass/materialize.scss';
import classes from './WeekSelectorCSS/WeekCarousel.module.scss';
import M from 'materialize-css';
import SelectedMonth from './SelectedMonth';
import WeekCard from './WeekCard';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';

const WeekCarousel = () => {
  const [activeMonth, setActiveMonth] = useState(
    new Date(Date.now()).getMonth()
  );

  const activeYear = new Date(Date.now()).getFullYear();
  const weeksArray = useWeeks();
  const activeWeek = useSelectedWeek()[0];
  const setActiveWeek = useSelectedWeek()[1];

  useEffect(() => {
    let elems = document.querySelectorAll('.weeks');
    M.Carousel.init(elems, {
      fullWidth: false,
      indicators: false,
      numVisible: 7,
      noWrap: true,
      onCycleTo: () => {
        const instance = M.Carousel.getInstance(
          document.querySelector('.weeks')
        );
        setActiveWeek(instance.center);
        setActiveMonth(weeksArray[instance.center].month);
      },
    });
  }, []);

  useEffect(() => {
    const instance = M.Carousel.getInstance(document.querySelector('.weeks'));
    instance.set(activeWeek);
  }, []);

  // create cards based on weeks array
  const generateWeekCards = (array) => {
    const result = array.map((el) => {
      return (
        <span
          key={`${el.month} + ${el.year} + ${el.dates.monday}`}
          className={`carousel-item ${classes.weekContainer}`}
        >
          <WeekCard year={el.year} month={el.month} dates={el.dates} />
        </span>
      );
    });

    return result;
  };

  const weekCards = generateWeekCards(weeksArray);

  const nextWeekHandler = () => {
    const instance = M.Carousel.getInstance(document.querySelector('.weeks'));
    instance.next();
  };

  const prevWeekHandler = () => {
    const instance = M.Carousel.getInstance(document.querySelector('.weeks'));
    instance.prev();
  };

  return (
    <div className='container'>
      <div style={{ margin: 0 }} className='row'>
        <div className={`col s2 offset-s5 ${classes.titleBox}`}>
          <i onClick={prevWeekHandler} className='material-icons'>
            chevron_left
          </i>
          <p className={classes.title}>Week {activeWeek - 50}</p>
          <i onClick={nextWeekHandler} className='material-icons'>
            chevron_right
          </i>
        </div>
      </div>
      <div
        style={{ maxHeight: '300px', perspective: '700px' }}
        className='carousel weeks'
      >
        {weekCards}
      </div>
      <SelectedMonth
        active={activeMonth}
        activeMonthHandler={(el) => {
          setActiveMonth(el);
          const index = weeksArray.findIndex((e) => {
            return e.month === el && e.year === activeYear;
          });
          M.Carousel.getInstance(document.querySelector('.weeks')).set(index);
        }}
      />
    </div>
  );
};

export default WeekCarousel;
