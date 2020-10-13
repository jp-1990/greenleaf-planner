import React from 'react';
import Nav from '../Components/Nav/Nav';
import SignIn from '../Components/SignIn/SignIn'

const Login = () => {
  return (
    <>
      <Nav active='sign in' />
      <SignIn />
    </>
  );
};

export default Login;
