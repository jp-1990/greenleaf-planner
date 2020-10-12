import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Address = ({address, edit, setEdit}) => {
  

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
        <h6 className={classes.title}>Address</h6>
        <i className='material-icons' onClick={handleEditClick}>edit</i>
      </div>
      <p className={classes.content}>{address}</p>
    </div>
  )

  // editing view
  const editJsx=(
    <div className={classes.infoBox} style={{backgroundColor:'white'}}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Address</h6>
      </div>
        <div className={classes.edit}>
          <input placeholder='Address line 1...'></input>  
          <input placeholder='Address line 2...'></input>  
          <input placeholder='Town...'></input>  
          <input placeholder='County...'></input>  
          <input placeholder='Post code...'></input>
          <div className={classes.actions}>
            <span onClick={handleCancel} className={classes.cancel}>cancel</span>
            <span onClick={handleConfirm} className={classes.accept}>accept</span>
          </div>  
        </div>
    </div>
  )

  return edit?editJsx:defaultJsx
  
}

export default Address
