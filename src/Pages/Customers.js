import React from 'react';
import Nav from '../Components/Nav/Nav';
import AddCustomer from '../Components/Customers/AddCustomer/AddCustomer';
import Search from '../Components/Customers/Search/Search';
import CustomerList from '../Components/Customers/CustomerList/CustomerList';

const Customers = () => {
  return (
    <>
      <Nav active='customers' />
      <div>
        <AddCustomer />
        <Search />
        <CustomerList />
      </div>
    </>
  );
};

export default Customers;
