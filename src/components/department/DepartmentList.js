import React from 'react';
import DepartmentCard from './DepartmentCard';

const DepartmentList = () => {
  const departments = [
    {
      id: 1,
      name: 'Department 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Department 2',
      description: 'Suspendisse ut sapien vel nunc auctor laoreet.',
    },
    // Add more departments as needed
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Departments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {departments.map((department) => (
          <DepartmentCard key={department.id} department={department} />
        ))}
      </div>
    </div>
  );
};

export default DepartmentList;