import React from 'react';

const FreelamceBanner = ({ darkMode }) => {
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`w-full mb-10 rounded-xl px-4 sm:px-8 md:px-12 lg:px-20 py-12 sm:py-16 flex flex-col items-center justify-center 
        ${darkMode ? 'bg-gray-900 text-white' : 'bg-[#3D1520] text-white'} 
        transition-colors duration-300`}>
        
        <div className="max-w-screen-xl w-full text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 leading-snug">
            BeonicX services at your <span className="text-[#FF6B35]">fingertips</span>
          </h1>

          <button className={`px-6 py-3 rounded-md font-medium text-sm sm:text-base transition-colors
            ${darkMode 
              ? 'bg-[#FF6B35] text-white hover:bg-[#ff844f]' 
              : 'bg-white text-gray-800 hover:bg-gray-200'}`}>
            Join BeonicX
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreelamceBanner;
