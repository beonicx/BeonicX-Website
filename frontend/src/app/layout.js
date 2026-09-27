import "./globals.css";
import { Raleway } from "next/font/google";
import StructuredData from "@/components/seo/StructuredData";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import AppShell from "@/components/AppShell";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
    template: "%s | BeonicX"
  },
  description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business. We build SaaS products, AI & voice agents, workflow automation, and intelligent CRMs.",
  alternates: {
    canonical: 'https://beonicx.com',
  },
  keywords: [
    "SaaS development",
    "AI agents",
    "voice agents",
    "workflow automation",
    "CRM development",
    "custom SaaS platform",
    "AI voice agents",
    "intelligent CRM",
    "SaaS products",
    "AI engineering",
    "business automation",
    "BeonicX",
    "software development company",
    "enterprise software",
    "production-grade software"
  ],
  icons: {
    icon: '/favicon.png',
  },
  authors: [{ name: "BeonicX" }],
  creator: "BeonicX",
  publisher: "BeonicX",
  metadataBase: new URL('https://beonicx.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://beonicx.com",
    title: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
    description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business.",
    siteName: "BeonicX",
    images: [
      {
        url: "https://i.postimg.cc/Pxd5LK34/Whats-App-Image-2025-04-09-at-00-27-19-removebg-preview.png",
        width: 1200,
        height: 630,
        alt: "BeonicX - SaaS Development & AI Engineering"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "BeonicX - We Build SaaS Products, AI Agents & Workflow Automation",
    description: "From custom SaaS platforms to autonomous AI agents — BeonicX engineers production-grade software that scales your business.",
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
  // Google verification is done via HTML file in public directory
  // Remove placeholder values to avoid meta tag pollution
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />

        {/* WebSite Structured Data — tells Google to show "BeonicX" instead of "beonicx.com" */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "BeonicX",
              "alternateName": "BeonicX AI",
              "url": "https://beonicx.com",
              "description": "We build SaaS products, AI & voice agents, workflow automation, and intelligent CRMs that scale your business.",
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://beonicx.com/search?q={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        <StructuredData />
        <BreadcrumbSchema />
      </head>
      <body className={raleway.className}>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}