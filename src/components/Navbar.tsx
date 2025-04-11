import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  const sections = [
    { id: "hero", name: "Home" },
    { id: "about", name: "About" },
    { id: "education", name: "Education" },
    { id: "experience", name: "Experience" },
    { id: "projects", name: "Projects" },
    { id: "contact", name: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled for navbar background effect
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Find the current section in view
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 shadow-lg transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-blue-900/90 via-indigo-900/90 to-purple-900/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}>
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <motion.div
          className="text-white font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
          Portfolio
        </motion.div>

        <div className="hidden md:flex space-x-1">
          {sections.map((section) => (
            <NavItem
              key={section.id}
              name={section.name}
              isActive={activeSection === section.id}
              onClick={() => scrollToSection(section.id)}
            />
          ))}
        </div>

        {/* Mobile menu */}
        <MobileMenu
          sections={sections}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
      </div>
    </motion.nav>
  );
};

const NavItem = ({
  name,
  isActive,
  onClick,
}: {
  name: string;
  isActive: boolean;
  onClick: () => void;
}) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
        isActive
          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
          : "text-gray-300 hover:text-white hover:bg-blue-900/30"
      }`}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}>
      {name}
    </motion.button>
  );
};

export default Navbar;
