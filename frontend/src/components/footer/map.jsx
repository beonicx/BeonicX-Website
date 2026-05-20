'use client'
import React, { useState, useEffect } from 'react';
import { Map, Globe, Navigation } from 'lucide-react';

export default function InteractiveMap({ darkMode = false }) {
  const [rotation, setRotation] = useState(0);
  const [isGlobeView, setIsGlobeView] = useState(false);
  const [hoveredLocation, setHoveredLocation] = useState(null);
  
  // More realistic locations with coordinates for map links
  const locations = [
    { 
      id: 1, 
      name: "Noida", 
      x: 25, 
      y: 40, 
      description: "The Big Apple", 
      coords :"28.5355,77.3910",
      color: "red"
    },
    { 
      id: 2, 
      name: "London", 
      x: 45, 
      y: 35, 
      description: "The City on Thames", 
      coords: "51.5074,-0.1278",
      color: "blue"
    },
    { 
      id: 3, 
      name: "Tokyo", 
      x: 80, 
      y: 40, 
      description: "The Land of Rising Sun", 
      coords: "35.6762,139.6503",
      color: "green"
    },
    { 
      id: 4, 
      name: "Sydney", 
      x: 85, 
      y: 70, 
      description: "The Harbor City", 
      coords: "-33.8688,151.2093",
      color: "purple"
    },
    { 
      id: 5, 
      name: "Rio de Janeiro", 
      x: 35, 
      y: 65, 
      description: "The Marvelous City", 
      coords: "-22.9068,-43.1729",
      color: "orange"
    },
  ];

  // Rotate the globe
  useEffect(() => {
    const timer = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  // This function now directly opens Google Maps when a location is clicked
  const handleLocationClick = (coords) => {
    window.open(`https://www.google.com/maps?q=${coords}`, '_blank');
  };

  const toggleView = () => {
    setIsGlobeView(!isGlobeView);
    setHoveredLocation(null);
  };

  return (
    <div className={`w-full h-64 relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ${
      darkMode 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900 text-white' 
        : 'bg-gradient-to-b from-blue-100 to-blue-200 text-gray-800'
    }`}>
      {/* Toggle button */}
      <button 
        onClick={toggleView}
        className={`absolute top-3 right-3 z-10 p-2 rounded-full shadow-md transition-all hover:scale-110 ${
          darkMode ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-white text-blue-600 hover:bg-gray-100'
        }`}
      >
        {isGlobeView ? <Map size={20} /> : <Globe size={20} />}
      </button>

      {isGlobeView ? (
        /* 3D Globe View */
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className={`relative w-48 h-48 rounded-full shadow-xl transition-all hover:shadow-2xl ${
              darkMode ? 'bg-blue-900' : 'bg-blue-400'
            }`}
            style={{ transform: `rotateY(${rotation}deg)` }}
          >
            {/* Globe gradient overlay */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-transparent to-white opacity-30"></div>
            
            {/* Continents */}
            <div className={`absolute top-1/4 left-1/4 w-8 h-6 rounded-sm transform rotate-12 ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>
            <div className={`absolute top-2/4 left-1/3 w-10 h-8 rounded-md ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>
            <div className={`absolute bottom-1/4 right-1/4 w-12 h-6 rounded-sm transform -rotate-12 ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>

            {/* Equator line */}
            <div className={`absolute top-1/2 left-0 w-full h-1 opacity-50 transform -translate-y-1/2 ${darkMode ? 'bg-blue-400' : 'bg-blue-600'}`}></div>
            
            {/* Location indicators even on globe - now clickable */}
            {locations.map(location => (
              <div
                key={location.id}
                className="absolute w-3 h-3 rounded-full animate-pulse hover:scale-150 transition-all cursor-pointer"
                style={{ 
                  top: `${location.y}%`, 
                  left: `${location.x}%`,
                  backgroundColor: location.color,
                  zIndex: 20
                }}
                onClick={() => handleLocationClick(location.coords)}
              ></div>
            ))}
          </div>
        </div>
      ) : (
        /* 2D Map View */
        <div className={`absolute inset-0 ${darkMode ? 'bg-gray-800' : 'bg-blue-200'}`}>
          {/* Map grid lines */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6">
            {Array.from({ length: 48 }).map((_, index) => (
              <div 
                key={index} 
                className={`border opacity-30 ${darkMode ? 'border-blue-700' : 'border-blue-300'}`}
              ></div>
            ))}
          </div>

          {/* Continent shapes */}
          <div className={`absolute top-1/4 left-1/4 w-20 h-12 rounded-lg opacity-70 ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>
          <div className={`absolute top-1/3 right-1/4 w-24 h-16 rounded-lg opacity-70 ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>
          <div className={`absolute bottom-1/4 left-1/3 w-32 h-16 rounded-lg opacity-70 ${darkMode ? 'bg-green-800' : 'bg-green-500'}`}></div>

          {/* Map markers - now directly open maps on click */}
          {locations.map(location => (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-10"
              style={{ top: `${location.y}%`, left: `${location.x}%` }}
              onClick={() => handleLocationClick(location.coords)}
              onMouseEnter={() => setHoveredLocation(location)}
              onMouseLeave={() => setHoveredLocation(null)}
            >
              <div className="relative flex flex-col items-center">
                {/* Marker pin with map icon */}
                <div className="relative">
                  <div 
                    className="w-8 h-8 rounded-full shadow-lg flex items-center justify-center group-hover:scale-125 transition-all"
                    style={{ backgroundColor: location.color }}
                  >
                    <Navigation size={16} className="text-white" />
                  </div>
                  
                  {/* Pulsing effect */}
                  <div 
                    className="absolute top-0 left-0 w-8 h-8 rounded-full transform scale-125 opacity-30 animate-ping"
                    style={{ backgroundColor: location.color }}
                  ></div>
                </div>
                
                {/* Location name always visible */}
                <div className={`mt-1 px-2 py-1 rounded font-bold text-xs whitespace-nowrap ${
                  darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
                }`}>
                  {location.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tooltip when hovering over a location */}
      {hoveredLocation && (
        <div className={`absolute bottom-4 left-0 right-0 mx-auto w-48 text-center p-2 rounded-lg shadow-lg ${
          darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
        }`}>
          Click to open in Google Maps
        </div>
      )}

      {/* Controls */}
      {!isGlobeView && (
        <div className="absolute bottom-3 right-3 flex gap-2">
          <button className={`p-2 rounded-full shadow-md font-bold ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}>+</button>
          <button className={`p-2 rounded-full shadow-md font-bold ${
            darkMode 
              ? 'bg-gray-700 text-white hover:bg-gray-600' 
              : 'bg-white text-gray-800 hover:bg-gray-100'
          }`}>−</button>
        </div>
      )}
      
      {/* Map legend */}
      <div className={`absolute top-3 left-3 px-3 py-2 rounded-lg text-xs font-medium ${
        darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-800'
      }`}>
        Interactive World Map
        <div className="text-xs mt-1 opacity-75">Click locations to open Google Maps</div>
      </div>
    </div>
  );
}