import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import RiskRegister from './components/RiskRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/risks" element={<RiskRegister />} />
        <Route path="/create-user" element={<CreateUser />} />

      </Routes>
    </Router>
  );
}

export default App;
