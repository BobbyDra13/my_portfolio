const projects = [
  {
    title: "Weather Prediction",
    tech: "Python, sklearn, matplotlib",
    desc: "Applied ML algorithms like Decision Tree and AdaBoost on weather data.",
  },
  {
    title: "Food Delivery App",
    tech: "React.js, HTML, CSS",
    desc: "Designed a responsive food ordering interface with restaurant listing.",
  },
];

const Projects = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">🚀 Projects</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {projects.map((proj, i) => (
        <div
          key={i}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow hover:scale-[1.02] transition-transform">
          <h3 className="font-semibold text-lg">{proj.title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{proj.desc}</p>
          <p className="text-sm mt-1 italic text-gray-500">{proj.tech}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
