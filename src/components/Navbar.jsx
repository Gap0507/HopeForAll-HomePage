import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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

          <Link to="/" className="flex items-center transform transition-transform duration-300 hover:scale-105 mb-6">
            <svg width="200" height="50" viewBox="0 0 400 50" className="looka-1j8o68f">
              <defs id="SvgjsDefs1216"></defs>
              {/* Heart Icon - Adjusted position */}
              <g id="SvgjsG1217" featurekey="rDwwlG-0" transform="matrix(0.7,0,0,0.7,0,10)" fill="#46cdcf">
                <g xmlns="http://www.w3.org/2000/svg">
                  <path d="M97.066,49.294H84.667c-0.919,0-1.745,0.56-2.085,1.412l-1.541,3.857l-8.542-21.378c-0.34-0.853-1.166-1.412-2.084-1.412   c-0.919,0-1.744,0.559-2.085,1.412l-6.436,16.109H53.06c2.014-5.625,2.044-11.745-0.042-16.634c-1.81-4.24-4.981-7.124-9.169-8.34   c-1.649-0.478-3.265-0.721-4.804-0.721c-5.719,0-9.354,3.237-11.41,5.988c-2.057-2.751-5.691-5.988-11.411-5.988   c-1.539,0-3.155,0.243-4.804,0.722c-4.188,1.215-7.358,4.1-9.168,8.339c-2.501,5.861-1.971,13.493,1.386,19.919   c5.525,10.572,21.96,22.861,22.657,23.38c0.398,0.295,0.868,0.442,1.339,0.442c0.471,0,0.941-0.147,1.339-0.442   c0.671-0.499,15.909-11.895,21.982-22.175h12.46c0.918,0,1.744-0.56,2.085-1.412l4.915-12.303l8.542,21.379   c0.341,0.853,1.166,1.412,2.085,1.412c0.918,0,1.743-0.56,2.085-1.412l3.061-7.664h10.879c1.239,0,2.244-1.005,2.244-2.245   S98.306,49.294,97.066,49.294z M27.634,71.325C23.635,68.192,11.806,58.516,7.617,50.5C4.91,45.316,4.425,39.006,6.381,34.422   c0.881-2.064,2.688-4.744,6.291-5.791c1.242-0.36,2.437-0.543,3.552-0.543c6.129,0,8.861,5.655,9.347,6.789   c0.354,0.825,1.166,1.361,2.064,1.361s1.71-0.536,2.064-1.361c0.485-1.134,3.217-6.789,9.346-6.789c1.115,0,2.31,0.183,3.551,0.543   c3.604,1.047,5.411,3.727,6.291,5.791c1.958,4.583,1.472,10.894-1.235,16.077C43.462,58.516,31.633,68.192,27.634,71.325z"/>
                </g>
              </g>
              {/* Text - Adjusted position */}
              <g id="SvgjsG1218" featurekey="4AZ1rv-0" transform="matrix(2.8,0,0,2.8,80,10)" fill="#ffffff">
                <path d="M1.36 20 l0 -13.22 l3.36 0 l0 5.1 l5.4 0 l0 -5.1 l3.36 0 l0 13.22 l-3.36 0 l0 -5.22 l-5.4 0 l0 5.22 l-3.36 0 z M20.36 20.28 c-3.78 0 -4.92 -2.34 -4.92 -5.02 c0 -2.62 1.08 -4.88 4.86 -4.88 c3.86 0 4.88 2.34 4.88 4.92 c0 2.74 -1.14 4.98 -4.82 4.98 z M20.32 17.96 c1.36 0 1.62 -1.26 1.62 -2.62 s-0.26 -2.64 -1.64 -2.64 c-1.36 0 -1.62 1.28 -1.62 2.6 c0 1.34 0.26 2.66 1.64 2.66 z M26.84 24.56 l0 -13.9 l2.9 0 l0 0.88 c0.58 -0.76 1.42 -1.16 2.64 -1.16 c3.06 0 4.02 2.52 4.02 4.82 c0 2.86 -1.5 5.08 -4.48 5.08 c-0.96 0 -1.48 -0.3 -1.96 -0.68 l0 4.96 l-3.12 0 z M31.560000000000002 17.96 c0.64 0 1.6 -0.26 1.6 -2.68 c0 -1.92 -0.6 -2.58 -1.56 -2.58 c-1.06 0 -1.64 0.8 -1.64 2.7 c0 1.7 0.46 2.56 1.6 2.56 z M46.78 16.04 l-5.92 0 c0.08 1.34 0.46 1.92 1.76 1.92 c0.8 0 1.28 -0.22 1.42 -0.94 l2.74 0.48 c-0.52 1.74 -1.76 2.78 -4.26 2.78 c-3.12 0 -4.92 -1.62 -4.92 -4.84 c0 -2.6 1.16 -5.06 4.78 -5.06 c2.94 0 4.4 1.62 4.4 4.64 l0 1.02 z M42.26 12.6 c-0.76 0 -1.2 0.36 -1.36 1.54 l2.6 0 l0 -0.02 c0 -1.1 -0.42 -1.52 -1.24 -1.52 z M48.74 20 l0 -13.22 l8.64 0 l0 2.86 l-5.28 0 l0 2.28 l4.44 0 l0 2.86 l-4.44 0 l0 5.22 l-3.36 0 z M63.400000000000006 20.28 c-3.78 0 -4.92 -2.34 -4.92 -5.02 c0 -2.62 1.08 -4.88 4.86 -4.88 c3.86 0 4.88 2.34 4.88 4.92 c0 2.74 -1.14 4.98 -4.82 4.98 z M63.36 17.96 c1.36 0 1.62 -1.26 1.62 -2.62 s-0.26 -2.64 -1.64 -2.64 c-1.36 0 -1.62 1.28 -1.62 2.6 c0 1.34 0.26 2.66 1.64 2.66 z M69.88000000000001 20 l0 -9.34 l2.9 0 l0 1.6 c0.44 -1 1.22 -1.88 2.48 -1.88 c1.48 0 1.94 0.98 1.94 0.98 l-1.86 2.68 s-0.24 -0.66 -0.92 -0.66 c-0.72 0 -1.1 0.94 -1.42 1.92 l0 4.7 l-3.12 0 z M77.06 20 l4.94 -13.22 l2.68 0 l5.46 13.22 l-3.4 0 l-0.9 -2.22 l-4.8 0 l-0.78 2.22 l-3.2 0 z M82.75999999999999 13 l-0.72 1.98 l2.66 0 l-0.8 -2.02 c-0.14 -0.34 -0.38 -1.02 -0.6 -1.72 c-0.22 0.74 -0.42 1.42 -0.54 1.76 z M90.9 20 l0 -14.36 l3.12 0 l0 14.36 l-3.12 0 z M96.10000000000001 20 l0 -14.36 l3.12 0 l0 14.36 l-3.12 0 z"></path>
              </g>
            </svg>
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