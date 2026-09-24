'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Globe, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  { icon: Globe, title: 'Sales Pipeline Automation', desc: 'Automate lead scoring, deal tracking, and follow-ups. Visualize your entire sales funnel with real-time pipeline dashboards.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Layers, title: 'Contact & Lead Management', desc: 'Centralized contact database with smart segmentation, interaction history, tagging, and automated lead nurturing workflows.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Code, title: 'Custom Dashboards & Reports', desc: 'Real-time analytics dashboards with KPI tracking, sales forecasting, team performance metrics, and exportable reports.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Server, title: 'Communication Tracking', desc: 'Track emails, calls, meetings, and messages in one place. Automatic logging with calendar sync and follow-up reminders.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Shield, title: 'Third-Party Integrations', desc: 'Connect your CRM with email, payment gateways, marketing tools, accounting software, and any API-based service.', gradient: 'from-blue-500 to-blue-600' },
  { icon: TrendingUp, title: 'Role-Based Access Control', desc: 'Granular permissions for teams, managers, and admins. Secure data access with audit trails and activity logging.', gradient: 'from-indigo-600 to-blue-600' },
];

const techStacks = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Recharts'] },
  { category: 'Backend & APIs', techs: ['Node.js', 'Python', 'GraphQL', 'REST APIs', 'WebSockets'] },
  { category: 'Database & Storage', techs: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'S3'] },
  { category: 'Integrations', techs: ['Stripe', 'Twilio', 'SendGrid', 'Zapier', 'OAuth 2.0'] },
];

export default function CrmDevelopment({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="CRM Development Experts"
      heroTitle="Custom"
      heroHighlight="CRM Development"
      heroDescription="Centralize your customer data, automate sales pipelines, and drive retention with a CRM built for your exact business workflow."
      services={services}
      servicesHeading="Comprehensive CRM solutions,"
      servicesSubheading="built for your workflow."
      techStacks={techStacks}
      techDescription="We use modern frameworks and battle-tested platforms to build CRM systems that are fast, reliable, and easy to extend."
    />
  );
}
