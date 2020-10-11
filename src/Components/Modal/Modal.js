import React from 'react'
import classes from './Modal.module.scss'


const Modal = ({children, state, setState}) => {
  const modalHandler =(event)=>{
    if(event.target.id==='modal'){
      setState(false)
    }
  }

  return (
    <div id='modal' className={state?classes.modal:classes.none} onClick={(e)=>modalHandler(e)}>
      {children}
    </div>
  )
}

export default Modal
