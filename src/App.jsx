import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Error404 from './pages/Error404'
import ToastContainerContainer from './ToastContainerContainer'

const App = props => {
  return <BrowserRouter>
    <NavBar />
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/contact' element={<Contact />} />
      <Route path='*' element={<Error404 />} />
    </Routes>
    <ToastContainerContainer />
  </BrowserRouter>
}

export default App