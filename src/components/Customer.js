import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaToggleOn, FaToggleOff } from 'react-icons/fa';

const Customer = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://rent-x-backend-nine.vercel.app/users/', {
          withCredentials: true,
        });
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching users:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const handleBlockToggle = async (userId, isBlocked) => {
    try {
      await axios.put(
        `https://rent-x-backend-nine.vercel.app/users/${userId}`,
        { isBlocked: !isBlocked }, // Only send isBlocked property
        { withCredentials: true }
      );
      // Update state after successful toggle
      setUsers(users.map(user => (user._id === userId ? { ...user, isBlocked: !isBlocked } : user)));
    } catch (error) {
      console.error('Error toggling block status:', error);
    }
  };
  

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Avatar</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Name</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Email</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Mobile Number</th>
              <th className="px-6 py-3 border-b-2 text-left text-gray-600">Block/Unblock</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="border-b">
                <td className="px-6 py-4">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="w-12 h-12 rounded-full"
                  />
                </td>
                <td className="px-6 py-4">{user.name}</td>
                <td className="px-6 py-4">{user.email}</td>
                <td className="px-6 py-4">{user.mobileNumber}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleBlockToggle(user._id, user.isBlocked)}
                    className={`px-4 py-2 rounded-md text-white flex items-center ${
                      user.isBlocked ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                    }`}
                  >
                    {user.isBlocked ? (
                      <>
                        <FaToggleOff className="mr-2" /> Unblock
                      </>
                    ) : (
                      <>
                        <FaToggleOn className="mr-2" /> Block
                      </>
                    )}
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

export default Customer;
