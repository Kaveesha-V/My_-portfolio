export interface Profile {
  name: string;
  title: string;
  avatarUrl?: string;
  resumeUrl?: string;
  animatedTaglines: string[];
  bio: string;
  resumeSummary: string;
  location: string;
  email: string;
  socials: {
    github: string;
    linkedin: string;
    whatsapp?: string;
    email: string;
  };
  stats: {
    yearsExperience: number;
    projectsCompleted: number;
    techStackCount: number;
    codeCommits: number;
  };
}

export type SkillCategory = 'Web & Mobile' | 'Programming Languages' | 'Design & Creative' | 'Databases & Tools' | 'Cyber Security & Tools' | 'Databases & Systems' | string;

export interface Skill {
  id: string;
  category: string;
  name: string;
  level: number; // 0 - 100 percentage
  icon: string;
  description: string;
}

export type ProjectCategory = 'All' | 'Full Stack' | 'Web' | 'Game Dev' | 'Cyber Security' | 'Graphic Design' | string;

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string;
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  architectureHighlights: string[];
  metrics?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  bulletPoints: string[];
  techUsed: string[];
  current?: boolean;
  driveUrl?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: string;
  suggestions?: string[];
}

export type SampleCategory = 'All' | 'Graphic Design' | 'Video Editing';

export interface SampleItem {
  id: string;
  title: string;
  category: 'Graphic Design' | 'Video Editing';
  type: 'image' | 'video';
  mediaUrl: string;
  thumbnailUrl?: string;
  description?: string;
  tools?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date?: string;
  category?: 'Cyber Security' | 'Web Development' | 'Programming' | 'Design & Creative';
  credentialUrl?: string;
  linkedinUrl?: string;
  skills?: string[];
  description?: string;
}

export interface Activity {
  id: string;
  title: string;
  role: string;
  organization: string;
  period?: string;
  category: string;
  description: string;
  highlights?: string[];
}
