import React, { Component } from 'react'
import './styling/App.css'

import { ParallaxProvider } from 'react-scroll-parallax'

import LandingPage from './landingpage'

class App extends Component {
  render () {
    return (
      <ParallaxProvider>
        <LandingPage />
      </ParallaxProvider>
    )
  }
}

export default App
