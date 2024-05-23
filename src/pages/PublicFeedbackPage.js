import React from 'react';
import FeedbackForm from '../components/feedback/FeedbackForm';

const PublicFeedbackPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center">Public Feedback</h1>
        <FeedbackForm isAnonymous={false} />
      </div>
    </div>
  );
};

export default PublicFeedbackPage;