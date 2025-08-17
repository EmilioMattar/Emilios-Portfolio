import React from 'react';
import type { Project } from '../types';
import { SectionWrapper } from './SectionWrapper';
import { HeartPulseIcon, CodeIcon, GameControllerIcon } from './icons';

const projectsData: Project[] = [
  {
    title: 'AI Fitness Meal Planner',
    subtitle: 'Personalized Nutrition & Health Assistant',
    role: 'Software Engineer',
    description: 'A smart system that generates personalized meal plans based on user data like age, weight, health conditions, and food preferences. It tracks vitamin intake and offers health suggestions via an integrated AI chat.',
    technologies: ['React', 'Node.js', 'Gemini API', 'MongoDB', 'TailwindCSS'],
    icon: <HeartPulseIcon />,
  },
  {
    title: 'StockSys',
    subtitle: 'Automated Inventory Management System',
    role: 'Team Lead & Full-Stack Developer',
    description: 'Built for ExtraLine to automate inventory tracking and reduce manual work. Led sprints, coordinated tasks, and integrated client feedback.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'Github', 'Agile'],
    icon: <CodeIcon />,
  },
  {
    title: 'SpringSys',
    subtitle: 'Inventory & Business Management Platform',
    role: 'Full-Stack Developer',
    description: 'Managed customers, employees, suppliers, and product stock. Focused on efficient data handling and responsive frontend design.',
    technologies: ['ReactJS', 'Node.js', 'Express', 'MongoDB', 'Github'],
    icon: <CodeIcon />,
  },
  {
    title: 'BackGammon',
    subtitle: 'Interactive Backgammon Game',
    role: 'Team Lead & Full-Stack Developer',
    description: 'Led a 4-member team, managing tasks, code reviews, and Scrum sprints. Designed and developed both frontend and backend.',
    technologies: ['Java', 'JavaFX', 'MySQL', 'GitHub', 'Scrum'],
    icon: <GameControllerIcon />,
  },
];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
  <div className="bg-slate-800 rounded-lg shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-2 group flex flex-col h-full">
    <div className="p-6 flex flex-col flex-grow">
      <div className="flex items-start justify-between mb-4">
        <div className="pr-4">
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          <p className="text-cyan-400 mt-1">{project.subtitle}</p>
          <p className="text-sm font-semibold text-slate-400 mt-2 bg-slate-700/50 inline-block px-3 py-1 rounded-md">{project.role}</p>
        </div>
        <div className="text-cyan-400 flex-shrink-0">{project.icon}</div>
      </div>
      <p className="text-slate-400 flex-grow mt-2">{project.description}</p>
    </div>
    <div className="p-6 pt-2">
      <div className="mt-4 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <span key={tech} className="bg-slate-700 text-cyan-300 text-xs font-semibold px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </div>
);


export const Projects: React.FC = () => {
  return (
    <SectionWrapper id="projects" title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
};