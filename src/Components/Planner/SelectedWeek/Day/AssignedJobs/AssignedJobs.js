import React from 'react';
import '../../../../../sass/materialize.scss';
import classes from './AssignedJobs.module.scss';
import AssignedJob from './AssignedJob/AssignedJob';
import { useAssignJobs } from '../../../../../Context/JobsContext';
import { capitaliseFirstLetters } from '../../../../../GlobalFunctions/stringOperations';

class Jobs {
  constructor(jobsArray, day, employee) {
    this.jobsArray = jobsArray;
    this.day = day;
    this.employee = employee;
    this.init = (() => {
      this.setlocations();
      this.setRawJobs();
      this.setJobs();
      this.setJsx();
    })();
  }

  get jsx() {
    return this.jobsJsx;
  }

  setlocations() {
    return (this.locations = [
      ...new Set(
        this.jobsArray[this.day.toLowerCase()][this.employee].map((el) => {
          return el.location;
        })
      ),
    ].sort());
  }

  setRawJobs() {
    return (this.rawJobs = this.jobsArray[this.day.toLowerCase()][
      this.employee
    ].map((el) => {
      return el;
    }));
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
          title={el.name}
          time={el.time}
          location={el.location}
        ></AssignedJob>
      );
    }));
  }
}

const AssignedJobs = (props) => {
  const [assignedJobs, setAssignedJobs] = useAssignJobs();

  console.log(new Jobs(assignedJobs, props.day, 0).jobs);

  const totalTime = (index) => {
    let result = 0;
    assignedJobs[props.day.toLowerCase()][index].forEach((el) => {
      if (el.time) result += el.time;
    });
    return result === 0
      ? `Time est.`
      : `Time est. ${Math.floor(result / 60)} hours ${result % 60} mins`;
  };

  const workPlan = Object.keys(props.colors).map((el, i) => {
    return (
      <div key={el} className={classes.jobs}>
        <div className={classes.titleBox}>
          <i style={{ color: '#424242' }} className='material-icons'>
            mail
          </i>
          <h5>{el}</h5>
          <i
            style={{ color: `${props.colors[el]}` }}
            className='material-icons'
          >
            person
          </i>
        </div>
        <div className={classes.timeEst}>
          <p>{totalTime(i)}</p>
        </div>
        <div className={classes.jobContent}>
          {new Jobs(assignedJobs, props.day, i).jobsJsx}
        </div>
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
