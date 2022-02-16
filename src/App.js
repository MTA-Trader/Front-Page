import './App.css'

import React from 'react'

import NavBar from './NavBar'
import Footer from './Footer'
import Router from './Router'

const App = props => {
  return <>
    <NavBar />
    <Router />
    <Footer />
  </>
}

export default App