import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="dark:bg-gray-900 bg-white dark:text-white text-gray-900 transition-colors duration-300 min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <header className="flex justify-end">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? (
              <Sun className="w-6 h-6" />
            ) : (
              <Moon className="w-6 h-6" />
            )}
          </button>
        </header>
        {/* Your Components */}
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
