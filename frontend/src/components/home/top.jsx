import React, { useState, useEffect } from 'react';

export default function Toppage({ darkMode = false }) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      speed: Math.random() * 1 + 0.5,
    }));
    setParticles(newParticles);
    const interval = setInterval(() => {
      setParticles(prev => prev.map(p => ({ ...p, y: (p.y + p.speed) % 100 })));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handleButtonHover = () => setIsAnimating(true);
  const handleButtonLeave = () => setIsAnimating(false);
  const handleQueryClick = () => { setShowModal(true); setSubmitMessage(''); };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitQuery = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitMessage('Please fill in all required fields.');
      return;
    }
    setIsSubmitting(true);
    setSubmitMessage('');
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5002/api';
      const response = await fetch(`${apiUrl}/contact/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: 'Home Page Query',
          message: formData.message
        }),
      });
      const data = await response.json();
      if (response.ok && data.status === 'success') {
        setSubmitMessage('Thank you! Your query has been submitted successfully.');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => { setShowModal(false); setSubmitMessage(''); }, 2000);
      } else {
        setSubmitMessage(data.message || 'Failed to submit query. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting query:', error);
      setSubmitMessage('Failed to submit query. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── shared input classes ── */
  const inputCls = `w-full px-3.5 py-2.5 rounded-xl text-[0.9rem] outline-none
    transition-all duration-200 focus:ring-2 focus:ring-blue-400/30 focus:border-blue-400
    ${darkMode
      ? 'bg-[#0a1628] border-[1.5px] border-blue-500/25 text-sky-50 placeholder:text-slate-500'
      : 'bg-slate-50 border-[1.5px] border-slate-200 text-slate-900 placeholder:text-slate-400'}`;

  const labelCls = `block text-[11px] font-semibold tracking-[0.06em] uppercase mb-1.5
    ${darkMode ? 'text-slate-500' : 'text-slate-500'}`;

  return (
    <>
      {/* Font import only — no other CSS */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700;800&family=DM+Sans:wght@400;500&display=swap');`}</style>

      <div
        className={`relative overflow-hidden flex flex-col min-h-screen
          ${darkMode ? 'bg-[#060d1f]' : 'bg-[#f0f4ff]'}`}
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {/* ── Arc layers (complex border-radius + gradient kept as inline) ── */}
        <div
          className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[130vw] h-[60vh] pointer-events-none opacity-90"
          style={{
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            background: darkMode
              ? 'linear-gradient(180deg,#1e3a5f 0%,#0f2040 60%,#060d1f 100%)'
              : 'linear-gradient(180deg,#dbeafe 0%,#eff6ff 60%,#f0f4ff 100%)',
          }}
        />
        <div
          className={`absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[110vw] h-[55vh] pointer-events-none
            ${darkMode ? 'opacity-30' : 'opacity-50'}`}
          style={{
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            background: darkMode
              ? 'linear-gradient(180deg,#1d4ed8 0%,#1e3a5f 50%,#0f2040 100%)'
              : 'linear-gradient(180deg,#bfdbfe 0%,#dbeafe 50%,#eff6ff 100%)',
          }}
        />
        <div
          className={`absolute bottom-[-30%] left-1/2 -translate-x-1/2 w-[90vw] h-[50vh] pointer-events-none
            ${darkMode ? 'opacity-[0.15]' : 'opacity-[0.35]'}`}
          style={{
            borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
            background: darkMode
              ? 'linear-gradient(180deg,#3b82f6 0%,#1d4ed8 60%,#1e3a5f 100%)'
              : 'linear-gradient(180deg,#93c5fd 0%,#bfdbfe 60%,#dbeafe 100%)',
          }}
        />

        {/* ── Decorative corner lines ── */}
        <svg
          className="absolute top-0 left-0 w-[340px] h-[200px] pointer-events-none opacity-35"
          viewBox="0 0 340 200" fill="none"
        >
          <line x1="0"  y1="60"  x2="260" y2="60"  stroke={darkMode ? '#3b82f6' : '#93c5fd'} strokeWidth="1"/>
          <line x1="0"  y1="90"  x2="200" y2="90"  stroke={darkMode ? '#3b82f6' : '#93c5fd'} strokeWidth="1"/>
          <line x1="60" y1="0"   x2="60"  y2="200" stroke={darkMode ? '#3b82f6' : '#93c5fd'} strokeWidth="1"/>
          <line x1="90" y1="0"   x2="90"  y2="160" stroke={darkMode ? '#3b82f6' : '#93c5fd'} strokeWidth="1"/>
        </svg>

        {/* ── Particles (dynamic values → inline styles) ── */}
        {particles.map((particle, index) => (
          <div
            key={index}
            className="absolute rounded-full pointer-events-none"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              background: darkMode ? '#60a5fa' : '#93c5fd',
              opacity: darkMode ? 0.25 : 0.18,
              filter: darkMode ? 'blur(1px)' : 'blur(0.5px)',
              boxShadow: darkMode ? '0 0 4px rgba(96,165,250,0.4)' : 'none',
              transition: 'top 1s linear',
            }}
          />
        ))}

        {/* ── Main content ── */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6 pb-20 pt-12">

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-[18px] py-[6px] rounded-full
            text-[13px] font-medium mb-9 tracking-[0.01em]
            ${darkMode
              ? 'bg-[#1e3a5f]/70 border border-blue-500 text-blue-300'
              : 'bg-white/80 border border-blue-200 text-blue-800 shadow-sm'}`}
          >
            <span className="w-[5px] h-[5px] rounded-full bg-blue-500 shrink-0" />
            Empowering Businesses with AI
          </div>

          {/* Headline - PRIMARY H1 */}
          <h1
            className={`font-extrabold leading-[1.15] tracking-[-0.03em] max-w-[820px] mx-auto mb-5
              text-[clamp(2.2rem,5.5vw,4rem)]
              ${darkMode ? 'text-sky-50' : 'text-slate-900'}`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            BeonicX: AI-Powered Autonomous Agents for Enterprise Automation
          </h1>

          {/* Sub-heading */}
          <p className={`text-[clamp(0.95rem,2vw,1.15rem)] leading-[1.7] max-w-[600px]
            mx-auto mb-10 font-normal
            ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
          >
            We design and deploy AI-powered SaaS solutions with clear architecture,
            business-first thinking, and long-term scalability — trusted by startups
            and growing enterprises worldwide.
          </p>

          {/* CTA Button */}
          <button
            className="group inline-flex items-center gap-2.5 px-10 py-4 rounded-full
              font-bold text-[0.95rem] tracking-[0.07em] uppercase text-white
              bg-blue-700 border-none cursor-pointer relative overflow-hidden
              transition-all duration-300
              shadow-[0_4px_24px_rgba(29,78,216,0.30)]
              hover:bg-blue-800 hover:shadow-[0_8px_36px_rgba(29,78,216,0.45)]
              hover:-translate-y-0.5 hover:scale-[1.03] mb-14"
            style={{ fontFamily: "'Sora', sans-serif" }}
            onMouseEnter={handleButtonHover}
            onMouseLeave={handleButtonLeave}
            onClick={handleQueryClick}
          >
            {/* shimmer sweep */}
            <span className="absolute inset-0 bg-[length:200%_100%] bg-[position:200%]
              group-hover:bg-[position:-200%] transition-[background-position] duration-500"
              style={{ background: 'linear-gradient(105deg,transparent 40%,rgba(255,255,255,0.22) 50%,transparent 60%)' }}
            />
            <span className="relative z-10 flex items-center gap-2.5">
              Drop Your Queries
              <svg
                className={`w-5 h-5 transition-transform duration-300 ${isAnimating ? 'translate-x-1' : ''}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"
                  d={isAnimating ? "M14 5l7 7m0 0l-7 7m7-7H3" : "M13 5l7 7-7 7M5 12h15"} />
              </svg>
            </span>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5
            max-w-[640px] max-sm:max-w-[260px] w-full mx-auto mb-12">
            {[
              { num: '50+', label: 'AI Agents Deployed' },
              { num: '30+', label: 'Enterprise Clients' },
              { num: '1M+', label: 'Tasks Automated' },
            ].map(s => (
              <div
                key={s.num}
                className={`p-5 rounded-2xl text-center backdrop-blur-sm
                  ${darkMode
                    ? 'bg-[#0f2040]/70 border border-blue-500/25'
                    : 'bg-white/80 border border-blue-200/60 shadow-[0_2px_16px_rgba(59,130,246,0.08)]'}`}
              >
                <div
                  className={`text-[1.85rem] font-extrabold leading-none mb-1.5
                    ${darkMode ? 'text-blue-400' : 'text-blue-700'}`}
                  style={{ fontFamily: "'Sora', sans-serif" }}
                >
                  {s.num}
                </div>
                <div className={`text-[12px] font-medium tracking-[0.02em]
                  ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          {/* Partners */}
          <p
            className={`text-[0.8rem] font-semibold tracking-[0.1em] uppercase mb-4
              ${darkMode ? 'text-slate-600' : 'text-slate-400'}`}
            style={{ fontFamily: "'Sora', sans-serif" }}
          >
            Trusted by Global Brands
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { name: 'Google',    color: darkMode ? '#a78bfa' : '#7c3aed' },
              { name: 'Hostinger', color: darkMode ? '#f87171' : '#dc2626' },
              { name: 'AWS',       color: darkMode ? '#fb923c' : '#ea580c' },
              { name: 'Shopify',   color: darkMode ? '#60a5fa' : '#1d4ed8' },
            ].map(p => (
              <div
                key={p.name}
                className={`h-10 px-[22px] rounded-full flex items-center justify-center
                  font-bold text-[0.82rem] tracking-[0.02em] cursor-default
                  transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md
                  ${darkMode
                    ? 'bg-[#0f2040]/70 border border-blue-500/20'
                    : 'bg-white/85 border border-slate-200 shadow-sm'}`}
                style={{ color: p.color, fontFamily: "'Sora', sans-serif" }}
              >
                {p.name}
              </div>
            ))}
          </div>

        </div>{/* end content */}
      </div>{/* end root */}

      {/* ── Query Modal ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-[4px]"
            onClick={() => setShowModal(false)}
          />
          <div className={`relative rounded-[20px] p-9 w-full max-w-[440px]
            shadow-[0_24px_64px_rgba(0,0,0,0.25)]
            ${darkMode
              ? 'bg-[#0f2040] border border-blue-500/25'
              : 'bg-white border border-slate-200'}`}
          >
            <h3
              className={`text-[1.35rem] font-extrabold mb-5 tracking-[-0.02em]
                ${darkMode ? 'text-sky-50' : 'text-slate-900'}`}
              style={{ fontFamily: "'Sora', sans-serif" }}
            >
              Drop Your Queries
            </h3>

            {submitMessage && (
              <div className={`mb-4 px-4 py-3 rounded-xl text-sm border
                ${submitMessage.includes('Thank you')
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'}`}
              >
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmitQuery} className="flex flex-col gap-4">
              <div>
                <label className={labelCls}>Your Name *</label>
                <input
                  type="text" name="name" value={formData.name}
                  onChange={handleInputChange} placeholder="John Doe" required
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Email Address *</label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleInputChange} placeholder="john@example.com" required
                  className={inputCls}
                />
              </div>
              <div>
                <label className={labelCls}>Your Query *</label>
                <textarea
                  name="message" value={formData.message}
                  onChange={handleInputChange} placeholder="Tell us what you need..."
                  rows={4} required
                  className={`${inputCls} resize-y`}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl font-bold text-[0.9rem] tracking-[0.05em]
                  uppercase text-white bg-blue-700 border-none cursor-pointer
                  transition-all duration-200
                  hover:bg-blue-800 hover:-translate-y-px
                  disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: "'Sora', sans-serif" }}
              >
                {isSubmitting ? 'Submitting…' : 'Submit Query'}
              </button>
            </form>

            <button
              className={`absolute top-3.5 right-4 text-2xl bg-transparent border-none
                cursor-pointer leading-none transition-colors duration-200 hover:text-red-500
                ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
