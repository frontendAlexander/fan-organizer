import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from './routes';



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
      <React.Fragment>
          {renderSwitch()}
      </React.Fragment>
    </Router>
  );
};

export default App;
