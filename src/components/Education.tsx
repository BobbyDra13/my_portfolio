const Education = () => (
  <section className="space-y-4">
    <h2 className="text-2xl font-bold">🎓 Education</h2>
    <div className="grid md:grid-cols-2 gap-4">
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="font-semibold">NIT Rourkela</h3>
        <p>B.Tech, Industrial Design (2020-2024)</p>
        <p className="text-sm text-gray-500">CGPA: 8.24/10</p>
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow">
        <h3 className="font-semibold">Narayana Junior College</h3>
        <p>Class XII (2019)</p>
        <p className="text-sm text-gray-500">CGPA: 9.94/10</p>
      </div>
    </div>
  </section>
);

export default Education;
