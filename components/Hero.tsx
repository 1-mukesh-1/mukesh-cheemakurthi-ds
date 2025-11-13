import React from 'react';
import { MapPin, Link as LinkIcon, Calendar, MoreHorizontal, Share2, Github, Linkedin, Mail } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-start pt-4">
      {/* Avatar Section */}
      <div className="relative group">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-3xl overflow-hidden border-4 border-white shadow-lg bg-gray-100">
          <img 
            src="https://api.dicebear.com/9.x/avataaars/svg?seed=Mukesh&backgroundColor=ffdfbf" 
            alt="Mukesh Cheemakurthi" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full border-2 border-white shadow-sm">
          PRO
        </div>
      </div>

      {/* Info Section */}
      <div className="flex-1 min-w-0 pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mukesh Cheemakurthi</h1>
            <p className="text-gray-500 font-medium text-lg">@mukesh003</p>
          </div>
          <div className="flex items-center gap-2">
            <a href={`mailto:${SOCIAL_LINKS.email}`} className="inline-flex items-center px-4 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               <Mail className="w-4 h-4 mr-2" />
               Contact
            </a>
            <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50">
              <MoreHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-gray-400" />
            Boston, MA
          </div>
          <div className="flex items-center gap-1">
            <LinkIcon className="w-4 h-4 text-gray-400" />
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600">
              linkedin.com/in/mukesh003
            </a>
          </div>
          <div className="flex items-center gap-1">
             <Github className="w-4 h-4 text-gray-400" />
             <a href={SOCIAL_LINKS.github} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-600">
               github.com/1-mukesh-1
             </a>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4 text-gray-400" />
            Joined Sept 2024
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;