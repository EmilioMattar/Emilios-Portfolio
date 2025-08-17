import React from 'react';
import type { WorkExperience } from '../types';
import { SectionWrapper } from './SectionWrapper';

const experienceData: WorkExperience[] = [
  {
    role: 'Freelance Developer & Student Mentor',
    company: 'University of Haifa (Remote)',
    period: '2021 – 2024',
    description: [
      'Assisted students with coding assignments and final projects.',
      'Performed QA testing and code reviews to ensure quality.',
      'Covered topics including Java, Python, SQL, web development, and algorithms.',
    ],
  },
  {
    role: 'Computer Science Instructor & Junior Software Developer',
    company: 'Loop INC, Nazareth',
    period: 'December 2019 – January 2022',
    description: [
      'Taught Java, C, C#, HTML, CSS and JavaScript.',
      'Guided students through full-stack development fundamentals.',
      'Introduced Git and basic version control workflows.',
    ],
  },
];

const ExperienceItem: React.FC<{ experience: WorkExperience; isLast: boolean }> = ({ experience, isLast }) => (
  <div className="relative pl-10">
    <div className="absolute left-0 top-1 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
    {!isLast && <div className="absolute left-[7px] top-4 w-0.5 h-full bg-slate-700"></div>}
    <h3 className="text-xl font-bold text-white">{experience.role}</h3>
    <p className="text-cyan-400 font-semibold mt-1">
      {experience.company} | {experience.period}
    </p>
    <ul className="mt-4 space-y-2 list-disc list-inside text-slate-400">
      {experience.description.map((desc, index) => (
        <li key={index}>{desc}</li>
      ))}
    </ul>
  </div>
);

export const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience" title="Work Experience">
      <div className="max-w-3xl mx-auto space-y-12">
        {experienceData.map((exp, index) => (
          <ExperienceItem key={index} experience={exp} isLast={index === experienceData.length - 1} />
        ))}
      </div>
    </SectionWrapper>
  );
};
