export interface Project {
  title: string;
  tech: string;
  period: string;
  points: string[];
  link?: string;
  category: 'AI' | 'Data' | 'DevOps';
  image?: string;
}

export interface Job {
  company: string;
  location: string;
  role: string;
  period: string;
  points: string[];
}

export interface Education {
  school: string;
  degree: string;
  location: string;
  period: string;
  gpa: string;
  coursework: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
  isError?: boolean;
}