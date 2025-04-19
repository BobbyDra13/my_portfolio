import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/motionConfigs";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );

  const experiences = [
    {
      role: "MERN Stack Intern - NeoPhyte",
      company: "NeoPhyte",
      duration: "Jan 2025 – Present",
      brief:
        "Involved in building dynamic features for web applications including 3D interactions and AI service integration.",
      details: [
        "3D model interaction features using React Three Fiber.",
        "Geolocation-based attendance module.",
        "AI service communications integration.",
      ],
      logo: "https://cdn-icons-png.flaticon.com/512/6062/6062646.png",
      color: "from-blue-600 to-indigo-700",
    },
    {
      role: "Summer Intern - Ultratech Cement",
      company: "Ultratech Cement",
      duration: "Jun 2023 – Jul 2023",
      brief:
        "Focused on WHRS and carbon capture strategies, analyzing data related to carbon emissions.",
      details: [
        "Worked on WHRS and carbon capture strategies.",
        "Data-based analysis of carbon emissions.",
      ],
      logo: "https://cdn-icons-png.flaticon.com/512/5922/5922246.png",
      color: "from-purple-600 to-blue-700",
    },
  ];

  const handleExperienceClick = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index); // Toggle visibility of detailed info
  };

  const handleBackClick = () => {
    setSelectedExperience(null); // Reset to the list view
  };

  return (
    <motion.section
      initial={fadeInUp.initial}
      whileInView={fadeInUp.whileInView}
      viewport={fadeInUp.viewport}
      className="px-6 py-16 max-w-4xl mx-auto relative z-10 text-white">
      <h2 className="text-3xl font-bold text-center text-blue-200 mb-8">
        💼 Professional Experience
      </h2>
      
      <div className="space-y-6 max-w-4xl mx-auto">
        {experiences.map(({ role, company, duration, brief, details, logo }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full">
            
            <div 
              onClick={() => handleExperienceClick(i)}
              className={`cursor-pointer w-full bg-black/60 rounded-xl p-5 backdrop-blur-md shadow-lg 
              hover:shadow-blue-500/20 border border-white/10 transition-all duration-300 
              ${selectedExperience === i ? 'ring-2 ring-blue-400/50' : ''}`}>
              
              <div className="flex flex-row items-center gap-4">
                <div className="flex-shrink-0">
                  <img 
                    src={logo} 
                    alt={`${company} logo`} 
                    className="w-12 h-12 rounded-full object-cover bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-2"
                  />
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-blue-200">
                    {role}
                  </h3>
                  
                  <p className="text-xs text-blue-300 mt-1">
                    {duration}
                  </p>
                  
                  {selectedExperience === i ? (
                    <p className="mt-3 text-base text-blue-100">
                      {brief}
                    </p>
                  ) : (
                    <p className="mt-1 text-sm text-blue-100 line-clamp-1">
                      {brief}
                    </p>
                  )}
                </div>
              </div>
              
              {selectedExperience === i && (
                <div className="mt-4 border-t border-white/10 pt-4">
                  <ul className="list-disc list-inside text-blue-100 space-y-2 pl-2">
                    {details.map((d, j) => (
                      <motion.li 
                        key={j} 
                        className="text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1 }}
                      >
                        {d}
                      </motion.li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 text-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBackClick();
                      }}
                      className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 
                      text-white text-xs font-bold shadow-lg shadow-blue-500/20 hover:scale-105 transition-all">
                      Close Details
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
