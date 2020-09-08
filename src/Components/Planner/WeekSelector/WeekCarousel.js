/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import '../../../sass/materialize.scss';
import classes from './WeekCarousel.module.scss';
import M from 'materialize-css';
import SelectedMonth from './SelectedMonth';
import WeekCard from './WeekCard';

const curWeek = () => {
  const start = new Date(new Date(Date.now()).getFullYear(), 0, 1);
  const now = new Date(Date.now());
  const numberOfDays = Math.floor((now - start) / (24 * 60 * 60 * 1000));
  return Math.ceil(numberOfDays / 7) + 1;
};

const WeekCarousel = () => {
  const [activeWeek, setActiveWeek] = useState(50 + curWeek());
  const [activeMonth, setActiveMonth] = useState(
    new Date(Date.now()).getMonth()
  );
  const activeYear = new Date(Date.now()).getFullYear();

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

  // get first monday of given month in given year
  const getFirstMonday = (year, month) => {
    for (let i = 1; i < 8; i++) {
      if (new Date(year, month, i).getDay() === 1) {
        return i;
      }
    }
  };

  // populate an array of all the weeks in the given year
  const weeks = (year) => {
    const result = [];
    // iterate through months
    for (let i = 0; i < 12; i++) {
      // get first monday of the month
      let monday = getFirstMonday(year, i);
      //iterate through days in month and add mondays to array
      for (let j = 1; j <= new Date(year, i + 1, 0).getDate(); j++) {
        if (j === monday) {
          result.push({
            year: year,
            month: i,
            monday: j,
          });
          // add 7 to monday to get the following monday
          monday += 7;
        }
      }
    }
    return result;
  };

  const weeksPrevCurNextYear = (year) => {
    return [...weeks(year - 1), ...weeks(year), ...weeks(year + 1)];
  };

  const weeksArray = weeksPrevCurNextYear(activeYear);

  // create cards based on weeks array
  const generateWeekCards = (array) => {
    const result = array.map((el) => {
      return (
        <span
          key={`${el.month} + ${el.year} + ${el.monday}`}
          className={`carousel-item ${classes.weekContainer}`}
        >
          <WeekCard year={el.year} month={el.month} monday={el.monday} />
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
