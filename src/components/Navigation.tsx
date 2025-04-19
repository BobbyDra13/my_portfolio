import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  activeSection: string;
}

function Navigation({ activeSection }: NavigationProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Only run animations after component is mounted (client-side)
  useEffect(() => {
    setIsMounted(true);
    
    // Add scroll event listener
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    
    // Check initial scroll position
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = navRef.current?.offsetHeight || 80;
      const yOffset = -navHeight; // Adjust for the fixed header's height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    // Close mobile menu when an item is clicked
    setIsMobileMenuOpen(false);
  };

  return (
    <div 
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 shadow-lg backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <div 
          className={`font-bold text-xl sm:text-2xl transform transition-all duration-500 ${
            isMounted ? "translate-x-0 opacity-100" : "-translate-x-5 opacity-0"
          }`}
        >
          <span className="text-indigo-400">Manas</span>
          <span className="text-white">Chandra</span>
        </div>

        {/* Desktop Navigation Menu */}
        <ul className="hidden md:flex space-x-3 lg:space-x-8">
          {navItems.map((item, index) => (
            <li 
              key={item.id}
              className={`transform transition-all duration-300 ${
                isMounted ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`py-2 px-1 text-sm lg:text-base relative hover:text-indigo-300 transition-colors duration-300 ${
                  activeSection === item.id
                    ? "text-indigo-400 font-medium"
                    : "text-slate-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <span 
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-400 transition-opacity duration-200"
                  />
                )}
              </button>
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white transition-transform duration-200 hover:scale-105 active:scale-95 p-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Mobile Navigation Menu (overlay) */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="md:hidden fixed inset-0 bg-slate-900/98 z-50 flex flex-col items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="absolute top-4 right-4 text-white p-2"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <motion.ul 
                className="flex flex-col space-y-4 text-center w-full px-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {navItems.map((item) => (
                  <motion.li 
                    key={item.id}
                    variants={{
                      hidden: { y: 20, opacity: 0 },
                      visible: { y: 0, opacity: 1 }
                    }}
                  >
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`py-3 px-4 text-lg relative w-full hover:text-indigo-300 transition-colors duration-300 ${
                        activeSection === item.id
                          ? "text-indigo-400 font-medium"
                          : "text-white"
                      }`}
                    >
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div 
                          layoutId="mobileActiveLine"
                          className="absolute left-1/2 -translate-x-1/2 bottom-0 w-12 h-0.5 bg-indigo-400"
                        />
                      )}
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
              
              {/* Social links in mobile menu */}
              <motion.div 
                className="mt-8 flex space-x-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {[
                  { icon: "github", href: "https://github.com/manas" },
                  { icon: "linkedin", href: "https://www.linkedin.com/in/manas-chandra" },
                  { icon: "twitter", href: "https://twitter.com/manas" },
                ].map((social) => (
                  <a
                    key={social.icon}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center border border-slate-700 text-slate-300 hover:text-white hover:border-indigo-400 transition-colors duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="sr-only">{social.icon}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      {social.icon === "github" && (
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      )}
                      {social.icon === "linkedin" && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {social.icon === "twitter" && (
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      )}
                    </svg>
                  </a>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
}

export default Navigation;