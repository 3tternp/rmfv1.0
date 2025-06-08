import React, { useState } from 'react';
import axios from 'axios';

const CreateUser = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Risk Officer');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleCreateUser = async () => {
    setMessage('');
    setError('');
    const token = localStorage.getItem('token');

    if (!token) {
      setError('You must be logged in as an Admin.');
      return;
    }

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/create-user/`,
        {
          email,
          password,
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage(`✅ ${response.data.message}`);
      setEmail('');
      setPassword('');
      setRole('Risk Officer');
    } catch (err) {
      const msg = err.response?.data?.error || 'Something went wrong';
      setError(`❌ ${msg}`);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Create Risk Officer / Auditor</h2>
      
      {message && <div className="bg-green-100 text-green-800 p-2 mb-4 rounded">{message}</div>}
      {error && <div className="bg-red-100 text-red-800 p-2 mb-4 rounded">{error}</div>}

      <input
        className="w-full p-2 border mb-3 rounded"
        type="email"
        placeholder="User email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="w-full p-2 border mb-3 rounded"
        type="password"
        placeholder="Temporary password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <select
        className="w-full p-2 border mb-4 rounded"
        value={role}
        onChange={e => setRole(e.target.value)}
      >
        <option value="Risk Officer">Risk Officer</option>
        <option value="Auditor">Auditor</option>
      </select>

      <button
        className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        onClick={handleCreateUser}
      >
        Create User
      </button>
    </div>
  );
};

export default CreateUser;
