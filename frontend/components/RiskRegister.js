import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RiskRegister = () => {
  const [risks, setRisks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    axios.get(`${process.env.REACT_APP_API_URL}/api/risks/`, {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(response => setRisks(response.data))
    .catch(error => console.error("Error loading risks", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Risk Register</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Likelihood</th>
            <th className="border p-2">Impact</th>
            <th className="border p-2">Score</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {risks.map(risk => (
            <tr key={risk.id}>
              <td className="border p-2">{risk.name}</td>
              <td className="border p-2">{risk.likelihood}</td>
              <td className="border p-2">{risk.impact}</td>
              <td className="border p-2">{risk.risk_score}</td>
              <td className="border p-2">{risk.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RiskRegister;
