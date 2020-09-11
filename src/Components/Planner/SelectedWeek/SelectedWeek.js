import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import classes from './SelectedWeek.module.scss';
import Day from './Day/Day';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';

// ==========================================================================
// test data
// ==========================================================================

const testVisit = () => {
  return `${Math.floor(Math.random() * 6) + 7}/09/2020`;
};

const testCustomers = [
  {
    name: 'churchfield green',
    location: 'norwich',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'spicer',
    location: 'north walsham',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'mercer',
    location: 'aylsham',
    rebook: 12,
    prevVisit: '26/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'kendrick',
    location: 'mundesley',
    rebook: 10,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'richmond',
    location: 'overstrand',
    rebook: 14,
    prevVisit: '24/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'churchfield green',
    location: 'norwich',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'spicer',
    location: 'north walsham',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'mercer',
    location: 'aylsham',
    rebook: 12,
    prevVisit: '26/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'kendrick',
    location: 'mundesley',
    rebook: 10,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
  {
    name: 'richmond',
    location: 'overstrand',
    rebook: 14,
    prevVisit: '24/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
  },
];

const testDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const testData = [];

testDays.forEach(() => {
  let i = 0;
  for (i; i <= Math.floor(Math.random() * 500); i++) {
    testData.push(testCustomers[Math.floor(Math.random() * 10)]);
  }
});

// ==========================================================================

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

  // init options for materialize carousel
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

  // select day of the week
  const selectDayHandler = (index) => {
    setDay(index);
    M.Carousel.getInstance(document.querySelector('.selectedWeek')).set(index);
  };

  // jsx for days nav
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

  // import from week context
  const weeksArray = useWeeks();
  const activeWeek = useSelectedWeek()[0];

  console.log(weeksArray[activeWeek]);

  // generate day components for mon-sat
  const daysOfWeek = days.map((el, i) => {
    return <Day key={i} day={el} week={weeksArray[activeWeek]}></Day>;
  });

  return (
    <div className='container'>
      <div
        className={`col s12 green lighten-1 green-text text-lighten-5 ${classes.days}`}
      >
        {daysNav}
      </div>
      <div className='carousel carousel-slider center selectedWeek'>
        {daysOfWeek}
      </div>
    </div>
  );
};

export default SelectedWeek;
