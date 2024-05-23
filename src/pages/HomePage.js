import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-green-200 flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <div className="flex justify-center mb-6">
          <Link
            to="/feedback/anonymous"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Anonymous
          </Link>
          <Link
            to="/feedback/public"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Public Opinion
          </Link>
        </div>
        {/* Add additional content or components here */}
      </div>
    </div>
  );
};

export default HomePage;