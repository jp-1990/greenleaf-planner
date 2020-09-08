import React from 'react';
import classes from './WeekSelectorCSS/SelectedMonth.module.scss';

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
        <button
          onClick={() => {
            props.activeMonthHandler(index);
          }}
          key={el}
          className={`waves-effect waves-light btn-small ${classes.active}`}
        >
          {el}
        </button>
      );
    } else {
      return (
        <button
          onClick={() => {
            props.activeMonthHandler(index);
          }}
          key={el}
          className='waves-effect waves-light btn-small grey lighten-2 grey-text'
        >
          {el}
        </button>
      );
    }
  });

  return <div className={classes.months}>{monthsList}</div>;
};

export default SelectedMonth;
