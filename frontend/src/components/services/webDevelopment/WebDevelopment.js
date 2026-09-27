'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Globe, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Full-Stack Development', desc: 'End-to-end web solutions with modern frontend frameworks and robust backend systems.', gradient: 'from-neutral-700 to-neutral-600' },
  { icon: Layers, title: 'Progressive Web Apps', desc: 'Fast, reliable, and engaging PWAs that work seamlessly across all devices and platforms.', gradient: 'from-neutral-600 to-neutral-600' },
  { icon: Code, title: 'Custom Web Applications', desc: 'Tailored web applications built with cutting-edge technologies to meet your unique needs.', gradient: 'from-neutral-600 to-neutral-700' },
  { icon: Server, title: 'API Development & Integration', desc: 'Scalable RESTful and GraphQL APIs with seamless third-party service integration.', gradient: 'from-neutral-700 to-neutral-800' },
  { icon: Shield, title: 'Security & Performance', desc: 'Enterprise-grade security measures and optimized performance for lightning-fast experiences.', gradient: 'from-neutral-600 to-neutral-700' },
  { icon: TrendingUp, title: 'Maintenance & Support', desc: 'Ongoing support, updates, and enhancements to keep your application ahead of the curve.', gradient: 'from-neutral-700 to-neutral-700' },
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
