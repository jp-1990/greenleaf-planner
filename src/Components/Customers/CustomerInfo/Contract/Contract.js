import React, { useState } from 'react';
import classes from '../CustomerInfo.module.scss';

const Contract = ({ contract, edit, setEdit }) => {
  // contract
  const contractArray = contract.split('\n');
  const contractOutput = contractArray.map((el) => el.trim());

  const [editContract, setEditContract] = useState(contractOutput.join('\n'));

  // contract jsx for render
  const contractJsx = contractOutput.map((el, i) => {
    return (
      <span key={i}>
        {el}
        <br />
      </span>
    );
  });

  // click handlers
  const handleEditClick = () => {
    setEdit((prev) => !prev);
  };

  const handleCancel = () => {
    setEditContract(contractOutput.join('\n'));
    setEdit(false);
  };

  const handleConfirm = () => {
    return null;
  };

  const handleTextEdit = (event) => {
    setEditContract(event.target.value);
  };

  // standard view
  const defaultJsx = (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contract Details</h6>
        <i className='material-icons' onClick={handleEditClick}>
          edit
        </i>
      </div>
      <p className={classes.content}>{contractJsx}</p>
    </div>
  );

  // editing view
  const editJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contract Details</h6>
      </div>
      <div className={classes.edit}>
        <textarea value={editContract} onChange={handleTextEdit}></textarea>
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

export default Contract;
