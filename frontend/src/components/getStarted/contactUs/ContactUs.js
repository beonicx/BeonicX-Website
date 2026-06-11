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
  const [touched, setTouched] = useState({});

  // Validation rules
  const validateField = (name, value) => {
    let error = '';

    switch (name) {
      case 'name':
        if (!value.trim()) {
          error = 'Name is required';
        } else if (value.trim().length < 3) {
          error = 'Name must be at least 3 characters';
        } else if (value.trim().length > 50) {
          error = 'Name must not exceed 50 characters';
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          error = 'Name can only contain letters and spaces';
        }
        break;

      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email address';
        }
        break;

      case 'phone':
        if (value.trim() && !/^\d{10}$/.test(value.replace(/\D/g, ''))) {
          error = 'Phone number must be exactly 10 digits';
        }
        break;

      case 'message':
        if (!value.trim()) {
          error = 'Message is required';
        } else if (value.trim().length < 20) {
          error = 'Message must be at least 20 characters';
        } else if (value.trim().length > 1000) {
          error = 'Message must not exceed 1000 characters';
        }
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });

    // Validate on change if field was already touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors({
        ...errors,
        [name]: error
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    setTouched({
      ...touched,
      [name]: true
    });

    const error = validateField(name, value);
    setErrors({
      ...errors,
      [name]: error
    });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate all required fields
    Object.keys(formData).forEach(key => {
      if (['name', 'email', 'message'].includes(key) || (key === 'phone' && formData.phone)) {
        const error = validateField(key, formData[key]);
        if (error) {
          newErrors[key] = error;
        }
      }
    });

    setErrors(newErrors);

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true
    });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('=== FORM SUBMISSION STARTED ===');
    console.log('Form Data:', formData);

    if (!validateForm()) {
      console.log('❌ Validation failed:', errors);
      setSubmitMessage('❌ Please fix all validation errors before submitting.');
      setTimeout(() => setSubmitMessage(''), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';
      const endpoint = `${apiUrl}/contact`;

      console.log('📤 API Endpoint:', endpoint);
      console.log('📦 Payload:', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        skype: formData.skype,
        subject: 'Contact Form Submission',
        message: formData.message,
        formType: 'contact'
      });

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          skype: formData.skype.trim(),
          subject: 'Contact Form Submission',
          message: formData.message.trim(),
          formType: 'contact'
        }),
      });

      console.log('📥 Response Status:', response.status);
      console.log('📥 Response OK:', response.ok);

      let data;
      const contentType = response.headers.get('content-type');

      if (contentType && contentType.includes('application/json')) {
        data = await response.json();
        console.log('📥 Response Data:', data);
      } else {
        const text = await response.text();
        console.log('📥 Response Text:', text);
        throw new Error('Server did not return JSON response');
      }

      if (response.ok && data.status === 'success') {
        console.log('✅ Form submitted successfully!');
        setSubmitMessage('✅ Thanks for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          skype: '',
          message: '',
        });
        setErrors({});
        setTouched({});
      } else {
        const errorMsg = data.message || 'Failed to send message. Please try again later.';
        console.log('❌ Submission failed:', errorMsg);
        setSubmitMessage(`❌ ${errorMsg}`);
      }
    } catch (error) {
      console.error('💥 ERROR submitting form:', error);
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);

      let errorMessage = 'Failed to send message. ';

      if (error.message.includes('fetch')) {
        errorMessage += 'Cannot connect to server. Please ensure the backend is running.';
      } else if (error.message.includes('JSON')) {
        errorMessage += 'Server returned invalid response. Please try again.';
      } else {
        errorMessage += error.message || 'Please check your connection and try again.';
      }

      setSubmitMessage(`❌ ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
      console.log('=== FORM SUBMISSION ENDED ===');

      // Auto-hide message after 8 seconds
      setTimeout(() => {
        setSubmitMessage('');
      }, 8000);
    }
  };

  const getInputClassName = (fieldName) => {
    const baseClass = `w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
      darkMode ? 'bg-gray-700 text-white' : 'bg-white text-gray-900'
    }`;

    const errorClass = errors[fieldName] && touched[fieldName]
      ? darkMode ? 'border-red-400' : 'border-red-500'
      : darkMode ? 'border-gray-600' : 'border-gray-300';

    return `${baseClass} ${errorClass}`;
  };

  return (
    <>
      <Head>
        <title>Contact Us | BeonicX</title>
        <meta name="description" content="Get in touch with our team" />
      </Head>

      <div className={`py-48 transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h1>
            <p className={`text-lg max-w-3xl mx-auto ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Let us know how we can help you. Fill out the form and our team will get back to you shortly.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="col-span-1">
              <div className={`rounded-lg shadow-lg p-8 h-full transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Contact Information</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>India (Headquarters)</h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      One World Trade Center, Suite 8500<br />
                      Greater Noida, Haryana , India
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>India</h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      14th Floor, Titanium City Center<br />
                      Chandigarh, Chandigarh, India
                    </p>
                  </div>

                  <div>
                    <h3 className={`text-lg font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>Contact Details</h3>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Email: beonicxgroup@gmail.com<br />
                      Phone: +91-9129842706
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-span-1 lg:col-span-2">
              <div className={`rounded-lg shadow-lg p-8 transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Send Us a Message</h2>

                {submitMessage && (
                  <div className={`p-4 rounded-lg mb-6 ${
                    submitMessage.includes('✅')
                      ? darkMode
                        ? 'bg-green-900/30 text-green-300 border border-green-700'
                        : 'bg-green-100 text-green-700 border border-green-300'
                      : darkMode
                        ? 'bg-red-900/30 text-red-300 border border-red-700'
                        : 'bg-red-100 text-red-700 border border-red-300'
                  }`}>
                    {submitMessage}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Name* <span className="text-xs text-gray-500">(3-50 characters, letters only)</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('name')}
                        disabled={isSubmitting}
                        placeholder="John Doe"
                      />
                      {errors.name && touched.name && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Email*
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('email')}
                        disabled={isSubmitting}
                        placeholder="john@example.com"
                      />
                      {errors.email && touched.email && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Phone Number <span className="text-xs text-gray-500">(10 digits, optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={getInputClassName('phone')}
                        disabled={isSubmitting}
                        placeholder="9876543210"
                      />
                      {errors.phone && touched.phone && (
                        <p className={`mt-1 text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="skype" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Skype ID <span className="text-xs text-gray-500">(optional)</span>
                      </label>
                      <input
                        type="text"
                        id="skype"
                        name="skype"
                        value={formData.skype}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 ${
                          darkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-900 border-gray-300'
                        }`}
                        disabled={isSubmitting}
                        placeholder="john.doe"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className={`block text-sm font-medium mb-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      Message* <span className="text-xs text-gray-500">(20-1000 characters)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={getInputClassName('message')}
                      disabled={isSubmitting}
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                    <div className="flex justify-between mt-1">
                      {errors.message && touched.message && (
                        <p className={`text-sm ${darkMode ? 'text-red-400' : 'text-red-600'}`}>
                          {errors.message}
                        </p>
                      )}
                      <p className={`text-xs ml-auto ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        {formData.message.length}/1000
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`px-6 py-3 text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 ${
                        darkMode
                          ? 'bg-blue-500 hover:bg-blue-600 focus:ring-offset-gray-800'
                          : 'bg-blue-600 hover:bg-blue-700 focus:ring-offset-2'
                      } ${isSubmitting ? 'cursor-wait' : 'cursor-pointer'}`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        'Send Message'
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-12">
            <div className={`rounded-lg shadow-lg p-8 transition-colors duration-200 ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
              <h2 className={`text-2xl font-semibold mb-6 ${darkMode ? 'text-white' : 'text-gray-800'}`}>Our Location - Noida</h2>

              <div className={`w-full h-96 rounded-lg overflow-hidden border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5398039306!2d77.22652749999999!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={darkMode ? 'brightness-90 contrast-125 invert-[0.85] hue-rotate-180' : ''}
                  title="Noida Office Location"
                ></iframe>
              </div>

              <div className={`mt-4 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="flex items-center gap-2">
                  <svg className={`w-5 h-5 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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
