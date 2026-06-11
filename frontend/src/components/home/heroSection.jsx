import React from 'react';

function HeroSection({ darkMode }) {
  const stats = [
    {
      icon: "🤖",
      number: "50+",
      label: "AI Agents Built",
      bgColor: "bg-pink-100 dark:bg-pink-500",
      textColor: "text-pink-500 dark:text-white"
    },
    {
      icon: "⚡",
      number: "95%",
      label: "Automation Rate",
      bgColor: "bg-green-100 dark:bg-green-500",
      textColor: "text-green-500 dark:text-white"
    },
    {
      icon: "🧠",
      number: "50+",
      label: "AI Models Trained",
      bgColor: "bg-blue-100 dark:bg-blue-500",
      textColor: "text-blue-500 dark:text-white"
    },
    {
      icon: "💬",
      number: "100+",
      label: "Conversational AI",
      bgColor: "bg-red-100 dark:bg-red-500",
      textColor: "text-red-500 dark:text-white"
    },
    {
      icon: "📈",
      number: "1M+",
      label: "Tasks Processed",
      bgColor: "bg-purple-100 dark:bg-purple-500",
      textColor: "text-purple-500 dark:text-white"
    },
    {
      icon: "⭐",
      number: "30+",
      label: "Enterprise Clients",
      bgColor: "bg-yellow-100 dark:bg-yellow-500",
      textColor: "text-yellow-600 dark:text-white"
    },
    {
      icon: "🔄",
      number: "24/7",
      label: "Agent Uptime",
      bgColor: "bg-green-100 dark:bg-green-500",
      textColor: "text-green-500 dark:text-white"
    },
    {
      icon: "🎯",
      number: "75%",
      label: "Cost Reduction",
      bgColor: "bg-purple-100 dark:bg-purple-500",
      textColor: "text-purple-500 dark:text-white"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
  
        {/* Hero Title and Description */}
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">
            BeonicX: Transforming Businesses with Intelligent AI Agents
          </h1>
          <div className={`h-1 w-24 sm:w-32 mb-6 sm:mb-8 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'}`}></div>
          <p className={`text-sm sm:text-base md:text-lg mb-10 sm:mb-12 md:mb-16 max-w-4xl ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            We build cutting-edge AI agents that automate complex workflows, enhance decision-making, and drive business growth.
            Our SaaS platform empowers enterprises with autonomous AI systems that work 24/7 to streamline operations,
            boost productivity, and deliver measurable ROI.
          </p>
        </div>
  
        {/* Stats Grid 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.slice(0, 4).map((stat, index) => (
            <div
              key={index}
              className={`flex items-center p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
  
        {/* Spacer */}
        <div className="h-6 sm:h-8 md:h-12"></div>
  
        {/* Stats Grid 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {stats.slice(4, 8).map((stat, index) => (
            <div
              key={index}
              className={`flex items-center p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <div className={`flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center ${stat.bgColor} rounded-lg text-xl sm:text-2xl ${stat.textColor}`}>
                {stat.icon}
              </div>
              <div className="ml-3 sm:ml-4">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold">{stat.number}</div>
                <div className={`text-xs sm:text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
  
}

export default HeroSection;
