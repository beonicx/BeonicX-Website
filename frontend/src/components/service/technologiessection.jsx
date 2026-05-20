import React from 'react'
import { motion } from 'framer-motion';
function Technologiessection({darkMode}) {
    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      };
      
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };
  return (
    <section className={`py-20 px-4 ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
    <div className="container mx-auto max-w-6xl">
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Technologies We Use
        </h2>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
          We leverage the latest technologies to build powerful mobile applications.
        </p>
      </motion.div>
      
      <motion.div 
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        {[
          "React Native", "Flutter", "Swift", "Kotlin", "JavaScript",
          "TypeScript", "Node.js", "Firebase", "AWS", "Google Cloud"
        ].map((tech, index) => (
          <motion.div 
            key={index} 
            className={`${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-gray-100 hover:bg-gray-200'} rounded-lg p-6 text-center flex items-center justify-center h-24 transition-all duration-300`}
            variants={fadeInUp}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: darkMode ? '0 0 15px rgba(59, 130, 246, 0.5)' : '0 4px 15px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <span className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-800'}`}>{tech}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
      
     
    
  )
}

export default Technologiessection