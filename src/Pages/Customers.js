import React from 'react';
import Nav from '../Components/Nav/Nav';
import AddCustomer from '../Components/Customers/AddCustomer/AddCustomer';
import Search from '../Components/Customers/Search/Search';
import CustomerList from '../Components/Customers/CustomerList/CustomerList';
import CustomerInfo from '../Components/Customers/CustomerInfo/CustomerInfo'
import Modal from '../Components/Modal/Modal'

const Customers = () => {
  return (
    <>
      <Nav active='customers' />
      <div>
        <AddCustomer />
        <Search />
        <CustomerList />
        <Modal>
          <CustomerInfo />
        </Modal>
      </div>
    </>
  );
};

export default Customers;
