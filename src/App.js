import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './pages/HomePage';
import AnonymousFeedbackPage from './pages/AnonymousFeedbackPage';
import PublicFeedbackPage from './pages/PublicFeedbackPage';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/feedback/anonymous">
            <AnonymousFeedbackPage />
          </Route>
          <Route path="/feedback/public">
            <PublicFeedbackPage />
          </Route>
          {/* Add routes for other pages */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;