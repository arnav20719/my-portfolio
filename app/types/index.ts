// app/types/index.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  category: 'ai' | 'fullstack' | 'frontend' | 'backend';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  icon?: string;
  proficiency?: number; // 1-100
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  techStack?: string[];
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  duration?: string;
  credentialUrl?: string;
}

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'twitter' | 'email' | 'other';
  url: string;
  username?: string;
} 
