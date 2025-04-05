import { motion } from "framer-motion";
import { zoomIn, pulseDownArrow } from "../animations/motionConfigs";

export default function Hero() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Scroll to the next section (one screen down)
      behavior: "smooth",
    });
  };

  return (
    <motion.section
      initial={zoomIn.initial}
      whileInView={zoomIn.whileInView}
      viewport={zoomIn.viewport}
      className="relative w-full min-h-screen flex flex-col justify-center items-center text-center px-4">
      {/* Semi-transparent overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0 rounded-xl" />

      <div className="max-w-2xl relative z-10 text-white">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 drop-shadow-lg">
          Hey, I'm <span className="text-blue-400">Manas</span> 👋
        </h1>

        <p className="text-lg sm:text-xl text-gray-200 mb-6 leading-relaxed drop-shadow-md">
          I'm a passionate{" "}
          <span className="text-cyan-400 font-semibold">
            MERN Stack Developer
          </span>{" "}
          who loves building modern web apps and solving real-world problems
          with clean code.
        </p>

        <a
          href="/Manas_Chandra_Resume.pdf"
          download
          className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-medium shadow-xl hover:shadow-2xl transition duration-300">
          📄 Download Resume
        </a>
      </div>

      {/* Pulsating Down Arrow */}
      <motion.div
        initial={pulseDownArrow.initial}
        animate={pulseDownArrow.animate}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer "
        onClick={handleScrollDown}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-20 h-20 text-white animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </motion.section>
  );
}
