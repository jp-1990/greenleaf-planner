import React,{useState} from 'react';
import Nav from '../Components/Nav/Nav';
import AddCustomer from '../Components/Customers/AddCustomer/AddCustomer';
import Search from '../Components/Customers/Search/Search';
import CustomerList from '../Components/Customers/CustomerList/CustomerList';
import CustomerInfo from '../Components/Customers/CustomerInfo/CustomerInfo'
import Modal from '../Components/Modal/Modal'
import {CustomersProvider} from '../Context/CustomersContext'

const Customers = () => {
  const [modalState, setModalState]=useState(false)
  return (
    <>
      <Nav active='customers' />
      <div>
        <CustomersProvider>
          <AddCustomer />
          <Search />
          <CustomerList setModalState={setModalState} />
          <Modal state={modalState} setState={setModalState}>
            <CustomerInfo modalState={modalState} setModalState={setModalState}/>
          </Modal>
        </CustomersProvider>
      </div>
    </>
  );
};

export default Customers;
