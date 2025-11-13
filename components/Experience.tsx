import React from 'react';
import { Building2, ChevronRight } from 'lucide-react';
import { EXPERIENCE } from '../constants';

const Experience = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
          Organizations & Work
        </h2>
      </div>

      <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden shadow-sm">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={index} 
            className={`p-8 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors group cursor-pointer ${
              index !== EXPERIENCE.length - 1 ? 'border-b border-gray-100 dark:border-gray-800' : ''
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center flex-shrink-0 mt-1">
                 <Building2 className="w-6 h-6 text-gray-400" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900 dark:text-gray-100 truncate pr-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {job.company}
                    </h3>
                    <span className="text-xs font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                        {job.period}
                    </span>
                </div>
                
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-4 flex items-center gap-2">
                    {job.role}
                    <span className="w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600"></span>
                    <span className="text-gray-500 dark:text-gray-500 font-normal text-xs">{job.location}</span>
                </div>

                <ul className="space-y-2">
                    {job.points.map((point, i) => (
                        <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2 leading-relaxed">
                            <span className="block w-1.5 h-1.5 rounded-full bg-gray-400 mt-1.5 flex-shrink-0"></span>
                            {point}
                        </li>
                    ))}
                </ul>
              </div>
              
              <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 self-center" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;