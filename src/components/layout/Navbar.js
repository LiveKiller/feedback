// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav
      className="bg-gray-800 text-white p-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/feedback/anonymous" className="hover:text-gray-400">Anonymous Feedback</Link>
        </li>
        <li>
          <Link to="/feedback/public" className="hover:text-gray-400">Public Feedback</Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </motion.nav>
  );
};

export default Navbar;
