"use client";

import React, { useState, useEffect, use } from 'react';
import { getServiceBySlug } from '@/lib/api';
import ServiceDetail from '@/components/services/ServiceDetail';
import WebDevelopment from '@/components/services/webDevelopment/WebDevelopment';
import AiSolutions from '@/components/services/aiSolutions/AiSolutions';
import AppDevelopment from '@/components/services/appDevelopment/AppDevelopment';
import CrmDevelopment from '@/components/services/crmDevelopment/CrmDevelopment';
import ErpSolutions from '@/components/services/erpSolutions/ErpSolutions';
import VoiceAgents from '@/components/services/voiceAgents/VoiceAgents';
import CloudServices from '@/components/services/cloudServices/CloudServices';
import Footer from '@/layouts/footer/Footer';
import Navbar from '@/layouts/navbar/Navbar';

const fallbackComponents = {
  'website-development': WebDevelopment,
  'web-development': WebDevelopment,
  'ai-agents-integration': AiSolutions,
  'app-development': AppDevelopment,
  'crm-development': CrmDevelopment,
  'erp-solutions': ErpSolutions,
  'voice-agents-integration': VoiceAgents,
  'cloud-services': CloudServices,
};

const Page = ({ params }) => {
  const { webDevelopment } = use(params);
  const [darkMode, setDarkMode] = useState(false);
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const serviceSlug = webDevelopment || 'website-development';

  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme) {
      setDarkMode(savedTheme === 'true');
    } else if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setDarkMode(true);
    }

    async function loadService() {
      const data = await getServiceBySlug(serviceSlug);
      setService(data);
      setLoading(false);
    }
    loadService();
  }, [serviceSlug]);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode.toString());
  };

  const hasRichContent = service && (
    (service.sections && service.sections.length > 0) ||
    (service.processSteps && service.processSteps.length > 0) ||
    (service.techStack && service.techStack.length > 0)
  );

  const FallbackComponent = fallbackComponents[serviceSlug];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} onToggleDarkMode={toggleDarkMode} />
      {loading ? (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
        </div>
      ) : hasRichContent ? (
        <ServiceDetail darkMode={darkMode} service={service} />
      ) : FallbackComponent ? (
        <FallbackComponent darkMode={darkMode} />
      ) : service ? (
        <ServiceDetail darkMode={darkMode} service={service} />
      ) : (
        <div className={`min-h-screen flex items-center justify-center ${darkMode ? 'bg-slate-950 text-white' : 'bg-slate-50'}`}>
          <p className="text-xl">Service not found</p>
        </div>
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
};

export default Page;
