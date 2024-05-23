import React from 'react';
import { useParams } from 'react-router-dom';

const DepartmentPage = () => {
  const { id } = useParams();
  const departmentName = id.replace('-', ' ');

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-4">{departmentName}</h1>
        {/* Add department-specific content here */}
      </div>
    </div>
  );
};

export default DepartmentPage;