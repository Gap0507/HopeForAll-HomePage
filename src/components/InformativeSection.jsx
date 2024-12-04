import React, { useState, useEffect } from 'react';
import { Heart, HandHelping, Users } from 'lucide-react';

const InformativeSection = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    {
      icon: HandHelping,
      title: "Our Impact",
      description:
        "Providing essential financial aid to cancer patients for treatments and recovery.",
      details: [
        "Direct support for expenses",
        "Personalized assistance",
        "Partnering with healthcare providers",
      ],
      bgGradient: "from-teal-100 via-teal-50 to-white",
      iconBg: "bg-teal-500/10 text-teal-600",
    },
    {
      icon: Heart,
      title: "Your Compassion Matters",
      description:
        "Every act of kindness, big or small, brings hope to someone in need.",
      details: [
        "Simple ways to give",
        "Complete transparency",
        "A supportive community",
      ],
      bgGradient: "from-pink-100 via-pink-50 to-white",
      iconBg: "bg-pink-500/10 text-pink-600",
    },
    {
      icon: Users,
      title: "Our Shared Mission",
      description:
        "Creating a compassionate space to turn struggles into triumphs.",
      details: [
        "Founded by survivors",
        "Understanding patient needs",
        "Guided by hope and dignity",
      ],
      bgGradient: "from-purple-100 via-purple-50 to-white",
      iconBg: "bg-purple-500/10 text-purple-600",
    },
  ];

  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mobile Layout (Accordion Style)
  const MobileLayout = () => (
    <div className="max-w-4xl mx-auto space-y-6">
      {sections.map((section, index) => (
        <div key={index} className="relative">
          {/* Section Button */}
          <button
            onClick={() => setActiveSection(activeSection === index ? null : index)}
            className={`w-full text-left p-5 rounded-xl transition-all duration-300 ease-in-out 
              ${activeSection === index 
                ? 'bg-white shadow-xl border-teal-500 border-2' 
                : 'bg-white hover:bg-gray-50 shadow-md'}
              flex items-center justify-between`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-4 rounded-full ${section.iconBg}`}>
                <section.icon size={36} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-xl text-gray-800">{section.title}</span>
            </div>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`w-6 h-6 transform transition-transform ${
                activeSection === index ? 'rotate-180' : ''
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Expandable Content */}
          {activeSection === index && (
            <div 
              className={`mt-4 p-6 rounded-xl bg-gradient-to-br ${section.bgGradient} 
                shadow-lg transform origin-top animate-dropdown`}
            >
              <div className="flex justify-center mb-4">
                <div className={`${section.iconBg} p-4 rounded-full`}>
                  <section.icon size={48} strokeWidth={1.5} />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
                {section.title}
              </h3>
              
              <p className="text-gray-700 text-center mb-4 text-base">
                {section.description}
              </p>
              
              <ul className="space-y-3 max-w-2xl mx-auto">
                {section.details.map((detail, detailIndex) => (
                  <li 
                    key={detailIndex} 
                    className="flex items-center space-x-3 bg-white/60 p-2 rounded-xl"
                  >
                    <svg
                      className="w-5 h-5 text-teal-500 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-gray-700 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );

  // Desktop Layout (Side-by-Side)
  const DesktopLayout = () => (
    <div className="max-w-7xl w-full mx-auto grid lg:grid-cols-2 gap-8 items-center">
      {/* Interactive Navigation Column */}
      <div className="space-y-6">
        {sections.map((section, index) => (
          <button
            key={index}
            onClick={() => setActiveSection(index)}
            className={`w-full text-left p-4 rounded-xl transition-all duration-300 ease-in-out transform hover:scale-105 ${
              activeSection === index 
                ? 'bg-teal-500 text-white shadow-lg' 
                : 'bg-white text-gray-800 hover:bg-teal-50 shadow-md'
            }`}
          >
            <div className="flex items-center space-x-4">
              <div className={`p-2 rounded-full ${
                activeSection === index 
                  ? 'bg-white/20' 
                  : 'bg-teal-500/10 text-teal-600'
              }`}>
                <section.icon size={32} strokeWidth={1.5} />
              </div>
              <span className="font-semibold text-lg">{section.title}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Detailed Content Column */}
      {activeSection !== null && (
        <div 
          className={`bg-gradient-to-br ${sections[activeSection].bgGradient} 
            rounded-2xl shadow-xl p-6 relative overflow-hidden`}
        >
          <div className="relative z-10">
            <div className="flex justify-center mb-4">
              <div className={`${sections[activeSection].iconBg} p-4 rounded-full`}>
                {React.createElement(sections[activeSection].icon, {
                  size: 48,
                  strokeWidth: 1.5
                })}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              {sections[activeSection].title}
            </h3>
            
            <p className="text-gray-700 text-center mb-4 text-base">
              {sections[activeSection].description}
            </p>
            
            <ul className="space-y-3">
              {sections[activeSection].details.map((detail, detailIndex) => (
                <li 
                  key={detailIndex} 
                  className="flex items-center space-x-3 bg-white/60 p-2 rounded-xl"
                >
                  <svg
                    className="w-5 h-5 text-teal-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  <span className="text-gray-700 text-sm">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative bg-gradient-to-br from-teal-50 via-gray-100 to-gray-50 py-16 px-6 lg:px-16">
      {/* Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-3">
          Discover <span className="text-teal-500">HopeForAll</span>
        </h2>
        <p className="text-base text-gray-600">
          Compassion, resilience, and unwavering support for those battling cancer.
        </p>
      </div>

      {/* Conditional Layout */}
      {isMobile ? <MobileLayout /> : <DesktopLayout />}

      {/* Closing Note */}
      <div className="text-center mt-12">
        <p className="text-base text-gray-600 max-w-3xl mx-auto">
          Together, we transform uncertainty into hope and healing, one step at a time.
        </p>
      </div>
    </section>
  );
};

export default InformativeSection;