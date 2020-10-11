import React from 'react';
import classes from './CustomerList.module.scss';
import Customer from './Customer/Customer';
import {useCustomers} from '../../../Context/CustomersContext'

const CustomerList = ({setModalState}) => {
  const customers=useCustomers().sort((a,b)=>{
    if (a.name<b.name)return -1
    return 1
  })

  // generate hsl css color
  const randomPastelColor = () =>
    `hsl(${Math.floor(Math.random() * 24) * 16},70%,60%)`;

  // generate array of 24 unique pastel colors
  const colorArray = () => {
    const output = [];
    for (let i = 0; i < 24; i++) {
      const newColor = randomPastelColor();
      output.includes(newColor) ? (i = i - 1) : output.push(newColor);
    }
    return output;
  };
  const getPastelColors = colorArray();

  // generate array of customers
  const customerArray = customers.map((el,i)=>{
    return <Customer
    key={i}
    style={{
      backgroundColor: getPastelColors[Math.floor(Math.random()*24)],
    }}
    details={el}
    setModalState={setModalState}
  />
  })

  return (
    <div className={classes.customerList}>
      <p>{`Customers (${customers.length})`}</p>
      <div className={classes.customers}>{customerArray}</div>
    </div>
  );
};

export default CustomerList;
