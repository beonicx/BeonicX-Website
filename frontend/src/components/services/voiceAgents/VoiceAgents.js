'use client'
import ServicePageLayout from '../ServicePageLayout';
import { Globe, Layers, Code, Server, Shield, TrendingUp } from 'lucide-react';

const services = [
  { icon: Globe, title: 'AI-Powered Voice Bots', desc: 'Human-like conversational AI that handles customer calls, understands intent, and resolves queries without human intervention.', gradient: 'from-blue-600 to-blue-500' },
  { icon: Layers, title: 'Inbound & Outbound Calling', desc: 'Automated inbound support lines and outbound campaigns for lead qualification, reminders, surveys, and collections.', gradient: 'from-blue-500 to-indigo-500' },
  { icon: Code, title: 'IVR Automation', desc: 'Replace rigid IVR menus with intelligent voice routing that understands natural language and routes calls dynamically.', gradient: 'from-indigo-500 to-blue-600' },
  { icon: Server, title: 'Appointment Scheduling', desc: 'Voice agents that book, reschedule, and confirm appointments directly over the phone with calendar integration.', gradient: 'from-blue-600 to-blue-700' },
  { icon: Shield, title: 'Multilingual Support', desc: 'Deploy voice agents in multiple languages and dialects. Real-time translation and accent-aware speech recognition.', gradient: 'from-blue-500 to-blue-600' },
  { icon: TrendingUp, title: 'Call Analytics & Transcription', desc: 'Real-time call transcription, sentiment analysis, conversation analytics, and quality monitoring dashboards.', gradient: 'from-indigo-600 to-blue-600' },
];

const techStacks = [
  { category: 'Voice AI Platforms', techs: ['OpenAI Realtime', 'ElevenLabs', 'Deepgram', 'Google STT', 'Azure Speech'] },
  { category: 'Telephony & SIP', techs: ['Twilio', 'Vonage', 'Plivo', 'FreeSWITCH', 'WebRTC'] },
  { category: 'Backend & Orchestration', techs: ['Node.js', 'Python', 'FastAPI', 'LangChain', 'Redis'] },
  { category: 'Analytics & NLP', techs: ['Whisper', 'Hugging Face', 'Elasticsearch', 'Grafana', 'PostgreSQL'] },
];

export default function VoiceAgents({ darkMode }) {
  return (
    <ServicePageLayout
      darkMode={darkMode}
      heroBadge="Voice AI Specialists"
      heroTitle="Intelligent"
      heroHighlight="Voice Agents"
      heroDescription="Deploy AI-powered voice agents for inbound and outbound calls, IVR automation, appointment scheduling, and multilingual conversational support — available 24/7."
      services={services}
      servicesHeading="Complete voice AI solutions,"
      servicesSubheading="built to converse."
      techStacks={techStacks}
      techDescription="We integrate best-in-class voice AI and telephony platforms to build reliable, scalable voice agent systems."
    />
  );
}
