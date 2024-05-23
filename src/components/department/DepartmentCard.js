import React from 'react';
import { Link } from 'react-router-dom';

const DepartmentCard = ({ department }) => {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h3 className="text-lg font-bold mb-2">{department.name}</h3>
      <p className="text-gray-600 mb-4">{department.description}</p>
      <Link
        to={`/department/${department.id}`}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View
      </Link>
    </div>
  );
};

export default DepartmentCard;