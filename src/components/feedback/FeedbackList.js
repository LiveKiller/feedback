import React, { useContext } from 'react';
import { FeedbackContext } from '../../contexts/FeedbackContext';
import FeedbackItem from './FeedbackItem';

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Feedback</h2>
      {feedback.length === 0 ? (
        <p>No feedback submitted yet.</p>
      ) : (
        <ul>
          {feedback.map((item) => (
            <FeedbackItem key={item.id} item={item} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FeedbackList;