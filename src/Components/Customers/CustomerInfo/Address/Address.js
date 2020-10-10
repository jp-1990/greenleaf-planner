import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Address = ({address}) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Address</h6>
        <i className='material-icons'>edit</i>
      </div>
      <p className={classes.content}>{address}</p>
    </div>
  )
}

export default Address
