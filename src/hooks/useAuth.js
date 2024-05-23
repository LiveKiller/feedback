import { useState } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Implement login logic here
    setIsAuthenticated(true);
    setUser(userData);
  };

  const logout = () => {
    // Implement logout logic here
    setIsAuthenticated(false);
    setUser(null);
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
};

export default useAuth;