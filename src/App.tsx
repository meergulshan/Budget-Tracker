import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sign from './pages/Authentications/Signin/Sign'
import Signup from './pages/Authentications/SignUp/Signup';
import Reset from './pages/Authentications/Reset/ResetPassword';
import HomePage from './pages/Authentications/HomePage/HomePage';
function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Sign/>} />
        <Route path='/Signup' element={<Signup/>} />
        <Route path='/Sign' element={<Sign/>} />
        <Route path='/reset' element={<Reset/>} />
        <Route path='/HomePage' element={<HomePage/>} />

        

      </Routes>
    </Router>
  )
}

export default App
