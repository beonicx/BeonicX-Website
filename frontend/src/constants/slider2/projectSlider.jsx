"use client"

// components/EnhancedProjectSlider.jsx
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const EnhancedProjectSlider = ({ 
  darkMode, 
  projects, 
  description = "Explore our portfolio of successful projects that showcase our expertise and dedication to quality." 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeProject, setActiveProject] = useState(null);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [autoplay, setAutoplay] = useState(true);
  const autoplayRef = useRef(null);

  // Handle responsive number of slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 768) {
        setSlidesToShow(2);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(3);
      } else {
        setSlidesToShow(4);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Setup autoplay
  useEffect(() => {
    if (autoplay) {
      autoplayRef.current = setInterval(() => {
        nextSlide();
      }, 3000);
    }
  
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [autoplay, currentIndex, slidesToShow]);

  // Set initial active project
  useEffect(() => {
    if (projects && projects.length > 0) {
      setActiveProject(projects[currentIndex]);
    }
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1 >= projects.length ? 0 : prevIndex + 1;
      setActiveProject(projects[newIndex]);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? projects.length - 1 : prevIndex - 1;
      setActiveProject(projects[newIndex]);
      return newIndex;
    });
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setActiveProject(projects[index]);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
    setAutoplay(false); // Pause autoplay on interaction
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }

    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
    
    // Resume autoplay after 5 seconds of inactivity
    setTimeout(() => setAutoplay(true), 5000);
  };

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  return (
    <div className={`w-full relative py-12 transition-colors duration-300 ${
      darkMode 
        ? 'bg-gray-900 from-gray-900 to-gray-800 text-white' 
        : 'bg-gradient-to-b from-gray-50 to-gray-100 text-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        {/* Header Section with Title and Description */}
        <div className="text-center mb-12">
          <h2 className={`text-4xl font-bold mb-4 relative inline-block  ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Projects
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-600 rounded-full"></span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {description}
          </p>
        </div>

        {/* Featured Project Display */}
        {activeProject && (
          <div className={`mb-12 rounded-xl shadow-xl p-6 transition-all duration-500 ${
            darkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/2 h-64 md:h-96 relative rounded-xl overflow-hidden">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              <div className="md:w-1/2 flex flex-col justify-center">
                <h3 className={`text-3xl font-bold mb-4 ${
                  darkMode ? 'text-white' : 'text-gray-800'
                }`}>{activeProject.title}</h3>
                <p className={`mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {activeProject.description || "This is one of our featured projects showcasing our expertise and commitment to excellence."}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tags && activeProject.tags.map((tag, i) => (
                    <span key={i} className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-green-900 text-green-100' 
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="self-start px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors shadow-md">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Projects Carousel */}
        <div 
          ref={sliderRef}
          className="overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div 
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${(currentIndex % projects.length) * (100 / slidesToShow)}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={index} 
                className={`px-3 min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/4 transition-all duration-300 ${
                  index === currentIndex ? 'scale-100' : 'scale-95 opacity-90'
                }`}
                style={{ flex: `0 0 ${100 / slidesToShow}%` }}
              >
                <div 
                  className={`rounded-xl overflow-hidden shadow-lg h-full cursor-pointer transform transition-all duration-300 hover:translate-y-2 ${
                    index === currentIndex ? 'ring-2 ring-green-500 ring-offset-2' : ''
                  } ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
                  onClick={() => goToSlide(index)}
                >
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      className="transition-transform duration-500 hover:scale-110 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8">
          <button 
            onClick={prevSlide}
            className={`rounded-full p-3 shadow-lg transition-colors ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          {/* Progress Indicator */}
          <div className="flex items-center gap-2 mx-4 flex-1 justify-center">
            {Array.from({ length: Math.min(8, projects.length) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'w-8 bg-green-600' 
                    : darkMode 
                      ? 'bg-gray-600 hover:bg-gray-500' 
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <button 
            onClick={nextSlide}
            className={`rounded-full p-3 shadow-lg transition-colors ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-600 text-white' 
                : 'bg-white hover:bg-gray-100 text-gray-800'
            }`}
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>

        {/* Autoplay Control */}
        <div className="text-center mt-6">
          <button 
            onClick={() => setAutoplay(!autoplay)}
            className={`text-sm flex items-center gap-2 mx-auto ${
              darkMode 
                ? 'text-gray-400 hover:text-gray-200' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {autoplay ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="4" width="4" height="16"></rect>
                  <rect x="14" y="4" width="4" height="16"></rect>
                </svg>
                Pause Slideshow
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Play Slideshow
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EnhancedProjectSlider;