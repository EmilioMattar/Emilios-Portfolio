import React from 'react';
import type { SkillCategory } from '../types';
import { SectionWrapper } from './SectionWrapper';

const skillsData: SkillCategory[] = [
    {
        title: 'Core Technologies',
        skills: ['Java', 'Python', 'C#', 'SQL', 'JavaScript', 'HTML', 'CSS']
    },
    {
        title: 'Frameworks & Libraries',
        skills: ['ReactJS', 'Node.js', 'Express', 'JavaFX', 'Selenium']
    },
    {
        title: 'Methodologies & Practices',
        skills: ['Agile', 'Scrum', 'Test Automation', 'Performance Testing', 'Test Planning', 'Bug Tracking']
    },
    {
        title: 'Tools & Platforms',
        skills: ['Git', 'GitHub', 'Docker', 'REST APIs', 'Debugging']
    },
];

export const Skills: React.FC = () => {
  return (
    <SectionWrapper id="skills" title="Skills">
      <div className="max-w-4xl mx-auto">
        {skillsData.map((category) => (
            <div key={category.title} className="mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-center">{category.title}</h3>
                <div className="flex flex-wrap justify-center gap-3">
                    {category.skills.map((skill) => (
                        <div key={skill} className="bg-slate-800 text-slate-300 font-medium py-2 px-5 rounded-lg shadow-md hover:bg-slate-700 hover:text-white transition-all duration-300 cursor-default">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </SectionWrapper>
  );
};
