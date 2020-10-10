import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Frequency = ({frequency}) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Visit frequency</h6>
        <i className='material-icons'>edit</i>
      </div>
      <p className={classes.content}>{frequency}</p>
    </div>
  )
}

export default Frequency
