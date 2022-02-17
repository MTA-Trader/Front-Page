import './App.css'

import React from 'react'

import NavBar from './components/NavBar'
import Router from './Router'

const App = props => {
  return <>
    <NavBar />
    <Router />
  </>
}

export default App