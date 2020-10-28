import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RootPage from './RootPage';
import StepsProgressBarPage from './steps-progress-bar';
import SpinnersPage from './spinners';
import WatchingCardPage from './3d-watching-card';
import ColorPickerPage from './color-picker';

const App = () => {
  return (
      <Switch>
          <Route component={RootPage} path="/" exact/>
          <Route component={StepsProgressBarPage} path="/steps-progress-bar" exact/>
          <Route component={SpinnersPage} path="/spinners" exact/>
          <Route component={WatchingCardPage} path="/3d-watching-card" exact/>
          <Route component={ColorPickerPage} path="/color-picker" exact/>
          <Redirect to="/"/>
      </Switch>
  );
};

export default App;
