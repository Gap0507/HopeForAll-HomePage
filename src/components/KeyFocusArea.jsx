import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Ribbon, Activity, HeartPulse } from 'lucide-react';
import { useRef } from 'react';

const InnovativeCancerFocusSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cancerFoci = [
    {
      icon: HeartPulse,
      title: "Breast Cancer",
      description: "Targeted support for the most prevalent cancer among women in India.",
      details: [
        "Early detection resources",
        "Treatment financial aid",
        "Comprehensive patient support",
      ],
    },
    {
      icon: Activity,
      title: "Lung Cancer",
      description: "Comprehensive resources and care strategies for lung cancer patients.",
      details: [
        "Specialized treatment support",
        "Holistic patient care",
        "Prevention awareness",
      ],
    },
    {
      icon: Ribbon,
      title: "Oral Cancer",
      description: "Combating oral cancer through targeted support and awareness.",
      details: [
        "Early screening initiatives",
        "Treatment expense support",
        "Community education",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section 
      ref={ref}
      className="bg-gradient-to-br from-gray-50 to-gray-100 py-16 px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Abstract Background */}
      <div className="absolute -top-10 -left-20 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl pointer-events-none"></div>

      <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative"
      >
        {/* Heading Section */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-teal-500">Cancer Focus</span> Areas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering patients through targeted support, comprehensive care, and unwavering hope.
          </p>
        </motion.div>

        {/* Timeline Structure */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute inset-y-0 left-1/2 w-1 bg-teal-500/20 transform -translate-x-1/2"></div>

          {/* Focus Points */}
          {cancerFoci.map((focus, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className={`relative flex items-start ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              } mb-12`}
            >
              {/* Connecting Line */}
              <div
                className={`absolute left-1/2 h-6 w-6 bg-teal-500 rounded-full transform -translate-x-1/2 ${
                  index % 2 === 0 ? "-translate-y-1/2" : "translate-y-1/2"
                }`}
              ></div>

              {/* Icon Section */}
              <div
                className={`flex-shrink-0 bg-teal-50 text-teal-600 p-6 rounded-full shadow-lg ${
                  index % 2 === 0 ? "ml-6" : "mr-6"
                }`}
              >
                <focus.icon size={40} strokeWidth={1.5} />
              </div>

              {/* Content Section */}
              <div
                className={`flex-1 max-w-lg p-6 bg-white rounded-2xl shadow-md ${
                  index % 2 === 0 ? "text-left ml-8" : "text-right mr-8"
                }`}
              >
                <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4">
                  {focus.title}
                </h3>
                <p className="text-gray-700 mb-4">{focus.description}</p>
                <ul className="space-y-2 text-gray-600">
                  {focus.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-teal-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div 
          variants={itemVariants}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            Our commitment extends beyond treatment, creating comprehensive support systems for cancer patients.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default InnovativeCancerFocusSection;