import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

const submitAnonymousFeedback = async (feedback) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/feedback/anonymous`, { feedback });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const submitPublicFeedback = async (feedback, name, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/feedback/public`, { feedback, name, email });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { submitAnonymousFeedback, submitPublicFeedback };