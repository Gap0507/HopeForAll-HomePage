import React from 'react';
import HeroSection from '../components/HeroSection';
import InformativeSection from '../components/InformativeSection';
import ChildhoodCancerSection from '../components/ChildAwareSection';
import CancerFocusSection from '../components/KeyFocusArea';
import ArticlesSection from '../components/ArticlesSection';
import VolunteerSection from '../components/VolunteerSection';
import Footer from '../components/Footer';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
        <HeroSection/>

        <InformativeSection/>

        <ChildhoodCancerSection/>

        <CancerFocusSection/>

        <ArticlesSection/>

        <VolunteerSection/>

        <Footer/>
 

      {/* Impact Statistics */}
    </div>
  );
};

export default Homepage;