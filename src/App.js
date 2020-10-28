import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RootPage from './RootPage';
import StepsProgressBarPage from './steps-progress-bar';
import SpinnersPage from './spinners';
import WatchingCardPage from './3d-watching-card';

const App = () => {
  return (
      <Switch>
          <Route component={RootPage} path="/" exact/>
          <Route component={StepsProgressBarPage} path="/steps-progress-bar" exact/>
          <Route component={SpinnersPage} path="/spinners" exact/>
          <Route component={WatchingCardPage} path="/3d-watching-card" exact/>
          <Redirect to="/"/>
      </Switch>
  );
};

export default App;
