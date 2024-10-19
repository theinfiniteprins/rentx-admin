import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTrash } from 'react-icons/fa';

const Property = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const response = await axios.get('https://rent-x-backend-nine.vercel.app/properties/', {
          withCredentials: true,
        });
        setProperties(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching properties:', error);
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const handleDelete = async (propertyId) => {
    try {
      await axios.delete(`https://rent-x-backend-nine.vercel.app/properties/${propertyId}`, {
        withCredentials: true,
      });
      // Update state after successful deletion
      setProperties(properties.filter(property => property._id !== propertyId));
    } catch (error) {
      console.error('Error deleting property:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Properties</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Image</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Title</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Category</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Monthly Rent</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">City</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {properties.map(property => (
              <tr key={property._id} className="border-b">
                <td className="px-6 py-4">
                  <img
                    src={property.images[0]}
                    alt={property.title}
                    className="w-40 h-20 rounded-md"
                  />
                </td>
                <td className="px-6 py-4">{property.title}</td>
                <td className="px-6 py-4">{property.category.name}</td>
                <td className="px-6 py-4">{property.monthlyRent}</td>
                <td className="px-6 py-4">{property.city}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleDelete(property._id)}
                    className="px-4 py-2 rounded-md text-white bg-red-500 hover:bg-red-600 flex items-center"
                  >
                    <FaTrash className="mr-2" /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Property;
