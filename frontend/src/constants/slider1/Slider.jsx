'use client';
import { useState, useEffect } from 'react';
import CasestudySlider from '../slider2/casestudy';
import ProjectSlider from '../slider2/projectSlider';
import ServicesSlider from '../slider2/servicesSlider';
import { getProjects, getServices } from '@/lib/api';

const defaultProjects = [
  { title: "Website Development", description: "Custom website built with React and Next.js", image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg" },
  { title: "Custom CRM Development", description: "Brand identity and logo design for startups", image: "https://images.pexels.com/photos/110078/pexels-photo-110078.jpeg" },
  { title: "SEO Optimization", description: "Improve your website's search engine ranking", image: "https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg" },
  { title: "App Development", description: "App Development", image: "https://images.pexels.com/photos/11216260/pexels-photo-11216260.jpeg" },
  { title: "ERP Next Solutions", description: "Professional ERP Next Solutions for your business enterprize", image: "https://images.pexels.com/photos/8636589/pexels-photo-8636589.jpeg" },
  { title: "AI Agents Integration", description: "Grow your brand with effective social campaigns", image: "https://media.istockphoto.com/id/1733631411/photo/maze-and-ai-concept.jpg?s=1024x1024&w=is&k=20&c=rkBmepxe0-Un3oyamHdCnRUT-bJX5F4HdsqqJ71holM=" },
];

const defaultServices = [
  { title: "Website Development", description: "Custom websites built with React and Next.js for high performance and scalability.", image: "https://images.pexels.com/photos/30885764/pexels-photo-30885764.jpeg" },
  { title: "Mobile App Development", description: "Cross-platform mobile apps built using React Native for seamless user experience.", image: "https://images.pexels.com/photos/8296105/pexels-photo-8296105.jpeg" },
  { title: "Custom CRM Development", description: "End-to-end e-commerce platforms with secure payment gateways and user-friendly UI.", image: "https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg" },
  { title: "ERP Solutions", description: "Boost your online presence with advanced SEO strategies and digital marketing campaigns.", image: "https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" },
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
