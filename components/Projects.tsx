import React from 'react';
import { Heart, Eye, ExternalLink } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  // Random stats for visual flair
  const likes = 40 + (index * 15);
  const views = 1200 + (index * 340);
  
  const CardContent = () => (
    <div className="group bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-6 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 hover:shadow-md flex flex-col h-full relative">
      {/* External Link Indicator if it's a link */}
      {project.link && (
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-gray-400">
           <ExternalLink className="w-5 h-5" />
        </div>
      )}

      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-2xl shadow-sm">
            {index === 0 ? '🧠' : index === 1 ? '📦' : '👕'}
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{project.category} • Updated recently</p>
          </div>
        </div>
      </div>

      {/* Image Preview for Spaces look */}
      {project.image && (
        <div className="w-full h-40 mb-5 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-800 relative">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
           <div className="absolute top-2 right-2 bg-black/60 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm font-mono">
              SPACE
           </div>
        </div>
      )}

      <div className="space-y-3 mb-6 flex-1">
        {project.points.slice(0, 2).map((point: string, idx: number) => (
          <p key={idx} className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">
            {point}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50 dark:border-gray-800 mt-auto">
        <div className="flex items-center gap-2">
           <span className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs px-2 py-1 rounded-md border border-gray-200 dark:border-gray-700 font-mono truncate max-w-[150px]">
             {project.tech.split(',')[0]}
           </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-medium">
          <div className="flex items-center gap-1 hover:text-red-500 cursor-pointer transition-colors">
            <Heart className="w-3.5 h-3.5" />
            {likes}
          </div>
          <div className="flex items-center gap-1">
            <Eye className="w-3.5 h-3.5" />
            {(views / 1000).toFixed(1)}k
          </div>
        </div>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

const Projects = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Projects
          <span className="bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-xs px-2 py-0.5 rounded-full font-normal border border-gray-200 dark:border-gray-700">{PROJECTS.length}</span>
        </h2>
        <div className="text-sm text-blue-600 dark:text-blue-400 hover:underline cursor-pointer">View all</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
        
        {/* Add a placeholder card for "New Project" style */}
        <div className="border border-dashed border-gray-300 dark:border-gray-700 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 dark:text-gray-500 hover:border-gray-400 dark:hover:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-900 transition-all cursor-pointer h-full min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center mb-2">
                <span className="text-xl">+</span>
            </div>
            <span className="text-sm font-medium">Create new Space</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;