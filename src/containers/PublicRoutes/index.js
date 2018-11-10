import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({component: Comp, user, ...rest}) => (
    <Route {...rest}
    component={props => ( rest.restricted ? 
    ( user ? <Redirect to="/dashboard"/> : <Comp {...props} user={user}/> ) 
    : <Comp {...props} user={user}/>  
    )}
    />
);

export default PublicRoutes;