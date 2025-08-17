export interface WorkExperience {
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title:string;
  subtitle: string;
  role: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationInfo {
  degree: string;
  specialization: string;
  university: string;
  period: string;
  gpa: string;
  courses: string[];
}