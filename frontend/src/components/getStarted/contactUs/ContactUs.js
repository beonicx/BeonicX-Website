'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Sparkles, Send, MapPin, Mail, Phone, CheckCircle2, ArrowRight, Loader2
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const contactDetails = [
  {
    icon: MapPin,
    label: 'India (Headquarters)',
    lines: ['One World Trade Center, Suite 8500', 'Greater Noida, Haryana, India'],
  },
  {
    icon: MapPin,
    label: 'India',
    lines: ['14th Floor, Titanium City Center', 'Chandigarh, Chandigarh, India'],
  },
  {
    icon: Mail,
    label: 'Email',
    lines: ['beonicxgroup@gmail.com'],
  },
  {
    icon: Phone,
    label: 'Phone',
    lines: ['+91-9129842706'],
  },
];

const validateField = (name, value) => {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required';
      if (value.trim().length < 3) return 'Name must be at least 3 characters';
      if (value.trim().length > 50) return 'Name must not exceed 50 characters';
      if (!/^[a-zA-Z\s]+$/.test(value)) return 'Name can only contain letters and spaces';
      return '';
    case 'email':
      if (!value.trim()) return 'Email is required';
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
      return '';
    case 'phone':
      if (value.trim() && !/^\d{10}$/.test(value.replace(/\D/g, ''))) return 'Phone number must be exactly 10 digits';
      return '';
    case 'message':
      if (!value.trim()) return 'Message is required';
      if (value.trim().length < 20) return 'Message must be at least 20 characters';
      if (value.trim().length > 1000) return 'Message must not exceed 1000 characters';
      return '';
    default:
      return '';
  }
};

export default function ContactUs({ darkMode = false }) {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', skype: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (['name', 'email', 'message'].includes(key) || (key === 'phone' && formData.phone)) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, phone: true, message: true });

    if (Object.keys(newErrors).length > 0) {
      setSubmitMessage('error:Please fix all validation errors before submitting.');
      setTimeout(() => setSubmitMessage(''), 5000);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          skype: formData.skype.trim(),
          subject: 'Contact Form Submission',
          message: formData.message.trim(),
          formType: 'contact',
        }),
      });

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server did not return JSON response');
      }

      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setSubmitMessage('success:Thanks for your message! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', skype: '', message: '' });
        setErrors({});
        setTouched({});
      } else {
        setSubmitMessage(`error:${data.message || 'Failed to send message. Please try again later.'}`);
      }
    } catch (error) {
      let msg = 'Failed to send message. ';
      if (error.message.includes('fetch')) msg += 'Cannot connect to server.';
      else if (error.message.includes('JSON')) msg += 'Server returned invalid response.';
      else msg += error.message || 'Please check your connection and try again.';
      setSubmitMessage(`error:${msg}`);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitMessage(''), 8000);
    }
  };

  const inputCls = (field) => {
    const hasError = errors[field] && touched[field];
    return `w-full px-4 py-3 rounded-xl text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
      darkMode
        ? `bg-white/[0.04] border ${hasError ? 'border-red-500/50' : 'border-white/[0.08]'} text-white placeholder-slate-500 focus:border-blue-500/40`
        : `bg-white border ${hasError ? 'border-red-400' : 'border-slate-200'} text-slate-900 placeholder-slate-400 focus:border-blue-300`
    }`;
  };

  const isSuccess = submitMessage.startsWith('success:');
  const messageText = submitMessage.replace(/^(success|error):/, '');

  return (
    <main className={darkMode ? 'bg-[#030712]' : 'bg-white'}>

      {/* ═══════════ HERO ═══════════ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className={`absolute top-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[150px] ${
            darkMode ? 'bg-blue-600/[0.08]' : 'bg-blue-100/70'
          }`} />
          <div className={`absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[120px] ${
            darkMode ? 'bg-indigo-600/[0.06]' : 'bg-indigo-50/60'
          }`} />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px), linear-gradient(90deg, ${darkMode ? 'rgba(37,99,235,0.02)' : 'rgba(37,99,235,0.015)'} 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />
        <div className={`absolute inset-0 pointer-events-none ${
          darkMode
            ? 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#030712_80%)]'
            : 'bg-[radial-gradient(ellipse_at_center,transparent_30%,#ffffff_80%)]'
        }`} />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.span
              variants={fadeUp}
              className={`inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2 rounded-full mb-8 ${
                darkMode
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-blue-50 text-blue-600 border border-blue-100'
              }`}
            >
              <Sparkles size={13} />
              Get Started
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className={`text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 ${
                darkMode ? 'text-white' : 'text-slate-900'
              }`}
            >
              Let&apos;s Build Something{' '}
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Remarkable
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className={`text-base sm:text-lg leading-relaxed max-w-xl mx-auto ${
                darkMode ? 'text-slate-400' : 'text-slate-500'
              }`}
            >
              Fill out the form and our team will get back to you within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ═══════════ FORM + CONTACT INFO ═══════════ */}
      <section className="relative pb-24 sm:pb-32">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Contact Info Sidebar */}
            <motion.div
              className="col-span-1 space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              {contactDetails.map((c) => (
                <motion.div key={c.label} variants={fadeUp}>
                  <div className={`rounded-2xl p-6 transition-all duration-300 ${
                    darkMode
                      ? 'bg-[#0a0f1e] border border-white/[0.06]'
                      : 'bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(37,99,235,0.04)]'
                  }`}>
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 shrink-0 flex items-center justify-center rounded-xl ${
                        darkMode ? 'bg-blue-500/10' : 'bg-blue-50'
                      }`}>
                        <c.icon size={18} className="text-blue-500" />
                      </div>
                      <div>
                        <h3 className={`text-sm font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>{c.label}</h3>
                        {c.lines.map((line) => (
                          <p key={line} className={`text-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{line}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}

              <motion.div variants={fadeUp}>
                <div className={`rounded-2xl p-6 ${
                  darkMode
                    ? 'bg-[#0a0f1e] border border-white/[0.06]'
                    : 'bg-white border border-slate-200/80 shadow-[0_4px_20px_rgba(37,99,235,0.04)]'
                }`}>
                  <div className="flex flex-wrap gap-3">
                    {['Free Consultation', 'No Obligation', '24h Response'].map((item) => (
                      <span key={item} className={`inline-flex items-center gap-1.5 text-xs font-medium ${
                        darkMode ? 'text-slate-400' : 'text-slate-500'
                      }`}>
                        <CheckCircle2 size={12} className="text-blue-500" />
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="col-span-1 lg:col-span-2"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className={`rounded-2xl p-8 sm:p-10 ${
                darkMode
                  ? 'bg-[#0a0f1e] border border-white/[0.06]'
                  : 'bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.06)]'
              }`}>
                <h2 className={`text-xl font-bold mb-6 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  Send Us a Message
                </h2>

                {submitMessage && (
                  <div className={`rounded-xl px-5 py-4 mb-6 text-sm font-medium ${
                    isSuccess
                      ? darkMode ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : darkMode ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-red-50 text-red-600 border border-red-200'
                  }`}>
                    {messageText}
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Name <span className="text-blue-500">*</span>
                      </label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} onBlur={handleBlur} className={inputCls('name')} disabled={isSubmitting} placeholder="John Doe" />
                      {errors.name && touched.name && <p className={`mt-1.5 text-xs ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Email <span className="text-blue-500">*</span>
                      </label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} className={inputCls('email')} disabled={isSubmitting} placeholder="john@example.com" />
                      {errors.email && touched.email && <p className={`mt-1.5 text-xs ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{errors.email}</p>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Phone <span className={`text-xs font-normal ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>(optional)</span>
                      </label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} onBlur={handleBlur} className={inputCls('phone')} disabled={isSubmitting} placeholder="9876543210" />
                      {errors.phone && touched.phone && <p className={`mt-1.5 text-xs ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{errors.phone}</p>}
                    </div>

                    {/* Skype */}
                    <div>
                      <label htmlFor="skype" className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                        Skype ID <span className={`text-xs font-normal ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>(optional)</span>
                      </label>
                      <input type="text" id="skype" name="skype" value={formData.skype} onChange={handleChange} className={inputCls('skype')} disabled={isSubmitting} placeholder="john.doe" />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label htmlFor="message" className={`block text-xs font-semibold mb-2 ${darkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} onBlur={handleBlur} className={inputCls('message')} disabled={isSubmitting} placeholder="Tell us about your project or inquiry..." />
                    <div className="flex justify-between mt-1.5">
                      {errors.message && touched.message && <p className={`text-xs ${darkMode ? 'text-red-400' : 'text-red-500'}`}>{errors.message}</p>}
                      <p className={`text-[10px] ml-auto ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>{formData.message.length}/1000</p>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl font-semibold text-white text-sm bg-gradient-to-r from-blue-600 to-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                        <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`rounded-2xl overflow-hidden ${
              darkMode
                ? 'bg-[#0a0f1e] border border-white/[0.06]'
                : 'bg-white border border-slate-200/80 shadow-[0_8px_30px_rgba(37,99,235,0.06)]'
            }`}>
              <div className="p-6 sm:p-8">
                <h2 className={`text-lg font-bold mb-1 tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Our Location</h2>
                <p className={`text-sm mb-5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>One World Trade Center, Suite 8500, Greater Noida, Haryana, India</p>
              </div>
              <div className={`w-full h-80 ${darkMode ? 'border-t border-white/[0.06]' : 'border-t border-slate-200/80'}`}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.5398039306!2d77.22652749999999!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1704000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className={darkMode ? 'brightness-[0.85] contrast-110 invert-[0.9] hue-rotate-180' : ''}
                  title="Office Location"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
