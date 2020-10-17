import React,{useState} from 'react'
import classes from '../CustomerInfo.module.scss'

const Contact = ({numbers,email, edit, setEdit}) => {
  const [contact, setContact] = useState({
    home:'',
    mobile:'',
    email:''
  })

  // contact details input handler
  const handleContactInput=(event, target)=>{
    const value=event.target.value
    setContact(prev=>{
      return {...prev, [target]:value}
    })
  }

  // click handlers
  const handleEditClick=()=>{
    setEdit(prev=>!prev)
  }

  const handleCancel=()=>{
    setEdit(false)
    setContact({
      home:'',
      mobile:'',
      email:''
    })
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
          <input placeholder='Home number...' value={contact.home} onChange={(e)=>handleContactInput(e,'home')}></input>  
          <input placeholder='Mobile number...' value={contact.mobile} onChange={(e)=>handleContactInput(e,'mobile')}></input> 
          <input placeholder='Email address...' value={contact.email} onChange={(e)=>handleContactInput(e,'email')}></input>  
          <div className={classes.actions}>
            <span onClick={handleCancel} className={classes.cancel}>cancel</span>
            <span onClick={handleConfirm} className={classes.accept}>accept</span>
          </div> 
        </div>
    </div>
  )

  return edit?editJsx:defaultJsx
}


export default Contact