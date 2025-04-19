import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackgroundAnimation from "./components/Particles";

// Create a CSS style element
const GlobalStyles = () => (
  <style dangerouslySetInnerHTML={{
    __html: `
      @keyframes float {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(20px, 30px); }
      }
      
      @keyframes floatAlt {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-20px, 20px); }
      }
      
      @keyframes floatSlow {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(30px, -20px); }
      }
      
      @keyframes floatReverse {
        0%, 100% { transform: translate(0, 0); }
        50% { transform: translate(-30px, -30px); }
      }
      
      .animate-blob {
        animation: blob-anim 7s infinite;
      }
      
      .animation-delay-2000 {
        animation-delay: 2s;
      }
      
      .animation-delay-4000 {
        animation-delay: 4s;
      }
      
      @keyframes blob-anim {
        0% { transform: translate(0px, 0px) scale(1); }
        33% { transform: translate(30px, -25px) scale(1.1); }
        66% { transform: translate(-20px, 20px) scale(0.9); }
        100% { transform: translate(0px, 0px) scale(1); }
      }
    `
  }}/>
);

function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile on mount and when window resizes
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check initially
    checkMobile();
    
    // Add resize listener
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle initial loading animation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll effects with optimized event handler
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "education", "experience", "projects", "contact"];
      
      // Check if scrolled for header styling
      const hasScrolled = window.scrollY > 50;
      if (hasScrolled !== scrolled) {
        setScrolled(hasScrolled);
      }
      
      // Find active section with fewer calculations
      let currentSection = activeSection;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const threshold = isMobile ? 150 : 100; // Adjust threshold for mobile
          if (rect.top <= threshold && rect.bottom >= threshold) {
            currentSection = section;
            break;
          }
        }
      }
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Use passive event listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection, scrolled, isMobile]);

  // Track cursor with debouncing for better performance (only on desktop)
  useEffect(() => {
    if (isMobile) return; // Skip on mobile devices
    
    let timeoutId: number;
    
    const handleMouseMove = (e: MouseEvent) => {
      clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      }, 10);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, [isMobile]);

  // Animation variants with simpler transitions
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-slate-900 flex items-center justify-center z-50">
        <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white animate-pulse">
          <span className="text-indigo-400">Port</span>
          <span className="text-white">folio</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-900 min-h-screen text-slate-200">
      {/* Add the global styles */}
      <GlobalStyles />
      
      {/* Custom cursor effect - only on desktop */}
      {!isMobile && (
        <div 
          className="fixed w-6 h-6 rounded-full bg-indigo-500 mix-blend-difference pointer-events-none z-50 transition-transform duration-200"
          style={{ 
            transform: `translate(${cursorPosition.x - 12}px, ${cursorPosition.y - 12}px) scale(${scrolled ? 0.7 : 1})`,
          }}
        />
      )}
      
      {/* Background animation */}
      <div className="fixed inset-0 z-0">
        <BackgroundAnimation />
      </div>

      {/* Fixed navigation header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-slate-900/90 backdrop-blur-md shadow-lg py-1 sm:py-2" : "bg-transparent py-2 sm:py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6">
          <Navigation activeSection={activeSection} />
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10">
        <section id="hero" className="min-h-screen flex items-center pt-16 md:pt-0">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
            <Hero />
          </div>
        </section>

        <section 
          id="about"
          className="py-16 md:py-20 lg:py-24 bg-slate-800 relative overflow-hidden"
        >
          <div 
            className="absolute -right-20 sm:-right-32 -top-20 sm:-top-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-500 rounded-full opacity-10"
            style={{ animation: "float 20s ease-in-out infinite" }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <About />
            </motion.div>
          </div>
        </section>

        <section 
          id="education" 
          className="py-16 md:py-20 lg:py-24 bg-slate-900 relative"
        >
          <div 
            className="absolute -left-20 sm:-left-32 -bottom-20 sm:-bottom-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-purple-500 rounded-full opacity-10"
            style={{ animation: "floatAlt 15s ease-in-out infinite" }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Education />
            </motion.div>
          </div>
        </section>

        <section 
          id="experience" 
          className="py-16 md:py-20 lg:py-24 bg-slate-800 relative"
        >
          <div 
            className="absolute -right-20 sm:-right-32 -bottom-20 sm:-bottom-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-indigo-600 rounded-full opacity-10"
            style={{ animation: "floatSlow 18s ease-in-out infinite" }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Experience />
            </motion.div>
          </div>
        </section>

        <section 
          id="projects" 
          className="py-16 md:py-20 lg:py-24 bg-slate-900 relative overflow-hidden"
        >
          <div 
            className="absolute -left-20 sm:-left-32 -top-20 sm:-top-32 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-blue-500 rounded-full opacity-10"
            style={{ animation: "floatReverse 25s ease-in-out infinite" }}
          />
          
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Projects />
            </motion.div>
          </div>
        </section>

        <section 
          id="contact" 
          className="py-16 md:py-20 lg:py-24 bg-slate-800 relative"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <motion.div 
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <Contact />
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 py-6 md:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Footer />
        </div>
      </footer>
    </div>
  );
}

export default App;