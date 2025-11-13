import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GeminiChat from './components/GeminiChat';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience'>('projects');

  return (
    <div className="min-h-screen bg-[#f9f9f9] text-gray-800">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Profile Header (Avatar & Bio) */}
        <Hero />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-8">
          {/* Left Sidebar (Metadata, Skills, Contact) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
             <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
                <h3 className="font-bold text-gray-600 mb-3 uppercase text-xs tracking-wider">About</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Data Scientist & Engineer passionate about AI Agents, Large Language Models, and Data Pipelines. 
                  Currently optimizing EEG analysis at Northeastern University.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                   <h3 className="font-bold text-gray-600 mb-3 uppercase text-xs tracking-wider">Education</h3>
                   <div className="text-sm">
                      <div className="font-semibold">Northeastern University</div>
                      <div className="text-gray-500 text-xs">MS in Computer Science</div>
                   </div>
                </div>
             </div>

             <Skills />
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-8 xl:col-span-9">
            {/* Tabs */}
            <div className="flex items-center space-x-6 border-b border-gray-200 mb-6">
              <button 
                onClick={() => setActiveTab('projects')}
                className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'projects' 
                    ? 'border-yellow-400 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Projects & Spaces
              </button>
              <button 
                 onClick={() => setActiveTab('experience')}
                 className={`pb-3 text-sm font-medium border-b-2 transition-colors ${
                  activeTab === 'experience' 
                    ? 'border-yellow-400 text-gray-900' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Experience & History
              </button>
            </div>

            {/* Tab Content */}
            <div className="min-h-[500px]">
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'experience' && <Experience />}
            </div>
          </div>
        </div>
      </div>

      <GeminiChat />
      <Footer />
    </div>
  );
}

export default App;