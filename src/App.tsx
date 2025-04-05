import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="bg-starry-night min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-8">
        <Hero />
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
