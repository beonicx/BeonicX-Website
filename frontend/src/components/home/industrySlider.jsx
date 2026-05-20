"use client"

// components/EnhancedIndustrySlider.jsx
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const EnhancedIndustrySlider = ({ 
  darkMode = false,
  industries = defaultIndustries,
  title = "Industries We Serve",
  description = "We deliver innovative digital solutions across diverse industries, helping businesses transform their operations and reach new heights."
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const autoplayRef = useRef(null);

  // Handle auto-sliding
  useEffect(() => {
    if (!isPaused) {
      autoplayRef.current = setInterval(() => {
        handleNext();
      }, 5000);
    }
    return () => clearInterval(autoplayRef.current);
  }, [currentIndex, isPaused]);

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === 0 ? industries.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
    pauseAutoplay(3000);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev === industries.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || currentIndex === index) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
    pauseAutoplay(3000);
  };

  const pauseAutoplay = (duration = 0) => {
    setIsPaused(true);
    if (duration > 0) {
      setTimeout(() => setIsPaused(false), duration);
    }
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    pauseAutoplay();
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      handleNext();
    }

    if (touchStart - touchEnd < -50) {
      handlePrev();
    }
    pauseAutoplay(3000);
  };

  return (
    <div className={`relative w-full py-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {title}
            <span className="block w-24 h-1 mx-auto mt-2 bg-blue-600 rounded-full"></span>
          </h2>
          <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            {description}
          </p>
        </div>

        {/* Featured Industry */}
        <div className="mb-12">
          <div 
            className={`rounded-xl overflow-hidden shadow-xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="relative h-64 md:h-auto">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform hover:scale-105"
                  style={{ backgroundImage: `url(${industries[currentIndex].image})` }}
                ></div>
                <div className={`absolute inset-0 ${darkMode ? 'bg-blue-900/30' : 'bg-blue-700/20'}`}></div>
              </div>
              
              {/* Content Side */}
              <div className="p-8 flex flex-col justify-center">
                <div className={`inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full ${
                  darkMode ? 'bg-blue-900 text-blue-100' : 'bg-blue-100 text-blue-800'
                }`}>
                  Industry Focus
                </div>
                <h3 className={`text-3xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {industries[currentIndex].title}
                </h3>
                <p className={`mb-6 text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {industries[currentIndex].subtitle}
                </p>
                {industries[currentIndex].features && (
                  <div className="mb-6">
                    <h4 className={`font-semibold mb-2 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                      Key Solutions:
                    </h4>
                    <ul className={`space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {industries[currentIndex].features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <button className={`self-start px-6 py-2 rounded-lg shadow-md transition-colors ${
                  darkMode 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Industry Thumbnails */}
        <div 
          className="relative overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className={`relative h-48 sm:h-52 md:h-56 lg:h-64 overflow-hidden rounded-lg cursor-pointer transition-all duration-300 transform ${
                  idx === currentIndex 
                    ? `ring-2 ${darkMode ? 'ring-blue-500' : 'ring-blue-600'} scale-[1.02]` 
                    : 'hover:scale-[1.01]'
                }`}
                onClick={() => goToSlide(idx)}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out"
                  style={{ backgroundImage: `url(${industry.image})` }}
                ></div>

                {/* Overlay */}
                <div className={`absolute inset-0 ${
                  idx === currentIndex
                    ? darkMode ? 'bg-blue-900/75' : 'bg-blue-700/75'
                    : darkMode ? 'bg-gray-900/65' : 'bg-gray-800/65'
                } transition-colors duration-300`}></div>

                {/* Text Content */}
                <div className="absolute inset-0 flex flex-col justify-end z-10 p-4 sm:p-5">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">
                    {industry.title}
                  </h2>
                  <div className={`w-10 h-0.5 ${
                    idx === currentIndex ? 'bg-blue-400' : 'bg-white/70'
                  } mb-3`}></div>
                  <p className="text-sm text-white/90 line-clamp-2">
                    {industry.subtitle}
                  </p>
                </div>

                {/* Selected indicator */}
                {idx === currentIndex && (
                  <div className="absolute top-3 right-3">
                    <div className={`w-3 h-3 rounded-full ${
                      darkMode ? 'bg-blue-400' : 'bg-blue-500'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2 z-10">
            <button
              onClick={handlePrev}
              className={`rounded-full p-2 shadow-lg transition-all ${
                darkMode 
                  ? 'bg-gray-800/70 hover:bg-gray-700 text-white' 
                  : 'bg-white/70 hover:bg-white text-gray-800'
              }`}
              aria-label="Previous industry"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className={`rounded-full p-2 shadow-lg transition-all ${
                darkMode 
                  ? 'bg-gray-800/70 hover:bg-gray-700 text-white' 
                  : 'bg-white/70 hover:bg-white text-gray-800'
              }`}
              aria-label="Next industry"
              disabled={isAnimating}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {industries.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? `w-10 ${darkMode ? 'bg-blue-500' : 'bg-blue-600'}` 
                  : `w-2 ${darkMode ? 'bg-gray-600' : 'bg-gray-300'} hover:bg-gray-400`
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            ></button>
          ))}
        </div>

        {/* Auto-play control */}
        <div className="text-center mt-6">
          <button 
            onClick={() => setIsPaused(!isPaused)}
            className={`text-sm flex items-center gap-2 mx-auto ${
              darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {isPaused ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Resume Auto-Scroll
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause Auto-Scroll
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

// Default industry data with expanded content
const defaultIndustries = [
  {
    title: "Logistics & Distribution",
    subtitle: "Bring your logistic industry-specific development requirements to get unique customer-centric solutions.",
    image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Real-time shipment tracking systems",
      "Fleet management optimization",
      "Smart inventory control",
      "Route optimization algorithms"
    ]
  },
  {
    title: "Social Networking",
    subtitle: "Build engaging and seasoned social media applications that can offer a unique user experience.",
    image: "https://images.pexels.com/photos/12663061/pexels-photo-12663061.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=252&fit=crop&h=408",
    features: [
      "Advanced user engagement analytics",
      "Content recommendation engines",
      "Privacy-first messaging systems",
      "Real-time notification infrastructure"
    ]
  },
  {
    title: "Real Estate",
    subtitle: "Get cutting-edge real-estate solutions designed specifically to meet your unique business requirements.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Virtual property tours",
      "AI-powered price prediction",
      "Document automation systems",
      "Property management platforms"
    ]
  },
  {
    title: "Travel & Hospitality",
    subtitle: "Deliver seamless travel experience along with seamless user experience with top-notch features.",
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Personalized booking engines",
      "Dynamic pricing systems",
      "Customer loyalty platforms",
      "Contactless check-in solutions"
    ]
  },
  {
    title: "Healthcare & Wellness",
    subtitle: "Transform patient care with cutting-edge digital healthcare solutions that improve outcomes and efficiency.",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Telemedicine platforms",
      "Electronic health records",
      "Patient monitoring systems",
      "Medical inventory management"
    ]
  },
  {
    title: "Financial Services",
    subtitle: "Empower your financial business with secure, compliant, and user-friendly digital solutions.",
    image: "https://images.pexels.com/videos/3466611/free-video-3466611.jpg?auto=compress&cs=tinysrgb&h=204&fit=crop&w=228&dpr=2",
    features: [
      "Secure payment gateways",
      "Risk assessment algorithms",
      "Personal finance management",
      "Fraud detection systems"
    ]
  },
];

export default EnhancedIndustrySlider;