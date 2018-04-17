import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Content from './Content';
import Home from './Home';

/**
 * Set react router.
 */
const App = () => (
  <Content>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Content>
);

export default App;
