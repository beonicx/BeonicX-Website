'use client';
import React from 'react';

function Testonomial({ darkMode }) {
  return (
    <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl font-bold mb-4 ${
              darkMode ? 'text-white' : 'text-blue-800'
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-base max-w-2xl mx-auto ${
              darkMode ? 'text-gray-300' : 'text-gray-700'
            }`}
          >
            Hear from businesses that have transformed their operations with
            our AI solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote:
                "BeonicX' computer vision solution has revolutionized our quality control process, reducing defects by 78% and increasing productivity.",
              name: 'Rahul Sharma',
              position: 'CTO, TechInnovate',
            },
            {
              quote:
                "Implementing their NLP solution for our customer service has decreased response time by 65% while maintaining high customer satisfaction scores.",
              name: 'Priya Patel',
              position: 'Head of Customer Success, RetailMax',
            },
            {
              quote:
                "The predictive analytics platform provided by BeonicX has transformed how we forecast demand, resulting in 42% less inventory waste.",
              name: 'Amit Singh',
              position: 'upply Chain Director, GlobalFoods',
            },
          ].map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 ${
                darkMode
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-[#161616]'
              } shadow-lg transition-transform duration-300 hover:-translate-y-2`}
            >
              <div
                className={`mb-6 ${
                  darkMode ? 'text-blue-400' : 'text-blue-600'
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p
                className={`text-base mb-6 ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                {testimonial.quote}
              </p>
              <div>
                <p
                  className={`font-semibold text-base ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}
                >
                  {testimonial.name}
                </p>
                <p
                  className={`text-sm ${
                    darkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testonomial;
