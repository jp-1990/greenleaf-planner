import React from 'react';
import classes from './CustomerList.module.scss';
import Customer from './Customer/Customer';
import { useCustomers } from '../../../Context/CustomersContext';

const CustomerList = ({ search, setModalState }) => {
  const { customerList } = useCustomers();

  customerList.sort((a, b) => {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    return 1;
  });
  const { loading } = useCustomers();

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
  let counter = 0;
  const customerArray = customerList.map((el, i) => {
    if (el.name.toLowerCase().includes(search) || !search) {
      counter++;
      return (
        <Customer
          key={i}
          style={{
            backgroundColor: getPastelColors[Math.floor(Math.random() * 24)],
          }}
          details={el}
          setModalState={setModalState}
        />
      );
    } else {
      return null;
    }
  });

  // when loading = false
  const outputJsx = (
    <div className={classes.customerList}>
      <p>{`Customers (${counter})`}</p>
      <div className={classes.customers}>{customerArray}</div>
    </div>
  );

  // when loading = true
  const loadingJsx = (
    <div className={classes.loading}>
      <div className='preloader-wrapper big active'>
        <div className='spinner-layer spinner-green-only'>
          <div className='circle-clipper left'>
            <div className='circle'></div>
          </div>
          <div className='gap-patch'>
            <div className='circle'></div>
          </div>
          <div className='circle-clipper right'>
            <div className='circle'></div>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{loading ? loadingJsx : outputJsx}</>;
};

export default CustomerList;
