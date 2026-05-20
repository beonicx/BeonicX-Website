import React from 'react'

function DeveopmentSection() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Offering Exclusive Edge Following</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Custom Software Development</h2>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Lifecycle</h2>
      
      <div className="w-24 h-1 bg-gray-800 mx-auto mb-8"></div>
      
      <p className="text-center text-lg text-gray-700 mb-16 max-w-3xl mx-auto">
        Customizing and delivering cutting-edge solutions employing the custom software development lifecycle to help businesses meet their future demands
      </p>
      
      <div className="relative">
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 transform -translate-y-1/2 z-0"></div>
        
        <div className="flex flex-col md:flex-row justify-between relative z-10">
          <div className="flex-1 flex flex-col items-center mb-12 md:mb-0 transform transition duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-2xl font-bold text-indigo-600 mb-6">1</div>
            <h3 className="text-2xl font-bold mb-4">Ideation</h3>
            <p className="text-center text-gray-700 max-w-xs">
              Brainstorm creative ideas to ideate them and come up with a plan to turn them into a successful smart solution.
            </p>
          </div>
          
          <div className="w-8 h-8 rotate-90 md:rotate-0 mx-auto md:mx-0">
            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          <div className="flex-1 flex flex-col items-center mb-12 md:mb-0 transform transition duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-2xl font-bold text-indigo-600 mb-6">2</div>
            <h3 className="text-2xl font-bold mb-4">Plan</h3>
            <p className="text-center text-gray-700 max-w-xs">
              Define the project goals, create a timeline & milestones, and build a team based on your development requirements.
            </p>
          </div>
          
          <div className="w-8 h-8 rotate-90 md:rotate-0 mx-auto md:mx-0">
            <svg className="w-full h-full text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
          
          <div className="flex-1 flex flex-col items-center transform transition duration-500 hover:scale-105">
            <div className="w-16 h-16 rounded-full bg-white border-2 border-indigo-600 flex items-center justify-center text-2xl font-bold text-indigo-600 mb-6">3</div>
            <h3 className="text-2xl font-bold mb-4">Design</h3>
            <p className="text-center text-gray-700 max-w-xs">
              Build interactive prototypes based on sketches and wireframes to illustrate and visualize the interface of the solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DeveopmentSection