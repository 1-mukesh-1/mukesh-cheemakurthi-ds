import React from 'react';
import { Menu, Moon, Sun, User, Briefcase, Code, Cpu } from 'lucide-react';

interface HeaderProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onNavigate: (section: string) => void;
  activeSection: string | null;
}

const Header = ({ theme, toggleTheme, onNavigate, activeSection }: HeaderProps) => {
  
  const navItems = [
    { id: 'about', label: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <Code className="w-4 h-4" /> },
    { id: 'skills', label: 'Skills', icon: <Cpu className="w-4 h-4" /> },
  ];

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 sticky top-0 z-[60] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="#" onClick={(e) => { e.preventDefault(); onNavigate('about'); }} className="flex items-center gap-2 group">
            <div className="text-2xl transition-transform group-hover:rotate-12">🤗</div>
            <span className="font-bold text-lg tracking-tight hidden sm:block text-gray-900 dark:text-white">Hugging Folio</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeSection === item.id
                    ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-yellow-400"
            aria-label="Toggle Dark Mode"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5 text-yellow-400" />
            )}
          </button>

          {/* Mobile Menu (Simplified) */}
          <div className="flex items-center gap-3">
             <button className="md:hidden p-2 text-gray-500 dark:text-gray-400">
                <Menu className="w-6 h-6" />
             </button>
             <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 flex items-center justify-center text-white font-bold border border-yellow-600/20 shadow-inner">
                M
             </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;