import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, Handshake, Rocket, Globe, Users, Heart, 
  HeartHandshake, ArrowRight, ArrowLeft 
} from 'lucide-react';

// Import images
import logo1 from '../assets/logo.jpg';
import logo2 from '../assets/hopelogo2.png';
import logo3 from '../assets/hopelogo3.webp';
import logo4 from '../assets/hopelogo4.webp';

const carouselContent = [
  {
    id: 1,
    tagline: "A Mission to Bring Hope",
    headline: "Empowering Lives Through Support",
    description: "HopeForAll's mission is to offer financial aid and relief to cancer patients, ensuring no one is denied treatment due to financial barriers. We believe every person deserves the chance for treatment and recovery with dignity.",
    logo: logo1,
    primaryAction: {
      text: "Learn More About Us",
      link: "/about/why-cancer",
      icon: HeartHandshake
    },
    secondaryAction: {
      text: "Governance Details",
      link: "/about/governance",
      icon: Users
    },
    iconVariant: Sparkles
  },
  {
    id: 2,
    tagline: "Understanding Cancer",
    headline: "Knowledge is Power",
    description: "Cancer is a major health challenge, and early detection can make a life-saving difference. Our resources help educate the public about signs, symptoms, and preventive measures.",
    logo: logo2,
    primaryAction: {
      text: "What is Cancer?",
      link: "/understanding/what-is-cancer",
      icon: Globe
    },
    secondaryAction: {
      text: "Signs & Symptoms",
      link: "/understanding/signs-symptoms",
      icon: Users
    },
    iconVariant: Globe
  },
  {
    id: 3,
    tagline: "Get Involved & Make a Difference",
    headline: "Your Support Matters",
    description: "HopeForAll invites you to join our mission. Whether through volunteering, collaborating, or spreading awareness, your involvement can change lives and help us fight cancer together.",
    logo: logo3,
    primaryAction: {
      text: "Volunteer",
      link: "/get-involved/volunteers",
      icon: Handshake
    },
    secondaryAction: {
      text: "Collaborate",
      link: "/get-involved/contact",
      icon: Rocket
    },
    iconVariant: Users
  },
  {
    id: 4,
    tagline: "Support Center",
    headline: "Providing Resources and Assistance",
    description: "Our Support Center is dedicated to helping those affected by cancer access the aid they need. From financial assistance to guidance, we're here for you every step of the way.",
    logo: logo4,
    primaryAction: {
      text: "Visit Support Center",
      link: "/get-help",
      icon: Users
    },
    secondaryAction: {
      text: "Donate to Help",
      link: "/donate",
      icon: Heart
    },
    iconVariant: Users
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselContent.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselContent.length) % carouselContent.length);
  };

  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 7000);
    return () => clearInterval(slideInterval);
  }, []);

  const CurrentSlide = carouselContent[currentSlide];
  const IconVariant = CurrentSlide.iconVariant;

  return (
    <section 
      className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white 
                 min-h-screen max-h-[1200px] h-screen flex items-center justify-center 
                 px-4 md:px-8 lg:px-16 overflow-hidden"
    >
      {/* Simple static background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-600 rounded-full filter blur-3xl" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 lg:left-16 z-20 
                   bg-white/20 rounded-full p-2 sm:p-3 
                   hover:bg-white/30 transition-colors 
                   top-1/2 -translate-y-1/2 hidden sm:block"
      >
        <ArrowLeft className="text-white" size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 lg:right-16 z-20 
                   bg-white/20 rounded-full p-2 sm:p-3 
                   hover:bg-white/30 transition-colors 
                   top-1/2 -translate-y-1/2 hidden sm:block"
      >
        <ArrowRight className="text-white" size={24} />
      </button>

      {/* Mobile Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 sm:hidden">
        {carouselContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 
                        ${currentSlide === index ? 'bg-teal-500' : 'bg-white/30'}`}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 
                     items-center relative z-10 w-full px-4">
        {/* Image Section */}
        <div className="flex justify-center items-center order-2 lg:order-1 mb-6 sm:mb-0">
          <div className="relative group max-w-sm md:max-w-md lg:max-w-lg w-full aspect-square">
            <img
              src={CurrentSlide.logo}
              alt={`HopeForAll Slide ${CurrentSlide.id}`}
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="text-center lg:text-left space-y-6 order-1 lg:order-2">
          {/* Tagline */}
          <div className="inline-block bg-teal-500/20 px-4 py-2 rounded-full mb-4">
            <p className="text-teal-300 text-sm font-medium uppercase tracking-wide 
                          flex items-center justify-center">
              <IconVariant className="mr-2 text-teal-400" size={16} />
              {CurrentSlide.tagline}
            </p>
          </div>

          {/* Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight 
                       leading-tight mb-6">
            {CurrentSlide.headline}
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 max-w-xl">
            {CurrentSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start 
                        space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to={CurrentSlide.primaryAction.link}
              className="bg-gradient-to-r from-teal-600 to-blue-600 text-white 
                         px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-2xl 
                         hover:bg-teal-700 transition-colors duration-300 
                         font-bold tracking-wide text-sm sm:text-base lg:text-lg 
                         flex items-center justify-center"
            >
              <CurrentSlide.primaryAction.icon className="mr-2" size={16} />
              {CurrentSlide.primaryAction.text}
            </Link>
            <Link
              to={CurrentSlide.secondaryAction.link}
              className="border-2 border-teal-500 text-teal-400 
                         px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full 
                         hover:bg-teal-900/30 hover:text-teal-200 
                         transition-colors duration-300 font-bold tracking-wide 
                         text-sm sm:text-base lg:text-lg flex justify-center items-center"
            >
              <CurrentSlide.secondaryAction.icon className="mr-2" size={16} />
              {CurrentSlide.secondaryAction.text}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;