import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Testinomials from '../testimonials/Testinomials';

const FAQ = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What services does BeonicX offer?",
      answer: "BeonicX specializes in custom software development, web and mobile app development, cloud solutions, AI & machine learning, and IT consulting."
    },
    {
      question: "How does BeonicX ensure project success?",
      answer: "We follow agile development methodologies, maintain transparent communication, and prioritize client requirements to deliver high-quality, scalable solutions."
    },
    {
      question: "Why should I choose BeonicX over other software development companies?",
      answer: "We focus on long-term partnerships, providing innovative and tailored solutions that align with your business goals and drive growth."
    },
    {
      question: "What industries does BeonicX serve?",
      answer: "We work with diverse industries, including healthcare, fintech, e-commerce, real estate, and more, offering industry-specific software solutions."
    },
    {
      question: "Do you offer post-development support?",
      answer: "Yes, we provide ongoing maintenance and support services to ensure your software remains updated, secure, and efficient."
    },
    {
      question: "Can I hire dedicated developers from BeonicX?",
      answer: "Absolutely! We offer dedicated developer teams that work exclusively on your project, ensuring maximum productivity and efficiency."
    },
    {
      question: "How long does it take to develop a custom software solution?",
      answer: "Timelines vary based on complexity, features, and client requirements. However, we ensure timely delivery by following structured development processes."
    },
    {
      question: "Is BeonicX’s software development process secure?",
      answer: "Security is our priority. We implement best practices, including encryption, secure coding, and compliance with industry standards."
    }
  ];

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-10 px-4 sm:px-6 lg:px-20 transition-all duration-300`}>
    <div className="max-w-7xl">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">
        Frequently Asked Questions
      </h2>
  
      <div className="space-y-4">
        {faqItems.map((item, index) => (
          <div
            key={index}
            onClick={() => toggleFAQ(index)}
            className={`border rounded-lg px-5 py-4 cursor-pointer transition-all duration-300 ${
              darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-300 bg-gray-100'
            } ${activeIndex === index ? 'shadow-lg' : 'hover:shadow-md'}`}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-base sm:text-lg font-medium">
                {item.question}
              </h3>
              <span className="text-xl">
                {activeIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
  
            {activeIndex === index && (
              <div className={`mt-3 text-sm sm:text-base leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-700'
              }`}>
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
  
      {/* Testimonials Component */}
     
    </div>
  </div>
  
  );
};

export default FAQ;
