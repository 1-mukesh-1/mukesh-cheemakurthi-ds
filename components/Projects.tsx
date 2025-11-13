import React from 'react';
import { Heart, Eye, Layout, Box, Cpu, Maximize2 } from 'lucide-react';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  // Assign random aesthetic icons based on category
  const getIcon = (category: string) => {
    if (category === 'AI') return <Cpu className="w-4 h-4" />;
    if (category === 'Data') return <Layout className="w-4 h-4" />;
    return <Box className="w-4 h-4" />;
  };

  // Random stats for visual flair
  const likes = 40 + (index * 15);
  const views = 1200 + (index * 340);
  
  return (
    <div className="group bg-white border border-gray-200 rounded-xl p-4 hover:border-gray-300 transition-all duration-200 hover:shadow-md flex flex-col h-full">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center text-xl shadow-sm">
            {index === 0 ? '🧠' : index === 1 ? '📦' : '👕'}
          </div>
          <div>
            <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 mt-0.5">{project.category} • Updated recently</p>
          </div>
        </div>
      </div>

      {/* Image Preview for Spaces look */}
      {project.image && (
        <div className="w-full h-32 mb-4 rounded-lg overflow-hidden border border-gray-100 bg-gray-50 relative">
           <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500" />
           <div className="absolute top-2 right-2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded backdrop-blur-sm font-mono">
              SPACE
           </div>
        </div>
      )}

      <div className="space-y-2 mb-4 flex-1">
        {project.points.slice(0, 2).map((point: string, idx: number) => (
          <p key={idx} className="text-sm text-gray-600 line-clamp-2 leading-relaxed">
            {point}
          </p>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
        <div className="flex items-center gap-2">
           <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-md border border-gray-200 font-mono truncate max-w-[150px]">
             {project.tech.split(',')[0]}
           </span>
        </div>
        <div className="flex items-center gap-3 text-xs text-gray-500 font-medium">
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
};

const Projects = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          Pinned Spaces
          <span className="bg-gray-100 text-gray-500 text-xs px-2 py-0.5 rounded-full font-normal">{PROJECTS.length}</span>
        </h2>
        <div className="text-sm text-blue-600 hover:underline cursor-pointer">View all</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
        
        {/* Add a placeholder card for "New Project" style */}
        <div className="border border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center text-gray-400 hover:border-gray-400 hover:bg-gray-50 transition-all cursor-pointer h-full min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mb-2">
                <span className="text-xl">+</span>
            </div>
            <span className="text-sm font-medium">Create new Space</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;