


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Scale, 
  FileCheck, 
  Shield, 
  ChevronDown,
  Award,
  BookOpen,
  Building,
  Heart,
  Target,
  Users,HeartHandshake
} from 'lucide-react';

const GovernanceSection = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [hoveredPrinciple, setHoveredPrinciple] = useState(null);

  const leadershipTeam = [
    {
      name: "Dr. Sarah Mitchell",
      role: "Chief Executive Officer",
      expertise: "Oncology Research & Healthcare Management",
      quote: "Every patient deserves world-class care and hope for a better tomorrow.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "James Henderson",
      role: "Chief Operations Officer",
      expertise: "Healthcare Operations & Strategy",
      quote: "Innovation in healthcare delivery is key to improving patient outcomes.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Dr. Emily Chen",
      role: "Medical Director",
      expertise: "Clinical Oncology & Patient Care",
      quote: "Personalized care approach leads to better treatment success rates.",
      image: "/api/placeholder/120/120"
    },
    {
      name: "Robert Kumar",
      role: "Chief Financial Officer",
      expertise: "Healthcare Finance & Risk Management",
      quote: "Sustainable operations ensure continuous support for our patients.",
      image: "/api/placeholder/120/120"
    }
  ];

  const missionPillars = [
    {
      title: "Patient-First Approach",
      icon: Heart,
      description: "Every decision we make starts with patient wellbeing"
    },
    {
      title: "Innovation Focus",
      icon: Target,
      description: "Embracing new technologies and treatment methods"
    },
    {
      title: "Community Impact",
      icon: Users,
      description: "Building a supportive network for cancer patients"
    }
  ];

  const governancePrinciples = [
    {
      title: "Ethical Standards",
      icon: Scale,
      content: "We maintain the highest ethical standards in healthcare delivery and organizational management, ensuring transparency and accountability in all operations.",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Compliance Framework",
      icon: FileCheck,
      content: "Our robust compliance framework ensures adherence to healthcare regulations, data protection standards, and industry best practices.",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Risk Management",
      icon: Shield,
      content: "Comprehensive risk assessment and management protocols safeguard patient interests and organizational stability.",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  const committees = [
    {
      name: "Ethics Committee",
      description: "Oversees ethical practices and decision-making in patient care and research.",
      icon: Award,
      members: "Led by senior healthcare professionals and community representatives"
    },
    {
      name: "Clinical Governance",
      description: "Ensures excellence in medical practices and patient care standards.",
      icon: BookOpen,
      members: "Comprised of medical experts and quality assurance specialists"
    },
    {
      name: "Administrative Board",
      description: "Manages organizational operations and strategic planning.",
      icon: Building,
      members: "Experienced healthcare administrators and industry leaders"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Floating Elements */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 overflow-hidden">
        <motion.div 
          className="max-w-6xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Governance & Leadership
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Guided by compassion, driven by excellence in cancer care.
          </p>
        </motion.div>
        
        {/* Mission Pillars */}
        <div className="max-w-5xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {missionPillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
              >
                <div className="inline-block p-3 bg-blue-50 rounded-full mb-4">
                  <pillar.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team with Quote Cards */}
      <section className="px-4 md:px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {leadershipTeam.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <img 
                    src={leader.image}
                    alt={leader.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="text-blue-600 font-medium">
                      {leader.role}
                    </p>
                    <p className="text-gray-600 text-sm mt-1">
                      {leader.expertise}
                    </p>
                  </div>
                </div>
                <blockquote className="mt-4 text-gray-600 italic border-l-4 border-blue-200 pl-4">
                  "{leader.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Governance Principles */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Governance Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {governancePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                onMouseEnter={() => setHoveredPrinciple(index)}
                onMouseLeave={() => setHoveredPrinciple(null)}
                whileHover={{ scale: 1.02 }}
                className={`rounded-xl p-6 shadow-lg relative overflow-hidden ${
                  hoveredPrinciple === index 
                    ? `bg-gradient-to-br ${principle.color} text-white`
                    : 'bg-white'
                }`}
              >
                <div className={`mb-4 ${
                  hoveredPrinciple === index ? 'text-white' : 'text-blue-600'
                }`}>
                  <principle.icon size={32} />
                </div>
                <h3 className={`text-xl font-semibold mb-3 ${
                  hoveredPrinciple === index ? 'text-white' : 'text-gray-900'
                }`}>
                  {principle.title}
                </h3>
                <p className={
                  hoveredPrinciple === index ? 'text-white/90' : 'text-gray-600'
                }>
                  {principle.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Committee Section */}
      <section className="px-4 md:px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Governing Committees
          </h2>
          <div className="space-y-4">
            {committees.map((committee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  className="w-full p-6 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                      <committee.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {committee.name}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="text-gray-600" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {activeAccordion === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-6 bg-gray-50">
                        <p className="text-gray-600 mb-4">
                          {committee.description}
                        </p>
                        <div className="text-sm text-gray-500">
                          <strong>Committee Composition:</strong> {committee.members}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

         {/* CTA Section with Interactive Elements */}
         <section className="px-4 md:px-8 py-16">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="relative z-10">
            <HeartHandshake className="w-16 h-16 text-white mx-auto mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Partner in Compassion
            </h3>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Join hands with visionary leaders committed to transforming cancer care through ethical governance and innovative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-all"
            >
              Connect with Leadership
            </motion.button>
          </div>
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="pattern-cross pattern-blue-400 pattern-size-4 pattern-opacity-20 w-full h-full" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default GovernanceSection;