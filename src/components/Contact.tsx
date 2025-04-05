import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/fadeInUp"; // Ensure correct import path

const Contact = () => (
  <section className="space-y-6 relative text-white m-5 p-6 rounded-lg bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-800 shadow-xl">
    <h2 className="text-3xl font-bold text-center text-blue-200 glow-text">
      📬 Contact
    </h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <motion.div
        className="flex items-center gap-2 p-4 bg-blue-900 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <Mail className="w-5 h-5 text-blue-300" />
        <a
          href="mailto:manaschandra07@gmail.com"
          className="underline text-blue-400 hover:text-white transition-colors">
          Gmail
        </a>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 p-4 bg-blue-900 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <Phone className="w-5 h-5 text-blue-300" />
        <span>+91 9949804777</span>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 p-4 bg-blue-900 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <Github className="w-5 h-5 text-blue-300" />
        <a
          href="https://github.com/BobbyDra13"
          className="underline text-blue-400 hover:text-white transition-colors"
          target="_blank"
          rel="noreferrer">
          GitHub Profile
        </a>
      </motion.div>
      <motion.div
        className="flex items-center gap-2 p-4 bg-blue-900 rounded-lg shadow-lg hover:bg-blue-800 transition-all"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}>
        <Linkedin className="w-5 h-5 text-blue-300" />
        <a
          href="https://www.linkedin.com/in/manas-chandra-3b3a9923a/"
          className="underline text-blue-400 hover:text-white transition-colors"
          target="_blank"
          rel="noreferrer">
          LinkedIn Profile
        </a>
      </motion.div>
    </div>
    {/* Starry background overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
  </section>
);

export default Contact;
