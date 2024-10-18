import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import config from './configs/config';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    // Fetch current user
    axios.get(`${config.baseUrl}/auth/currentuser`, {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    })
      .then((response) => {
        if (response.status === 200 && response.data) {
          setIsAuthenticated(true); // User is authenticated
        } else {
          setIsAuthenticated(false); // Not authenticated
        }
      })
      .catch((error) => {
        console.error('Error fetching current user:', error);
        setIsAuthenticated(false); // Handle error
      })
      .finally(() => {
        setIsLoading(false); // Set loading to false after the check is complete
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected Routes */}
        <Route
          path="/*"
          element={
            // <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
