import React from 'react';
import { Navbar } from './components/common/Navbar';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Experience } from './sections/Experience';
import { CoreExpertise } from './sections/CoreExpertise';
import { Education } from './sections/Education';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './components/common/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B2545] text-white flex flex-col font-sans selection:bg-[#F07832]/30 selection:text-white">
      {/* Top Corporate Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <CoreExpertise />
        <Education />
        <Skills />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
