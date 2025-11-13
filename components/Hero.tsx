import React from 'react';
import { ArrowRight, Download, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section id="about" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 animate-float">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 mr-2 animate-pulse"></span>
            Available: May 2025 - Dec 2025
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Mukesh</span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-400 mb-8 font-light leading-relaxed">
            Data Scientist with <span className="text-slate-200 font-medium">production experience</span> at Walmart and <span className="text-slate-200 font-medium">research expertise</span> at Northeastern.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="#projects" className="w-full sm:w-auto px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/25 transition-all flex items-center justify-center">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#" className="w-full sm:w-auto px-8 py-3 rounded-full border border-slate-700 text-slate-300 font-medium hover:bg-slate-800 transition-all flex items-center justify-center group">
              Download Resume <Download className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center justify-center space-x-6 text-slate-500 text-sm">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-cyan-500" />
              Boston, MA
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-cyan-500" />
              Northeastern University
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;