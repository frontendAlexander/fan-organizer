import React from 'react';
import { Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';




export const isAuth = true;

const PrivateRoute = ({ component: Component, isAuth, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      isAuth ? <Component {...props} /> : <Redirect to="/" />
    )}
  />
);


export default PrivateRoute;
