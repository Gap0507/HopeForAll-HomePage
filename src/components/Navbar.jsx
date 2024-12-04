import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/hope5.jpg';
const NavDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div 
        className="relative cursor-pointer text-gray-100 
        font-medium tracking-wide 
        group-hover:text-teal-200 transition-colors 
        duration-300 flex items-center"
      >
        {title}
        <ArrowRight 
          className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 
          transform group-hover:translate-x-1 transition-all duration-300"
        />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.9 }}
            transition={{ 
              duration: 0.3,
              ease: "easeOut"
            }}
            className="absolute left-0 mt-4 w-64 bg-gradient-to-br 
            from-gray-800 to-gray-900 rounded-xl shadow-2xl 
            border border-gray-700 overflow-hidden z-50"
          >
            <div className="py-2">
              {items.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="block px-6 py-3 text-sm text-gray-300 
                  hover:bg-teal-900/30 hover:text-teal-200 
                  transition-all duration-200 
                  border-l-4 border-transparent 
                  hover:border-teal-500"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      title: 'About Us', 
      items: [
        { label: 'Why Cancer', path: '/about/why-cancer' },
        { label: 'Governance', path: '/about/governance' }
      ]
    },
    { 
      title: 'Understanding Cancer', 
      items: [
        { label: 'What is Cancer', path: '/understanding/what-is-cancer' },
        { label: 'Signs & Symptoms', path: '/understanding/signs-symptoms' }
      ]
    },
    { 
      title: 'Get Involved', 
      items: [
        { label: 'Volunteers', path: '/get-involved/volunteers' },
        { label: 'Collaborate', path: '/get-involved/collaborate' },
        { label: 'Contact', path: '/get-involved/contact' }
      ]
    }
  ];

  return (
    <nav 
      className="bg-gradient-to-r from-gray-900 to-gray-800 
      shadow-2xl fixed top-0 w-full z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with Futuristic Design */}
          <Link 
            to="/" 
            className="flex items-center transform transition-transform 
            duration-300 hover:scale-105"
          >
            <div className="bg-teal-500 p-2 rounded-full mr-3">
              <span className="text-white font-bold text-xl">H</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wider">
              HopeForAll
            </span>
          </Link>

          {/* Desktop Navigation (visible after 1200px) */}
          <div className="hidden lg:flex space-x-8 items-center">
            {navItems.map((navItem, index) => (
              <NavDropdown 
                key={index} 
                title={navItem.title} 
                items={navItem.items} 
              />
            ))}
            
            <Link 
              to="/insights" 
              className="text-gray-200 hover:text-teal-200 
              transition-colors font-medium tracking-wide"
            >
              Insights
            </Link>
            
            <Link 
              to="/get-help" 
              className="text-gray-200 hover:text-teal-200 
              transition-colors font-medium tracking-wide"
            >
              Support Center
            </Link>
            
            <Link 
              to="/donate" 
              className="bg-teal-600 text-white px-6 py-2 
              rounded-full hover:bg-teal-700 
              transition-colors shadow-lg 
              hover:shadow-xl font-semibold 
              tracking-wider uppercase text-sm"
            >
              Donate Now
            </Link>
          </div>

          {/* Mobile Menu Toggle (visible before 1200px) */}
          <div className="lg:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-800"
            >
              <div className="px-4 pt-2 pb-4 space-y-2">
                {navItems.map((navItem, index) => (
                  <div key={index} className="border-b border-gray-700 pb-2">
                    <div className="text-teal-300 font-semibold mb-2">
                      {navItem.title}
                    </div>
                    {navItem.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        to={item.path}
                        className="block px-3 py-2 text-gray-300 
                        hover:bg-teal-900/30 hover:text-teal-200 
                        rounded-md transition-all"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                ))}
                
                <Link 
                  to="/insights" 
                  className="block px-3 py-2 text-gray-300 
                  hover:bg-teal-900/30 hover:text-teal-200 
                  rounded-md transition-all"
                >
                 Insights
                </Link>
                
                <Link 
                  to="/get-help" 
                  className="block px-3 py-2 text-gray-300 
                  hover:bg-teal-900/30 hover:text-teal-200 
                  rounded-md transition-all"
                >
                  Support Center
                </Link>
                
                <Link 
                  to="/donate" 
                  className="block w-full text-center bg-teal-600 
                  text-white px-4 py-2 rounded-full 
                  hover:bg-teal-700 transition-colors 
                  font-semibold uppercase tracking-wider"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;