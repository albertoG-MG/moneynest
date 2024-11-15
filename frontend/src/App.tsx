import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import NavbarMenu from './components/Navbar';
import './App.css';

const App: React.FC = () => {
  const [estaAutenticado, setEstaAutenticado] = useState<boolean>(() => {
    return localStorage.getItem('token') !== null;
  });

  return (
    <Router>
      <>
        <NavbarMenu />
        <div className="container relative top-[100px] md:top-[140px] mx-auto px-4 lg:px-10">
          <Routes>
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </div>
      </>
    </Router>
  );
};

export default App;
