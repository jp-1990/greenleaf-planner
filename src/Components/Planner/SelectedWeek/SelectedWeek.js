import React, { useEffect, useState } from 'react';
import M from 'materialize-css';
import classes from './SelectedWeek.module.scss';
import Day from './Day/Day';
import AssignedJobs from './Day/AssignedJobs/AssignedJobs';
import { useWeeks, useSelectedWeek } from '../../../Context/WeeksContext';
import { useJobs } from '../../../Context/JobsContext';
import { days, dateFromString } from '../../../GlobalFunctions/dateOperations';

// ==========================================================================
// test data
// ==========================================================================

const testVisit = () => {
  return dateFromString(
    `${Math.floor(Math.random() * 6) + 14}/9/2020`
  ).toLocaleDateString();
};

const customerNames = [
  'churchfield green',
  'spicer',
  'mercer',
  'kendrick',
  'richmond',
  'patient',
  'regal',
  'sutherland court',
  'dormy house',
  'gray',
];

const jobLocations = [
  'mundesley',
  'overstand',
  'norwich',
  'cromer',
  'north walsham',
  'holt',
  'sheringham',
  'worstead',
  'aylsham',
];

const testData = [];
const generateCutomers = (day) => {
  for (let i = 0; i < Math.floor(Math.random() * 61 + 10); i++) {
    testData.push({
      name: customerNames[Math.floor(Math.random() * 9)],
      id: `${i}${day}`,
      location: jobLocations[Math.floor(Math.random() * 8)],
      rebook: Math.floor(Math.random() * 14) + 7,
      prevVisit: '01/09/2020',
      nextVisit: testVisit(),
      assigned: -1,
      time: Math.floor(Math.random() * 170) + 10,
    });
  }
};

const testDays = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

testDays.forEach((el) => {
  generateCutomers(el);
});

// ==========================================================================

class JobList {
  constructor(jobsArray, date) {
    this.jobsArray = jobsArray;
    this.date = date;
    this.init = (() => {
      this.setJobsList();
      this.setUniqueLocations();
      this.sortJobsByLocation();
    })();
  }

  // get unique locations
  get locations() {
    return this.uniqueLocations;
  }

  // get jobs for date
  get jobs() {
    return this.jobsList;
  }

  // get jobs sorted by location
  get sortedJobs() {
    return this.jobsByLocation;
  }

  // find list of jobs for given date
  setJobsList() {
    const output = [];
    this.jobsArray.forEach((el) => {
      if (
        dateFromString(this.date).getTime() ===
        dateFromString(el.nextVisit).getTime()
      ) {
        output.push(el);
      }
    });
    return (this.jobsList = output);
  }

  // find list of unique locations alphabetically
  setUniqueLocations() {
    const output = this.setJobsList().map((el) => {
      return el.location;
    });
    return (this.uniqueLocations = [...new Set(output)].sort());
  }

  // jobs by location
  sortJobsByLocation() {
    const sortedArray = this.uniqueLocations.map((el) => {
      return [el];
    });

    this.jobsList.forEach((el) => {
      sortedArray[
        sortedArray.findIndex((i) => {
          return i[0] === el.location;
        })
      ].push(el);
    });
    return (this.jobsByLocation = sortedArray);
  }
}

const SelectedWeek = () => {
  const [day, setDay] = useState(0);
  const [jobs, setJobs] = useJobs();

  useEffect(() => {
    setJobs(testData);
  }, [setJobs]);

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

  // get jobs for the selected week
  let incrementMonth = 1;
  let monthChanged = false;
  const calcJobsForWeek = Object.values(weeksArray[activeWeek].dates).map(
    (el, index) => {
      let month = weeksArray[activeWeek].month;
      let year = weeksArray[activeWeek].year;
      let yearChanged = false;
      if (index > 0) {
        Object.values(weeksArray[activeWeek].dates).forEach((e, i) => {
          if (
            e < Object.values(weeksArray[activeWeek].dates)[i - 1] &&
            i === index
          ) {
            monthChanged = true;
          }
        });
      }
      if (monthChanged) incrementMonth = 2;
      if (month + incrementMonth === 13) {
        incrementMonth = 1;
        month = 0;
        yearChanged = true;
      }

      return new JobList(
        jobs,
        `${el}/${month + incrementMonth}/${yearChanged ? year + 1 : year}`
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
      <AssignedJobs day={day} week={weeksArray[activeWeek]} colors={colors} />
    </>
  );
};

export default SelectedWeek;
