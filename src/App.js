// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import AnonymousFeedbackPage from './pages/AnonymousFeedbackPage';
import PublicFeedbackPage from './pages/PublicFeedbackPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <AnimatePresence>
          <Switch>
            <Route exact path="/">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <HomePage />
              </motion.div>
            </Route>
            <Route path="/feedback/anonymous">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <AnonymousFeedbackPage />
              </motion.div>
            </Route>
            <Route path="/feedback/public">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <PublicFeedbackPage />
              </motion.div>
            </Route>
            {/* Add routes for other pages */}
          </Switch>
        </AnimatePresence>
      </div>
    </Router>
  );
};

export default App;
