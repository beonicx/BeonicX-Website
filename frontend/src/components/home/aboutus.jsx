// import React, { useState } from 'react'

function Aboutus() {
    // const [darkMode, setDarkMode] = useState(false);
  return (
    <section
    id="about"
    className={`py-16 ${darkMode ? "bg-[#000000]" : "bg-white"}`}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
        <div className="relative h-60 md:h-96 w-full rounded-lg bg-gradient-to-br  flex items-center justify-center overflow-hidden">
<img
src={darkMode ? "/images/darklogo.png" : "/images/lightlogo1.png"}
alt="BeonicX AI Agents Platform - Intelligent Automation Solutions Logo"
className="absolute inset-0 w-full h-full object-contain opacity-100"
/>
{/* <p className="relative text-white text-2xl font-semibold">Your Text Here</p> */}
</div>
        </div>
        <div className="md:w-1/2">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-6 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            About BeonicX
          </h2>
          <p
            className={`mb-6 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Founded in 2023, BeonicX is a pioneering AI and SaaS startup
            specializing in intelligent AI agents. We build autonomous systems
            that understand, learn, and execute complex business tasks with
            human-like intelligence, revolutionizing how enterprises operate.
          </p>
          <p
            className={`mb-8 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Our AI agents handle everything from customer support and sales
            automation to data analysis and workflow orchestration. Powered by
            advanced machine learning and natural language processing, our
            solutions deliver measurable results while continuously improving
            through real-world interactions.
          </p>
          <button className="bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            Learn More About Us
          </button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Aboutus