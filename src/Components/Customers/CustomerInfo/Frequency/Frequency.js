import React from 'react'
import classes from '../CustomerInfo.module.scss'

const Frequency = ({frequency, edit, setEdit}) => {
  
  // handle clicks
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
        <h6 className={classes.title}>Visit frequency</h6>
        <i className='material-icons' onClick={handleEditClick}>edit</i>
      </div>
      <p className={classes.content}>{frequency}</p>
    </div>
  )

  // editing view
  const editJsx=(
    <div className={classes.infoBox} style={{backgroundColor:'white'}}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Visit frequency</h6>
      </div>
      <div className={classes.edit}>
        <input placeholder='Visit frequency in days...'></input>  
        <div className={classes.actions}>
          <span onClick={handleCancel} className={classes.cancel}>cancel</span>
          <span onClick={handleConfirm} className={classes.accept}>accept</span>
        </div>  
      </div>
    </div>
  )

  return edit?editJsx:defaultJsx
}

export default Frequency
