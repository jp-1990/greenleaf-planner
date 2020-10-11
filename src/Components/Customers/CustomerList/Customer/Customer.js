import React from 'react';
import classes from './Customer.module.scss';

const Customer = ({ style, details, setModalState }) => {
  const name = details.name;
  const homeNum = details.home;
  const mobNum = details.mobile;
  const email = details.email;

  return (
    <div className={classes.customer} onClick={()=>setModalState(details.id)}>
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
