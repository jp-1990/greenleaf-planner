import React from 'react';
import classes from './SelectedMonth.module.scss';

const SelectedMonth = (props) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const monthsList = months.map((el, index) => {
    if (props.active === index) {
      return (
        <a
          key={el}
          className={`waves-effect waves-light btn-small ${classes.active}`}
        >
          {el}
        </a>
      );
    } else {
      return (
        <a
          key={el}
          className='waves-effect waves-light btn-small grey lighten-2 grey-text'
        >
          {el}
        </a>
      );
    }
  });

  return <div className={classes.months}>{monthsList}</div>;
};

export default SelectedMonth;
