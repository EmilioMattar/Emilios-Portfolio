import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center py-20">
      <div className="max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight">
          Emilio Mattar
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-cyan-400 mt-2">
          Junior Software Developer
        </h2>
        <p className="mt-6 text-lg text-slate-400 leading-relaxed">
          Detail-oriented Software Developer with over 4 years of experience in full-stack development, mentoring, and leading academic and client-based projects. Skilled in Java, Python, C#, SQL, and modern web technologies such as ReactJS and Node.js. Strong foundation in Agile methodologies and test automation tools, with a passion for building clean, scalable, and user-focused solutions.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg text-center hover:bg-cyan-600 transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            Contact Me
          </a>
          <a
            href="#projects"
            className="bg-slate-700 text-white font-bold py-3 px-8 rounded-lg text-center hover:bg-slate-600 transition-transform duration-300 transform hover:scale-105 shadow-lg"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};