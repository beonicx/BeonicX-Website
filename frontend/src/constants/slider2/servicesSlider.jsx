'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const ServicesSlider = ({
  darkMode,
  projects = [],
  servicestitle = "Our Services",
  description = "We offer cutting-edge, custom tech solutions to fuel your growth. Explore how we can help you succeed."
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) setSlidesToShow(1);
      else if (width < 768) setSlidesToShow(2);
      else if (width < 1024) setSlidesToShow(3);
      else setSlidesToShow(4);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= projects.length - slidesToShow + 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - Math.floor(slidesToShow) : prevIndex - 1
    );
  };

  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) nextSlide();
    if (touchStart - touchEnd < -50) prevSlide();
  };

  return (
    <div className="w-full relative py-12 px-4 sm:px-6 lg:px-12 transition-all duration-500">
      <h2 className={`text-4xl font-bold text-center mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
        {servicestitle}
      </h2>
      <p className={`text-center max-w-3xl mx-auto text-base mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
        {description}
      </p>

      <div
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className="overflow-hidden"
      >
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="px-3"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div className="perspective-[1000px]">
                <div className={`rounded-2xl shadow-lg border transform hover:rotate-[1deg] hover:scale-[1.03] hover:shadow-2xl transition-all duration-500 ease-in-out h-full flex flex-col group 
                  ${darkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'}`}>
                  
                  <div className="h-48 relative w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                      {project.title}
                    </h3>
                    <p className={`text-sm mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      {project.description}
                    </p>
                    <button className="opacity-0 group-hover:opacity-100 bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-all duration-300 mt-auto">
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-gray-100 dark:bg-gray-800 p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-gray-700"
      >
        <svg className="w-6 h-6 text-gray-800 dark:text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx * slidesToShow)}
            className={`w-8 h-1 rounded transition-all duration-300 ${
              currentIndex >= idx * slidesToShow && currentIndex < (idx + 1) * slidesToShow
                ? 'bg-blue-600 dark:bg-blue-400 scale-110'
                : 'bg-gray-400 dark:bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSlider;
