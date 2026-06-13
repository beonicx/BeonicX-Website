'use client'
import { useState, useEffect } from 'react';

export default function AboutUs({ darkMode = false }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '100+', label: 'Projects Delivered', icon: '🚀' },
    { number: '50+', label: 'Happy Clients', icon: '😊' },
    { number: '10+', label: 'Team Members', icon: '👥' },
    { number: '10+', label: 'Countries Served', icon: '🌍' },
  ];

  const values = [
    {
      icon: '💡',
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI and emerging technologies to create solutions that push boundaries and drive digital transformation.'
    },
    {
      icon: '🎯',
      title: 'Client-Centric',
      description: 'Your success is our priority. We work closely with you to understand your unique needs and deliver tailored solutions.'
    },
    {
      icon: '⚡',
      title: 'Agile Excellence',
      description: 'Fast, flexible, and focused. Our agile methodology ensures rapid delivery without compromising on quality.'
    },
    {
      icon: '🔒',
      title: 'Security & Quality',
      description: 'Enterprise-grade security and rigorous quality assurance are built into every solution we create.'
    },
  ];

  const team = [
    {
      name: 'Nitish Yadav',
      role: 'Co-Founder & CEO',
      description: 'Visionary leader driving innovation in AI-powered software solutions',
      avatar: '👨‍💼'
    },
    {
      name: 'Abhishek Mishra',
      role: 'Co-Founder & CTO',
      description: 'Technology architect specializing in scalable systems and AI integration',
      avatar: '👨‍💻'
    },
    {
      name: 'Ansh Yadav',
      role: 'Co-Founder & COO',
      description: 'Operations expert ensuring excellence in delivery and client satisfaction',
      avatar: '👨‍🏫'
    },
  ];

  const services = [
    {
      icon: '🤖',
      title: 'AI & Machine Learning',
      description: 'Custom AI solutions, ML models, NLP, computer vision, and intelligent automation.'
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android with exceptional UX.'
    },
    {
      icon: '🌐',
      title: 'Web Development',
      description: 'Modern web applications using React, Next.js, and scalable backend architectures.'
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description: 'Cloud migration, DevOps, microservices, and infrastructure optimization.'
    },
    {
      icon: '💼',
      title: 'Enterprise Software',
      description: 'Custom enterprise solutions, ERP, CRM, and business process automation.'
    },
    {
      icon: '🎨',
      title: 'UI/UX Design',
      description: 'User-centered design creating intuitive and engaging digital experiences.'
    },
  ];

  const milestones = [
    { year: '2025',month:'Jan', event: 'BeonicX Founded', description: 'Started our journey with a vision to revolutionize software development' },
    { year: '2025',month:'Sep',  event: 'First 10 Clients', description: 'Reached our first major milestone serving clients across multiple industries' },
    { year: '2025',month:'Nov',  event: 'AI Division Launch', description: 'Expanded into AI and machine learning solutions' },
    { year: '2026',month:'Jan',  event: 'Global Expansion', description: 'Extended services to 15+ countries worldwide' },
    { year: '2026',month:'Feb',  event: 'Industry Recognition', description: 'Awarded for excellence in innovation and client satisfaction' },
    { year: '2026',month:'Apr',  event: 'Next Generation', description: 'Leading the future of AI-powered enterprise solutions' },
  ];

  return (
    <>

      <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>

        {/* Hero Section */}
        <section className={`relative py-20 lg:py-32 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className={`text-5xl lg:text-7xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">BeonicX</span>
              </h1>
              <p className={`text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Empowering businesses with cutting-edge AI-powered software solutions.
                We transform ideas into intelligent, scalable, and innovative digital experiences.
              </p>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        </section>

        {/* Stats Section */}
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`text-center p-6 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'
                  }`}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className={`text-4xl lg:text-5xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm lg:text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Story
                </h2>
                <div className={`space-y-4 text-lg leading-relaxed ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  <p>
                    Founded in 2025, BeonicX emerged from a simple yet powerful vision: to democratize access to
                    cutting-edge technology and help businesses of all sizes harness the power of AI and modern software solutions.
                  </p>
                  <p>
                    What started as a small team of passionate developers has grown into a global force in software development,
                    serving clients across 15+ countries and delivering 500+ successful projects.
                  </p>
                  <p>
                    Today, we specialize in AI-powered solutions, custom software development, and digital transformation,
                    helping businesses stay ahead in an increasingly competitive digital landscape.
                  </p>
                  <p>
                    Our commitment to innovation, quality, and client success has made us a trusted partner for startups,
                    SMEs, and enterprises worldwide.
                  </p>
                </div>
              </div>

              <div className={`rounded-2xl p-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl`}>
                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Mission
                </h3>
                <p className={`text-lg mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  To empower businesses with intelligent, scalable, and innovative technology solutions that drive growth,
                  efficiency, and competitive advantage in the digital age.
                </p>

                <h3 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Our Vision
                </h3>
                <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  To be the world's most trusted partner in AI-powered digital transformation, recognized for excellence,
                  innovation, and the lasting impact we create for our clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Core Values
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white hover:shadow-xl'
                  }`}
                >
                  <div className="text-5xl mb-4">{value.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {value.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                What We Do
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive solutions for your digital transformation journey
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`p-8 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    darkMode
                      ? 'bg-gray-800 border-gray-700 hover:border-blue-500'
                      : 'bg-white border-gray-200 hover:border-blue-400 hover:shadow-xl'
                  }`}
                >
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {service.title}
                  </h3>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Meet Our Founders
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                The visionaries behind BeonicX
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className={`text-center p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
                    darkMode ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-50 hover:bg-white hover:shadow-xl'
                  }`}
                >
                  <div className="text-7xl mb-4">{member.avatar}</div>
                  <h3 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Our Journey
              </h2>
              <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Key milestones that shaped our story
              </p>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className={`absolute left-1/2 transform -translate-x-1/2 h-full w-1 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} hidden lg:block`}></div>

              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                      index % 2 === 0 ? 'lg:text-right' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12 lg:col-start-2'}`}>
                      <div className={`p-6 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}`}>
                        <div className="text-blue-600 dark:text-blue-400 font-bold text-2xl mb-2">
                        {milestone.month} {milestone.year}
                        </div>
                        <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {milestone.event}
                        </h3>
                        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                          {milestone.description}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Dot */}
                    <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
                      <div className={`w-6 h-6 rounded-full border-4 ${
                        darkMode ? 'bg-blue-500 border-gray-900' : 'bg-blue-600 border-white'
                      }`}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 ${darkMode ? 'bg-gradient-to-r from-blue-900 to-purple-900' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's build something amazing together. Get in touch with our team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/get-started/contactUs"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
              <a
                href="/services"
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                View Services
              </a>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className={`py-16 ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} transition-colors duration-200`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">📍</div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Headquarters
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Greater Noida, Haryana, India
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">📧</div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Email
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  beonicxgroup@gmail.com
                </p>
              </div>

              <div>
                <div className="text-4xl mb-3">📞</div>
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Phone
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  +91-9129842706
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
