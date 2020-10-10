import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Contract = ({contract}) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contract Details</h6>
        <i className='material-icons'>edit</i>
      </div>
      <p className={classes.content}>{contract}</p>
    </div>
  )
}

export default Contract
