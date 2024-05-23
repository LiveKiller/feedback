import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
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

  const authContextValue = {
    isAuthenticated,
    user,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};