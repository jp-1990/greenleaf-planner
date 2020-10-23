/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import '../../../sass/materialize.scss';
import M from 'materialize-css';
import classes from './WeekSelectorCSS/WeekCarousel.module.scss';
import SelectedMonth from './SelectedMonth';
import WeekCard from './WeekCard';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';

const WeekCarousel = () => {
  const [activeMonth, setActiveMonth] = useState(
    new Date(Date.now()).getMonth()
  );

  const activeYear = new Date(Date.now()).getFullYear();
  const weeksArray = useWeeks();
  const { activeWeek, setActiveWeek } = useSelectedWeek();

  useEffect(() => {
    let elems = document.querySelectorAll('.weeks');
    M.Carousel.init(elems, {
      fullWidth: false,
      indicators: false,
      numVisible: 7,
      noWrap: true,
      onCycleTo: debounce(
        () => {
          const instance = M.Carousel.getInstance(
            document.querySelector('.weeks')
          );
          setActiveWeek(instance.center);
          setActiveMonth(weeksArray[instance.center].monday.getMonth());
        },
        1000,
        { leading: false, trailing: true }
      ),
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
          key={el.monday}
          className={`carousel-item ${classes.weekContainer}`}
        >
          <WeekCard dates={el} />
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
            return (
              e.monday.getMonth() === el &&
              e.monday.getFullYear() === activeYear
            );
          });
          M.Carousel.getInstance(document.querySelector('.weeks')).set(index);
        }}
      />
    </div>
  );
};

export default WeekCarousel;
