import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Layout from './hoc/Layout';
import PrivateRoute from './containers/PrivateRoute';


const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(({path, component, isPrivate, isExact}) => {
        return (
          isPrivate ?
          <PrivateRoute key={path} component={component} exact={isExact} path={path} />
          : <Route key={path} component={component} exact={isExact} path={path}/>
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
