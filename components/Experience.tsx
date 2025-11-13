import React from 'react';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-800 transform -translate-x-1/2 md:translate-x-0"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((job, index) => (
              <div key={index} className={`relative flex items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-cyan-500 z-10">
                  <Briefcase className="h-4 w-4 text-cyan-500" />
                </div>

                {/* Content Spacer for Desktop */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                  <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-500/30 transition-colors shadow-lg">
                    <h3 className="text-xl font-bold text-white">{job.role}</h3>
                    <h4 className="text-cyan-400 font-medium mb-2">{job.company}</h4>
                    <p className="text-slate-500 text-sm mb-4">{job.period} | {job.location}</p>
                    <ul className={`space-y-2 text-slate-300 text-sm ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      {job.points.map((point, idx) => (
                        <li key={idx} className="leading-relaxed">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;