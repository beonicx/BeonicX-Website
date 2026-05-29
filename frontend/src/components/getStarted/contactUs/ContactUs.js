// pages/contact.js
'use client'
import { useState } from 'react';
import Head from 'next/head';

export default function ContactUs({ darkMode = false }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    skype: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.message) tempErrors.message = 'Message is required';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitMessage('');

      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';
        const response = await fetch(`${apiUrl}/contact`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            skype: formData.skype,
            subject: 'Contact Form Submission',
            message: formData.message,
            formType: 'contact'
          }),
        });

        const data = await response.json();

        if (response.ok && data.status === 'success') {
          setSubmitMessage('✅ Thanks for your message! We will get back to you soon.');
          setFormData({
            name: '',
            email: '',
            phone: '',
            skype: '',
            message: '',
          });
          setErrors({});
        } else {
          const errorMsg = data.message || 'Failed to send message. Please try again later.';
          setSubmitMessage(`❌ ${errorMsg}`);
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitMessage('❌ Failed to send message. Please check your connection and try again.');
      } finally {
        setIsSubmitting(false);
        // Auto-hide message after 5 seconds
        setTimeout(() => {
          setSubmitMessage('');
        }, 5000);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Us | Hyperlink Infosystem</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>
      
      <div className="bg-gray-50 dark:bg-gray-900 py-48 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Let us know how we can help you. Fill out the form and our team will get back to you shortly.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="col-span-1">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 h-full transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">India (Headquarters)</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      One World Trade Center, Suite 8500<br />
                      Greater Noida, Haryana , India
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">India</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      14th Floor, Titanium City Center<br />
                      Chandigarh, Chandigarh, India
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-blue-600 dark:text-blue-400">Contact Details</h3>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">
                      Email: beonicxgroup@gmail.com<br />
                      Phone: +91-9129842706
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-2">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-200">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Send Us a Message</h2>

                {submitMessage && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitMessage.includes('✅')
                      ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 border border-green-300 dark:border-green-700'
                      : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 border border-red-300 dark:border-red-700'
                  }`}>
                    {submitMessage}
                  </div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Name*
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${errors.name ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'}`}
                      />
                      {errors.name && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.name}</p>}
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${errors.email ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'}`}
                      />
                      {errors.email && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>

                    <div>
                      <label htmlFor="skype" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Skype ID
                      </label>
                      <input
                        type="text"
                        id="skype"
                        name="skype"
                        value={formData.skype}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Message*
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${errors.message ? 'border-red-500 dark:border-red-400' : 'border-gray-300 dark:border-gray-600'}`}
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{errors.message}</p>}
                  </div>
                  
                  <div className="flex justify-end ">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-6 py-3 bg-blue-600 dark:bg-blue-500 cursor-pointer text-white font-medium rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          {/* Map Section */}
          <div className="mt-12">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 transition-colors duration-200">
              <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Our Location - Noida</h2>

              <div className="w-full h-96 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5398039306!2d77.22652749999999!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="dark:brightness-90 dark:contrast-125 dark:invert-[0.85] dark:hue-rotate-180"
                  title="Noida Office Location"
                ></iframe>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                <p className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="font-medium">One World Trade Center, Suite 8500, Greater Noida, Haryana, India</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}