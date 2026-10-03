'use client';
import { useState, useEffect } from 'react';
import CasestudySlider from '../slider2/casestudy';
import ProjectSlider from '../slider2/projectSlider';
import ServicesSlider from '../slider2/servicesSlider';
import { getProjects, getServices } from '@/lib/api';

const defaultProjects = [
  { title: "SoundHub", description: "A fully functional e-commerce website with auth, product catalog, cart, and payment gateway integration.", image: "/images/projects/soundhub.png", tags: ["E-Commerce", "Next.js", "Payment Gateway"], link: "https://soundhub-x.vercel.app/" },
  { title: "Ellie's Hair & Beauty", description: "A premium salon website with CRM integration for appointment booking, service management, and client tracking.", image: "/images/projects/salon-crm.png", tags: ["Salon CRM", "Web Development", "Booking System"], link: "https://www.ellieshairbeauty.com/" },
  { title: "Tradr", description: "A cross-platform mobile trading app with real-time portfolio tracking, stock search, and wallet management.", image: "/images/projects/tradr.png", tags: ["Mobile App", "React Native", "FinTech"] },
  { title: "WhatsApp CRM", description: "A comprehensive CRM for WhatsApp with contact management, pipelines, broadcasts, automations, and AI agents.", image: "/images/projects/wacrm.png", tags: ["CRM", "WhatsApp API", "Automation"], link: "https://wacrm.beonicx.com" },
  { title: "ERPNext Customization", description: "On-demand ERPNext customization for enterprises — accounting, stock, CRM, data import, and reporting modules.", image: "/images/projects/erpnext.png", tags: ["ERPNext", "Enterprise", "Customization"] },
  { title: "AI Agent for WhatsApp", description: "Intelligent AI agent integrated into WhatsApp for automated customer support, lead qualification, and conversational commerce.", image: "/images/projects/ai-agent-whatsapp.png", tags: ["AI Agent", "WhatsApp", "NLP"] },
];

const defaultServices = [
  { title: "Website Development", description: "Custom websites built with React and Next.js for high performance and scalability.", image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg" },
  { title: "Mobile App Development", description: "Cross-platform mobile apps built using React Native for seamless user experience.", image: "https://images.pexels.com/photos/8296105/pexels-photo-8296105.jpeg" },
  { title: "Custom CRM Development", description: "End-to-end e-commerce platforms with secure payment gateways and user-friendly UI.", image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg" },
  { title: "ERPNext Solutions", description: "Boost your online presence with advanced SEO strategies and digital marketing campaigns.", image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" },
  { title: "SEO & Digital Marketing", description: "Create intuitive and engaging user interfaces with cutting-edge design principles.", image: "https://images.pexels.com/photos/326518/pexels-photo-326518.jpeg" },
];

export default function Slider({ darkMode }) {
  const [projects, setProjects] = useState(defaultProjects);
  const [services, setServices] = useState(defaultServices);

  useEffect(() => {
    async function load() {
      const [projectData, serviceData] = await Promise.all([
        getProjects(),
        getServices()
      ]);

      if (projectData && projectData.length > 0) {
        const mapped = projectData.map(p => ({
          title: p.title,
          description: p.description,
          image: p.image,
          tags: p.tags || p.technologies,
          link: p.link,
        }));
        setProjects(mapped);
      }

      if (serviceData && serviceData.length > 0) {
        const mapped = serviceData.map(s => ({
          title: s.title,
          description: s.shortDescription || s.description,
          image: s.image,
        }));
        setServices(mapped);
      }
    }
    load();
  }, []);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <main
        className={`max-w-7xl mx-auto py-8 rounded-xl transition-colors duration-300 ${
          darkMode ? 'bg-slate-950 text-white' : 'bg-white text-black'
        }`}
      >
        <div className="mb-12">
          <ServicesSlider projects={services} darkMode={darkMode} />
        </div>

        <div className="mb-12">
          <ProjectSlider projects={projects} darkMode={darkMode} />
        </div>
      </main>
    </div>
  );
}
