import React, { useState } from 'react';
import { FaUserCircle, FaHome, FaClipboardList, FaMapMarkerAlt, FaBuilding, FaSlidersH } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');
  const navigate = useNavigate();

  const handleSignout = () => {
    // Clear cookies and localStorage/sessionStorage on signout
    document.cookie = 'isLogged=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    navigate('/login'); // Redirect to login page
  };

  return (
    <div className="flex flex-col justify-between h-screen bg-white w-64 text-teal-600 shadow-lg relative">
      {/* Profile Icon - Signout at the top right */}
      <div className="absolute top-4 right-4">
        <FaUserCircle
          size={40}
          className="text-black hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={handleSignout}
        />
      </div>

      {/* Logo */}
      <div className="flex justify-center items-center py-8">
        <img
          src="/images/logo.jpg"
          alt="Logo"
          className="w-20 h-auto rounded-full shadow-lg border-2 border-gray-300"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-grow flex flex-col items-center justify-center">
        <ul className="space-y-4 text-xl font-semibold w-full">
          {/* Dashboard */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'dashboard' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('dashboard');
                navigate('/home/dashboard');
              }}
            >
              <span className="text-4xl">
                <FaHome />
              </span>
              <span className="font-semibold">Dashboard</span>
            </button>
          </li>

          {/* Customer */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'customer' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('customer');
                navigate('/home/customer');
              }}
            >
              <span className="text-4xl">
                <FaClipboardList />
              </span>
              <span className="font-semibold">Customer</span>
            </button>
          </li>

          {/* Property */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'property' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('property');
                navigate('/home/property');
              }}
            >
              <span className="text-4xl">
                <FaBuilding />
              </span>
              <span className="font-semibold">Property</span>
            </button>
          </li>

          {/* Facilities */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'facilities' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('facilities');
                navigate('/home/facilities');
              }}
            >
              <span className="text-4xl">
                <FaMapMarkerAlt />
              </span>
              <span className="font-semibold">Facilities</span>
            </button>
          </li>

          {/* Categories */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'categories' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('categories');
                navigate('/home/categories');
              }}
            >
              <span className="text-4xl">
                <FaClipboardList />
              </span>
              <span className="font-semibold">Categories</span>
            </button>
          </li>

          {/* Slider */}
          <li className="text-center w-full">
            <button
              className={`flex items-center justify-start space-x-4 py-4 transition-all duration-300 rounded-lg w-full ${
                selectedItem === 'slider' ? 'bg-teal-300 text-white' : 'hover:bg-teal-300 text-teal-600'
              }`}
              onClick={() => {
                setSelectedItem('slider');
                navigate('/home/slider');
              }}
            >
              <span className="text-4xl">
                <FaSlidersH />
              </span>
              <span className="font-semibold">Slider</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
