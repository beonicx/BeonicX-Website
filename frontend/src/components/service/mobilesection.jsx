import React from 'react'

function mobilesection() {
  return (
    <section className="py-16">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md text-white font-semibold mr-3">
              <span>01</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Mobile App Development</h2>
          </div>
          <div className="w-16 h-1 bg-gray-800 mb-8"></div>
          
          <div className="space-y-4 mb-8">
            <TechItem text="Android App" />
            <TechItem text="iPhone App" />
            <TechItem text="React Native" />
            <TechItem text="Kotlin" />
            <TechItem text="Ionic" />
            <TechItem text="Flutter App" />
          </div>
        </div>
        
        <div className="w-full md:w-3/5 relative">
          <div className="rounded-xl overflow-hidden shadow-xl transform hover:scale-105 transition duration-500 relative">
            <div className="p-6 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
              <h3 className="text-xl font-bold mb-3">FlexMobile</h3>
              <p className="text-gray-300 mb-4">A mobile application showcase</p>
            </div>
            <div className="bg-gray-100 p-6 relative">
              <div className="flex justify-center items-end space-x-6">
                <div className="w-32 h-64 bg-black rounded-xl overflow-hidden shadow-lg transform -translate-y-8 rotate-3 hover:rotate-0 transition duration-300">
                  <div className="bg-purple-600 text-white p-2 text-xs">FlexMobile App</div>
                  <div className="bg-gray-900 h-full"></div>
                </div>
                <div className="w-40 h-72 bg-black rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 z-10">
                  <div className="bg-purple-600 text-white p-2 text-xs">FlexMobile Main</div>
                  <div className="bg-gray-900 h-full"></div>
                </div>
                <div className="w-32 h-64 bg-black rounded-xl overflow-hidden shadow-lg transform -translate-y-8 -rotate-3 hover:rotate-0 transition duration-300">
                  <div className="bg-purple-600 text-white p-2 text-xs">FlexMobile App</div>
                  <div className="bg-gray-900 h-full"></div>
                </div>
              </div>
              <div className="absolute bottom-4 right-4">
                <div className="bg-white p-2 rounded-full shadow-lg">
                  <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default mobilesection