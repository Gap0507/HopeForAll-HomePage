import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CircleDot,
  ArrowRight,
  ChevronRight,
  Search,
  Microscope,
  AlertCircle,
  Mic2Icon,
  BookOpen,
  Users,
  Calendar,
  HeartPulse,
  Medal,
  Target,
  Share2,
  MessageCircle,
  FileText,
  BookMarked
} from 'lucide-react';
import heromain from '../assets/heromain.jpg'
import bcancer from '../assets/bcancer.jpg'
import lungcancer from '../assets/lungcancer.jpg'
import colorectalCancer from '../assets/colorectalCancer.jpg'
import LiverCancer from '../assets/LiverCancer.jpg'
const WhatIsCancerPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [selectedResource, setSelectedResource] = useState(null);
  const [openQuestion, setOpenQuestion] = useState(null);

  const keyFacts = [
    {
      title: "Cell Growth",
      icon: Microscope,
      content: "Cancer begins when cells start to grow uncontrollably, ignoring normal signals to stop dividing.",
      color: "bg-rose-50",
      iconColor: "text-rose-600",
      borderColor: "border-rose-200"
    },
    {
      title: "DNA Changes",
      icon: Mic2Icon,
      content: "Genetic mutations in DNA can trigger abnormal cell growth and cancer development.",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200"
    },
    {
      title: "Multiple Types",
      icon: CircleDot,
      content: "There are over 200 different types of cancer, each requiring specific treatment approaches.",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
      borderColor: "border-purple-200"
    }
  ];

  const sections = [
    {
      id: 'introduction',
      title: 'Understanding Cancer',
      content: 'Cancer is a complex group of diseases characterized by the uncontrolled growth and spread of abnormal cells. These cells can invade nearby tissues and sometimes spread to other parts of the body through the bloodstream and lymphatic systems.',
      icon: BookOpen
    },
    {
      id: 'causes',
      title: 'Causes and Risk Factors',
      content: 'Cancer can be caused by both external factors (tobacco, chemicals, radiation) and internal factors (inherited genetic mutations, hormones, immune conditions). These factors may act together to initiate or promote cancer development.',
      icon: AlertCircle
    },
    {
      id: 'detection',
      title: 'Early Detection',
      content: 'Early detection significantly increases the chances of successful treatment. Regular screening, awareness of warning signs, and prompt medical attention are crucial for better outcomes.',
      icon: Search
    },
    {
      id: 'treatment',
      title: 'Treatment Options',
      content: 'Modern cancer treatment combines various approaches including surgery, chemotherapy, radiation therapy, immunotherapy, and targeted therapies. Treatment plans are personalized based on cancer type, stage, and patient factors.',
      icon: HeartPulse
    },
    {
      id: 'research',
      title: 'Latest Research',
      content: 'Ongoing research continues to advance our understanding of cancer and develop new treatment strategies. Clinical trials and scientific studies are constantly exploring innovative approaches to cancer care.',
      icon: Microscope
    }
  ];
  const resources = [
    {
      title: "Understanding Your Diagnosis",
      icon: FileText,
      color: "blue",
      description: "Comprehensive guides and information about different types of cancer diagnoses."
    },
    {
      title: "Support Groups",
      icon: Users,
      color: "green",
      description: "Connect with others sharing similar experiences and find emotional support."
    },
    {
      title: "Research Updates",
      icon: BookMarked,
      color: "purple",
      description: "Stay informed about the latest developments in cancer research and treatment."
    }
  ];

  const faqQuestions = [
    {
      question: "What are the most common cancer symptoms?",
      answer: "Common symptoms include unexplained weight changes, persistent fatigue, unusual bleeding, skin changes, and ongoing pain. However, symptoms vary by cancer type and stage."
    },
    {
      question: "How is cancer diagnosed?",
      answer: "Cancer diagnosis typically involves physical exams, imaging tests (X-rays, CT scans, MRI), blood tests, and biopsies. The specific tests depend on the suspected type of cancer."
    },
    {
      question: "Can cancer be prevented?",
      answer: "While not all cancers are preventable, risk can be reduced through lifestyle choices like not smoking, maintaining a healthy weight, protecting skin from sun damage, and getting regular exercise."
    }
  ];

  return (
<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Redesigned Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900 text-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-32 relative z-10"
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium mb-4">
                Comprehensive Guide
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Understanding <span className="text-blue-400">Cancer</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Explore our comprehensive guide to understanding cancer, its impact, and the latest advances in treatment and care.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
                >
                  Start Learning
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white rounded-xl font-medium border-2 border-blue-400 hover:bg-blue-400/10 transition-colors"
                >
                  Find Support
                </motion.button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="relative hidden md:block"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <img 
                src= {heromain} 
                alt="Medical Research" 
                className="relative z-10 rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>
        </motion.div>
        
        {/* Abstract background elements */}
        <motion.div 
          className="absolute top-0 left-0 w-full h-full opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
        >
          <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-3xl" />
        </motion.div>
      </section>

      {/* Interactive Quick Facts Section */}
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

      {/* Enhanced Main Content Section */}
      <section className="px-4 md:px-8 py-16 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar - Hidden on mobile, shown as horizontal scroll on tablet */}
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
                  <h4 className="text-blue-900 font-semibold mb-2">Need Support?</h4>
                  <p className="text-blue-700 text-sm mb-4">Our team is here to help you understand and cope with cancer.</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </div>

            {/* Enhanced Content Area */}
            <div className="lg:col-span-3">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSection}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100"
                >
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
                  
                  <div className="prose max-w-none">
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                      {sections.find(s => s.id === activeSection)?.content}
                    </p>
                  </div>

                  {/* Section-Specific Content */}
                  {activeSection === 'detection' && (
                    <div className="mt-8 space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
                          <AlertCircle className="mr-2" />
                          Warning Signs to Watch For
                        </h3>
                        <ul className="space-y-3 text-blue-800">
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Unexplained weight loss or gain
                          </li>
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Unusual bleeding or bruising
                          </li>
                          <li className="flex items-center">
                            <ArrowRight className="mr-2" size={16} />
                            Persistent fatigue or fever
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                          <Target className="mr-2" />
                          Recommended Screening Tests
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="p-4 bg-white rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">Age 40+</h4>
                            <p className="text-green-700">Annual mammogram for breast cancer screening</p>
                          </div>
                          <div className="p-4 bg-white rounded-lg">
                            <h4 className="font-semibold text-green-800 mb-2">Age 45+</h4>
                            <p className="text-green-700">Regular colorectal cancer screening</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeSection === 'treatment' && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-purple-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-purple-900 mb-4 flex items-center">
                          <Medal className="mr-2" />
                          Treatment Approaches
                        </h3>
                        <div className="space-y-4">
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-purple-800 mb-2">Surgery</h4>
                            <p className="text-purple-700">Removal of cancerous tissue through surgical intervention</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-purple-800 mb-2">Radiation Therapy</h4>
                            <p className="text-purple-700">Using targeted radiation to destroy cancer cells</p>
                          </div>
                          <div className="bg-white rounded-lg p-4">
                            <h4 className="font-semibold text-purple-800 mb-2">Chemotherapy</h4>
                            <p className="text-purple-700">Medication-based treatment to kill cancer cells throughout the body</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-rose-50 rounded-lg p-6">
                        <h3 className="text-xl font-semibold text-rose-900 mb-4 flex items-center">
                          <HeartPulse className="mr-2" />
                          Support During Treatment
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <Users className="mr-2 mt-1 text-rose-600" size={16} />
                            <span className="text-rose-700">Access to support groups and counseling services</span>
                          </li>
                          <li className="flex items-start">
                            <Calendar className="mr-2 mt-1 text-rose-600" size={16} />
                            <span className="text-rose-700">Regular check-ups and monitoring</span>
                          </li>
                          <li className="flex items-start">
                            <MessageCircle className="mr-2 mt-1 text-rose-600" size={16} />
                            <span className="text-rose-700">Open communication with healthcare team</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Share and Resource Links */}
                  <div className="mt-8 border-t border-gray-100 pt-6">
                    <a 
                      href="https://www.cancer.gov/about-cancer/understanding"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Learn More at National Cancer Institute 
                      <ArrowRight className="ml-2" size={16} />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

     {/* Enhanced Cancer Awareness Section */}
<section className="px-4 md:px-8 py-16 bg-gradient-to-b from-gray-50 to-gray-100">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-4xl font-bold text-gray-900 mb-4">
      Understanding Common Types of Cancer
    </h2>
    <p className="text-gray-600 mb-12 max-w-3xl mx-auto text-lg">
      Cancer affects millions worldwide. Early detection, awareness, and 
      lifestyle changes can significantly improve survival rates. Explore the 
      most common types of cancer and their key facts.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        {
          name: "Breast Cancer",
          description: "Most common in women. Early detection increases survival rates.",
          image: bcancer,
          resource: "https://www.breastcancer.org",
        },
        {
          name: "Lung Cancer",
          description: "Often linked to smoking and environmental toxins.",
          image: lungcancer,
          resource: "https://www.lung.org/lung-health-diseases/lung-disease-lookup/lung-cancer",
        },
        {
          name: "Colorectal Cancer",
          description: "Highly preventable with regular screenings and a healthy diet.",
          image: colorectalCancer,
          resource: "https://www.cancer.org/cancer/colon-rectal-cancer",
        },
        {
        name: "Liver Cancer",
        description: "Often linked to hepatitis infections and alcohol consumption. Early detection is key.",
        image: LiverCancer,
        resource: "https://www.cancer.org/cancer/liver-cancer.html",
  }

      ].map((type, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
        >
          <img
            src={type.image}
            alt={type.name}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              {type.name}
            </h4>
            <p className="text-gray-600 text-sm mb-4">
              {type.description}
            </p>
            <a
              href={type.resource}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 text-sm font-medium inline-flex items-center"
            >
              Learn More <ArrowRight className="ml-1" size={14} />
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>


      {/* Resources Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Helpful Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedResource(resource)}
                className={`bg-${resource.color}-50 rounded-xl p-6 cursor-pointer`}
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
                  Need More Information?
                </h3>
                <p className="text-blue-100 mb-6">
                  Our team of experts is here to help you understand cancer better and provide the support you need.
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
                  <Users size={120} className="text-white opacity-80" />
                </motion.div>
              </div>
            </div>
          </motion.div>
      </section>
    </div>
  );
};

export default WhatIsCancerPage;