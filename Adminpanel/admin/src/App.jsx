import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AdminSignup from './Components/AdminSignup';
 

function App() {

  return (
    <>
       <Router>
        <Routes>
          <Route path='' element={<AdminSignup/>}></Route>
        </Routes>
       </Router>
    </>
  )
}

export default App;
