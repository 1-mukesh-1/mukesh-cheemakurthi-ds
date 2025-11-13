import React from 'react';
import { MapPin, Link as LinkIcon, StickyNote, MoreHorizontal, Github, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

interface HeroProps {
  onNavigate: (section: string) => void;
}

const Hero = ({ onNavigate }: HeroProps) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start pt-4">
      {/* Avatar Section */}
      <div className="relative group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg bg-gray-100 dark:bg-gray-800 transition-colors">
          <img 
            src="https://api.dicebear.com/9.x/fun-emoji/svg?seed=Jade" 
            alt="Mukesh Cheemakurthi" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-red-400 text-white text-xs font-bold px-2 py-1 rounded-full border-2 border-white dark:border-gray-800 shadow-sm z-10">
          Actively
          Looking for Jobs
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 min-w-0 pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Mukesh Cheemakurthi</h1>
            <p className="text-xl text-gray-900 dark:text-white">Data Scientist</p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center px-4 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
            >
               <Mail className="w-4 h-4 mr-2" />
               Contact
            </button>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 dark:border-gray-700 shadow-sm text-sm font-medium rounded-lg text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            Boston, MA
          </div>
          <div className="flex items-center gap-1">
            <LinkIcon className="w-4 h-4 text-gray-400" />
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">
              linkedin.com/in/mukesh003
            </a>
          </div>
          <div className="flex items-center gap-1">
             <Github className="w-4 h-4 text-gray-400" />
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600 dark:hover:text-blue-400">
               github.com/1-mukesh-1
             </a>
          </div>
          <div className="flex items-center gap-1">
            <StickyNote className="w-4 h-4 text-gray-400" />
            Open to relocation
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;