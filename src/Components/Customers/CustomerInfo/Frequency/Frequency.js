import React, { useState } from 'react';
import classes from '../CustomerInfo.module.scss';
import M from 'materialize-css';
import { database } from '../../../../firebase';

const Frequency = ({ id, frequency, edit, setEdit }) => {
  const [visitFrequency, setVisitFrequency] = useState({ frequency: '' });

  // frequency of visits input handler
  const handleFrequencyInput = (event, target) => {
    const value = event.target.value.replace(/\D/g, '');
    setVisitFrequency((prev) => {
      return { ...prev, [target]: value };
    });
  };

  // handle clicks
  const handleEditClick = () => {
    setEdit((prev) => !prev);
  };

  const handleCancel = () => {
    setEdit(false);
    setVisitFrequency({ frequency: '' });
  };

  const handleConfirm = () => {
    // validate visit frequency
    if (
      Number.isNaN(+visitFrequency.frequency) ||
      +visitFrequency.frequency === 0
    ) {
      M.toast({ html: 'Invalid visit frequency' });
      return;
    }
    database.ref('customers').child(id).update(visitFrequency);
    setEdit(false);
  };

  // standard view
  const defaultJsx = (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Visit frequency</h6>
        <i className='material-icons' onClick={handleEditClick}>
          edit
        </i>
      </div>
      <p className={classes.content}>{frequency} days</p>
    </div>
  );

  // editing view
  const editJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Visit frequency</h6>
      </div>
      <div className={classes.edit}>
        <input
          placeholder='Visit frequency in days...'
          value={visitFrequency.frequency}
          onChange={(e) => handleFrequencyInput(e, 'frequency')}
        ></input>
        <div className={classes.actions}>
          <span onClick={handleCancel} className={classes.cancel}>
            cancel
          </span>
          <span onClick={handleConfirm} className={classes.accept}>
            accept
          </span>
        </div>
      </div>
    </div>
  );

  return edit ? editJsx : defaultJsx;
};

export default Frequency;
