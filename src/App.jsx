import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Error404 from './pages/Error404'

const App = props => {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
  </BrowserRouter>
}

export default App