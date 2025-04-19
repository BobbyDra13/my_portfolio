import { motion } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Weather Prediction",
    tech: "Python, sklearn, matplotlib",
    desc: "Applied ML algorithms like Decision Tree and AdaBoost on weather data.",
    github: "https://github.com/BobbyDra13/weather-prediction",
    live: "",
  },
  {
    title: "Food Delivery App",
    tech: "React.js, HTML, CSS",
    desc: "Designed a responsive food ordering interface with restaurant listing.",
    github: "https://github.com/BobbyDra13/food-delivery",
    live: "",
  },
];

const Projects = () => (
  <section className="space-y-6 relative text-white backdrop-blur-sm">
    <h2 className="text-3xl font-bold text-center text-blue-200 glow-text mb-8">
      🚀 Projects & Work
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full">
          
          <CardContainer className="inter-var w-full py-10">
            <CardBody className="bg-gradient-to-r from-blue-800 via-indigo-900 to-purple-800 
              relative group/card hover:shadow-2xl hover:shadow-blue-500/[0.3] border-white/[0.2] 
              border-2 w-full rounded-xl p-6 shadow-xl h-auto">
              
              <CardItem translateZ="50" className="text-2xl font-bold text-blue-200">
                {proj.title}
              </CardItem>
              
              <CardItem translateZ="60" className="mt-3 text-blue-100">
                {proj.desc}
              </CardItem>
              
              <CardItem translateZ="40" className="text-sm mt-2 text-blue-300 font-mono">
                {proj.tech}
              </CardItem>
              
              <div className="flex gap-4 mt-6">
                {proj.github && (
                  <CardItem translateZ="40" className="">
                    <a 
                      href={proj.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-900/50 rounded-lg 
                      hover:bg-blue-700/50 transition-all hover:scale-105 text-blue-300 hover:text-white">
                      <Github className="w-4 h-4" />
                      <span className="text-sm font-medium">GitHub</span>
                    </a>
                  </CardItem>
                )}
                
                {proj.live && (
                  <CardItem translateZ="40" className="">
                    <a 
                      href={proj.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-900/50 rounded-lg 
                      hover:bg-blue-700/50 transition-all hover:scale-105 text-blue-300 hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  </CardItem>
                )}
              </div>
            </CardBody>
          </CardContainer>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Projects;
