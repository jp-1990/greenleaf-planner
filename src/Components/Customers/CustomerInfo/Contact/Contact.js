import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Contact = ({numbers,email, edit, setEdit}) => {

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
          <div className={classes.actions}>
            <i onClick={handleCancel} className={`${classes.clear} material-icons`}>clear</i>
            <i onClick={handleConfirm} className={`${classes.confirm} material-icons`}>check</i>
          </div>  
        </div>
    </div>
  )

  return edit?editJsx:defaultJsx
}


export default Contact
