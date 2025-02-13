import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Register from "./pages/Register"
import Dashboard from "./pages/Dashboard"

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
