import React, { useState, useEffect } from 'react';

export default function Toppage({ darkMode = false }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  
  // Particle animation for background
  const [particles, setParticles] = useState([]);
  
  useEffect(() => {
    // Generate random particles for background effect
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
    }));
    setParticles(newParticles);
    
    // Animation loop for particles
    const interval = setInterval(() => {
      setParticles(prev => 
        prev.map(p => ({
          ...p,
          y: (p.y + p.speed) % 100
        }))
      );
    }, 100);
    
    return () => clearInterval(interval);
  }, []);

  // Properly functioning 3D button animation
  const handleButtonHover = () => {
    setIsAnimating(true);
  };
  
  const handleButtonLeave = () => {
    setIsAnimating(false);
  };
  
  const handleQueryClick = () => {
    setShowModal(true);
  };
  
  return (
    <div className={`min-h-screen bg-cover bg-center bg-no-repeat relative overflow-hidden ${darkMode ? 'text-white' : 'text-gray-900'}`}>
      {/* Modern background */}
      <div className="absolute inset-0 w-full h-full z-0 transition-all duration-700">
        {darkMode ? (
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: "url('/api/placeholder/1920/1080')",
              filter: 'brightness(0.4) saturate(1.2)'
            }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            {/* Gradient orbs */}
            <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-purple-200/40 to-pink-200/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
              backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}></div>

            {/* Dots pattern */}
            <div className="absolute inset-0 opacity-[0.04]" style={{
              backgroundImage: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        )}
      </div>

      {/* Animated particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute rounded-full ${darkMode ? 'bg-blue-400' : 'bg-blue-300'} opacity-20 z-1`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transition: 'top 1s linear'
          }}
        />
      ))}
      
      {/* Content overlay with glassmorphism effect */}
      <div className={`relative z-10 min-h-screen 
        ${darkMode ? 'bg-gradient-to-br from-black/80 to-purple-900/50' : 'bg-gradient-to-br from-white/60 to-purple-100/40'} 
        backdrop-blur-sm px-4 sm:px-6 md:px-12 lg:px-20 py-8 md:py-12`}>
        
        {/* Header with navigation */}
      
        
        {/* Main content with enhanced typography */}
        <main className="mt-16 md:mt-24 max-w-4xl ">
          {/* Animated headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="block mb-2">Empowering Businesses with</span>
            <span className="flex items-center">
              <span className={`mr-2 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Intelligent AI Agents</span>
            </span>
          </h1>

          {/* AI Agent highlight with badge */}
          <div className="mt-8 flex items-center">
            <div className={`flex items-center justify-center w-16 h-16 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-purple-100'} mr-4`}>
              <span className="text-3xl">🤖</span>
            </div>
            <div>
              <p className="text-xl md:text-2xl flex items-center flex-wrap">
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-bold text-2xl mr-2`}>AI-Powered</span>
                <span>SaaS Solutions for Modern Enterprises</span>
              </p>
              <div className="flex mt-1 space-x-2">
                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-purple-800' : 'bg-purple-200'}`}>Automation</span>
                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-blue-800' : 'bg-blue-200'}`}>AI Agents</span>
                <span className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-green-800' : 'bg-green-200'}`}>Intelligence</span>
              </div>
            </div>
          </div>
          
          {/* Fixed 3D Animation Button */}
          <div className="mt-10">
            <button 
              className={`group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-white shadow-lg
                ${darkMode ? 'bg-gradient-to-r from-blue-700 to-blue-700' : 'bg-gradient-to-r from-blue-600 to-blue-600'}
                transition-all duration-300 ease-out
                ${isAnimating ? 'shadow-blue-500/50 translate-y-0' : ''}`}
              style={{
                transform: isAnimating ? 'perspective(500px) rotateX(10deg) scale(1.05)' : 'perspective(500px) rotateX(0) scale(1)',
                transformStyle: 'preserve-3d'
              }}
              onMouseEnter={handleButtonHover}
              onMouseLeave={handleButtonLeave}
              onClick={handleQueryClick}
            >
              <span className="relative z-10 flex items-center">
                <svg 
                  className={`w-6 h-6 mr-2 transition-transform duration-500 ${isAnimating ? 'translate-x-1' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d={isAnimating ? "M14 5l7 7m0 0l-7 7m7-7H3" : "M13 5l7 7-7 7M5 12h15"}
                  ></path>
                </svg>
                Drop Your Queries
              </span>
              <span 
                className={`absolute inset-0 w-full h-full transition-all duration-300 
                ${isAnimating ? 'bg-white opacity-20' : 'bg-white opacity-0'}`}
              ></span>
              <span 
                className="absolute bottom-0 left-0 w-full h-1 bg-white rounded 
                transition-all duration-300 transform origin-left
                group-hover:scale-x-100 scale-x-0"
              ></span>
            </button>
          </div>
          
          {/* Stats counter section */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white/80'} shadow-md`}>
              <div className="text-3xl font-bold mb-1">50+</div>
              <div className="text-sm">AI Agents Deployed</div>
            </div>
            <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white/80'} shadow-md`}>
              <div className="text-3xl font-bold mb-1">30+</div>
              <div className="text-sm">Enterprise Clients</div>
            </div>
            <div className={`p-4 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-white/80'} shadow-md`}>
              <div className="text-3xl font-bold mb-1">5M+</div>
              <div className="text-sm">Tasks Automated</div>
            </div>
          </div>
          
          {/* Partners section with improved logos */}
          <div className="mt-12 md:mt-16">
            <p className="font-bold text-lg mb-4">Trusted by Global Brands :</p>
            <div className="flex flex-wrap gap-5 mt-3 justify-center sm:justify-start">
              <div className={`h-12 w-28 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md transition-transform hover:scale-105`}>
                <span className={`${darkMode ? 'text-purple-400' : 'text-purple-600'} font-bold text-lg`}>Google</span>
              </div>
              <div className={`h-12 w-28 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md transition-transform hover:scale-105`}>
                <span className={`${darkMode ? 'text-red-400' : 'text-red-600'} font-bold text-lg`}>Hostinger</span>
              </div>
              <div className={`h-12 w-28 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md transition-transform hover:scale-105`}>
                <span className={`${darkMode ? 'text-orange-400' : 'text-orange-600'} font-bold text-lg`}>AWS</span>
              </div>
              <div className={`h-12 w-28 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} flex items-center justify-center shadow-md transition-transform hover:scale-105`}>
                <span className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-bold text-lg`}>Shopify</span>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      {/* Query Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setShowModal(false)}></div>
          <div className={`relative ${darkMode ? 'bg-blue-900' : 'bg-white'} rounded-xl shadow-2xl p-6 w-full max-w-md mx-auto`}>
            <h3 className="text-xl font-bold mb-4">Drop Your Queries</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Your Name</label>
                <input 
                  type="text" 
                  className={`w-full px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="John Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email Address</label>
                <input 
                  type="email" 
                  className={`w-full px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="john@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Your Query</label>
                <textarea 
                  className={`w-full px-3 py-2 rounded-lg ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} focus:outline-none focus:ring-2 focus:ring-purple-500`}
                  placeholder="Tell us what you need..." 
                  rows={4}
                ></textarea>
              </div>
              <button className={`w-full py-2 rounded-lg font-medium text-white ${darkMode ? 'bg-purple-600 hover:bg-purple-500' : 'bg-purple-500 hover:bg-purple-400'} transition-colors`}>
                Submit Query
              </button>
            </div>
            <button 
              className="absolute top-3 right-3 text-2xl" 
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}