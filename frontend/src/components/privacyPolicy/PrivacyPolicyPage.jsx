'use client'
import { privacyPolicyData } from './PrivacyPolicy';

export default function PrivacyPolicyPage({ darkMode = false }) {
  const { lastUpdated, companyName, website, contactEmail, sections } = privacyPolicyData;

  return (
    <div className={`min-h-screen transition-colors duration-200 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`relative py-20 lg:py-28 overflow-hidden ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl lg:text-6xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Privacy <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Policy</span>
          </h1>
          <p className={`text-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Last Updated: {lastUpdated}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'}`}
              >
                <h2 className={`text-2xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {index + 1}. {section.title}
                </h2>

                {section.content && (
                  <p className={`text-base leading-relaxed mb-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {section.content}
                  </p>
                )}

                {section.items && (
                  <ul className={`list-disc list-inside space-y-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {section.items.map((item, i) => (
                      <li key={i} className="text-base leading-relaxed">{item}</li>
                    ))}
                  </ul>
                )}

                {section.subsections && (
                  <div className="space-y-6 mt-4">
                    {section.subsections.map((sub, i) => (
                      <div key={i}>
                        <h3 className={`text-lg font-semibold mb-3 ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                          {sub.subtitle}
                        </h3>
                        {sub.items && (
                          <ul className={`list-disc list-inside space-y-2 ml-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                            {sub.items.map((item, j) => (
                              <li key={j} className="text-base leading-relaxed">{item}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.contactInfo && (
                  <div className={`mt-4 p-4 rounded-lg ${darkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Email:</span> {section.contactInfo.email}
                    </p>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">Address:</span> {section.contactInfo.address}
                    </p>
                    <p className={`mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <span className="font-semibold">DPO:</span> {section.contactInfo.dpo}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
