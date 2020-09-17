import React from 'react';
import Job from './Job/Job';
import classes from './Day.module.scss';

const Day = (props) => {
  const jobs = props.jobs.sortedJobs;

  // merge sorted jobs into one array
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

  // divide array into an even-ish number for each column of the selected week div
  const jobColumns = (jobs) => {
    try {
      // calc number per column, min 6
      const perColumn =
        Math.ceil(jobs.length / 5) > 6 ? Math.ceil(jobs.length / 5) : 6;
      const columns = [[]];

      // add jobs to relevant array based on current column length
      let columnId = 0;
      let count = 0;
      jobs.forEach((el, i) => {
        // ensure title never appears as the last element in a column
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

  // create jsx from the columns arrays
  const jobsJsx = jobColumns(mergedJobs).map((el) => {
    return el.map((e, i) => {
      // if plain text, return that, else return job component
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
          id={e.id}
          location={e.location}
          rebook={e.rebook}
          prevVisit={e.prevVisit}
          assigned={e.assigned}
          time={e.time}
          day={props.day}
          colors={props.colors}
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
