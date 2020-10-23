import React, { useEffect } from 'react';
import { debounce } from 'lodash';
import M from 'materialize-css';
import Day from './Day/Day';
import {
  days,
  dateFromString,
} from '../../../../GlobalFunctions/dateOperations';
import { useWeeks, useSelectedWeek } from '../../../../Context/WeeksContext';
import { useJobs } from '../../../../Context/JobsContext';

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
      if (this.date.getTime() === dateFromString(el.nextVisit).getTime()) {
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

const DaysCarousel = ({ setDay }) => {
  const weeksArray = useWeeks();
  const { activeWeek } = useSelectedWeek();
  const { jobList } = useJobs();

  // init options for materialize carousel
  useEffect(() => {
    let elems = document.querySelectorAll('.selectedWeek');
    M.Carousel.init(elems, {
      fullWidth: true,
      indicators: true,
      noWrap: true,
      onCycleTo: debounce(() => {
        const instance = M.Carousel.getInstance(
          document.querySelector('.selectedWeek')
        );
        setDay(instance.center);
      }, 300),
    });
  }, []);

  // get jobs for the selected week
  const calcJobsForWeek = Object.values(weeksArray[activeWeek])
    .slice(0, 6)
    .map((el) => {
      return new JobList(jobList, el);
    });

  // generate day components for mon-sat
  const daysOfWeek = days.slice(0, 6).map((el, i) => {
    return (
      <Day
        key={i}
        day={el}
        week={weeksArray[activeWeek]}
        jobsArray={calcJobsForWeek[i]}
      ></Day>
    );
  });

  return (
    <div
      className='carousel carousel-slider center selectedWeek'
      style={{ height: '530px' }}
    >
      {daysOfWeek}
    </div>
  );
};

export default DaysCarousel;
