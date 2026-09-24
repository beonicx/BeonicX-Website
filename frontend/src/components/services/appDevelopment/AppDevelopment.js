'use client'
import ServicePageLayout from '../ServicePageLayout';
import {
  Globe, Layers, Code, Server, Shield, TrendingUp
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'iOS App Development',
    desc: 'Native iOS applications built with Swift and SwiftUI. Optimized for performance, following Apple\'s Human Interface Guidelines.',
    gradient: 'from-blue-600 to-blue-500',
  },
  {
    icon: Layers,
    title: 'Android App Development',
    desc: 'Native Android apps with Kotlin and Jetpack Compose. Material Design 3, optimized for the full spectrum of Android devices.',
    gradient: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Code,
    title: 'Cross-Platform Apps',
    desc: 'Build once, deploy everywhere with React Native and Flutter. Shared codebase with near-native performance on iOS and Android.',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    icon: Server,
    title: 'Backend & API Development',
    desc: 'Scalable mobile backends with real-time sync, push notifications, authentication, and cloud-native microservices architecture.',
    gradient: 'from-blue-600 to-blue-700',
  },
  {
    icon: Shield,
    title: 'App Security & Compliance',
    desc: 'Enterprise-grade mobile security — encryption, biometric auth, certificate pinning, and compliance with GDPR, HIPAA, and SOC 2.',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    icon: TrendingUp,
    title: 'App Store Optimization',
    desc: 'Launch strategy, ASO, analytics integration, and post-launch iteration to maximize downloads, retention, and user engagement.',
    gradient: 'from-indigo-600 to-blue-600',
  },
];

const techStacks = [
  { category: 'Mobile Frameworks', techs: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'SwiftUI'] },
  { category: 'Backend & APIs', techs: ['Node.js', 'Firebase', 'GraphQL', 'Supabase', 'REST APIs'] },
  { category: 'Cloud & DevOps', techs: ['AWS', 'Google Cloud', 'Azure', 'Docker', 'CI/CD'] },
  { category: 'Testing & Analytics', techs: ['Jest', 'Detox', 'Appium', 'Firebase Analytics', 'Sentry'] },
];

export default function AppDevelopment({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Top-Rated Mobile Development Team"
      heroTitle="Professional"
      heroHighlight="Mobile App Development"
      heroDescription="Build powerful mobile applications for iOS and Android. We create native and cross-platform apps with seamless user experiences and cutting-edge features."
      servicesHeading="End-to-end mobile apps,"
      servicesSubheading="built to scale."
      services={services}
      techStacks={techStacks}
      techDescription="We use the most powerful mobile development frameworks and tools to build fast, beautiful, and reliable apps across all platforms."
    />
  );
}
