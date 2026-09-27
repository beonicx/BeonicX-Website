export const metadata = {
  title: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
  description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business. We build SaaS products, AI & voice agents, workflow automation, and intelligent CRMs.",
  keywords: [
    "SaaS development", "AI agents", "voice agents", "workflow automation",
    "CRM development", "BeonicX", "custom SaaS platform",
    "software development company", "AI engineering", "business automation"
  ],
  alternates: {
    canonical: 'https://beonicx.com/home',
  },
  openGraph: {
    title: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
    description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business.",
    url: 'https://beonicx.com/home',
    type: 'website',
    images: [{ url: 'https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png', width: 1200, height: 630, alt: 'BeonicX - SaaS Development & AI Engineering' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
    description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business.",
  },
};

export default function HomeLayout({ children }) {
  return children;
}
