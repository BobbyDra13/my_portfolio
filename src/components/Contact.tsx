import { Mail, Phone, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/fadeInUp";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Contact = () => (
  <section className="space-y-6 relative text-white m-5 p-6 rounded-lg">
    <h2 className="text-3xl font-bold text-center text-blue-200 glow-text mb-8">
      📬 Contact
    </h2>

    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-800 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border shadow-xl">
        <CardItem translateZ="50" className="text-xl font-bold text-blue-200">
          Get in Touch
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-blue-100 text-sm max-w-sm mt-2">
          Feel free to reach out to me through any of these channels
        </CardItem>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all">
            <Mail className="w-5 h-5 text-blue-300" />
            <a
              href="mailto:manaschandra07@gmail.com"
              className="underline text-blue-400 hover:text-white transition-colors">
              Gmail
            </a>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all">
            <Phone className="w-5 h-5 text-blue-300" />
            <span>+91 9949804777</span>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all">
            <Github className="w-5 h-5 text-blue-300" />
            <a
              href="https://github.com/BobbyDra13"
              className="underline text-blue-400 hover:text-white transition-colors"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-3 bg-blue-900/50 rounded-lg hover:bg-blue-800/50 transition-all">
            <Linkedin className="w-5 h-5 text-blue-300" />
            <a
              href="https://www.linkedin.com/in/manas-chandra-3b3a9923a/"
              className="underline text-blue-400 hover:text-white transition-colors"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </CardItem>
        </div>

        <div className="flex justify-center mt-8">
          <CardItem
            translateZ="80"
            as="button"
            className="px-6 py-2 rounded-xl bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors">
            Send Message
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>

    {/* Starry background overlay */}
    <div className="absolute inset-0 bg-black opacity-50 z-[-1]"></div>
  </section>
);

export default Contact;
