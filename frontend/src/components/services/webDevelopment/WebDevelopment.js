'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Globe, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Full-Stack Development', desc: 'End-to-end web solutions with modern frontend frameworks and robust backend systems.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Layers, title: 'Progressive Web Apps', desc: 'Fast, reliable, and engaging PWAs that work seamlessly across all devices and platforms.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Code, title: 'Custom Web Applications', desc: 'Tailored web applications built with cutting-edge technologies to meet your unique needs.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Server, title: 'API Development & Integration', desc: 'Scalable RESTful and GraphQL APIs with seamless third-party service integration.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Shield, title: 'Security & Performance', desc: 'Enterprise-grade security measures and optimized performance for lightning-fast experiences.', gradient: 'from-blue-500 to-blue-600' },
  { icon: TrendingUp, title: 'Maintenance & Support', desc: 'Ongoing support, updates, and enhancements to keep your application ahead of the curve.', gradient: 'from-indigo-600 to-blue-600' },
];

const techStacks = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend', techs: ['Node.js', 'Python', 'Go', 'GraphQL', 'REST APIs'] },
  { category: 'Database & Cloud', techs: ['PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud', 'Docker'] },
  { category: 'Tools & Platforms', techs: ['Git', 'CI/CD', 'Kubernetes', 'Vercel', 'Firebase'] },
];

export default function WebDevelopment({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Award-Winning Development Team"
      heroTitle="Professional"
      heroHighlight="Web Development"
      heroDescription="Transform your vision into reality with cutting-edge web applications. We build scalable, high-performance solutions tailored to your business needs."
      services={services}
      servicesHeading="Comprehensive web solutions,"
      servicesSubheading="built to scale."
      techStacks={techStacks}
      techDescription="We leverage the most powerful and modern technologies to build scalable, performant, and future-proof web applications."
    />
  );
}
