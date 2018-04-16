import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Map from './compoments/Map';
// import Graph from './compoments/Graph';
// import Table from './compoments/Table';
import Content from './Content';
import Home from './Home';
import './App.css';

const App = () => (
  <Content>
    <Switch>
      <Route exact path="/ref" component={Home} />
      <Route exact path="/" component={Home} />
    </Switch>
  </Content>
);

export default App;
