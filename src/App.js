import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Layout from './hoc/Layout';
import PrivateRoutes from './containers/PrivateRoutes';
import PublicRoutes from './containers/PublicRoutes';

const App = ( {user} ) => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(( {path, component, isPrivate, isExact, restricted} ) => {
        return (
          isPrivate ?
          <PrivateRoutes key={path} component={component} exact={isExact} path={path} user={user} /> 
          : <PublicRoutes key={path} component={component} exact={isExact} path={path} user={user} />
        );
      })}
    </Switch>
  );

  return (
    <Router>
      <Layout>
        <React.Fragment>
          {renderSwitch()}
        </React.Fragment>
      </Layout>
    </Router>
  );
};

export default App;
