// app/lib/data.ts
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  problem?: string;
  approach?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  category: 'ai' | 'fullstack' | 'frontend' | 'backend' | 'tool' | 'business' | 'portfolio';
}

export interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other' | 'languages' | 'ai' | 'database';
  icon?: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string | 'Present';
  description: string[];
  location?: string;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  date: string;
  duration?: string;
}

export interface SocialLink {
  id: string;
  platform: 'github' | 'linkedin' | 'email' | 'phone' | 'other';
  url: string;
}

export const projects: Project[] = [
  {
    id: 'courseadmission',
    title: 'CourseAdmission',
    description: 'AI-powered admission platform with 4,760+ colleges',
    longDescription: 'A comprehensive admission platform that leverages AI to help students find and compare colleges across India. Features include an intelligent chatbot, college comparison tool, and lead generation system. Built with Next.js 16, React 19, and Prisma ORM with PostgreSQL.',
    problem: 'Students and parents face overwhelming choices when selecting colleges. Manual research across hundreds of websites is time-consuming, and finding the right college that matches academic profile, budget, location, and career goals is a significant challenge.',
    approach: 'Built an AI-powered admission platform that centralizes college data and provides intelligent matching. Developed a custom chatbot trained on college data to answer student queries instantly. Created a comprehensive comparison tool and lead generation system to streamline the entire admission journey.',
    techStack: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    liveUrl: 'https://careersathhi.com/',
    githubUrl: 'https://github.com/arnav20719',
    features: [
      'AI-powered chatbot with custom context trained on 4,760+ colleges',
      'College comparison tool with filters for courses, fees, location, and rankings',
      'Lead generation and management system with automated follow-ups',
      'User authentication and profile management',
      'Real-time college data updates and notifications'
    ],
    category: 'ai'
  },
  {
    id: 'shiksha-chat',
    title: 'Students College Assistant',
    description: 'Production RAG system for Indian college admissions Q&A',
    longDescription: 'A production RAG system for Indian college admissions Q&A. Students ask natural-language questions like "Which IIT has the highest placement salary?" and get grounded answers with clickable source citations — no hallucinations, no made-up data.',
    problem: 'Most college search tools are filter-based and rigid. Students struggle to find answers to natural-language questions about fees, rankings, and placements across IITs and Bihar institutions.',
    approach: 'Built a RAG pipeline with semantic chunking by entity type, in-memory ChromaDB on Render, lazy vector store rebuild on cold start, and source-aware generation where the LLM cites URLs from metadata and refuses to answer when context is missing.',
    techStack: ['FastAPI', 'LangChain', 'OpenAI', 'ChromaDB', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Render', 'Vercel'],
    liveUrl: 'https://shiksha-chat.vercel.app/',
    githubUrl: 'https://github.com/arnav20719/shiksha-chat',
    features: [
      'Natural-language Q&A with grounded, cited answers',
      'Semantic chunking by entity type (one document per college)',
      'In-memory ChromaDB on Render to work around read-only filesystem',
      'Lazy vector store rebuild on cold start (no persistent disk on free tier)',
      'Source-aware generation: LLM cites URLs and refuses out-of-scope queries',
      '40-question test suite (30 factual + 10 adversarial) — 100% accuracy'
    ],
    category: 'ai'
  },
  {
    id: 'qagpt',
    title: 'Q&A GPT',
    description: 'AI-powered conversational chatbot using Vapi API',
    longDescription: 'An intelligent conversational agent built with Vapi API that can answer questions and engage in natural dialogue. Features real-time AI responses, natural language understanding, and customizable response generation.',
    problem: 'Users need instant, accurate answers without navigating complex interfaces. Traditional chatbots lack natural conversation flow and struggle with context retention across multiple turns.',
    approach: 'Integrated Vapi API with a custom React frontend to create a conversational AI that understands context, maintains conversation flow, and delivers accurate responses. Built a seamless user experience with real-time streaming responses.',
    techStack: ['Next.js', 'React', 'Vapi API', 'TypeScript', 'Tailwind CSS'],
    liveUrl: 'https://project-s479m.vercel.app',
    githubUrl: 'https://github.com/arnav20719',
    features: [
      'Real-time conversational AI with natural language understanding',
      'Contextual responses with multi-turn conversation support',
      'Customizable response generation tailored to user needs',
      'Streaming responses for real-time feedback',
      'Clean and intuitive chat interface'
    ],
    category: 'ai'
  },
  {
    id: 'custom-chatbot',
    title: 'Custom AI Chatbot',
    description: 'FAQ-based AI chatbot with zero API costs',
    longDescription: 'Built a custom AI Chatbot from scratch using FAQ-based architecture. Unlike most developers who use third-party APIs, this chatbot was built independently with zero recurring API costs. It is fully customizable, lightweight, and fast.',
    problem: 'Most developers rely on expensive third-party APIs for chatbot functionality, leading to recurring costs and vendor lock-in. There was a need for a lightweight, cost-effective alternative.',
    approach: 'Developed a custom FAQ-based AI chatbot from scratch using intelligent matching algorithms. Built with Next.js and React, it uses a structured knowledge base and semantic matching to provide accurate responses without any external API calls.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Custom AI Logic'],
    liveUrl: '#',
    githubUrl: 'https://github.com/arnav20719',
    features: [
      'FAQ-based intelligence with semantic matching',
      'Zero API costs - fully self-contained',
      'Fully customizable knowledge base',
      'Lightweight and fast response times',
      'Easy to deploy and maintain'
    ],
    category: 'ai'
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'Modern, responsive portfolio with dark/light mode',
    longDescription: 'A fully responsive portfolio website showcasing my projects, skills, and experience. Features dark/light mode, command palette (⌘K), smooth animations, and is fully SEO optimized.',
    problem: 'I needed a professional portfolio that showcases my work effectively while providing a great user experience across all devices. The portfolio should be fast, accessible, and visually impressive.',
    approach: 'Built with Next.js 15 and React 19, using TypeScript for type safety and Tailwind CSS for styling. Implemented a command palette for quick navigation, dark/light mode toggle, and Framer Motion for smooth animations. Optimized for SEO and performance.',
    techStack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: '#',
    githubUrl: 'https://github.com/arnav20719',
    features: [
      'Dark/Light mode toggle with system preference detection',
      'Command palette (⌘K) for quick navigation',
      'Smooth page transitions and hover animations',
      'Fully responsive across all devices',
      'SEO optimized with meta tags and structured data'
    ],
    category: 'portfolio'
  }
];

export const skills: Skill[] = [
  // Languages
  { id: 'javascript', name: 'JavaScript', category: 'languages' },
  { id: 'typescript', name: 'TypeScript', category: 'languages' },
  { id: 'python', name: 'Python', category: 'languages' },
  { id: 'sql', name: 'SQL', category: 'languages' },
  { id: 'html5', name: 'HTML5', category: 'languages' },
  { id: 'css3', name: 'CSS3', category: 'languages' },
  { id: 'java', name: 'Java', category: 'languages' },
  { id: 'cpp', name: 'C++', category: 'languages' },
  
  // Frontend
  { id: 'nextjs', name: 'Next.js 16', category: 'frontend' },
  { id: 'react', name: 'React 19', category: 'frontend' },
  { id: 'tailwind', name: 'Tailwind CSS', category: 'frontend' },
  { id: 'framer', name: 'Framer Motion', category: 'frontend' },
  { id: 'shadcn', name: 'Shadcn/ui', category: 'frontend' },
  { id: 'radix', name: 'Radix UI', category: 'frontend' },
  { id: 'responsive', name: 'Responsive Design', category: 'frontend' },
  { id: 'accessibility', name: 'Web Accessibility', category: 'frontend' },
  
  // Backend
  { id: 'nodejs', name: 'Node.js', category: 'backend' },
  { id: 'express', name: 'Express.js', category: 'backend' },
  { id: 'fastapi', name: 'FastAPI', category: 'backend' },
  { id: 'restapis', name: 'REST APIs', category: 'backend' },
  { id: 'websockets', name: 'WebSockets', category: 'backend' },
  { id: 'jwt', name: 'JWT Authentication', category: 'backend' },
  { id: 'microservices', name: 'Microservices', category: 'backend' },
  
  // Database
  { id: 'prisma', name: 'Prisma ORM', category: 'database' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'database' },
  { id: 'supabase', name: 'Supabase', category: 'database' },
  { id: 'chromadb', name: 'ChromaDB (Vector Databases)', category: 'database' },
  
  // AI/ML
  { id: 'ai', name: 'AI Integration', category: 'ai' },
  { id: 'chatbot', name: 'Chatbot Development', category: 'ai' },
  { id: 'prompt', name: 'Prompt Engineering', category: 'ai' },
  { id: 'langchain', name: 'LangChain', category: 'ai' },
  { id: 'rag', name: 'RAG Systems', category: 'ai' },
  { id: 'vapi', name: 'Vapi API', category: 'ai' },
  { id: 'openai', name: 'OpenAI API', category: 'ai' },
  { id: 'llm-eval', name: 'LLM Evaluation & Testing', category: 'ai' },
  
  // Tools
  { id: 'git', name: 'Git', category: 'tools' },
  { id: 'github', name: 'GitHub', category: 'tools' },
  { id: 'vercel', name: 'Vercel', category: 'tools' },
  { id: 'aws', name: 'AWS (EC2, S3, RDS, Lambda)', category: 'tools' },
  { id: 'postman', name: 'Postman', category: 'tools' },
  { id: 'vscode', name: 'VS Code', category: 'tools' },
  { id: 'linux', name: 'Linux/CLI', category: 'tools' },
  { id: 'npm', name: 'npm/yarn', category: 'tools' },
];

export const experiences: Experience[] = [
  {
    id: 'courseadmission',
    company: 'CourseAdmission / CareerSathi',
    role: 'Full Stack Developer / Founder',
    startDate: 'Apr 2026',
    endDate: 'Present',
    location: 'Remote',
    description: [
      'Building an AI-powered admission platform (CourseAdmission)',
      'Developing college comparison tools and AI chatbots',
      'Managing product development and deployment',
      'Handling technical architecture and infrastructure'
    ]
  },
  {
    id: 'qagpt',
    company: 'Q&A GPT',
    role: 'AI Chatbot Developer',
    startDate: 'Apr 2026',
    endDate: 'Present',
    location: 'Remote',
    description: [
      'Built an AI-powered conversational chatbot using Vapi API',
      'Implemented real-time streaming responses',
      'Developed natural language understanding capabilities',
      'Created customizable response generation system'
    ]
  },
  {
    id: 'freelance',
    company: 'Freelance / Self-Employed',
    role: 'Full Stack Developer',
    startDate: 'Oct 2025',
    endDate: 'Present',
    location: 'Remote',
    description: [
      'Building custom web applications for clients',
      'End-to-end development using Next.js, React, and Node.js',
      'API development and database management',
      'Client consultation and project delivery'
    ]
  },
  {
    id: 'outlier',
    company: 'Outlier',
    role: 'Software Engineer for AI Training',
    startDate: 'Oct 2023',
    endDate: 'Jul 2025',
    location: 'Remote',
    description: [
      'Training AI models by evaluating and improving their responses',
      'Collaborating with cross-functional teams to enhance AI performance',
      'Implementing quality assurance protocols for AI-generated content',
      'Developing evaluation metrics for AI model performance'
    ]
  },
  {
    id: 'aws-intern',
    company: 'AICTE',
    role: 'AWS Cloud Virtual Intern',
    startDate: 'May 2023',
    endDate: 'Jun 2023',
    location: 'Remote',
    description: [
      'Completed hands-on training in AWS cloud services',
      'Deployed and managed cloud infrastructure',
      'Worked on cloud-based solution architecture',
      'Implemented cloud security best practices'
    ]
  }
];

export const certifications: Certification[] = [
  {
    id: 'fullstack',
    name: 'Full-Stack Web Development Bootcamp',
    issuer: 'Udemy',
    date: 'Jan 2026',
    duration: '62 Hours'
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms',
    issuer: 'Udemy',
    date: 'Aug 2025',
    duration: '46.5 Hours'
  },
  {
    id: 'prompt',
    name: 'Prompt Engineering',
    issuer: 'Udemy',
    date: 'Mar 2026',
    duration: '16 Hours'
  },
  {
    id: 'aws',
    name: 'AWS Cloud Virtual Internship',
    issuer: 'AICTE',
    date: '2023'
  },
  {
    id: 'coding',
    name: 'Weekly Coding Challenge',
    issuer: 'Unstop',
    date: '2023'
  }
];

export const socialLinks: SocialLink[] = [
  { id: 'github', platform: 'github', url: 'https://github.com/arnav20719' },
  { id: 'linkedin', platform: 'linkedin', url: 'https://linkedin.com/in/arnavsai' },
  { id: 'email', platform: 'email', url: 'mailto:arnavsawarn143@gmail.com' },
  { id: 'phone', platform: 'phone', url: 'tel:+917294920365' },
];

export const heroData = {
  name: 'ARNAV',
  title: 'Full Stack Developer',
  tagline: 'Building AI-powered applications with modern web technologies',
  resumeUrl: '/resume.pdf',
  email: 'arnavsawarn143@gmail.com',
  phone: '+917294920365',
  location: 'India',
};