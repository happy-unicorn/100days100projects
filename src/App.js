import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import RootPage from './RootPage';
import StepsProgressBarPage from './steps-progress-bar';
import SpinnersPage from './spinners';
import WatchingCardPage from './3d-watching-card';
import ColorPickerPage from './color-picker';
import SliderPage from './slider';
import HalloweenPage from './halloween';
import ParticlesPage from './particles';
import ParticlesButtonsPage from './particles-buttons';
import SnowPage from './snow';
import RGBEffectsPage from './rgb-effects';
import NeoGeneratorPage from './neo-generator';

const App = () => {
  return (
      <Switch>
          <Route component={RootPage} path="/" exact/>
          <Route component={StepsProgressBarPage} path="/steps-progress-bar" exact/>
          <Route component={SpinnersPage} path="/spinners" exact/>
          <Route component={WatchingCardPage} path="/3d-watching-card" exact/>
          <Route component={ColorPickerPage} path="/color-picker" exact/>
          <Route component={SliderPage} path="/slider" exact/>
          <Route component={HalloweenPage} path="/halloween" exact/>
          <Route component={ParticlesPage} path="/particles" exact/>
          <Route component={ParticlesButtonsPage} path="/particles-buttons" exact/>
          <Route component={SnowPage} path="/snow" exact/>
          <Route component={RGBEffectsPage} path="/rgb-effects" exact/>
          <Route component={NeoGeneratorPage} path="/neo-generator" exact/>
          <Redirect to="/"/>
      </Switch>
  );
};

export default App;
