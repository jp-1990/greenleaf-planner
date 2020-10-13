import React from 'react';
import classes from './AddCustomer.module.scss';

const AddCustomer = ({setModalState}) => {

  return (
    <div onClick={()=>setModalState('create')} className={classes.add}>
      <i className='material-icons'>add_circle</i>
      <p>Add customer...</p>
    </div>
  );
};

export default AddCustomer;
