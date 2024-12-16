import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminSignup from './Components/AdminSignup';
import Login from './Components/AdminLogin';
import Dashboard from './Components/Dashboard';

 

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path='' element={<AdminSignup/>}></Route>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path='/signup' element={<AdminSignup/>}></Route>  
        </Routes>
       </Router>
    </>
  )
}

export default App;
