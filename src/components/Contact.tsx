import { Mail, Phone, Github, Linkedin, Code2 } from "lucide-react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

const Contact = () => (
  <section className="space-y-6 relative text-white m-5 p-6 rounded-lg backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-center text-blue-200 glow-text mb-8">
      📬 Connect With Me
    </h2>

    <CardContainer className="inter-var">
      <CardBody className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-800 relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.3] border-white/[0.2] border-2 w-auto sm:w-[30rem] h-auto rounded-xl p-6 shadow-xl">
        <CardItem translateZ="50" className="text-2xl font-bold text-blue-200">
          Let's Connect
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-blue-100 text-sm max-w-sm mt-2">
          Feel free to reach out through any of these platforms
        </CardItem>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-4 bg-blue-900/50 rounded-lg hover:bg-blue-700/50 transition-all hover:scale-105">
            <Mail className="w-6 h-6 text-blue-300" />
            <a
              href="mailto:manaschandra07@gmail.com"
              className="text-blue-300 hover:text-white transition-colors font-medium">
              Gmail
            </a>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-4 bg-blue-900/50 rounded-lg hover:bg-blue-700/50 transition-all hover:scale-105">
            <Phone className="w-6 h-6 text-blue-300" />
            <span className="text-blue-300 font-medium">+91 9949804777</span>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-4 bg-blue-900/50 rounded-lg hover:bg-blue-700/50 transition-all hover:scale-105">
            <Github className="w-6 h-6 text-blue-300" />
            <a
              href="https://github.com/BobbyDra13"
              className="text-blue-300 hover:text-white transition-colors font-medium"
              target="_blank"
              rel="noreferrer">
              GitHub
            </a>
          </CardItem>

          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-4 bg-blue-900/50 rounded-lg hover:bg-blue-700/50 transition-all hover:scale-105">
            <Linkedin className="w-6 h-6 text-blue-300" />
            <a
              href="https://www.linkedin.com/in/manas-chandra-3b3a9923a/"
              className="text-blue-300 hover:text-white transition-colors font-medium"
              target="_blank"
              rel="noreferrer">
              LinkedIn
            </a>
          </CardItem>
          
          <CardItem
            translateZ="70"
            className="flex items-center gap-2 p-4 bg-blue-900/50 rounded-lg hover:bg-blue-700/50 transition-all hover:scale-105">
            <Code2 className="w-6 h-6 text-blue-300" />
            <a
              href="https://leetcode.com/BobbyDra13/"
              className="text-blue-300 hover:text-white transition-colors font-medium"
              target="_blank"
              rel="noreferrer">
              LeetCode
            </a>
          </CardItem>
        </div>

        <div className="flex justify-center mt-8">
          <CardItem
            translateZ="80"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold shadow-lg shadow-blue-500/20 animate-pulse-slow">
            Thanks for visiting my portfolio!
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>


  </section>
);

export default Contact;
