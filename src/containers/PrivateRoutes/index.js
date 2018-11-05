import React from 'react';
import { Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';



// захардкожено!!!
//export const isAuth = true;

const PrivateRoutes = ({ component: Component, user,  ...rest }) => (
  <Route
    {...rest}
    component={props => (
      user ? <Component {...props} user={user}/> : <Redirect to="/sign-in" />
    )}
  />
);


export default PrivateRoutes;
