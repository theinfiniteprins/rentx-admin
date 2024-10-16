import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';

import './App.css';

// Helper function to check if a cookie exists
const getCookie = (cookieName) => {
  const name = cookieName + "=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookieArray = decodedCookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    let cookie = cookieArray[i].trim();
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return "";
};

const App = () => {
  const isLoggedIn = getCookie('isLogged'); // Check if 'isLogged' cookie exists

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        
        <Route path="/register" element={<Register />} />
        <Route
          path="/home/*"
          element={isLoggedIn ? <Home /> : <Navigate to="/login" />} // Redirect to login if not logged in
        />
        <Route path="/" element={<Navigate to={isLoggedIn ? '/home' : '/login'} />} />
      </Routes>
    </Router>
  );
};

export default App;
