import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({component: Component, user, ...rest}) => (
    <Route {...rest}
    component={props => ( rest.restricted ? 
    ( user ? <Redirect to="/dashboard"/> : <Component {...props} user={user}/> ) 
    : <Component {...props} user={user}/>  
    )}
    />
);

export default PublicRoutes;