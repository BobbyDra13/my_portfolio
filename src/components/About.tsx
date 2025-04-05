// src/components/About.tsx
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/motionConfigs";

export default function About() {
  return (
    <motion.section
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      className="px-6 py-16 max-w-4xl mx-auto relative z-10 text-white">
      <h2 className="text-3xl font-bold mb-8 text-center drop-shadow-lg">
        👨‍💻 About Me
      </h2>

      <div className="bg-black/60 rounded-xl p-6 md:p-8 backdrop-blur-md shadow-lg">
        <p className="text-lg leading-relaxed text-gray-200">
          I'm <span className="text-blue-400 font-semibold">Manas Chandra</span>
          , a MERN Stack Developer who enjoys crafting sleek, responsive, and
          performant web apps.
        </p>
        <p className="mt-4 text-gray-300">
          Whether it's designing clean UIs or building powerful APIs, I thrive
          on solving challenges and learning new tools & technologies. Currently
          working with{" "}
          <strong className="text-cyan-300">
            TypeScript, Tailwind, Node.js
          </strong>{" "}
          and exploring AI integrations.
        </p>
      </div>
    </motion.section>
  );
}
