'use client'
import Link from 'next/link'
import React from 'react'

function Heroservice() {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <div className="text-sm mb-2">
                <Link href="/" className="text-red-500 hover:text-red-600">Home</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-600">Services</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Driving Direction Towards Smart Solutions
              </h1>
              <div className="w-16 h-1 bg-gray-800 mb-6"></div>
              <p className="text-lg text-gray-700 mb-8">
                Serving innovative and exceptional digital solutions for startups to enterprise-level
                businesses that help them odds out against millions of competitors.
              </p>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="relative h-64 md:h-96 overflow-hidden rounded-xl shadow-xl transform transition-all duration-500 hover:scale-105 hover:rotate-1">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-500 opacity-80 z-10"></div>
                <div className="absolute inset-0 z-20 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-30 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full opacity-30 animate-pulse"></div>
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-purple-400 rounded-full opacity-20 animate-pulse delay-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
  )
}

export default Heroservice