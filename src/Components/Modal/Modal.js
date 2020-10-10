import React from 'react'
import classes from './Modal.module.scss'


const Modal = ({children}) => {
  return (
    <div className={classes.modal}>
      {children}
    </div>
  )
}

export default Modal
