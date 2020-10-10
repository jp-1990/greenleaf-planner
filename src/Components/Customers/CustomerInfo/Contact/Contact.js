import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Contact = ({numbers,email}) => {
  return (
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contact</h6>
        <i className='material-icons'>edit</i>
      </div>
      <p className={classes.content}>{numbers}</p>
      <p className={classes.content}>{email}</p>
    </div>
  )
}


export default Contact
