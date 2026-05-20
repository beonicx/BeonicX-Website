import "./globals.css";
import { Raleway } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "BeonicX - AI-Powered Autonomous Agents & Intelligent Automation Solutions",
    template: "%s | BeonicX"
  },
  description: "Transform your business with BeonicX's cutting-edge AI agents and intelligent automation. We build autonomous AI agents, customer service bots, sales & marketing agents, and workflow automation solutions tailored for healthcare, finance, e-commerce, and SaaS industries.",
  keywords: [
    "AI agents",
    "autonomous AI agents",
    "intelligent automation",
    "AI chatbots",
    "customer service AI",
    "sales automation",
    "marketing automation",
    "workflow automation",
    "AI solutions",
    "machine learning",
    "predictive analytics",
    "AI integration",
    "custom AI models",
    "BeonicX",
    "enterprise AI",
    "AI for healthcare",
    "AI for finance",
    "AI for e-commerce",
    "process automation"
  ],
  authors: [{ name: "BeonicX" }],
  creator: "BeonicX",
  publisher: "BeonicX",
  metadataBase: new URL('https://beonicx.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beonicx.com",
    title: "BeonicX - AI-Powered Autonomous Agents & Intelligent Automation",
    description: "Transform your business with BeonicX's cutting-edge AI agents and intelligent automation. Custom solutions for healthcare, finance, e-commerce, and SaaS.",
    siteName: "BeonicX",
    images: [
      {
        url: "https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "BeonicX - AI Agents & Automation Solutions"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BeonicX - AI-Powered Autonomous Agents & Intelligent Automation",
    description: "Transform your business with BeonicX's cutting-edge AI agents and intelligent automation solutions.",
    images: ["https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#3B82F6" />
        <StructuredData />
      </head>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
