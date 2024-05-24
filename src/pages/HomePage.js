// HomePage.js
import React from 'react';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      className="p-4"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold">Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
    </motion.div>
  );
};

export default HomePage;
