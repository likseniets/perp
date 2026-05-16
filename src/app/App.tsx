import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import HobbiesSection from './components/HobbiesSection';
import WorkSection from './components/WorkSection';
import EducationSection from './components/EducationSection';
import ThankYouSection from './components/ThankYouSection';

const sections = [
  { id: 0, component: HeroSection },
  { id: 1, component: AboutSection },
  { id: 2, component: HobbiesSection },
  { id: 3, component: WorkSection },
  { id: 4, component: EducationSection },
  { id: 5, component: ThankYouSection }
];

export default function App() {
  const [currentSection, setCurrentSection] = useState(0);

  const scrollToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      setCurrentSection(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') {
        e.preventDefault();
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSection]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="h-screen overflow-hidden bg-gray-900">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="h-full"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-3">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === section.id
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to section ${section.id + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      {currentSection > 0 && (
        <button
          onClick={() => scrollToSection(currentSection - 1)}
          className="fixed top-8 left-1/2 -translate-x-1/2 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Previous section"
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}

      {currentSection < sections.length - 1 && (
        <button
          onClick={() => scrollToSection(currentSection + 1)}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm animate-bounce"
          aria-label="Next section"
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </button>
      )}

      {/* Section Counter */}
      <div className="fixed bottom-8 right-8 z-50 text-white/60 text-sm">
        {currentSection + 1} / {sections.length}
      </div>
    </div>
  );
}