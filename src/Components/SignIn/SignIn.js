import React, { useState, useEffect } from 'react';
import classes from './SignIn.module.scss';
import { useAuth } from '../../Context/AuthContext';
import { useHistory } from 'react-router-dom';
import M from 'materialize-css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { signIn, currentUser } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (currentUser) {
      history.push('/home');
    }
  });

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const signInHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await signIn(email, password);
      setLoading(false);
      setTimeout(() => {
        history.push('/home');
      }, 300);
    } catch {
      setLoading(false);
      M.toast({ html: 'Failed to sign in, check email and password' });
    }
  };

  return (
    <form onSubmit={signInHandler}>
      <div className={classes.login}>
        <div className={classes.inputFields}>
          <div className={classes.email}>
            <label>Email</label>
            <input
              type='email'
              onChange={(e) => emailChangeHandler(e)}
              value={email}
              placeholder='you@example.com'
              autoComplete='on'
              required
            ></input>
          </div>
          <div className={classes.password}>
            <label>Password</label>
            <input
              type='password'
              onChange={(e) => passwordChangeHandler(e)}
              value={password}
              placeholder='**********'
              autoComplete='off'
              required
            ></input>
          </div>
        </div>
        <button
          type='submit'
          disabled={loading ? true : false}
          className={loading ? classes.signinDisabled : classes.signin}
        >
          Sign in
        </button>
      </div>
    </form>
  );
};

export default SignIn;
