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

export default function FeaturesSection({ darkMode = false }) {
  const features = [
    {
      icon: <FaRobot />,
      title: "Autonomous AI Agents",
      description: "Deploy intelligent agents that understand context, make decisions, and execute complex tasks autonomously. Our agents learn from interactions and continuously improve their performance without human intervention.",
    },
    {
      icon: <FaCogs />,
      title: "Workflow Automation Agents",
      description: "Automate end-to-end business processes with AI agents that handle everything from data entry to approval workflows. Reduce operational costs by up to 85% while maintaining 24/7 productivity and accuracy.",
    },
    {
      icon: <FaChartPie />,
      title: "Intelligent Data Agents",
      description: "AI agents that analyze, process, and extract insights from vast datasets in real-time. Get predictive analytics, automated reporting, and actionable intelligence delivered directly to decision-makers.",
    },
    {
      icon: <FaMicrochip />,
      title: "Customer Service AI Agents",
      description: "Deploy conversational agents that handle customer inquiries, resolve issues, and provide personalized support across multiple channels. Achieve 95% customer satisfaction with instant, accurate responses.",
    },
    {
      icon: <FaUserSecret />,
      title: "Sales & Marketing Agents",
      description: "AI agents that qualify leads, personalize outreach, and nurture prospects through the sales funnel. Boost conversion rates with intelligent engagement strategies powered by behavioral analysis.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Integration & Orchestration",
      description: "Seamlessly connect AI agents with your existing tools and platforms. Our agents work within your tech stack, orchestrating complex workflows across CRM, ERP, databases, and third-party APIs.",
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
                Our AI Agent Solutions
              </h2>
              <p className={`max-w-2xl mx-auto text-lg ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                Deploy intelligent, autonomous AI agents that work 24/7 to automate workflows, enhance decision-making, and drive exponential business growth across your organization.
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
