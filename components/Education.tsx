import React from 'react';
import type { EducationInfo } from '../types';
import { SectionWrapper } from './SectionWrapper';

const educationData: EducationInfo = {
  degree: 'B.Sc. in Information Systems',
  specialization: 'Specialization in Artificial Intelligence',
  university: 'University of Haifa',
  period: '2021 – 2025',
  gpa: 'GPA: 88',
  courses: [
    'Data Structures & Algorithms',
    'Object-Oriented Programming (OOP)',
    'Web Development',
    'Database Systems (SQL)',
    'Business Intelligence',
    'Data Visualization',
    'Machine Learning',
    'Deep Learning',
    'UX/UI',
  ],
};

export const Education: React.FC = () => {
  return (
    <SectionWrapper id="education" title="Education">
      <div className="max-w-3xl mx-auto bg-slate-800 rounded-lg shadow-lg p-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
            <div>
                <h3 className="text-2xl font-bold text-white">{educationData.degree}</h3>
                <p className="text-cyan-400 font-semibold mt-1">{educationData.specialization}</p>
                <p className="text-slate-400 mt-2">{educationData.university} | {educationData.period}</p>
            </div>
            <div className="mt-4 sm:mt-0 text-lg font-bold bg-cyan-400/10 text-cyan-300 px-4 py-2 rounded-md">
                {educationData.gpa}
            </div>
        </div>
        
        <div className="mt-6">
            <h4 className="text-xl font-semibold text-white mb-3">Relevant Coursework:</h4>
            <div className="flex flex-wrap gap-3">
                {educationData.courses.map((course) => (
                    <span key={course} className="bg-slate-700 text-slate-300 font-medium py-2 px-4 rounded-lg shadow-sm">
                        {course}
                    </span>
                ))}
            </div>
        </div>
      </div>
    </SectionWrapper>
  );
};