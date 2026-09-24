'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Globe, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Financial Management', desc: 'Accounts payable/receivable, general ledger, budgeting, and real-time financial reporting in one unified module.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Layers, title: 'HR & Payroll Automation', desc: 'Employee management, attendance tracking, payroll processing, leave management, and performance reviews — fully automated.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Code, title: 'Inventory & Supply Chain', desc: 'Real-time stock tracking, purchase orders, vendor management, warehouse operations, and demand forecasting.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Server, title: 'Project Management', desc: 'Task assignment, milestone tracking, resource allocation, Gantt charts, and team collaboration built into your ERP.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Shield, title: 'Business Intelligence', desc: 'Custom dashboards, KPI tracking, cross-department analytics, and automated reporting for data-driven decisions.', gradient: 'from-blue-500 to-blue-600' },
  { icon: TrendingUp, title: 'Multi-Location Support', desc: 'Manage multiple branches, warehouses, and teams from a single platform with location-specific configurations.', gradient: 'from-indigo-600 to-blue-600' },
];

const techStacks = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
  { category: 'Backend & APIs', techs: ['Node.js', 'Python', 'Java', 'GraphQL', 'REST APIs'] },
  { category: 'Database & Storage', techs: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'AWS S3'] },
  { category: 'Infrastructure', techs: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'] },
];

export default function ErpSolutions({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Enterprise Software Experts"
      heroTitle="Enterprise"
      heroHighlight="ERP Solutions"
      heroDescription="Unify finance, HR, inventory, and operations into one intelligent platform. Custom ERP systems designed to eliminate silos and scale with your business."
      services={services}
      servicesHeading="End-to-end ERP development,"
      servicesSubheading="built to unify."
      techStacks={techStacks}
      techDescription="We build ERP systems on modern, scalable stacks that integrate with your existing tools and workflows."
    />
  );
}
