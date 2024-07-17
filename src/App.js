import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'; 
import TPLogin from './components/TP/TPLogin'; 
import MoverLogin from './components/Movers/MoverLogin';
import Dashboard from './components/Movers/Dashboard'; 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/TPLogin" element={<TPLogin />} />
          <Route path="/MoverLogin" element={<MoverLogin />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
