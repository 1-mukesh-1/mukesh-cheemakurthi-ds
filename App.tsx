import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import GeminiChat from './components/GeminiChat';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = useState<string | null>(null);

  // Handle Dark Mode Class
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  // Handle Escape Key to close active section
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveSection(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const handleNavigate = (section: string) => {
    setActiveSection(section === activeSection ? null : section);
    // Optional: scroll to section if needed
    if (section !== activeSection) {
      const element = document.getElementById(section);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 100);
      }
    }
  };

  // Helper to generate classes for the focus effect
  const getSectionStyle = (sectionName: string) => {
    const baseStyle = "transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-center";
    
    if (!activeSection) return `${baseStyle} scale-100 opacity-100`;
    
    if (activeSection === sectionName) {
      // Active state: high z-index to sit above overlay, scaled up
      let activeClasses = `${baseStyle} scale-105 z-50 shadow-2xl ring-2 ring-yellow-400 rounded-xl opacity-100 bg-white dark:bg-gray-900 relative`;
      
      // Add padding to main sections so text doesn't touch the edges of the pop-out card
      // Skills and Contact are already "cards" so they don't need extra padding to frame them, 
      // but Projects and Experience are sections that become cards when focused.
      if (['projects', 'experience', 'about'].includes(sectionName)) {
        activeClasses += ' p-6 md:p-8';
      }
      
      return activeClasses;
    }
    
    // Inactive state: blur and push back
    return `${baseStyle} scale-95 opacity-40 blur-[2px] grayscale pointer-events-none`;
  };

  return (
    <div className="min-h-screen bg-[#f9f9f9] dark:bg-gray-950 transition-colors duration-300">
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />
      
      {/* Overlay to dismiss focus when clicking background. z-40 puts it below Header (z-60) and Active Section (z-50) */}
      {activeSection && (
        <div 
          className="fixed inset-0 bg-black/20 dark:bg-black/60 z-40 backdrop-blur-[2px] transition-opacity duration-500"
          onClick={() => setActiveSection(null)}
          aria-hidden="true"
        />
      )}
      
      {/* Main Content - Removed z-index here to allow children to pop up based on their own z-index */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        {/* Top Profile Header (Avatar & Bio) - Treated as 'about' */}
        <div id="about" className={getSectionStyle('about')}>
          <div className="p-2">
             <Hero onNavigate={handleNavigate} />
             {/* Moving the "About" text block inside Hero container for the focus effect */}
             <div className="mt-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-600 dark:text-gray-400 mb-3 uppercase text-xs tracking-wider">About Me</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  Data Scientist with production experience at Walmart and research experience at Northeastern, skilled in optimizing large-scale data systems and crafting AI solutions. Accomplished in building robust ETL pipelines and optimization. Eager to leverage data engineering expertise to develop efficient data architectures and enhance data processing capabilities.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                   <h3 className="font-bold text-gray-600 dark:text-gray-400 mb-3 uppercase text-xs tracking-wider">Education</h3>
                   <div className="text-sm">
                      <div className="font-semibold text-gray-900 dark:text-gray-100">Northeastern University</div>
                      <div className="text-gray-500 dark:text-gray-400 text-xs">MS in Computer Science</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
             {/* Skills Section */}
             <div id="skills" className={getSectionStyle('skills')}>
                <Skills />
             </div>
             
             {/* Contact Section */}
             <div id="contact" className={getSectionStyle('contact')}>
                <Contact />
             </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-8">
            {/* Projects Section */}
            <div id="projects" className={getSectionStyle('projects')}>
              <Projects />
            </div>

            {/* Experience Section */}
            <div id="experience" className={getSectionStyle('experience')}>
              <Experience />
            </div>
          </div>
        </div>
      </div>

      <GeminiChat />
      <Footer />
    </div>
  );
}

export default App;