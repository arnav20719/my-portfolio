// app/lib/searchData.ts

export interface SearchItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Projects' | 'Experience' | 'External';
  href?: string;
  action?: () => void;
  icon?: React.ReactNode;
}

export const searchItems: SearchItem[] = [
  // ===== NAVIGATION =====
  {
    id: 'home',
    label: 'Home',
    category: 'Navigation',
    href: '/',
  },
  {
    id: 'projects',
    label: 'Projects',
    category: 'Navigation',
    href: '/projects',
  },
  {
    id: 'about',
    label: 'About',
    category: 'Navigation',
    href: '/about',
  },
  {
    id: 'contact',
    label: 'Contact',
    category: 'Navigation',
    href: '/contact',
  },
  {
    id: 'resume',
    label: 'Resume',
    category: 'Navigation',
    href: '/resume',
  },

  // ===== PROJECTS =====
  {
    id: 'courseadmission',
    label: 'CourseAdmission - AI Admission Platform',
    category: 'Projects',
    href: '/projects#courseadmission',
  },
  {
    id: 'qagpt',
    label: 'Q&A GPT - AI Chatbot',
    category: 'Projects',
    href: '/projects#qagpt',
  },

  // ===== EXPERIENCE =====
  {
    id: 'outlier',
    label: 'Outlier - Software Engineer for AI Training',
    category: 'Experience',
    href: '/about#experience',
  },
  {
    id: 'aicte',
    label: 'AICTE - AWS Cloud Virtual Intern',
    category: 'Experience',
    href: '/about#experience',
  },

  // ===== EXTERNAL LINKS =====
  {
    id: 'github',
    label: 'GitHub',
    category: 'External',
    href: 'https://github.com/arnavsai',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    category: 'External',
    href: 'https://linkedin.com/in/arnavsai',
  },
  {
    id: 'email',
    label: 'Email',
    category: 'External',
    href: 'mailto:arnav@email.com',
  },
]; 
