import React from 'react'

function blogsection() {
  return (
    <>
    <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-start mb-12">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Latest Blogs</h2>
              <div className="w-16 h-1 bg-gray-800 mb-8"></div>
              <p className="text-lg text-gray-700 mb-8">
                Browse through the technical knowledge about latest trends and technologies our experienced team would like to share with you
              </p>
              <button className="flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition">
                <span className="mr-2">Get All Insights</span>
                <ArrowRight size={20} />
              </button>
            </div>
            
            <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BlogCard 
                title="Build Your Own Letgo Clone App for Buying And Selling Success" 
                category="APP DEVELOPMENT" 
                date="07 APR 2025"
                readTime="5 Minutes Read"
                views={130}
                imageElement={<div className="h-40 bg-gradient-to-r from-yellow-400 to-red-500"></div>}
              />
              
              <BlogCard 
                title="How to Develop an App Like Flixster?" 
                category="APP DEVELOPMENT" 
                date="02 APR 2025"
                readTime="5 Minutes Read"
                views={195}
                imageElement={<div className="h-40 bg-gradient-to-r from-blue-400 to-indigo-500"></div>}
              />
              
              <BlogCard 
                title="How To Make Your Developers Happy & Deliver Faster?" 
                category="HIRE DEVELOPERS" 
                date="27 MAR 2025"
                readTime="10 Minutes Read"
                views={211}
                imageElement={<div className="h-40 bg-gradient-to-r from-green-400 to-blue-500"></div>}
              />
            </div>
          </div>
        </div>
      </section>
      
     
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-12 h-12 bg-indigo-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:bg-indigo-700 hover:scale-110 z-50"
      >
        <ChevronUp size={24} />
      </button>
      </>
  )
}

export default blogsection