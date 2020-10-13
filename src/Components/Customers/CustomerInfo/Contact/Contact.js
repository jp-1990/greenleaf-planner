import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Contact = ({numbers,email, edit, setEdit, modalState}) => {

  // click handlers
  const handleEditClick=()=>{
    setEdit(prev=>!prev)
  }

  const handleCancel=()=>{
    setEdit(false)
  }

  const handleConfirm=()=>{
    return null
  }

   // standard view
   const defaultJsx=(
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contact</h6>
        <i className='material-icons' onClick={handleEditClick}>edit</i>
      </div>
      <p className={classes.content}>{numbers}</p>
      <p className={classes.content}>{email}</p>
    </div>
  )

  // editing view
  const editJsx=(
    <div className={classes.infoBox} style={{backgroundColor:'white'}}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contact</h6>
      </div>
      <div className={classes.edit}>
          <input placeholder='Home number...'></input>  
          <input placeholder='Mobile number...'></input> 
          <input placeholder='Email address...'></input>  
          {modalState==='create'?null:<div className={classes.actions}>
            <span onClick={handleCancel} className={classes.cancel}>cancel</span>
            <span onClick={handleConfirm} className={classes.accept}>accept</span>
          </div> } 
        </div>
    </div>
  )

  return edit||modalState==='create'?editJsx:defaultJsx
}


export default Contact
