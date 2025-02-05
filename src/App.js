import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import GetHelpPage from './pages/GetHelpPage';
import InsightsPage from './pages/InsightsPage';
import DonatePage from './pages/DonatePage';
import WhyCancerPage from './pages/WhyCancer';
import GovernanceSection from './pages/GovernancePage';
import WhatIsCancerPage from './pages/WhatIsCancerPage';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import SignsSymptomPage from './pages/SignsSymptoms';
import VolunteersPage from './pages/VolunteersPage';
function App() {
  return (
    <Router basename="/">
      {/* Navbar is now outside of Routes to remain consistent across pages */}
      <Navbar />
      <ScrollToTop /> {/* This ensures scroll position resets on route change */}

      {/* Add padding to the top of the main content to account for fixed navbar */}
      <div className="pt-16 mt-3"> {/* Adjust pt-20 based on actual navbar height */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<HomePage />} />

            {/* About Routes */}
            <Route path="/about">
              <Route path="why-cancer" element={<WhyCancerPage section="why-cancer" />} />
              <Route path="governance" element={<GovernanceSection section="governance" />} />
            </Route>

            {/* Understanding Cancer Routes */}
            <Route path="/understanding">
              <Route path="what-is-cancer" element={<WhatIsCancerPage section="what-is-cancer" />} />
              <Route path="signs-symptoms" element={<SignsSymptomPage section="signs-symptoms" />} />
            </Route>

            {/* Get Involved Routes */}
            <Route path="/get-involved">
              <Route path="volunteers" element={<VolunteersPage section="volunteers" />} />
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

      <Footer/>
      
    </Router>
  );
}

export default App;