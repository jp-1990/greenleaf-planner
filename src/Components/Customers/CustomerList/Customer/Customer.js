import React from 'react';
import classes from './Customer.module.scss';

const Customer = ({ style }) => {
  const name = 'Churchfield Green';
  const homeNum = '01263 720227';
  const mobNum = '07389 433567';
  const email = 'churchfieldgreen@gmail.com';

  return (
    <div className={classes.customer}>
      <div className={classes.letter} style={style}>
        <span>{name.substring(0, 1)}</span>
      </div>
      <div className={classes.contact}>
        <h5>{name}</h5>
        <div className={classes.numbers}>
          <p>{homeNum}</p>
          <p>{mobNum}</p>
        </div>
        <p className={classes.email}>{email}</p>
      </div>
    </div>
  );
};

export default Customer;
