

import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import Serviceitems from './components/Serviceitems'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import BlogState from './context/blogs/BlogState'
import Counter from './components/Reduce'
import Form from './components/Reduce'
import CartItems from './components/cartItems'
import Login from './components/Login'
import Signup from './components/Signup'
import Services from './components/Services'
import ContactUs from './components/ContactUs'
import Menu from './components/Menu'
import Testimonials from './components/Testimonials'
import Addproduct from './components/Addproduct'
import Gallery from './components/Gallery'


function App() {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log('API Key:', apiKey);

  const [mode, setMode] = useState('light')
  const [text, setButtonText] = useState('Enable Dark')
  const [alert, setAlert] = useState(null)

  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      setButtonText('Enable light')
      showAlert('success', 'your dark mode has been enabled')
    }
    else {
      setMode('light')
      setButtonText('Enable dark')
      showAlert('success', 'your light mode has been enabled')
    }
  }
  return (
    <>
    <BlogState apiKey={apiKey}>
      <Router>
        <Navbar mode={mode} text={text} toggleMode={toggleMode} />
        <Alert alert={alert} showAlert={showAlert} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs' element={<Serviceitems apiKey={apiKey} />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/reduce' element={<Form />} />
          <Route path='/cartitems' element={<CartItems/>} />
          <Route path='/login' element={<Login alert={alert} showAlert={showAlert}/>} />
          <Route path='/signup' element={<Signup alert={alert} showAlert={showAlert}/>} />
          <Route path='/menu' element={<Menu/>} />
          <Route path='/testimonials' element={<Testimonials/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/addproduct' element={<Addproduct alert={alert} showAlert={showAlert}/>} />
          
          <Route path="/menu" element={<Menu />} />
        
        
        </Routes>
      </Router>
    </BlogState>
    </>
  )
}

export default App
