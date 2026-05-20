"use client"

//  components/ProjectSlider.jsx
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const CasestudySlider = ({ projects,servicestitle,projectstitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(6);

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
        setSlidesToShow(5.6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + slidesToShow >= projects.length 
        ? 0 
        : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 
        ? Math.max(0, projects.length - slidesToShow) 
        : prevIndex - 1
    );
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
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
  };

//   const titleProject=RenderResult;

  return (
    
    <div className="w-full relative py-8">
      <h2 className="text-3xl font-bold mb-6">Our Services</h2>
    
      <div 
        ref={sliderRef}
        className="overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)` }}
        >
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="px-2 min-w-full sm:min-w-1/2 md:min-w-1/3 lg:min-w-1/6"
              style={{ flex: `0 0 ${100 / slidesToShow}%` }}
            >
              <div className="bg-[#013912] rounded-lg border-2 overflow-hidden shadow-lg h-full flex flex-col">
                <div className="p-4 bg-[#013912] flex flex-col flex-grow">
                  <h3 className="text-xl text-white font-semibold mb-2">{project.title}</h3>
                </div>
    
                <div className="h-48 rounded-2xl bg-red-500 m-1 border-8 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                    className="transition-transform duration-300 hover:scale-110 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button 
        onClick={prevSlide}
        className="absolute top-1/2 left-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transform -translate-y-1/2 z-10"
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>
      
      <button 
        onClick={nextSlide}
        className="absolute top-1/2 right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transform -translate-y-1/2 z-10"
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

   {/* Progress Bar Indicator */}
{/* Minimal Two-Line Progress Indicator */}
<div className="flex justify-center mt-4 gap-2">
  {Array.from({ length: Math.ceil(projects.length / slidesToShow) }).map((_, idx) => (
    <div 
      key={idx}
      onClick={() => setCurrentIndex(idx * slidesToShow)}
      className={`w-8 h-1 transition-all duration-300 cursor-pointer ${
        currentIndex >= idx * slidesToShow && currentIndex < (idx + 1) * slidesToShow
          ? 'bg-blue-600 scale-110'
          : 'bg-gray-400 hover:bg-gray-500'
      }`}
    />
  ))}
</div>



    </div>
    
    
  );
};

export default CasestudySlider;