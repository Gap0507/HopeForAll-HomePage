import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
    Users,
    Globe,
    Rocket,
    HeartHandshake, 
    MapPin, 
    Mail, 
    Phone, 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { title: 'About Us', links: [
      { label: 'Why Cancer', path: '/about/why-cancer' },
      { label: 'Governance', path: '/about/governance' }
    ]},
    { title: 'Understanding Cancer', links: [
      { label: 'What is Cancer', path: '/understanding/what-is-cancer' },
      { label: 'Signs & Symptoms', path: '/understanding/signs-symptoms' }
    ]},
    { title: 'Get Involved', links: [
      { label: 'Volunteers', path: '/get-involved/volunteers' },
      { label: 'Collaborate', path: '/get-involved/collaborate' },
      { label: 'Contact', path: '/get-involved/contact' }
    ]}
  ];

  // Variants for Framer Motion animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16 px-6 lg:px-16 relative overflow-hidden"
    >
      {/* Animated Background Elements similar to HeroSection */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl animate-pulse"></div>
      </div>

      <motion.div 
        variants={containerVariants}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 relative z-10"
      >
        {/* Logo and Description */}
        <motion.div variants={itemVariants} className="col-span-1">
          <div className="flex items-center mb-6">
            <div className="bg-teal-500 p-2 rounded-full mr-3">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">
              HopeForAll
            </span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Hope for All is a cancer charitable trust dedicated to providing financial aid and support to cancer patients, ensuring no one is denied treatment due to financial barriers.
          </p>
        </motion.div>
    
        {/* About Us */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-teal-300">About Us</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/about/why-cancer" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <HeartHandshake className="mr-2 text-teal-400" size={16} />
                Why Cancer
              </Link>
            </li>
            <li>
              <Link to="/about/governance" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <Users className="mr-2 text-teal-400" size={16} />
                Governance
              </Link>
            </li>
          </ul>
        </motion.div>
    
        {/* Understanding Cancer */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-teal-300">Understanding Cancer</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/understanding/what-is-cancer" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <Globe className="mr-2 text-teal-400" size={16} />
                What is Cancer
              </Link>
            </li>
            <li>
              <Link to="/understanding/signs-symptoms" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <Users className="mr-2 text-teal-400" size={16} />
                Signs & Symptoms
              </Link>
            </li>
          </ul>
        </motion.div>
    
        {/* Get Involved */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-teal-300">Get Involved</h4>
          <ul className="space-y-3">
            <li>
              <Link to="/get-involved/volunteers" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <HeartHandshake className="mr-2 text-teal-400" size={16} />
                Volunteers
              </Link>
            </li>
            <li>
              <Link to="/get-involved/collaborate" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <Rocket className="mr-2 text-teal-400" size={16} />
                Collaborate
              </Link>
            </li>
            <li>
              <Link to="/get-involved/contact" className="text-gray-300 hover:text-teal-200 transition-colors text-sm flex items-center">
                <Mail className="mr-2 text-teal-400" size={16} />
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>
    
        {/* Contact Us */}
        <motion.div variants={itemVariants} className="col-span-1">
          <h4 className="text-lg font-semibold mb-6 text-teal-300">Contact Us</h4>
          <div className="space-y-4">
            <div className="flex items-center text-gray-300 text-sm">
              <MapPin className="mr-3 text-teal-400" size={20} />
              Address
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Phone className="mr-3 text-teal-400" size={20} />
              +91 (022) 1234 5678
            </div>
            <div className="flex items-center text-gray-300 text-sm">
              <Mail className="mr-3 text-teal-400" size={20} />
              support@hopeforall.org
            </div>
          </div>
        </motion.div>
      </motion.div>
    
      {/* Copyright and Legal Links */}
      <motion.div 
        variants={itemVariants}
        className="border-t border-gray-700 mt-12 pt-6 text-center relative z-10"
      >
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} HopeForAll. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            <Link to="/privacy" className="text-gray-300 hover:text-teal-200 text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-gray-300 hover:text-teal-200 text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;