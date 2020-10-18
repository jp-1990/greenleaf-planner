import React from 'react';
import AllocatedJob from './AllocatedJob/AllocatedJob';
import classes from './AllocatedJobs.module.scss';
import { dateFromString, days } from '../../../GlobalFunctions/dateOperations';
import { capitaliseFirstLetters } from '../../../GlobalFunctions/stringOperations';
import { useJobs } from '../../../Context/JobsContext';
import { useWeeks } from '../../../Context/WeeksContext';

const AllocatedJobs = ({ color, details, setDetails, day, week, employee }) => {
  const jobs = useJobs()[0];
  const weeks = useWeeks();

  class Jobs {
    constructor(jobsArray, date, employee) {
      this.jobsArray = jobsArray;
      this.date = date;
      this.employee = employee;
      this.init = (() => {
        this.setDate();
        this.setRawJobs();
        this.setlocations();
        this.setJobs();
        this.setJsx();
      })();
    }

    get jsx() {
      return this.jobsJsx;
    }

    setDate() {
      return (this.date = dateFromString(this.date).toLocaleDateString());
    }

    setlocations() {
      return (this.locations = [
        ...new Set(
          this.rawJobs.map((el) => {
            return el.location;
          })
        ),
      ].sort());
    }

    setRawJobs() {
      this.rawJobs = [];
      this.jobsArray.forEach((el) => {
        if (el.assigned === this.employee && el.nextVisit === this.date) {
          this.rawJobs.push(el);
        }
      });
    }

    setJobs() {
      const output = this.locations.map((element) => [element]);
      this.rawJobs.forEach((el) => {
        const index = output.findIndex((e) => e[0] === el.location);
        output[index].push(el);
      });
      return (this.jobs = output);
    }

    setJsx() {
      const joinedArray = [];
      this.jobs.forEach((el) => joinedArray.push(...el));

      return (this.jobsJsx = joinedArray.map((el, i) => {
        if (!el.name) {
          return (
            <div key={el + i} className={classes.location}>
              <p>{capitaliseFirstLetters(el)}</p>
            </div>
          );
        }
        return (
          <AllocatedJob
            key={`${el.name}${i}`}
            id={el.id}
            title={capitaliseFirstLetters(el.name)}
            time={el.time}
            address={el.address}
            notes={el.notes}
            details={details}
            setDetails={setDetails}
          ></AllocatedJob>
        );
      }));
    }
  }

  const totalTime = (assignedJobs) => {
    let result = 0;
    assignedJobs.forEach((el) => {
      if (el.time) result += el.time;
    });
    return result === 0
      ? `Time est.`
      : `Time est. ${Math.floor(result / 60)} hours ${result % 60} mins`;
  };

  // elements for date, handling weeks that span two months
  const buildDate = {
    day: weeks[week].dates[days[day].toLowerCase()],
    month: weeks[week].month + 1,
    year: weeks[week].year,
  };
  if (day + 1 > buildDate.day) buildDate.month += 1;

  const date = `${buildDate.day}/${buildDate.month}/${buildDate.year}`;
  const assignedJobs = new Jobs(jobs, date, employee.number);

  return (
    <div className={classes.jobs} style={{ border: `1px solid ${color}` }}>
      <i
        className={`${classes.person} material-icons`}
        style={{ color: color }}
      >
        person
      </i>
      <div className={classes.titleBox}>
        <h5>{employee.name}</h5>
      </div>
      <div className={classes.timeEst}>{totalTime(assignedJobs.rawJobs)}</div>
      <div className={classes.jobContent}>{assignedJobs.jsx}</div>
    </div>
  );
};

export default AllocatedJobs;
