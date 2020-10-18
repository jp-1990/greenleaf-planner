import React, { useState, useEffect } from 'react';
import classes from './CustomerInfo.module.scss';
import Address from './Address/Address';
import Contact from './Contact/Contact';
import Frequency from './Frequency/Frequency';
import Contract from './Contract/Contract';
import { useCustomers } from '../../../Context/CustomersContext';

const CustomerInfo = ({ modalState, setModalState }) => {
  const [addressEdit, setAddressEdit] = useState(false);
  const [contactEdit, setContactEdit] = useState(false);
  const [frequencyEdit, setFrequencyEdit] = useState(false);
  const [contractEdit, setContractEdit] = useState(false);

  const { customerList } = useCustomers();
  // find the customer active in the modal
  const [activeCustomer, setActiveCustomer] = useState(
    customerList.find((el) => {
      return el.id === modalState;
    })
  );

  useEffect(() => {
    setAddressEdit(false);
    setContactEdit(false);
    setFrequencyEdit(false);
    setContractEdit(false);
  }, [modalState]);

  useEffect(() => {
    setActiveCustomer(
      customerList.find((el) => {
        return el.id === modalState;
      })
    );
  }, [customerList, modalState]);

  // delete customer
  const deleteCustomerHandler = () => {
    console.log('deleted customer');
  };

  // info box if an active customer is found from modalstate
  const existingCustomerInfo = (
    <div className={classes.container}>
      <div className={classes.titlebox}>
        <div className={classes.letter}>
          <span>{activeCustomer.name.substring(0, 1)}</span>
        </div>
        <h5 className='truncate'>{activeCustomer.name}</h5>
      </div>
      <i
        onClick={() => setModalState((prev) => !prev)}
        className='material-icons'
      >
        clear
      </i>
      <div className={classes.details}>
        <div className={classes.contactDetails}>
          <Address
            id={modalState}
            edit={addressEdit}
            setEdit={setAddressEdit}
            address={{
              addressLine1: activeCustomer.addressLine1 || '',
              addressLine2: activeCustomer.addressLine2 || '',
              town: activeCustomer.town || '',
              county: activeCustomer.county || '',
              postcode: activeCustomer.postcode || '',
            }}
          />
          <Contact
            id={modalState}
            edit={contactEdit}
            setEdit={setContactEdit}
            numbers={{
              home: activeCustomer.home || '',
              mobile: activeCustomer.mobile || '',
            }}
            email={activeCustomer.email || ''}
          />
        </div>
        <div className={classes.contractDetails}>
          <Frequency
            id={modalState}
            edit={frequencyEdit}
            setEdit={setFrequencyEdit}
            frequency={activeCustomer.frequency || ''}
          />
          <Contract
            id={modalState}
            edit={contractEdit}
            setEdit={setContractEdit}
            contract={activeCustomer.contractDetails || ''}
          />
        </div>
      </div>
      <span onClick={deleteCustomerHandler} className={classes.delete}>
        delete customer
      </span>
    </div>
  );

  const createNewCustomer = null;

  return <>{activeCustomer ? existingCustomerInfo : createNewCustomer}</>;
};

export default CustomerInfo;
