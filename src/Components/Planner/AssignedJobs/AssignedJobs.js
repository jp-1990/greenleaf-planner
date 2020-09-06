import React from 'react';
import '../../../sass/materialize.scss';
import classes from './AssignedJobs.module.scss';

const AssignedJobs = (props) => {
  const workPlan = Object.keys(props.colors).map((el) => {
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
          <p>Time est. 8 hours 40 mins</p>
        </div>
        <div className={classes.jobContent}></div>
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
