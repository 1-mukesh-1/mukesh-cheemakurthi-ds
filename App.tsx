import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import GeminiChat from './components/GeminiChat';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      <Header />
      
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>

      <GeminiChat />
      <Footer />
    </div>
  );
}

export default App;