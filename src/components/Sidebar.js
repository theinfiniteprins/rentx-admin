import React, { useState } from 'react';
import { FaUserCircle, FaHome, FaClipboardList, FaMapMarkerAlt, FaBuilding, FaSlidersH } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import config from '../configs/config';

const Sidebar = () => {
  const location = useLocation(); // Get current URL
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      const response = await fetch(`${config.baseUrl}/auth/signout`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        document.cookie = "isLogged=; path=/; max-age=0; SameSite=Strict";
        navigate('/login');
      } else {
        console.error('Failed to log out');
      }
    } catch (error) {
      console.error('Error during sign out:', error);
    }
  };

  const isSelected = (path) => location.pathname === path; // Check if the current path matches

  return (
    <div className="flex flex-col justify-between h-screen bg-white w-64 text-teal-600 shadow-lg relative">
      <div className="absolute top-4 right-4">
        <FaUserCircle
          size={40}
          className="text-black hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={handleSignout}
        />
      </div>

      <div className="flex justify-center items-center py-8">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="w-20 h-auto rounded-full shadow-lg border-2 border-gray-300"
        />
      </div>

      <nav className="flex-grow flex flex-col items-center justify-center">
        <ul className="space-y-4 text-xl font-semibold w-full">
          {/* Dashboard */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/dashboard') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/dashboard')}
            >
              <FaHome size={24} />
              <span>Dashboard</span>
            </button>
          </li>

          {/* Customer */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/customers') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/customers')}
            >
              <FaClipboardList size={24} />
              <span>Customer</span>
            </button>
          </li>

          {/* Property */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/property') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/property')}
            >
              <FaBuilding size={24} />
              <span>Property</span>
            </button>
          </li>

          {/* Facilities */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/facilities') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/facilities')}
            >
              <FaMapMarkerAlt size={24} />
              <span>Facilities</span>
            </button>
          </li>

          {/* Categories */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/categories') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/categories')}
            >
              <FaClipboardList size={24} />
              <span>Categories</span>
            </button>
          </li>

          {/* Slider */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${isSelected('/slider') ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'}`}
              onClick={() => navigate('/slider')}
            >
              <FaSlidersH size={24} />
              <span>Slider</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
