import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, HandHelping, Globe, Rocket } from 'lucide-react';
import { useRef } from 'react';

const VolunteerSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const collaborationOptions = [
    {
      icon: HandHelping,
      title: "Volunteer Opportunities",
      description: "Join our mission and make a real difference in cancer patients' lives.",
      details: [
        "Direct patient support",
        "Community awareness programs",
        "Fundraising initiatives"
      ],
      bgGradient: "from-teal-100 via-teal-50 to-white",
      iconBg: "bg-teal-500/10 text-teal-600"
    },
    {
      icon: Globe,
      title: "Community Partnerships",
      description: "Collaborate with us to expand our reach and impact.",
      details: [
        "Corporate sponsorships",
        "Healthcare network collaborations",
        "Educational institution partnerships"
      ],
      bgGradient: "from-purple-100 via-purple-50 to-white",
      iconBg: "bg-purple-500/10 text-purple-600"
    },
    {
      icon: Users,
      title: "Skill-Based Contributions",
      description: "Leverage your expertise to support our mission.",
      details: [
        "Medical professionals",
        "Marketing and communication",
        "Fundraising and grant writing"
      ],
      bgGradient: "from-pink-100 via-pink-50 to-white",
      iconBg: "bg-pink-500/10 text-pink-600"
    }
  ];

  // Section header animation
  const headerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut"
      }
    }
  };

  // Card animation
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.6,
        type: "spring",
        stiffness: 100
      }
    })
  };

  return (
    <section 
      ref={ref}
      className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 lg:px-16 overflow-hidden"
    >
      {/* Background Design */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Section Header */}
      <motion.div 
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-center mb-12 max-w-3xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          <span className="text-teal-500">Join Our Mission</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Together, we can create meaningful change and support those battling cancer.
        </p>
      </motion.div>

      {/* Collaboration Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {collaborationOptions.map((option, index) => (
          <motion.div 
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            className="bg-gradient-to-br rounded-2xl shadow-xl p-6 relative overflow-hidden"
          >
            <motion.div 
              className="flex justify-center mb-4"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <div className={`${option.iconBg} p-4 rounded-full`}>
                <option.icon size={48} strokeWidth={1.5} />
              </div>
            </motion.div>
            
            <h3 className="text-2xl font-bold text-gray-800 text-center mb-3">
              {option.title}
            </h3>
            
            <p className="text-gray-700 text-center mb-4 text-base">
              {option.description}
            </p>
            
            <ul className="space-y-3 text-center">
              {option.details.map((detail, detailIndex) => (
                <motion.li 
                  key={detailIndex} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: detailIndex * 0.1 }}
                  className="flex items-center justify-center space-x-3"
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
                </motion.li>
              ))}
            </ul>

            <div className="text-center mt-6">
              <motion.a 
                href="/get-involved" 
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: '#059669' 
                }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-teal-500 text-white px-8 py-3 rounded-full hover:bg-teal-600 transition-colors"
              >
                Learn More
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing Encouragement */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="text-center mt-16"
      >
        <p className="text-lg text-gray-600 max-w-4xl mx-auto flex items-center justify-center">
          <Rocket className="mr-3 text-teal-500" />
          Your support can transform lives and bring hope to those in need.
        </p>
      </motion.div>
    </section>
  );
};

export default VolunteerSection;