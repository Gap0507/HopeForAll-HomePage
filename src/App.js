import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetHelpPage from './pages/GetHelpPage';
import InsightsPage from './pages/InsightsPage';
import DonatePage from './pages/DonatePage';

function App() {
  return (
    <Router basename="/">
      {/* Navbar is now outside of Routes to remain consistent across pages */}
      <Navbar />

      {/* Add padding to the top of the main content to account for fixed navbar */}
      <div className="pt-16 mt-3"> {/* Adjust pt-20 based on actual navbar height */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* About Routes */}
            <Route path="/about">
              <Route path="why-cancer" element={<AboutPage section="why-cancer" />} />
              <Route path="governance" element={<AboutPage section="governance" />} />
            </Route>

            {/* Understanding Cancer Routes */}
            <Route path="/understanding">
              <Route path="what-is-cancer" element={<AboutPage section="what-is-cancer" />} />
              <Route path="signs-symptoms" element={<AboutPage section="signs-symptoms" />} />
            </Route>

            {/* Get Involved Routes */}
            <Route path="/get-involved">
              <Route path="volunteers" element={<AboutPage section="volunteers" />} />
              <Route path="collaborate" element={<AboutPage section="collaborate" />} />
              <Route path="contact" element={<AboutPage section="contact" />} />
            </Route>

            {/* Other Main Routes */}
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/get-help" element={<GetHelpPage />} />
            <Route path="/donate" element={<DonatePage />} />

            {/* Redirect to Homepage for any undefined routes */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;