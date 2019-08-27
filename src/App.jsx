import React from 'react';
import './styling/App.css';

import { ParallaxProvider } from 'react-scroll-parallax';

import LandingPage from './landingpage';

function App() {
  return (
    <ParallaxProvider>
      <LandingPage />
    </ParallaxProvider>
  );
}

export default App;
