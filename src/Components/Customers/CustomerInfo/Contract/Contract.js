import React,{useState,useEffect} from 'react'
import classes from '../CustomerInfo.module.scss'

const Contract = ({contract, contractJsx, edit, setEdit, modalState}) => {
  const [contractText ,setContractText] = useState(contract.join(', '))
  
  useEffect(()=>{
    setContractText(contract.join(', '))
  },[contract])

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

  const handleTextEdit=(event)=>{
    setContractText(event.target.value)
  }

  // standard view
  const defaultJsx=(
    <div className={classes.infoBox}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contract Details</h6>
        <i className='material-icons' onClick={handleEditClick}>edit</i>
      </div>
      <p className={classes.content}>{contractJsx}</p>
    </div>
  )

  // editing view
  const editJsx=(
    <div className={classes.infoBox} style={{backgroundColor:'white'}}>
      <div className={classes.titleRow}>
        <h6 className={classes.title}>Contract Details</h6>
      </div>
      <div className={classes.edit}>
        <textarea value={contractText} onChange={handleTextEdit}></textarea>  
          {modalState==='create'?null:<div className={classes.actions}>
            <span onClick={handleCancel} className={classes.cancel}>cancel</span>
            <span onClick={handleConfirm} className={classes.accept}>accept</span>
          </div>}
        </div>
    </div>
  )

  return edit||modalState==='create'?editJsx:defaultJsx
}

export default Contract
