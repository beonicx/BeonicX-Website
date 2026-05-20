// pages/index.js
import Head from 'next/head';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
} from 'react-icons/fa';

export default function HomePage({ darkMode }) {
  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 text-white' : 'min-h-screen bg-gray-50 text-blac'}>
      <Head>
        <title>Build the Future with Custom Software Solutions</title>
        <meta name="description" content="Empowering businesses with modern software and mobile solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className={darkMode ? 'relative bg-gray-900 py-48 px-4 sm:px-6 lg:px-8' : 'relative bg-white py-48 px-4 sm:px-6 lg:px-8'}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center">
              <div className="lg:w-1/2 lg:pr-12">
                <h1 className={darkMode ? 'text-4xl sm:text-5xl font-bold text-white mb-6' : 'text-4xl sm:text-5xl font-bold text-blue-800 mb-6'}>
                  Build the Future with Custom Software Solutions
                </h1>
                <p className={darkMode ? 'text-lg text-gray-300 mb-8' : 'text-lg text-gray-700 mb-8'}>
                  We help startups and enterprises craft scalable, secure, and performance-driven applications using technologies like React, Next.js, Node.js, MongoDB, and cloud platforms. Unlock your business potential with us.
                </p>
                <button className="bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full inline-flex items-center">
                  Get a Free Consultation
                </button>
              </div>
              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative">
                  <div className="w-64 h-64 sm:w-96 sm:h-96 bg-blue-900 rounded-full mx-auto relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-dot-pattern"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 z-50">
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <FaFacebookF size={24} />
            </a>
            <a href="https://www.linkedin.com/company/visionityai/posts/?feedView=all" className="text-blue-500 hover:text-blue-600 transition-colors">
              <FaLinkedinIn size={24} />
            </a>
            <a href="https://www.instagram.com/visionity.ai/" className="text-pink-400 hover:text-pink-500 transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-600 transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.youtube.com/@Visionity-ai" className="text-red-500 hover:text-red-600 transition-colors">
              <FaYoutube size={24} />
            </a>
            <a href="#" className="text-red-400 hover:text-red-500 transition-colors">
              <FaPinterest size={24} />
            </a>
          </div>
        </section>

        {/* Tagline Section */}
      
      </main>
    </div>
  );
}
