import React, { useContext } from 'react';
import { FeedbackContext } from '../../contexts/FeedbackContext';

const FeedbackItem = ({ item }) => {
  const { removeFeedback } = useContext(FeedbackContext);

  const handleRemove = () => {
    removeFeedback(item.id);
  };

  return (
    <li className="bg-gray-100 rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-800 font-bold">{item.name}</p>
          <p className="text-gray-600">{item.feedback}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default FeedbackItem;