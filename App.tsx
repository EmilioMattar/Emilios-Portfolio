import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main className="container mx-auto px-6 md:px-12 lg:px-24">
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
};

export default App;