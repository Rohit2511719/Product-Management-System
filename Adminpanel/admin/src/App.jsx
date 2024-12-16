import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminSignup from './Components/AdminSignup';
import Login from './Components/AdminLogin';

 

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path='' element={<AdminSignup/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<h1>Welcome to Admin Dashboard</h1>} />
          <Route path='/signup' element={<AdminSignup/>}></Route>  
        </Routes>
       </Router>
    </>
  )
}

export default App;
