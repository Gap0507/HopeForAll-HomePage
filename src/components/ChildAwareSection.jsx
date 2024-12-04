import React from 'react';
import { Rocket } from 'lucide-react';
import childawareness from '../assets/childawareness.png';
const ChildhoodCancerSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20 px-6 lg:px-16 overflow-hidden bg-cover bg-center min-h-screen flex flex-col justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: `url(${childawareness})`, backgroundSize: 'cover' }}></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <h2 className="text-4xl font-bold mb-6">
          Empowering Children, Restoring Hope
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-3xl">
          At HopeForAll, we believe every child deserves the chance to live a healthy, fulfilling life. India is home to 20% of the global childhood cancer cases, with nearly 75,000 children battling this devastating disease each year. Our mission is to ensure these young fighters have access to the care and support they need to overcome their challenges and thrive.
        </p>
        <div className="flex items-center space-x-4">
          <Rocket className="text-teal-500 h-8 w-8" />
          <p className="text-teal-500 font-medium">
            Giving every child the foundation to build a brighter future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ChildhoodCancerSection;
