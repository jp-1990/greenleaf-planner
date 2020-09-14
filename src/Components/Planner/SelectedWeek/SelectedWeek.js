import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import classes from './SelectedWeek.module.scss';
import Day from './Day/Day';
import AssignedJobs from './Day/AssignedJobs/AssignedJobs';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';
import { days, dateFromString } from '../../../GlobalFunctions/dateOperations';

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
    time: 90,
  },
  {
    name: 'spicer',
    location: 'north walsham',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'mercer',
    location: 'aylsham',
    rebook: 12,
    prevVisit: '26/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'kendrick',
    location: 'mundesley',
    rebook: 10,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'richmond',
    location: 'overstrand',
    rebook: 14,
    prevVisit: '24/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'churchfield green',
    location: 'norwich',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'spicer',
    location: 'north walsham',
    rebook: 7,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'mercer',
    location: 'aylsham',
    rebook: 12,
    prevVisit: '26/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'kendrick',
    location: 'mundesley',
    rebook: 10,
    prevVisit: '01/09/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
  },
  {
    name: 'richmond',
    location: 'overstrand',
    rebook: 14,
    prevVisit: '24/08/2020',
    nextVisit: testVisit(),
    assigned: 0,
    time: 90,
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
  for (i; i < Math.floor(Math.random() * 41 + 10); i++) {
    testData.push(testCustomers[Math.floor(Math.random() * 10)]);
  }
});

// ==========================================================================

class JobList {
  constructor(jobsArray, date) {
    this.jobsArray = jobsArray;
    this.date = date;
    this.init = (() => {
      this.findJobs();
      this.findLocations();
      this.sortJobsByLocation();
    })();
  }

  // get unique locations
  get locations() {
    return this.sortedLocations;
  }

  // get jobs for date
  get jobs() {
    return this.jobsForDate;
  }

  // get jobs sorted by location
  get sortedJobs() {
    return this.sortedJobsByLocation;
  }

  // find list of jobs for given date
  findJobs() {
    const output = [];
    this.jobsArray.forEach((el) => {
      if (
        dateFromString(this.date).getTime() ===
        dateFromString(el.nextVisit).getTime()
      ) {
        output.push(el);
      }
    });
    return (this.jobsForDate = output);
  }

  // find list of unique locations alphabetically
  findLocations() {
    const output = this.findJobs().map((el) => {
      return el.location;
    });
    return (this.sortedLocations = [...new Set(output)].sort());
  }

  // jobs by location
  sortJobsByLocation() {
    const sortedArray = this.sortedLocations.map((el) => {
      return [el];
    });

    this.jobsForDate.forEach((el) => {
      sortedArray[
        sortedArray.findIndex((i) => {
          return i[0] === el.location;
        })
      ].push(el);
    });
    return (this.sortedJobsByLocation = sortedArray);
  }
}

const SelectedWeek = () => {
  const [day, setDay] = useState(0);

  const colors = {
    Nick: '#f44336',
    Zack: '#ffc107',
    Neil: '#00bcd4',
    James: '#0d47a1',
    Alan: '#00c853',
  };

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

  const calcJobsForWeek = Object.values(weeksArray[activeWeek].dates).map(
    (el) => {
      return new JobList(
        testData,
        `${el}/${weeksArray[activeWeek].month + 1}/${
          weeksArray[activeWeek].year
        }`
      );
    }
  );

  // generate day components for mon-sat
  const daysOfWeek = days.map((el, i) => {
    return (
      <Day
        key={i}
        day={el}
        week={weeksArray[activeWeek]}
        jobs={calcJobsForWeek[i]}
        colors={colors}
      ></Day>
    );
  });

  return (
    <>
      <div className='container'>
        <div
          className={`col s12 green lighten-1 green-text text-lighten-5 ${classes.days}`}
        >
          {daysNav}
        </div>
        <div
          className='carousel carousel-slider center selectedWeek'
          style={{ height: '530px' }}
        >
          {daysOfWeek}
        </div>
      </div>
      <AssignedJobs day={days[day]} jobs={null} colors={colors} />
    </>
  );
};

export default SelectedWeek;
