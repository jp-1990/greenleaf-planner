import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const Level2AuthRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && currentUser.accessLevel > 1 ? (
          <Component {...props} />
        ) : (
          <Redirect to='/home' />
        );
      }}
    ></Route>
  );
};
