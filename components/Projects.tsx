import React from 'react';
import { PROJECTS } from '../constants';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
            <p className="text-slate-400">Innovation in AI Agents and Optimization</p>
          </div>
          <a href="#" className="hidden md:flex items-center text-cyan-400 hover:text-cyan-300 font-medium mt-4 md:mt-0">
            View GitHub <Github className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div key={index} className="group relative bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 flex flex-col">
              {/* Image Container */}
              <div className="h-48 w-full overflow-hidden relative">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-all z-10" />
                <img 
                  src={project.image || `https://picsum.photos/seed/${index + 55}/800/400`} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-4 right-4 z-20">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${
                    project.category === 'AI' ? 'bg-purple-500/90 text-white' : 'bg-blue-500/90 text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-xs font-mono mb-4">{project.tech}</p>
                
                <ul className="space-y-2 mb-6 flex-grow">
                  {project.points.slice(0, 2).map((point, i) => (
                    <li key={i} className="text-slate-400 text-sm flex items-start">
                      <span className="mr-2 text-cyan-500">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-4 border-t border-slate-800 flex items-center justify-between">
                  <span className="text-slate-500 text-xs">{project.period}</span>
                  {project.link && (
                    <a href={project.link} className="flex items-center text-sm text-white hover:text-cyan-400 transition-colors">
                      Details <ExternalLink className="ml-1 h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;