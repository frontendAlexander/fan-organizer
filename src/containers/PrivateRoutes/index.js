import React from 'react';
import { Route} from 'react-router-dom';
import { Redirect } from 'react-router-dom';





const PrivateRoutes = ({ component: Comp, user,  ...rest }) => (
  <Route
    {...rest}
    component={props => (
      user ? <Comp {...props} user={user}/> : <Redirect to="/sign-in" />
    )}
  />
);


export default PrivateRoutes;
