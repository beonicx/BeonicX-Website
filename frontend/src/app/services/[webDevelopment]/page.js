"use client";

import React, { useState, useEffect, use } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { getServiceBySlug } from '@/lib/api';
import ServiceDetail from '@/components/services/ServiceDetail';
import WebDevelopment from '@/components/services/webDevelopment/WebDevelopment';
import AiSolutions from '@/components/services/aiSolutions/AiSolutions';
import AppDevelopment from '@/components/services/appDevelopment/AppDevelopment';
import CrmDevelopment from '@/components/services/crmDevelopment/CrmDevelopment';
import ErpSolutions from '@/components/services/erpSolutions/ErpSolutions';
import VoiceAgents from '@/components/services/voiceAgents/VoiceAgents';
import CloudServices from '@/components/services/cloudServices/CloudServices';

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
  const { darkMode } = useTheme();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const serviceSlug = webDevelopment || 'website-development';

  useEffect(() => {
    async function loadService() {
      const data = await getServiceBySlug(serviceSlug);
      setService(data);
      setLoading(false);
    }
    loadService();
  }, [serviceSlug]);

  const hasRichContent = service && (
    (service.sections && service.sections.length > 0) ||
    (service.processSteps && service.processSteps.length > 0) ||
    (service.techStack && service.techStack.length > 0)
  );

  const FallbackComponent = fallbackComponents[serviceSlug];

  if (loading) {
    return (
      <div className="flex items-center justify-center py-40">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-2 border-blue-600/30 border-t-blue-600 rounded-full animate-spin" />
          <p className={`text-sm font-medium ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Loading service...</p>
        </div>
      </div>
    );
  }

  if (hasRichContent) {
    return <ServiceDetail darkMode={darkMode} service={service} />;
  }

  if (FallbackComponent) {
    return <FallbackComponent darkMode={darkMode} />;
  }

  if (service) {
    return <ServiceDetail darkMode={darkMode} service={service} />;
  }

  return (
    <div className="flex items-center justify-center py-40">
      <div className="text-center">
        <h2 className={`text-2xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Service Not Found</h2>
        <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>The service you&apos;re looking for doesn&apos;t exist.</p>
      </div>
    </div>
  );
};

export default Page;
