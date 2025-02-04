import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, TrendingUp, Shield, Heart, Globe, Activity, BarChart, Clock, HandHeart, BrainCircuit, Building } from 'lucide-react';

const WhyCancerPage = () => {
  const statistics = [
    {
      value: "1.5M+",
      label: "New Cases Annually in India",
      icon: TrendingUp,
      color: "text-emerald-600",
      description: "Rising cancer cases need immediate attention"
    },
    {
      value: "70%",
      label: "Early Detection Success",
      icon: Target,
      color: "text-blue-600",
      description: "Higher survival rates with early diagnosis"
    },
    {
      value: "3+",
      label: "Most Common Types",
      icon: Activity,
      color: "text-purple-600",
      description: "Oral, breast, and lung cancers prevalent"
    },
    {
      value: "24/7",
      label: "Support Available",
      icon: Shield,
      color: "text-rose-600",
      description: "Continuous assistance for patients"
    }
  ];

  const focusAreas = [
    {
      icon: Heart,
      title: "Patient-First Approach",
      description: "We prioritize individual patient needs, ensuring personalized support for each case."
    },
    {
      icon: HandHeart,
      title: "Financial Aid",
      description: "Direct financial assistance for treatment costs, medications, and essential healthcare services."
    },
    {
      icon: Building,
      title: "Hospital Partnerships",
      description: "Collaboration with healthcare providers to identify and support patients in need."
    },
    {
      icon: Globe,
      title: "Community Impact",
      description: "Raising awareness about early detection and prevention through community initiatives."
    },
    {
      icon: BrainCircuit,
      title: "Research Support",
      description: "Contributing to cancer research and treatment advancement initiatives."
    },
    {
      icon: Clock,
      title: "Timely Intervention",
      description: "Quick response system to ensure immediate assistance when needed most."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Background Pattern */}
      <section className="relative pt-24 pb-16 px-4 md:px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why We Focus on Cancer Care
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
              Hope for All was founded by individuals with personal connections to cancer patients, 
              driven by their experiences to create meaningful change in cancer care accessibility.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Grid */}
      <section className="px-4 md:px-8 py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <motion.div 
                  className={`${stat.color} mb-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon size={32} />
                </motion.div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-gray-700 mb-2">
                  {stat.label}
                </p>
                <p className="text-gray-600">
                  {stat.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-4 md:px-8 py-16 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              To bring hope and relief to individuals and families affected by cancer by providing 
              crucial financial support, ensuring that no one is denied the chance for treatment 
              and recovery due to financial limitations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors"
              >
                <area.icon className="text-teal-400 mb-4" size={32} />
                <h3 className="text-xl font-semibold text-white mb-3">{area.title}</h3>
                <p className="text-gray-300">{area.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 md:px-8 py-16 bg-white">
  <div className="max-w-6xl mx-auto">
    <div className="flex flex-col md:flex-row items-center bg-gray-100 rounded-xl shadow-md p-8">
      {/* Left: Text Content */}
      <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-xl text-gray-700">
          Together, we can provide hope and support to those battling cancer.
          Your involvement can truly change lives.
        </p>
      </div>

      {/* Right: Buttons */}
      <div className="md:w-1/2 flex justify-center md:justify-end">
        <div className="flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-emerald-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-700 transition-colors"
          >
            Donate Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-emerald-600 text-emerald-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-emerald-600 hover:text-white transition-colors"
          >
            Become a Volunteer
          </motion.button>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  );
};

export default WhyCancerPage;