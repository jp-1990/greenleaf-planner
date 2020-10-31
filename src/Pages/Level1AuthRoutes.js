import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const Level1AuthRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  return (
    <Route
      {...rest}
      render={(props) => {
        return currentUser && currentUser.accessLevel > 0 ? (
          <Component {...props} />
        ) : (
          <Redirect to='/signin' />
        );
      }}
    ></Route>
  );
};
