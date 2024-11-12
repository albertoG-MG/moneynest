import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

const App: React.FC = () => {
  const [estaAutenticado, setEstaAutenticado] = useState<boolean>(() => {
    return localStorage.getItem('token') !== null;
  });

  return (
    <Router>
      {estaAutenticado ? (
        <Routes>
          <Route path="/dashboard" element={<div>Página principal autenticada</div>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Navigate to="/login" />} />
          <Route path="/" element={<div>Página de Home</div>} />
          <Route path="/login" element={<div>Página de Login</div>} />
        </Routes>
      )}
    </Router>
  );
};

export default App;
