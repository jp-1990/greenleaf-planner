import React from 'react';
import AllocatedJob from './AllocatedJob/AllocatedJob';
import classes from './AllocatedJobs.module.scss';

const AllocatedJobs = () => {
  const testData = ['spicer', 'churchfield', 'harvey'];

  const jobsJsx = testData.map((el, i) => {
    return <AllocatedJob id={i} key={i} title={el} time='90' />;
  });

  return (
    <div className={classes.jobs} style={{ border: '1px solid red' }}>
      <i className={`${classes.person} material-icons`}>person</i>
      <div className={classes.titleBox}>
        <h5>Nick</h5>
      </div>
      <div className={classes.timeEst}>Time est. 3 hours 10 mins</div>
      <div className={classes.jobContent}>{jobsJsx}</div>
    </div>
  );
};

export default AllocatedJobs;
