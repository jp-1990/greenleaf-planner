import React, { useState } from 'react';
import '../../../../sass/materialize.scss';
import classes from './AssignedJobs.module.scss';
import AssignedJob from './AssignedJob/AssignedJob';
import { days } from '../../../../GlobalFunctions/dateOperations';
import { useJobs } from '../../../../Context/JobsContext';
import { useStaff } from '../../../../Context/StaffContext';
import { capitaliseFirstLetters } from '../../../../GlobalFunctions/stringOperations';

class Jobs {
  constructor(jobsArray, date, employee, noteHandler) {
    this.jobsArray = jobsArray;
    this.date = date;
    this.employee = employee;
    this.noteHandler = noteHandler;
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
    return (this.date = this.date.toLocaleDateString());
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
        <AssignedJob
          key={`${el.name}${i}`}
          id={el.id}
          name={el.name}
          time={el.time}
          location={el.location}
          notes={el.notes}
          noteHandlers={this.noteHandler}
          nextVisit={el.nextVisit}
        ></AssignedJob>
      );
    }));
  }
}

const AssignedJobs = ({ day, week }) => {
  const [displayNote, setDisplayNote] = useState();
  const { jobList } = useJobs();
  const { colors } = useStaff();

  const totalTime = (assignedJobs) => {
    let result = 0;
    assignedJobs.forEach((el) => {
      if (el.time) result += el.time;
    });
    return result === 0
      ? `Time est.`
      : `Time est. ${Math.floor(result / 60)} hours ${result % 60} mins`;
  };

  const workPlan = Object.keys(colors).map((el, i) => {
    const assignedJobs = new Jobs(jobList, week[days[day].toLowerCase()], i, {
      displayNote,
      setDisplayNote,
    });

    return (
      <div key={el} className={classes.jobs}>
        <div className={classes.titleBox}>
          <i style={{ color: '#424242' }} className='material-icons'>
            mail
          </i>
          <h5>{el}</h5>
          <i style={{ color: `${colors[el]}` }} className='material-icons'>
            person
          </i>
        </div>
        <div className={classes.timeEst}>
          <p>{totalTime(assignedJobs.rawJobs)}</p>
        </div>
        <div className={classes.jobContent}>{assignedJobs.jobsJsx}</div>
      </div>
    );
  });

  return (
    <div className='row'>
      <div className='container'>
        <div className={classes.assignedJobs}>{workPlan}</div>
      </div>
    </div>
  );
};

export default AssignedJobs;
