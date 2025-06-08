import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">RMF Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <Link to="/risks" className="bg-blue-500 text-white p-4 rounded shadow hover:bg-blue-600">
          View Risk Register
        </Link>
        <a
          href={`${process.env.REACT_APP_API_URL}/generate-risk-report/`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-4 rounded shadow hover:bg-green-600"
        >
          Download Risk Report (PDF)
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
