import React,{useState,useEffect} from 'react'
import classes from './CustomerInfo.module.scss'
import Address from './Address/Address'
import Contact from './Contact/Contact'
import Frequency from './Frequency/Frequency'
import Contract from './Contract/Contract'
import { useCustomers } from '../../../Context/CustomersContext'

const CustomerInfo = ({modalState, setModalState}) => {
  const [addressEdit, setAddressEdit]=useState(false)
  const [contactEdit, setContactEdit]=useState(false)
  const [frequencyEdit, setFrequencyEdit]=useState(false)
  const [contractEdit, setContractEdit]=useState(false)

  useEffect(()=>{
    setAddressEdit(false)
    setContactEdit(false)
    setFrequencyEdit(false)
    setContractEdit(false)
  },[modalState])


  const customers=useCustomers()[0]
  // find the customer active in the modal
  const activeCustomer= customers.find(el=>{
    return el.id===modalState
  })

  // get name, address, numbers, email, frequency and contract info
  let name
  let address=[]
  let numbers=[]
  let email
  let frequency
  let contract=[]

  if(activeCustomer){
    // name 
    name= activeCustomer.name

    //address
    const setAddress=[activeCustomer.addressLine1,activeCustomer.addressLine2,activeCustomer.town,activeCustomer.county,activeCustomer.postcode]
    
    setAddress.forEach(el=>{
      if(el){
        address.push(el)
      }
    })

    // numbers 
    const setNumbers=[activeCustomer.home,activeCustomer.mobile]
    
    setNumbers.forEach(el=>{
      if(el){
        numbers.push(el)
      }
    })

    email= activeCustomer.email
    frequency= activeCustomer.frequency

    // contract 
    const setContract=activeCustomer.contractDetails.split('\n')
    contract = setContract.map(el=>el.trim())
  }

  
  // address jsx for render
  const addressJsx=address.map((el,i)=>{
    return (
      <span key={i}>{el}<br /></span>
    )
  })

  // numbers jsx for render
  const numbersJsx=numbers.map((el,i)=>{
    return (
      <span key={i}>{el}<br /></span>
    )
  })

  // contract jsx for render
  const contractJsx=contract.map((el,i)=>{
    return (
      <span key={i}>{el}<br /></span>
    )
  })


  return (
    <div className={classes.container}>
        <div className={classes.titlebox}>
          <div className={classes.letter}>
  <span>{name?name.substring(0,1):null}</span>
          </div>
          <h5 className='truncate'>{name}</h5>
        </div>
        <i onClick={()=>setModalState(prev=>!prev)} className='material-icons'>clear</i>
        <div className={classes.details}>
          <div className={classes.contactDetails}>
            <Address edit={addressEdit} setEdit={setAddressEdit} address={addressJsx} /> 
            <Contact edit={contactEdit} setEdit={setContactEdit} numbers={numbersJsx} email={email} />
          </div>
          <div className={classes.contractDetails}>
            <Frequency edit={frequencyEdit} setEdit={setFrequencyEdit} frequency={`${frequency} days`} />
            <Contract edit={contractEdit} setEdit={setContractEdit} contractJsx={contractJsx} contract={contract} />
          </div>
        </div>
      <span className={classes.delete}>delete customer</span>
      </div>
  )
}

export default CustomerInfo
