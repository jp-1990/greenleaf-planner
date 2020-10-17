import React, { useState } from 'react';
import classes from './SignIn.module.scss';
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn } = useAuth();
  const history = useHistory();

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = async () => {
    try {
      setLoading(true);
      await signIn(email, password);
      history.push('/home');
      console.log('signed in');
    } catch {
      M.toast({ html: 'Failed to sign in, check email and password' });
    }
    setLoading(false);
  };

  return (
    <div className={classes.login}>
      <div className={classes.inputFields}>
        <div className={classes.email}>
          <span>Email</span>
          <input
            onChange={(e) => emailChangeHandler(e)}
            value={email}
            placeholder='you@example.com'
          ></input>
        </div>
        <div className={classes.password}>
          <span>Password</span>
          <input
            type='password'
            onChange={(e) => passwordChangeHandler(e)}
            value={password}
            placeholder='**********'
          ></input>
        </div>
      </div>
      <span
        onClick={loading ? null : signInHandler}
        className={loading ? classes.signinDisabled : classes.signin}
      >
        Sign in
      </span>
    </div>
  );
};

export default SignIn;