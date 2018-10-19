import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';
import Layout from './hoc/Layout';



const App = () => {
  const renderSwitch = () => (
    <Switch>
      {routes.map(route => {
        const component = route.component;
        return (
          <Route
            key={route.path}
            exact={route.isExact}
            path={route.path}
            component={component}
            
          />
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
