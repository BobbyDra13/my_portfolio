import { useState } from "react";

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(
    null
  );

  const experiences = [
    {
      role: "MERN Stack Intern - NeoPhyte",
      duration: "Jan 2025 – Present",
      brief:
        "Involved in building dynamic features for web applications including 3D interactions and AI service integration.",
      details: [
        "3D model interaction features using React Three Fiber.",
        "Geolocation-based attendance module.",
        "AI service communications integration.",
      ],
    },
    {
      role: "Summer Intern - Ultratech Cement",
      duration: "Jun 2023 – Jul 2023",
      brief:
        "Focused on WHRS and carbon capture strategies, analyzing data related to carbon emissions.",
      details: [
        "Worked on WHRS and carbon capture strategies.",
        "Data-based analysis of carbon emissions.",
      ],
    },
  ];

  const handleExperienceClick = (index: number) => {
    setSelectedExperience(selectedExperience === index ? null : index); // Toggle visibility of detailed info
  };

  const handleBackClick = () => {
    setSelectedExperience(null); // Reset to the list view
  };

  return (
    <section className="space-y-4 px-6 py-8">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 text-center mb-8">
        💼 Experience
      </h2>
      <div className="space-y-6">
        {experiences.map(({ role, duration, brief, details }, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            onClick={() => handleExperienceClick(i)}>
            <h3 className="font-semibold text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600 transition-colors duration-300">
              {role}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {duration}
            </p>
            <p className="mt-2 text-lg text-gray-700 dark:text-gray-300">
              {brief}
            </p>
            {selectedExperience === i && (
              <div className="mt-4">
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                  {details.map((d, j) => (
                    <li key={j} className="text-lg">
                      {d}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={handleBackClick}
                  className="mt-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-6 rounded-full hover:scale-105 transition-all duration-300">
                  Back
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
