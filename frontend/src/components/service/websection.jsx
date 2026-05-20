import React from 'react'

function websection() {
  return (
    <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4 md:px-8">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/5 mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-md text-white font-semibold mr-3">
              <span>02</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Web & CMS Development</h2>
          </div>
          <div className="w-16 h-1 bg-gray-800 mb-8"></div>
          
          <div className="space-y-4 mb-8">
            <TechItem text="PHP" />
            <TechItem text="WordPress" />
            <TechItem text="Drupal" />
            <TechItem text="CodeIgniter" />
            <TechItem text="Joomla" />
            <TechItem text="Laravel" />
          </div>
        </div>
        
        <div className="w-full md:w-3/5">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-500">
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Explore our web development expertise to maximize your web presence which can help you captivate the audience by delivering unparalleled web experience.
              </p>
              
              <div className="relative h-64 md:h-80 overflow-hidden rounded-lg shadow-inner">
                <div className="flex items-center justify-center h-full perspective-1000">
                  <div className="transform transition duration-700 hover:rotate-y-12 relative">
                    <div className="w-80 h-48 bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                      <div className="h-6 bg-gray-900 flex items-center px-3">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-full opacity-80"></div>
                    </div>
                    <div className="w-64 h-40 bg-gray-800 rounded-lg shadow-xl overflow-hidden absolute -bottom-12 -right-12 z-10">
                      <div className="h-4 bg-gray-900 flex items-center px-2">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-red-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-yellow-500 rounded-full"></div>
                          <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full opacity-80"></div>
                    </div>
                    <div className="w-32 h-20 bg-gray-800 rounded-lg shadow-xl overflow-hidden absolute -top-6 -left-6 z-0">
                      <div className="h-3 bg-gray-900"></div>
                      <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-full opacity-80"></div>
                    </div>
                  </div>
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

export default websection