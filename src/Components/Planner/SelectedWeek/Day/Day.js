import React from 'react';
import Job from './Job/Job';
import classes from './Day.module.scss';

const Day = (props) => {
  const jobs = props.jobs.sortedJobs;

  const mergeJobs = (jobs) => {
    const mergedArray = [];
    jobs.forEach((el) => {
      el.forEach((e) => {
        mergedArray.push(e);
      });
    });
    return mergedArray;
  };
  const mergedJobs = mergeJobs(jobs);

  const jobsMarkup = (jobs) => {
    try {
      const perColumn =
        Math.ceil(jobs.length / 5) > 6 ? Math.ceil(jobs.length / 5) : 6;
      const columns = [[]];

      let columnId = 0;
      let count = 0;
      jobs.forEach((el, i) => {
        if (count >= perColumn || (!el.name && count >= perColumn - 1)) {
          columnId += 1;
          count = 0;
          columns.push([]);
        }
        columns[columnId].push(el);
        count++;
      });
      return columns;
    } catch (err) {
      console.log(err);
    }
  };
  const jobColumns = jobsMarkup(mergedJobs);

  const jobsJsx = jobColumns.map((el) => {
    return el.map((e, i) => {
      if (!e.name) {
        return (
          <p className={`${classes.p}`} key={i}>
            <span>{e}</span>
          </p>
        );
      }
      return (
        <Job
          key={`${e.name}${i}`}
          name={e.name}
          rebook={e.rebook}
          prevVisit={e.prevVisit}
        ></Job>
      );
    });
  });

  return (
    <div
      className={`carousel-item grey lighten-3 grey-text text-darken-3 ${classes.scrollable}`}
      href='#one!'
    >
      <div className={classes.row}>
        <div className={classes.col}>{jobsJsx[0]}</div>
        <div className={classes.col}>{jobsJsx[1]} </div>
        <div className={classes.col}>{jobsJsx[2]} </div>
        <div className={classes.col}>{jobsJsx[3]} </div>
        <div className={classes.col}>{jobsJsx[4]} </div>
      </div>
      <div className='col s12 green lighten-1 green-text text-lighten-1'>.</div>
    </div>
  );
};

export default Day;
