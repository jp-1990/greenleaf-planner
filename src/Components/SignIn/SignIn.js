import React,{useState} from 'react'
import classes from './SignIn.module.scss'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const emailChangeHandler=(event)=>{
    setEmail(event.target.value)
  }

  const passwordChangeHandler=(event)=>{
    setPassword(event.target.value)
  }

  const signInHandler=()=>{
    console.log('signed in');
  }

  return (
    <div className={classes.login}>
      <div className={classes.inputFields}>
        <div className={classes.email}>
          <span>Email</span>
          <input onChange={(e)=>emailChangeHandler(e)} value={email} placeholder='you@example.com'></input>
        </div>
        <div className={classes.password}>
          <span>Password</span>
          <input type='password' onChange={(e)=>passwordChangeHandler(e)} value={password} placeholder='**********'></input>
        </div>
      </div>
      <span onClick={signInHandler} className={classes.signin}>Sign in</span>
      
    </div>
  )
}

export default SignIn
