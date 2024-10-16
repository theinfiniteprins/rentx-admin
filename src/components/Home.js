import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Customer from './Customer';
import Property from './Property';
import Facilities from './Facilities';
import Categories from './Categories';

const Home = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Right Content */}
      <div className="flex-grow bg-f7f7f7 p-6 ml-20">
        <Routes>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="customer" element={<Customer />} />
          <Route path="property" element={<Property />} />
          <Route path="facilities" element={<Facilities />} />
          <Route path="categories" element={<Categories />} />
          {/* Default redirect to dashboard */}
          <Route path="*" element={<Navigate to="dashboard" />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
