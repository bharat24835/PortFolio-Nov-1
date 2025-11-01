import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import ProjectsSection from './components/projects/ProjectsSection';
import MachineCodingSection from './components/machineCode/MachineCodingSection';
import NotesSection from './components/notes/NotesSection';
import Education from './components/Education';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative">
      <Navigation />
      <Hero />
      <About />
      <ProjectsSection />
      <MachineCodingSection />
      <NotesSection />
      <Education />
      <Contact />
    </div>
  );
}

export default App;