// app/lib/searchData.ts
import { projects, socialLinks } from './data';

export interface SearchItem {
  id: string;
  label: string;
  category: 'Navigation' | 'Projects' | 'Experience' | 'External';
  href?: string;
  action?: () => void;
}

// Build search items dynamically from existing data
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
    id: 'experience',
    label: 'Experience',
    category: 'Navigation',
    href: '/experience',
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
    href: '/resume.pdf',
  },

  // ===== PROJECTS (Auto-generated from data.ts) =====
  ...projects.map((project) => ({
    id: project.id,
    label: `${project.title} - ${project.description}`,
    category: 'Projects' as const,
    href: `/projects#${project.id}`,
  })),

  // ===== EXPERIENCE (Removed) =====
  // No experience items shown in command palette

  // ===== EXTERNAL LINKS (Auto-generated from data.ts) =====
  ...socialLinks.map((link) => ({
    id: link.id,
    label: link.platform.charAt(0).toUpperCase() + link.platform.slice(1),
    category: 'External' as const,
    href: link.url,
  })),
];