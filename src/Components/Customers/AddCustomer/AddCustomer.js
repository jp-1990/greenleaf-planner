import React from 'react';
import classes from './AddCustomer.module.scss';

const AddCustomer = () => {
  return (
    <div className={classes.add}>
      <i className='material-icons'>add_circle</i>
      <p>Add customer...</p>
    </div>
  );
};

export default AddCustomer;
