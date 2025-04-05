// src/components/Education.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/motionConfigs";

export default function Education() {
  return (
    <motion.section
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      className="px-6 py-16 max-w-4xl mx-auto relative z-10 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
        🎓 Education
      </h2>

      <div className="bg-black/60 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-lg">
        <h3 className="text-2xl font-semibold text-blue-300">
          National Institute of Technology, Rourkela
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          B.Tech in Industrial Design • 2020 - 2024
        </p>
        <p className="text-md text-gray-300 leading-relaxed">
          Strong foundation in design thinking, systems engineering, and full
          stack development. Participated in hackathons and created scalable
          tech solutions during college.
        </p>
      </div>
    </motion.section>
  );
}
