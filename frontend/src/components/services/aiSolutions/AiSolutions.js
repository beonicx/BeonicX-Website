'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Brain, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Custom AI Agent Development',
    desc: 'Build autonomous agents powered by LLMs that handle customer service, sales, data analysis, and complex multi-step workflows.',
    gradient: 'from-neutral-700 to-neutral-600',
  },
  {
    icon: Layers,
    title: 'RAG & Knowledge Systems',
    desc: 'Enterprise knowledge bases powered by retrieval-augmented generation. Ground AI responses in your proprietary data with high accuracy.',
    gradient: 'from-neutral-600 to-neutral-600',
  },
  {
    icon: Code,
    title: 'LLM Fine-Tuning & Training',
    desc: 'Fine-tune foundation models on your domain data for specialized tasks — from document classification to code generation.',
    gradient: 'from-neutral-600 to-neutral-700',
  },
  {
    icon: Server,
    title: 'Predictive Analytics & ML',
    desc: 'Machine learning models for demand forecasting, fraud detection, churn prediction, and real-time anomaly detection.',
    gradient: 'from-neutral-700 to-neutral-800',
  },
  {
    icon: Shield,
    title: 'AI Safety & Governance',
    desc: 'Responsible AI frameworks with bias detection, explainability dashboards, prompt security, and regulatory compliance.',
    gradient: 'from-neutral-600 to-neutral-700',
  },
  {
    icon: TrendingUp,
    title: 'MLOps & AI Infrastructure',
    desc: 'Production-grade ML pipelines with automated retraining, model versioning, monitoring, and seamless CI/CD for AI.',
    gradient: 'from-neutral-700 to-neutral-700',
  },
];

const techStacks = [
  { category: 'AI & ML Frameworks', techs: ['PyTorch', 'TensorFlow', 'LangChain', 'Hugging Face', 'OpenAI'] },
  { category: 'Data & Vector DBs', techs: ['Pinecone', 'Weaviate', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Cloud & MLOps', techs: ['AWS SageMaker', 'Google Vertex', 'Azure ML', 'Docker', 'Kubernetes'] },
  { category: 'Languages & Tools', techs: ['Python', 'TypeScript', 'FastAPI', 'Ray', 'MLflow'] },
];

export default function AiSolutions({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Enterprise AI Integration Experts"
      heroTitle="Seamless"
      heroHighlight="AI Agents Integration"
      heroDescription="Deploy autonomous AI agents into your existing workflows — from customer support and sales automation to data intelligence and multi-agent orchestration."
      services={services}
      servicesHeading="Intelligent AI solutions,"
      servicesSubheading="built to scale."
      techStacks={techStacks}
      techDescription="We leverage cutting-edge AI frameworks and cloud infrastructure to build intelligent, scalable, and production-ready AI systems."
    />
  );
}
