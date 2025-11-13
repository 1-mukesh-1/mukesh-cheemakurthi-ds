import React from 'react';
import { SKILLS } from '../constants';

const Skills = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
      <h3 className="font-bold text-gray-600 mb-4 uppercase text-xs tracking-wider">Languages & Skills</h3>
      
      <div className="space-y-4">
        {SKILLS.map((category, idx) => (
          <div key={idx}>
            <div className="text-xs font-semibold text-gray-400 mb-2 flex items-center gap-2">
                {category.category}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill, i) => (
                <span 
                  key={i} 
                  className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-gray-100 text-gray-600 border border-transparent hover:border-gray-300 hover:bg-white transition-all cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
             <span>Total Skills</span>
             <span className="font-mono">30+</span>
        </div>
      </div>
    </div>
  );
};

export default Skills;