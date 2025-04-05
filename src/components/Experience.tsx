const Experience = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">💼 Experience</h2>
    <div className="space-y-6">
      {[
        {
          role: "MERN Stack Intern - NeoPhyte",
          duration: "Jan 2025 – Present",
          details: [
            "3D model interaction features using React Three Fiber.",
            "Geolocation-based attendance module.",
            "AI service communications integration.",
          ],
        },
        {
          role: "Summer Intern - Ultratech Cement",
          duration: "Jun 2023 – Jul 2023",
          details: [
            "Worked on WHRS and carbon capture strategies.",
            "Data-based analysis of carbon emissions.",
          ],
        },
      ].map(({ role, duration, details }, i) => (
        <div
          key={i}
          className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
          <h3 className="font-semibold text-lg">{role}</h3>
          <p className="text-sm text-gray-500">{duration}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
            {details.map((d, j) => (
              <li key={j}>{d}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
