import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
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
        <Routes>
          <Route path="/" element={<div>Página de Dashboard</div>} />
        </Routes>
      </>
    </Router>
  );
};

export default App;
