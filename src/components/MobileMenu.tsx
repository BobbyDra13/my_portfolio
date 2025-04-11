import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  sections: { id: string; name: string }[];
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}

const MobileMenu = ({
  sections,
  activeSection,
  onSectionClick,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      <motion.button
        onClick={toggleMenu}
        className="text-white p-2 rounded-full bg-blue-900/30 hover:bg-blue-800/50 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}>
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{
              duration: 0.2,
              type: "spring",
              stiffness: 300,
              damping: 25,
            }}
            className="absolute top-16 right-4 left-4 bg-gradient-to-b from-blue-900/95 to-purple-900/95 backdrop-blur-md p-4 rounded-xl shadow-xl z-50 border border-blue-500/20">
            <div className="flex flex-col space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => {
                    onSectionClick(section.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === section.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md"
                      : "text-gray-300 hover:text-white hover:bg-blue-800/30"
                  }`}>
                  {section.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
