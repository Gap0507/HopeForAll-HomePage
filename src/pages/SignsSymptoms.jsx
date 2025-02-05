import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  AlertCircle,
  ArrowRight,
  ChevronRight,
  Thermometer,
  Stethoscope,
  BarChart,
  Users,
  Calendar,
  MessageCircle,
  FileText,
  BookMarked
} from 'lucide-react';
import doctor from '../assets/doctor.jpg'


const SignsSymptomPage = () => {
  const [activeSection, setActiveSection] = useState('general');
  const [openQuestion, setOpenQuestion] = useState(null);

  const keyFacts = [
    {
      title: "Early Detection",
      icon: Stethoscope,
      content: "Recognizing early signs can significantly improve treatment outcomes and survival rates.",
      color: "bg-green-50",
      iconColor: "text-green-600",
      borderColor: "border-green-200"
    },
    {
      title: "Symptom Variability",
      icon: BarChart,
      content: "Cancer symptoms can vary widely depending on the type, location, and stage of cancer.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    },
    {
      title: "Professional Consultation",
      icon: Users,
      content: "Always consult healthcare professionals for proper diagnosis and interpretation of symptoms.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    }
  ];

  const sections = [
    {
      id: 'general',
      title: 'General Cancer Symptoms',
      content: 'Cancer symptoms can be subtle and vary greatly. Understanding these potential indicators can help in early detection and seeking timely medical advice.',
      icon: AlertCircle
    },
    {
      id: 'physical',
      title: 'Physical Warning Signs',
      content: 'Unexplained physical changes can be potential indicators of underlying health issues. Being aware of these signs is crucial for early intervention.',
      icon: Thermometer
    },
    {
      id: 'systemic',
      title: 'Systemic Symptoms',
      content: 'Some cancer symptoms affect the entire body, manifesting as general health changes that might seem unrelated at first glance.',
      icon: BarChart
    },
    {
      id: 'when-to-consult',
      title: 'When to Seek Medical Advice',
      content: 'Not all symptoms indicate cancer, but persistent or unusual changes warrant professional medical evaluation.',
      icon: MessageCircle
    }
  ];

  const resources = [
    {
      title: "Symptom Guides",
      icon: FileText,
      color: "blue",
      description: "Comprehensive resources explaining various cancer symptoms in detail."
    },
    {
      title: "Medical Support",
      icon: Users,
      color: "green",
      description: "Connect with healthcare professionals for personalized guidance."
    },
    {
      title: "Latest Research",
      icon: BookMarked,
      color: "purple",
      description: "Stay informed about emerging insights in symptom detection."
    }
  ];

  const faqQuestions = [
    {
      question: "Are these symptoms definitive proof of cancer?",
      answer: "No, these symptoms can be indicative of many conditions. Professional medical diagnosis is crucial for accurate assessment."
    },
    {
      question: "How long should I wait before consulting a doctor?",
      answer: "If symptoms persist for more than two weeks or worsen, it's recommended to seek medical consultation promptly."
    },
    {
      question: "Can stress cause these symptoms?",
      answer: "While stress can manifest physical symptoms, persistent or unusual changes should always be evaluated by a healthcare professional."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Minimalistic Gradient */}
<section className="relative pt-24 pb-16 px-4 md:px-8 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
  {/* Background Pattern */}
  <div className="absolute inset-0 opacity-20">
    <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl opacity-30"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl opacity-30"></div>
  </div>

  {/* Content */}
  <div className="max-w-6xl mx-auto relative z-10">
    <div className="grid md:grid-cols-2 gap-12 items-center">
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 text-teal-700 text-sm font-medium mb-4">
          Comprehensive Symptom Guide
        </span>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900">
          Cancer <span className="text-teal-600">Signs</span> & Symptoms
        </h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Understand potential cancer indicators, recognize warning signs, and learn when to seek professional medical advice.
        </p>
        <div className="flex flex-wrap gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-teal-600 text-white rounded-xl font-medium hover:bg-teal-700 transition-colors"
          >
            Explore Symptoms
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-transparent text-teal-700 rounded-xl font-medium border-2 border-teal-600 hover:bg-teal-600/10 transition-colors"
          >
            Medical Resources
          </motion.button>
        </div>
      </motion.div>

      {/* Image or Graphic */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        className="relative hidden md:block"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-full blur-3xl opacity-30" />
        <img 
          src={doctor} 
          alt="Medical Research" 
          className="relative z-10 rounded-2xl shadow-lg"
        />
      </motion.div>
    </div>
  </div>
</section>

      {/* Key Facts Section - Directly inspired by WhatIsCancerPage */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {keyFacts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02, rotateY: 10 }}
                className={`${fact.color} rounded-xl p-6 border ${fact.borderColor} transform transition-all duration-300`}
              >
                <div className={`${fact.iconColor} mb-4`}>
                  <fact.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {fact.title}
                </h3>
                <p className="text-gray-600">
                  {fact.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section - Identical structure to WhatIsCancerPage */}
      <section className="px-4 md:px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1 overflow-x-auto lg:overflow-x-visible">
              <div className="flex lg:block whitespace-nowrap lg:whitespace-normal">
                <nav className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-2 p-4 lg:p-0">
                  {sections.map((section) => (
                    <motion.button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`px-4 py-3 rounded-lg flex items-center justify-between min-w-[200px] lg:min-w-0 ${
                        activeSection === section.id 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'hover:bg-gray-50 text-gray-600'
                      }`}
                      whileHover={{ x: 4 }}
                    >
                      <div className="flex items-center">
                        <section.icon className="mr-3" size={20} />
                        {section.title}
                      </div>
                    </motion.button>
                  ))}
                </nav>

                {/* Quick Support Box */}
                <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="text-blue-900 font-semibold mb-2">Need Medical Guidance?</h4>
                  <p className="text-blue-700 text-sm mb-4">Our medical resources can help you understand your symptoms.</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Medical Support
                  </button>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
                  {/* Section Header */}
                  <div className="flex items-center mb-6">
                    {sections.find(s => s.id === activeSection)?.icon && (
                      <div className="mr-4 p-3 bg-blue-50 rounded-lg text-blue-600">
                        {React.createElement(sections.find(s => s.id === activeSection)?.icon, { size: 24 })}
                      </div>
                    )}
                    <h2 className="text-3xl font-bold text-gray-900">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                  </div>
                  
                  {/* Section Description */}
                  <div className="prose max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {sections.find(s => s.id === activeSection)?.content}
                    </p>
                  </div>

                  {/* Section-Specific Detailed Content */}
                  {activeSection === 'physical' && (
                    <div className="mt-8 space-y-6">
                      <div className="bg-rose-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-rose-900 mb-4 flex items-center">
                          <AlertCircle className="mr-2" /> Physical Warning Signs
                        </h3>
                        <ul className="space-y-3 text-rose-800">
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Unexplained weight changes
                          </li>
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Persistent pain or discomfort
                          </li>
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Unusual lumps or growths
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* More sections can be added similarly */}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Medical Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className={`bg-${resource.color}-50 rounded-xl p-6`}
              >
                <div className={`text-${resource.color}-600 mb-4`}>
                  <resource.icon size={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {resource.title}
                </h3>
                <p className="text-gray-600">
                  {resource.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 md:px-8 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqQuestions.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-sm"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronRight
                    className={`transform transition-transform ${
                      openQuestion === index ? 'rotate-90' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openQuestion === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 border-t border-gray-100">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="px-4 md:px-8 py-16">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Personalized Medical Guidance
              </h3>
              <p className="text-blue-100 mb-6">
                Our medical experts can provide personalized insights and support for understanding potential health symptoms.
              </p>
              <div className="space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-white text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                >
                  Contact Us
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-400 transition-colors"
                >
                  Get Support
                </motion.button>
              </div>
            </div>
            <div className="flex justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              >
                <Stethoscope size={120} className="text-white opacity-80" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default SignsSymptomPage;