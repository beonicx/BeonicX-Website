import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "I discovered that design thinking puts humans at the centre of problem solving...",
    author: "Parent",
    org: "INTO THE BRAVE NEW WORLD!",
    icon: "🌸",
  },
  {
    text: "People need to understand that creativity is something they should want in their lives...",
    author: "Partner",
    org: "CREATIVITY CAN SAVE THE WORLD",
    icon: "❤️",
  },
  {
    text: "I learned it’s important to let students think with their hands and explore...",
    author: "MOE Educator",
    org: "YISHUN TOWN SECONDARY SCHOOL",
    icon: "📘",
  },
];

export default function Testimonials({ darkMode }) {
  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="bg-yellow-400 dark:bg-neutral-900 min-h-screen flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-7xl overflow-hidden relative group">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-10 text-black dark:text-white">
            Hear what our happy participants have to say.
          </h2>

          <motion.div
            className="flex space-x-6 animate-scroll group-hover:[animation-play-state:paused]"
            style={{ animation: "scroll 25s linear infinite" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="min-w-[280px] max-w-sm p-6 sm:p-8 bg-white dark:bg-neutral-800 rounded-2xl shadow-xl transition-transform transform hover:scale-105"
              >
                <p className="mb-4 leading-relaxed text-sm sm:text-base text-black dark:text-white">
                  “{item.text}”
                </p>
                <div className="text-sm font-medium flex items-center gap-3">
                  <span className="text-xl">{item.icon}</span>
                  <div>
                    <div className="text-black dark:text-white">{item.author}</div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">{item.org}</div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}
