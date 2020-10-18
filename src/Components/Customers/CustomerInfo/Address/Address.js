import React, { useState } from 'react';
import classes from '../CustomerInfo.module.scss';

const Address = ({ address, edit, setEdit }) => {
  const [editAddress, setEditAddress] = useState({
    addressLine1: address.addressLine1,
    addressLine2: address.addressLine2,
    town: address.town,
    county: address.county,
    postcode: address.postcode,
  });

  const addressArray = [];

  Object.values(address).forEach((el) => {
    if (el) {
      addressArray.push(el);
    }
  });

  // address jsx for render
  const addressJsx = addressArray.map((el, i) => {
    return (
      <span key={i}>
        {el}
        <br />
      </span>
    );
  });

  // address input handler
  const handleAddressInput = (event, target) => {
    const value = event.target.value;
    setEditAddress((prev) => {
      return { ...prev, [target]: value };
    });
  };

  // handler for edit
  const handleEditClick = () => {
    setEdit((prev) => !prev);
  };

  // handler for cancel
  const handleCancel = () => {
    setEdit(false);
    setEditAddress({
      addressLine1: '',
      addressLine2: '',
      town: '',
      county: '',
      postcode: '',
    });
  };

  // handler to confirm changes
  const handleConfirm = () => {
    return null;
  };

  // standard view
  const defaultJsx = (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Address</h6>
        <i className='material-icons' onClick={handleEditClick}>
          edit
        </i>
      </div>
      <p className={classes.content}>{addressJsx}</p>
    </div>
  );

  // editing view
  const editJsx = (
    <div className={classes.infoBox} style={{ backgroundColor: 'white' }}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Address</h6>
      </div>
      <div className={classes.edit}>
        <input
          placeholder='Address line 1...'
          value={editAddress.addressLine1}
          onChange={(e) => handleAddressInput(e, 'addressLine1')}
        ></input>
        <input
          placeholder='Address line 2...'
          value={editAddress.addressLine2}
          onChange={(e) => handleAddressInput(e, 'addressLine2')}
        ></input>
        <input
          placeholder='Town...'
          value={editAddress.town}
          onChange={(e) => handleAddressInput(e, 'town')}
        ></input>
        <input
          placeholder='County...'
          value={editAddress.county}
          onChange={(e) => handleAddressInput(e, 'county')}
        ></input>
        <input
          placeholder='Post code...'
          value={editAddress.postcode}
          onChange={(e) => handleAddressInput(e, 'postcode')}
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

export default Address;
