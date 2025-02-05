import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Users,
  Calendar,
  MessageCircle,
  HandHeart,
  GraduationCap,
  Clock,
  CheckCircle,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const volunteerCategories = [
  {
    title: "Patient Support",
    icon: Heart,
    description: "Provide emotional support and assistance to cancer patients during their treatment journey.",
    commitment: "4-6 hours/week",
    requirements: ["Empathy & good communication", "Basic healthcare knowledge", "Background check required"]
  },
  {
    title: "Community Outreach",
    icon: Users,
    description: "Help raise awareness about cancer prevention and early detection in local communities.",
    commitment: "6-8 hours/week",
    requirements: ["Strong communication", "Local community knowledge", "Public speaking ability"]
  },
  {
    title: "Event Support",
    icon: Calendar,
    description: "Assist in organizing and managing fundraising events and awareness campaigns.",
    commitment: "Variable hours",
    requirements: ["Event planning experience", "Organizational skills", "Flexible schedule"]
  },
  {
    title: "Administrative Support",
    icon: MessageCircle,
    description: "Help with office tasks, documentation, and coordination of support services.",
    commitment: "8-10 hours/week",
    requirements: ["Basic computer skills", "Attention to detail", "Professional demeanor"]
  }
];

const impactStats = [
  { number: "500+", label: "Active Volunteers" },
  { number: "1000+", label: "Patients Supported" },
  { number: "50+", label: "Community Events" },
  { number: "24/7", label: "Support Available" }
];

const volunteerProcess = [
  { step: "Apply", description: "Fill out our volunteer enquiry form." },
  { step: "Connect", description: "We review your application and contact you." },
  { step: "Onboard", description: "Attend an orientation session and complete any necessary checks." },
  { step: "Engage", description: "Start volunteering and make a difference!" }
];

const VolunteersPage = () => {
  const [showForm, setShowForm] = useState(false);

  // Handler to close modal on background click or after submission
  const closeModal = () => setShowForm(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
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
                Join Our Cause
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Make a <span className="text-blue-400">Difference</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Volunteer with Hope for All and help support those affected by cancer. Your commitment brings hope and change.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-blue-500 text-white rounded-xl font-medium hover:bg-blue-600 transition-colors"
                >
                  Become a Volunteer
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent text-white rounded-xl font-medium border-2 border-blue-400 hover:bg-blue-400/10 transition-colors"
                >
                  Learn More
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
              <div className="relative z-10 grid grid-cols-2 gap-4">
                {impactStats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center"
                  >
                    <div className="text-3xl font-bold text-blue-300 mb-2">{stat.number}</div>
                    <div className="text-sm text-blue-100">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Volunteer Opportunities Section */}
      <section className="px-4 md:px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Volunteer Opportunities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {volunteerCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600">
                    <category.icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {category.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock size={16} className="mr-2" />
                        Time Commitment: {category.commitment}
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-700">Requirements:</p>
                        {category.requirements.map((req, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-500">
                            <CheckCircle size={14} className="mr-2 text-green-500" />
                            {req}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Process Section */}
      <section className="px-4 md:px-8 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            How It Works
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between">
            {volunteerProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex flex-col items-center text-center md:w-1/4 p-4"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full mb-4 text-blue-600 font-bold text-xl">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.step}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact and Next Steps Section */}
<section className="px-4 md:px-8 py-16">
  <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 p-8">
    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
      Get Started Today
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Contact Information
        </h3>
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
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Next Steps
        </h3>
        <ol className="space-y-3 text-gray-600">
          <li className="flex items-start">
            <span className="font-bold mr-2">1.</span>
            Fill out our volunteer enquiry form
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">2.</span>
            Attend an orientation session
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">3.</span>
            Complete any required background checks
          </li>
          <li className="flex items-start">
            <span className="font-bold mr-2">4.</span>
            Start making a difference!
          </li>
        </ol>
      </div>
    </div>
    <div className="text-center mt-8">
      <button 
        onClick={() => setShowForm(true)}
        className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-all"
      >
        Become a Volunteer
      </button>
    </div>
  </div>
</section>


      {/* Volunteer Enquiry Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-xl w-full max-w-md p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Volunteer Enquiry
              </h3>
              <form
                action="https://formspree.io/f/yourEndpoint"  // Replace with your Formspree endpoint
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Why do you want to volunteer?</label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Submit
                </motion.button>
              </form>
              <button
                onClick={closeModal}
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                &times;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VolunteersPage;
