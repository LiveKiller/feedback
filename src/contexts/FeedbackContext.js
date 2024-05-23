import React, { createContext, useState } from 'react';

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const addFeedback = (newFeedback) => {
    setFeedback([...feedback, newFeedback]);
  };

  const removeFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  const feedbackContextValue = {
    feedback,
    addFeedback,
    removeFeedback,
  };

  return (
    <FeedbackContext.Provider value={feedbackContextValue}>
      {children}
    </FeedbackContext.Provider>
  );
};