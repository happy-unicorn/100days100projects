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
import BeautifulInputPage from './beautiful-input';
import ImageSliderPage from './image-slider';
import PulsePage from './pulse';
import GlovingPage from './gloving-dot';
import NeoGeneratorPage from './neu-generator';
import FlipPage from './flip';
import HexagonMenuPage from './hexagon-menu';
import HexagonGridPage from './hexagon-grid';
import GlovingHexagonPage from './gloving-hexagon';
import GlassmorphismGeneratorPage from './glassmorphism-generator';
import NeumorphismGeneratorPage from './neu-generator';

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
          <Route component={BeautifulInputPage} path="/beautiful-input" exact/>
          <Route component={ImageSliderPage} path="/image-slider" exact/>
          <Route component={PulsePage} path="/pulse" exact/>
          <Route component={GlovingPage} path="/gloving-dot" exact/>
          <Route component={NeoGeneratorPage} path="/neo-generator" exact/>
          <Route component={FlipPage} path="/flip" exact/>
          <Route component={HexagonMenuPage} path="/hexagon-menu" exact/>
          <Route component={HexagonGridPage} path="/hexagon-grid" exact/>
          <Route component={GlovingHexagonPage} path="/gloving-hexagon" exact/>
          <Route component={GlassmorphismGeneratorPage} path="/glassmorphism-generator" exact/>
          <Route component={NeumorphismGeneratorPage} path="/neu-generator" exact/>
          <Redirect to="/"/>
      </Switch>
  );
};

export default App;
