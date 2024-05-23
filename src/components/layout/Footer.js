import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-gray-400">
            &copy; {new Date().getFullYear()} Feedback Website
          </div>
          <div className="text-gray-400">
            <a href="#" className="hover:text-gray-300">
              Privacy Policy
            </a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;