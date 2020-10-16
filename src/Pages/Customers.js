import React,{useState} from 'react';
import Nav from '../Components/Nav/Nav';
import AddCustomer from '../Components/Customers/AddCustomer/AddCustomer';
import Search from '../Components/Customers/Search/Search';
import CustomerList from '../Components/Customers/CustomerList/CustomerList';
import CustomerInfo from '../Components/Customers/CustomerInfo/CustomerInfo'
import CustomerCreate from '../Components/Customers/CustomerCreate/CustomerCreate'
import Modal from '../Components/Modal/Modal'
import {CustomersProvider} from '../Context/CustomersContext'

const Customers = () => {
  const [modalState, setModalState]=useState(false)
  const [search, setSearch] = useState(null)
  return (
    <>
      <Nav active='customers' />
      <div>
        <CustomersProvider>
          <AddCustomer setModalState={setModalState}/>
          <Search setSearch={setSearch}/>
          <CustomerList search={search} setModalState={setModalState} />
          <Modal state={modalState} setState={setModalState}>
            {modalState?modalState==='create'?<CustomerCreate setModalState={setModalState}/>:<CustomerInfo modalState={modalState} setModalState={setModalState}/>:null}
          </Modal>
        </CustomersProvider>
      </div>
    </>
  );
};

export default Customers;
