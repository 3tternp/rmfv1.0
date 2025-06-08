import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/token/`,
        {
          username: email,
          password: password
        }
      );
      localStorage.setItem('token', response.data.access);
      alert("Login successful");
      window.location.href = '/dashboard';
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">RMF Login</h2>
        <input
          className="w-full mb-3 p-2 border rounded"
          type="text"
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
        />
        <input
          className="w-full mb-4 p-2 border rounded"
          type="password"
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
