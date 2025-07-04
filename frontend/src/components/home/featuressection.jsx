// pages/solutions.js
import Head from 'next/head';
import {
  FaMicrochip,
  FaChartPie,
  FaProjectDiagram,
  FaRobot,
  FaCogs,
  FaUserSecret,
} from 'react-icons/fa';

export default function SolutionsPage({ darkMode = false }) {
  const features = [
    {
      icon: <FaCogs />,
      title: "Intelligent Process Automation",
      description: "Enhance operational efficiency by automating repetitive tasks using AI-powered workflows. Our automation solutions reduce human error, cut operational costs, and allow your team to focus on strategic initiatives.",
    },
    {
      icon: <FaChartPie />,
      title: "Predictive Analytics & Forecasting",
      description: "Make smarter business decisions with data-driven forecasts. Our AI models identify trends, patterns, and anomalies, helping you anticipate future outcomes and proactively address challenges across your business landscape.",
    },
    {
      icon: <FaMicrochip />,
      title: "Machine Learning Integration",
      description: "Unlock the potential of your data by integrating machine learning into your core systems. From recommendation engines to fraud detection, we build models tailored to your domain, ensuring intelligent outcomes.",
    },
    {
      icon: <FaUserSecret />,
      title: "AI-Powered Personalization",
      description: "Deliver highly personalized customer experiences with AI that understands preferences and behavior. From content customization to product suggestions, drive engagement and conversion with smart personalization.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Smart Business Intelligence",
      description: "Transform raw data into real-time insights using AI-enhanced BI dashboards and reporting systems. Make your data speak with automated insights, trend visualizations, and executive-level decision support.",
    },
    {
      icon: <FaRobot />,
      title: "Conversational AI & Chatbots",
      description: "Empower your customer service and internal support with conversational AI. Our smart bots handle inquiries, guide users, and provide human-like assistance—available 24/7 for better user satisfaction.",
    },
  ];
  
  return (
    <div className={darkMode ? 'min-h-screen bg-gray-900 text-white' : 'min-h-screen bg-gray-50 text-black'}>
      <Head>
        <title>AI Solutions for Business Growth | BeonicX</title>
        <meta
          name="description"
          content="Explore our innovative AI solutions tailored to automate operations, enhance decision-making, and unlock new business opportunities."
        />
        <meta name="keywords" content="AI solutions, artificial intelligence, business automation, machine learning, AI development, BeonicX AI" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="AI Solutions for Business Growth | BeonicX" />
        <meta property="og:description" content="Discover how BeonicX’s AI technologies are driving transformation across industries." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://www.beonicx.ai/solutions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section id="solutions" className={`py-20 ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${darkMode ? "text-white" : "text-blue-800"}`}>
                Our AI Solutions
              </h2>
              <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Discover how our advanced AI technologies can transform your business operations and drive growth through automation, optimization, and intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <article
                  key={index}
                  className={`rounded-2xl p-6 shadow-xl hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 ${
                    darkMode ? "bg-gray-900 text-white" : "bg-white text-[#161616]"
                  }`}
                >
                  <div className={`text-4xl mb-4 ${darkMode ? "text-blue-400" : "text-blue-600"}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className={`text-base ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                    {feature.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
