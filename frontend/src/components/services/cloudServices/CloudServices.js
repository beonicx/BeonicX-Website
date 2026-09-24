'use client'
import ServicePageLayout from '../ServicePageLayout';
import {
  Globe, Layers, Code, Server, Shield, TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Cloud Migration',
    desc: 'Seamless migration from on-premise to cloud. We assess, plan, and execute zero-downtime migrations to AWS, Azure, or GCP.',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Infrastructure as Code',
    desc: 'Reproducible, version-controlled infrastructure with Terraform, Pulumi, and CloudFormation. Eliminate manual provisioning.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Code,
    title: 'Container Orchestration',
    desc: 'Docker and Kubernetes deployments with auto-scaling, service mesh, and zero-downtime rolling updates for production workloads.',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Server,
    title: 'CI/CD & DevOps',
    desc: 'Automated build, test, and deploy pipelines. GitHub Actions, GitLab CI, Jenkins — integrated with monitoring and alerting.',
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    icon: Shield,
    title: 'Cloud Security & Compliance',
    desc: 'Zero-trust architecture, IAM policies, encryption at rest and in transit, and compliance frameworks — SOC 2, HIPAA, GDPR.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'Cost Optimization & Monitoring',
    desc: 'Right-size resources, eliminate waste, and set up observability with Prometheus, Grafana, Datadog, and CloudWatch.',
    gradient: 'from-indigo-600 to-blue-600',
  },
];

const techStacks = [
  { category: 'Cloud Platforms', techs: ['AWS', 'Google Cloud', 'Azure', 'DigitalOcean', 'Cloudflare'] },
  { category: 'Containers & Orchestration', techs: ['Docker', 'Kubernetes', 'Helm', 'Istio', 'ArgoCD'] },
  { category: 'IaC & CI/CD', techs: ['Terraform', 'Pulumi', 'GitHub Actions', 'GitLab CI', 'Jenkins'] },
  { category: 'Monitoring & Security', techs: ['Prometheus', 'Grafana', 'Datadog', 'Vault', 'Sentry'] },
];

export default function CloudServices({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Certified Cloud Architects"
      heroTitle="Enterprise"
      heroHighlight="Cloud Services"
      heroDescription="Scale your infrastructure with enterprise cloud solutions on AWS, Azure, and GCP. We provide cloud migration, DevOps, and serverless architecture services."
      services={services}
      servicesHeading="Full-spectrum cloud solutions,"
      servicesSubheading="built to scale."
      techStacks={techStacks}
      techDescription="We leverage industry-leading cloud platforms and DevOps tools to build resilient, secure, and cost-efficient infrastructure."
      ctaTitle="Ready to Scale Your"
      ctaHighlight="Cloud Infrastructure?"
      ctaDescription="Let's architect a cloud solution that's secure, cost-efficient, and built to grow with your business."
    />
  );
}
