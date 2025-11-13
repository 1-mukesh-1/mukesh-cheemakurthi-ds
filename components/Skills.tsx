import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Cloud, Brain, Database } from 'lucide-react';

const Skills = () => {
  const getIcon = (category: string) => {
    if (category.includes("Languages")) return <Code2 className="h-6 w-6 text-purple-400" />;
    if (category.includes("Cloud")) return <Cloud className="h-6 w-6 text-blue-400" />;
    if (category.includes("AI")) return <Brain className="h-6 w-6 text-pink-400" />;
    return <Database className="h-6 w-6 text-cyan-400" />;
  };

  return (
    <section id="skills" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Arsenal</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive toolkit spanning full-stack development, cloud infrastructure, and advanced machine learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillSet) => (
            <div key={skillSet.category} className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-slate-700 transition-all group">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-slate-800 rounded-lg group-hover:bg-slate-700 transition-colors">
                  {getIcon(skillSet.category)}
                </div>
                <h3 className="ml-4 text-lg font-semibold text-white">{skillSet.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillSet.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-medium rounded-full border border-slate-700 hover:border-slate-600 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;