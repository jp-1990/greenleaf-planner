import React, { useContext, useState, useEffect } from 'react';
import { database } from '../firebase';

export const CustomersContext = React.createContext();
export const useCustomers = () => {
  return useContext(CustomersContext);
};

const customers = database.ref('customers/');

export const CustomersProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [customerList, setCustomerList] = useState([]);
  const [updateTrigger, setUpdateTrigger] = useState(false);

  useEffect(() => {}, [updateTrigger]);

  useEffect(() => {
    const output = [];
    const getCustomers = async () => {
      await customers.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          output.push(childSnapshot.val());
        });
      });
      setCustomerList(output);
      setLoading(false);
    };
    getCustomers();
    customers.on('child_changed', (data) => {
      setCustomerList((prev) => {
        const newData = [...prev];
        const index = newData.findIndex((el) => el.id === data.val().id);
        newData[index] = data.val();
        return newData;
      });
    });
  }, []);

  const value = {
    customerList,
    setCustomerList,
    setUpdateTrigger,
    loading,
  };

  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
