// pages/education-app-development.js
'use client'
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Education() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  // Education app benefits data
  const appBenefits = [
    {
      title: "Custom Learning Path",
      description: "Personalized learning experiences based on student performance and preferences."
    },
    {
      title: "Interactive Content",
      description: "Engage students with interactive lessons, quizzes, and multimedia content."
    },
    {
      title: "Progress Tracking",
      description: "Monitor student progress with detailed analytics and performance insights."
    },
    {
      title: "Accessibility",
      description: "Learn anytime, anywhere with mobile-friendly education applications."
    },
    {
      title: "Gamification Elements",
      description: "Increase motivation through badges, rewards, and competitive learning features."
    },
    {
      title: "Communication Tools",
      description: "Connect students, teachers, and parents through integrated messaging features."
    }
  ];

  // Education app features data
  const appFeatures = [
    {
      title: "User Authentication",
      description: "Secure login for students, teachers, and administrators with role-based access."
    },
    {
      title: "Course Management",
      description: "Create, edit, and organize educational content with an intuitive dashboard."
    },
    {
      title: "Assessment Tools",
      description: "Build quizzes, tests, and assignments with automated grading capabilities."
    },
    {
      title: "Social Learning Features",
      description: "Discussion forums, group projects, and peer review functionality."
    },
    {
      title: "Mobile Responsiveness",
      description: "Seamless experience across devices with responsive design principles."
    },
    {
      title: "Analytics Dashboard",
      description: "Track performance metrics, engagement, and learning outcomes."
    },
    {
      title: "Content Library",
      description: "Access to educational resources including videos, documents, and interactive modules."
    },
    {
      title: "Offline Mode",
      description: "Access content without internet connectivity with offline capabilities."
    }
  ];

  // Development process steps
  const developmentSteps = [
    {
      number: "01",
      title: "Research & Analysis",
      description: "We analyze your requirements, target audience, and market trends to create a strategic development plan."
    },
    {
      number: "02",
      title: "UI/UX Design",
      description: "Our designers create intuitive, engaging interfaces tailored for educational purposes and your brand identity."
    },
    {
      number: "03",
      title: "Development",
      description: "Our expert developers build your education app using the latest technologies and best practices."
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Rigorous testing across devices and scenarios ensures your app functions flawlessly for all users."
    },
    {
      number: "05",
      title: "Deployment",
      description: "We handle the deployment process, ensuring your app launches smoothly on all target platforms."
    },
    {
      number: "06",
      title: "Support & Maintenance",
      description: "Ongoing support, updates, and enhancements keep your education app performing optimally."
    }
  ];

  return (
    <>
      <Head>
        <title>Education App Development Services | Hyperlink InfoSystem</title>
        <meta name="description" content="Custom education app development services for institutions, educators, and edtech companies. Create engaging learning platforms with Hyperlink InfoSystem." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-64">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education App Development Services</h1>
              <p className="text-xl mb-8">Transform the learning experience with custom education application development tailored to your specific needs and audience.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300">Get Free Consultation</button>
                <button className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-900 text-white font-medium py-3 px-8 rounded-lg transition duration-300">Our Portfolio</button>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative w-full h-96">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-blue-800 rounded-xl flex items-center justify-center">
                  <p className="text-lg font-medium">Education App Hero Image</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Innovative Education App Development Solutions</h2>
            <p className="text-lg text-gray-600 mb-10">
              At Hyperlink InfoSystem, we specialize in creating cutting-edge education applications that enhance learning experiences, 
              streamline educational processes, and drive better outcomes for students and educators alike. Our custom education app 
              development services empower educational institutions, publishers, and edtech companies to leverage the power of 
              technology in transforming traditional learning methods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">K-12 Education Apps</h3>
              <p className="text-gray-600">
                Interactive learning applications designed for primary and secondary education, making learning engaging and effective for younger students.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Higher Education Platforms</h3>
              <p className="text-gray-600">
                Comprehensive solutions for colleges and universities, including course management, virtual classrooms, and assessment tools.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Corporate Training Apps</h3>
              <p className="text-gray-600">
                Employee training and skill development applications that help organizations build a more skilled and knowledgeable workforce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Benefits of Custom Education App Development</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our education app development services deliver powerful advantages for educational institutions, 
              students, and educators alike.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appBenefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-700">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Key Features of Our Education Apps</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We develop feature-rich education applications tailored to meet your specific requirements and objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {appFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition duration-300">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Education App Development Process</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We follow a proven development methodology to deliver high-quality education applications that exceed expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentSteps.map((step, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 relative hover:shadow-lg transition duration-300">
                <div className="absolute top-6 right-6 text-4xl font-bold text-blue-200">{step.number}</div>
                <h3 className="text-xl font-semibold mb-4 text-blue-800">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Technologies We Use</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build robust, scalable, and feature-rich education applications.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {['React Native', 'Flutter', 'iOS', 'Android', 'Node.js', 'Firebase', 'AWS', 'MongoDB', 'GraphQL', 'Kotlin', 'wift', 'Python'].map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition duration-300 h-24">
                <p className="text-lg font-medium text-gray-700">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Industries We Serve</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our education app development services cater to a wide range of educational sectors and use cases.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'K-12 Schools and Districts',
              'Higher Education Institutions',
              'EdTech Startups',
              'Corporate Training',
              'Educational Publishers',
              'Language Learning Providers',
              'Online Learning Platforms',
              'Test Preparation Services',
              'pecial Education'
            ].map((industry, index) => (
              <div key={index} className="bg-blue-50 rounded-lg p-6 hover:bg-blue-100 transition duration-300">
                <h3 className="text-lg font-semibold text-gray-800">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Case Studies</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our successful education app development projects and learn how we&apos;ve helped our clients achieve their goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                <div className="h-48 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Case Study Image</p>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">Interactive Learning Platform</h3>
                  <p className="text-gray-600 mb-4">
                    A comprehensive educational platform for K-12 students featuring interactive lessons, assessments, and progress tracking.
                  </p>
                  <a href="#" className="text-blue-600 font-medium hover:text-blue-800 transition duration-300">Read Case Study →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Find answers to common questions about our education app development services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {[
              {
                question: "How long does it take to develop an education app?",
                answer: "The timeline for education app development varies based on complexity, features, and scope. Simple apps may take 3-4 months, while complex platforms could require 6-12 months. We'll provide a detailed timeline after understanding your specific requirements."
              },
              {
                question: "What is the cost of developing an education app?",
                answer: "Education app development costs depend on factors like platform choice (iOS, Android, web), feature set, design complexity, and integration requirements. Our team will provide a detailed quote after analyzing your project specifications."
              },
              {
                question: "Do you offer post-launch support and maintenance?",
                answer: "Yes, we provide comprehensive post-launch support and maintenance services to ensure your education app continues to perform optimally. Our support packages include bug fixes, updates, feature enhancements, and technical assistance."
              },
              {
                question: "Can you help with education app monetization strategies?",
                answer: "Absolutely! We can help implement various monetization models such as subscriptions, freemium models, in-app purchases, advertising, or licensing. Our team will recommend the best approach based on your target audience and business goals."
              }
            ].map((faq, index) => (
              <div key={index} className="mb-6 border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                <h3 className="text-lg font-semibold mb-3 text-gray-800">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Educational Approach?</h2>
            <p className="text-xl mb-8">
              Let &apos;s collaborate to create an education app that enhances learning experiences and drives better outcomes.
            </p>
            <button className="bg-white text-blue-800 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 bg-blue-800 text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Get In Touch</h2>
                <p className="mb-6">
                  Fill out the form and our team will get back to you within 24 hours to discuss your education app development needs.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-blue-200">One World Trade Center, Suite 8500, New York, NY 10007, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-blue-200">+1 (123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-blue-200">info@example.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <h3 className="text-xl font-semibold mb-6 text-gray-800">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message*</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4" 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    ></textarea>
                  </div>
                  <button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}