import React from 'react';
import FeedbackForm from '../components/feedback/FeedbackForm';

const AnonymousFeedbackPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Anonymous Feedback</h1>
        <FeedbackForm isAnonymous={true} />
      </div>
    </div>
  );
};

export default AnonymousFeedbackPage;