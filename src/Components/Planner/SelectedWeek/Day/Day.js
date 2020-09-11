import React from 'react';
import Job from './Job/Job';

const Day = (props) => {
  return (
    <div
      className='carousel-item grey lighten-3 grey-text text-darken-3'
      href='#one!'
    >
      <h2>{props.day}</h2>
      <p className='grey-text text-darken-3'>This is your first panel</p>
      <Job name='Richmond' rebook='14' prevVisit='22/08/2020'></Job>
    </div>
  );
};

export default Day;
