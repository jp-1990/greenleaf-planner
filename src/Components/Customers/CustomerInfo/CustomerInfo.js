import React from 'react'
import classes from './CustomerInfo.module.scss'
import Address from './Address/Address'
import Contact from './Contact/Contact'
import Frequency from './Frequency/Frequency'
import Contract from './Contract/Contract'

const CustomerInfo = () => {
  return (
    <div className={classes.container}>
        <div className={classes.titlebox}>
          <div className={classes.letter}>
            <span>N</span>
          </div>
          <h5 className='truncate'>Name</h5>
        </div>
        <i className='material-icons'>clear</i>
        <div className={classes.details}>
          <div className={classes.contactDetails}>
            <Address address='Some test address' /> 
            <Contact numbers='01262 720229' email='something@gmail.com' />
          </div>
          <div className={classes.contractDetails}>
            <Frequency frequency='14 days' />
            <Contract contract='Some info about this contract, preferably maintaining formatting from input, Some info about this contract, preferably maintaining formatting from input, Some info about this contract, preferably maintaining formatting from input, Some info about this contract, preferably maintaining formatting from input' />
          </div>
        </div>
      <span className={classes.delete}>delete customer</span>
      </div>
  )
}

export default CustomerInfo
