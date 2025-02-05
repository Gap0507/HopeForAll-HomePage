import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin,ChevronRight, Heart, Users, Star } from 'lucide-react';
import collab from '../assets/collab.jpg'
const CollaboratePage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const collaborationOptions = [
    {
      title: 'Healthcare Partnerships',
      description: 'Join us in providing medical care, treatments, and support to cancer patients.',
    },
    {
      title: 'Corporate Sponsorships',
      description: 'Partner with us for CSR initiatives, funding, and employee volunteering programs.',
    },
    {
      title: 'NGO & Community Support',
      description: 'Collaborate with us to organize awareness campaigns and community outreach programs.',
    },
    {
      title: 'Academic & Research Collaboration',
      description: 'Engage in research to discover innovative ways of tackling cancer and improving treatments.',
    },
    {
      title: 'Volunteer Groups',
      description: 'Long-term engagement with our mission to help cancer patients with emotional and physical support.',
    },
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
 <section className="relative min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#f8fafc_12%,transparent_12.5%,transparent_87.5%,#f8fafc_87.5%,#f8fafc),linear-gradient(150deg,#f8fafc_12%,transparent_12.5%,transparent_87.5%,#f8fafc_87.5%,#f8fafc)] bg-[size:64px_128px] opacity-40"></div>
        
        {/* Soft Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/30 via-pink-50/30 to-blue-50/30"></div>
        
        {/* Subtle Animated Accents */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute -left-24 top-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          className="absolute -right-24 bottom-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"
        ></motion.div>
      </div>

      {/* Main Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content Column */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Partner With Us to Create a
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"> Lasting Impact</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                Join Hope for All in our mission to support and empower those battling cancer. Every contribution makes a difference.
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-semibold text-white flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/25 transition-all">
                Get Involved
                <ChevronRight className="w-5 h-5" />
              </button>
              <button className="px-8 py-4 bg-white/80 backdrop-blur-sm rounded-xl font-semibold text-gray-700 flex items-center gap-2 hover:bg-white transition-all border border-gray-200">
                Learn More
              </button>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              {[
                { icon: <Heart className="w-6 h-6 text-purple-600" />, value: "100+", label: "Lives Impacted" },
                { icon: <Users className="w-6 h-6 text-blue-600" />, value: "50+", label: "Volunteers" },
                { icon: <Star className="w-6 h-6 text-purple-600" />, value: "92%", label: "Satisfaction" }
              ].map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white/80 rounded-xl backdrop-blur-sm border border-gray-200 hover:bg-white transition-all">
                  {stat.icon}
                  <div className="text-2xl font-bold text-gray-900 mt-2">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
              <img
                src={collab}
                alt="Impact"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>

      {/* Collaboration Opportunities */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Ways to Collaborate</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collaborationOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-50 shadow-lg p-6 rounded-xl hover:shadow-xl transition-all"
              >
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{option.title}</h3>
                <p className="text-gray-600">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="px-4 py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">How to Get Involved</h2>
          <div className="space-y-6">
            {[
              'Fill out our volunteer enquiry form.',
              'Attend an orientation session.',
              'Complete any required background checks.',
              'Start making a difference!',
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.3 }}
                className="text-lg text-gray-800 font-medium"
              >
                <span className="font-bold text-blue-500 mr-4">{index + 1}.</span> {step}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Submit Your Collaboration Inquiry</h2>
          <form
            onSubmit={handleFormSubmit}
            className="bg-gray-100 p-8 rounded-xl shadow-lg space-y-6"
          >
            {formSubmitted ? (
              <div className="text-center text-xl font-semibold text-green-500">
                Thank you! Your form has been submitted.
              </div>
            ) : (
              <>
                <div>
                  <label htmlFor="name" className="text-lg font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-lg font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-lg font-medium text-gray-700">
                    Message/Collaboration Interest
                  </label>
                  <textarea
                    id="message"
                    required
                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg h-40"
                  />
                </div>
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="px-8 py-4 bg-blue-500 text-white rounded-xl font-medium"
                  >
                    Submit Inquiry
                  </motion.button>
                </div>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Mail className="mr-3" size={20} />
                volunteer@hopeforall.org
              </div>
              <div className="flex items-center text-gray-600">
                <Phone className="mr-3" size={20} />
                +91 123-456-7890
              </div>
              <div className="flex items-center text-gray-600">
                <MapPin className="mr-3" size={20} />
                Mumbai, Maharashtra, India
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Next Steps</h3>
            <ol className="space-y-3 text-gray-600">
              <li>Fill out our collaboration inquiry form.</li>
              <li>Attend an intro call to discuss your interests.</li>
              <li>Finalise partnership details and goals.</li>
              <li>Start your collaboration journey with us!</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollaboratePage;
