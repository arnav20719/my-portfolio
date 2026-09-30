// app/experience/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Briefcase, Code, GraduationCap, Award, Mail } from 'lucide-react';

// ===== INLINE SVG ICONS =====
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

export default function ExperiencePage() {
  const [animatedSkills, setAnimatedSkills] = useState<Record<string, number>>({});
  const [activeSection, setActiveSection] = useState('experience');

  const experiences = [
    {
      id: 'courseadmission',
      company: 'CourseAdmission / CareerSathi',
      role: 'Full Stack Developer / Founder',
      period: 'Apr 2026 - Present',
      location: 'Remote',
      type: 'Startup',
      typeColor: 'purple',
      icon: '🚀',
      description: 'As the Founder and Full Stack Developer of an Admission Consultancy Startup, I\'m building an AI-powered platform (CourseAdmission) that helps students find and compare colleges across India. I develop college comparison tools, custom AI chatbots, and lead generation systems that streamline the admission process for students and consultants. I handle the entire product lifecycle from ideation to deployment.',
      responsibilities: [
        'Building an AI-powered admission platform (CourseAdmission)',
        'Developing college comparison tools and AI chatbots',
        'Managing product development and deployment',
        'Handling technical architecture and infrastructure',
      ],
    },
    {
      id: 'qagpt',
      company: 'Q&A GPT',
      role: 'AI Chatbot Developer',
      period: 'Apr 2026 - Present',
      location: 'Remote',
      type: 'AI',
      typeColor: 'green',
      icon: '🤖',
      description: 'Built an AI-powered conversational chatbot using Vapi API. Implemented real-time streaming responses, natural language understanding, and customizable response generation for a seamless user experience.',
      responsibilities: [
        'Built an AI-powered conversational chatbot using Vapi API',
        'Implemented real-time streaming responses',
        'Developed natural language understanding capabilities',
        'Created customizable response generation system',
      ],
    },
    {
      id: 'freelance',
      company: 'Freelance / Self-Employed',
      role: 'Full Stack Developer',
      period: 'Oct 2025 - Present',
      location: 'Remote',
      type: 'Freelance',
      typeColor: 'blue',
      icon: '💻',
      description: 'As a Freelance Full Stack Developer, I build custom web applications for diverse clients across various industries. I handle end-to-end development using modern technologies including Next.js, React, and Node.js, ensuring scalable and maintainable codebases.',
      responsibilities: [
        'Building custom web applications for clients',
        'End-to-end development using Next.js, React, and Node.js',
        'API development and database management',
        'Client consultation and project delivery',
      ],
    },
    {
      id: 'outlier',
      company: 'Outlier',
      role: 'Software Engineer for AI Training',
      period: 'Oct 2023 - Jul 2025',
      location: 'Remote',
      type: 'Full-time',
      typeColor: 'green',
      icon: '🤖',
      description: 'As a Software Engineer for AI Training at Outlier, I worked at the intersection of artificial intelligence and quality assurance. My primary responsibility involved training and evaluating large language models by analyzing their responses and providing feedback to improve accuracy and reliability.',
      responsibilities: [
        'Training AI models by evaluating and improving their responses',
        'Collaborating with cross-functional teams to enhance AI performance',
        'Implementing quality assurance protocols for AI-generated content',
        'Developing evaluation metrics for AI model performance',
      ],
    },
    {
      id: 'aws-intern',
      company: 'AICTE',
      role: 'AWS Cloud Virtual Intern',
      period: 'May 2023 - Jun 2023',
      location: 'Remote',
      type: 'Internship',
      typeColor: 'blue',
      icon: '☁️',
      description: 'Completed hands-on training in AWS cloud services, deployed and managed cloud infrastructure, worked on cloud-based solution architecture, and implemented cloud security best practices.',
      responsibilities: [
        'Completed hands-on training in AWS cloud services',
        'Deployed and managed cloud infrastructure',
        'Worked on cloud-based solution architecture',
        'Implemented cloud security best practices',
      ],
    },
  ];

  const skillCategories = [
    {
      title: 'Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'SQL', level: 88 },
        { name: 'TypeScript', level: 88 },
        { name: 'JavaScript', level: 86 },
        { name: 'HTML/CSS', level: 85 },
        { name: 'Bash', level: 75 },
      ],
    },
    {
      title: 'Frontend',
      skills: [
        { name: 'Next.js 16', level: 92 },
        { name: 'React 19', level: 90 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'TypeScript', level: 88 },
        { name: 'Framer Motion', level: 80 },
      ],
    },
    {
      title: 'Backend',
      skills: [
        { name: 'REST APIs', level: 90 },
        { name: 'Prisma ORM', level: 88 },
        { name: 'Node.js', level: 85 },
        { name: 'FastAPI', level: 80 },
      ],
    },
    {
      title: 'AI / ML',
      skills: [
        { name: 'NumPy / Pandas', level: 65 },
      ],
    },
    {
      title: 'LLM & GenAI',
      skills: [
        { name: 'Prompt Engineering', level: 92 },
        { name: 'RAG Pipelines', level: 90 },
        { name: 'LangChain', level: 85 },
        { name: 'LLM Evaluation & Testing', level: 82 },
      ],
    },
    {
      title: 'Database & Cloud',
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'Vercel', level: 90 },
        { name: 'AWS (EC2, S3, RDS)', level: 85 },
        { name: 'Supabase', level: 78 },
        { name: 'ChromaDB (Vector Databases)', level: 75 },
      ],
    },
  ];

  const certificates = [
    {
      icon: '📜',
      title: 'Full-Stack Web Development Bootcamp',
      subtitle: '62 Hours',
      issuer: 'Udemy · Jan 2026',
      link: 'https://www.udemy.com/certificate/UC-029a39af-db11-428b-bfed-98eb81c71d46/',
      learnings: [
        'Built production-ready full-stack applications with Next.js and React',
        'Designed RESTful APIs with Node.js and Express',
        'Worked with PostgreSQL databases using Prisma ORM',
      ],
    },
    {
      icon: '📜',
      title: 'Data Structures & Algorithms',
      subtitle: '46.5 Hours',
      issuer: 'Udemy · Aug 2025',
      link: 'https://www.udemy.com/certificate/UC-919160b1-2ab3-4615-8cee-dca086b42620/',
      learnings: [
        'Solved 100+ DSA problems covering arrays, trees, and graphs',
        'Mastered sorting, searching, and dynamic programming',
        'Optimized time and space complexity for applications',
      ],
    },
    {
      icon: '📜',
      title: 'Prompt Engineering',
      subtitle: '16 Hours',
      issuer: 'Udemy · Mar 2026',
      link: 'https://www.udemy.com/certificate/UC-0416a114-93ea-4c5e-8481-b7357b29131a/',
      learnings: [
        'Designed effective prompts for LLMs like GPT and Claude',
        'Built RAG pipelines for domain-specific Q&A',
        'Implemented few-shot and chain-of-thought prompting',
      ],
    },
    {
      icon: '☁️',
      title: 'AWS Cloud Virtual Internship',
      subtitle: '',
      issuer: 'AICTE · 2023',
      link: null,
      learnings: [
        'Hands-on experience with AWS EC2, S3, and RDS',
        'Deployed cloud infrastructure and security best practices',
        'Worked on cloud-based solution architecture',
      ],
    },
    {
      icon: '🏅',
      title: 'Weekly Coding Challenge',
      subtitle: '',
      issuer: 'Unstop · 2023',
      link: null,
      learnings: [
        'Participated in weekly competitive programming',
        'Improved problem-solving speed and accuracy',
        'Applied DSA concepts to time-bound problems',
      ],
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const allSkills: Record<string, number> = {};
      skillCategories.forEach((category) => {
        category.skills.forEach((skill) => {
          allSkills[skill.name] = skill.level;
        });
      });
      setAnimatedSkills(allSkills);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const getSkillWidth = (skillName: string) => {
    return animatedSkills[skillName] || 0;
  };

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <main className="min-h-screen py-8 md:py-16 bg-[#F7F2EB] flex justify-center">
      <div className="w-full max-w-4xl mx-auto px-[3rem]">
        {/* Back Button - Centered */}
        <div className="mb-6 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D96B27] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        {/* ===== TOP NAVIGATION - SINGLE ROW ===== */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-6">
          <button
            onClick={() => scrollToSection('experience')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'experience'
                ? 'bg-[#D96B27] text-white shadow-md shadow-[#D96B27]/20'
                : 'bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40'
            }`}
          >
            Experience
          </button>
          <span className="text-[#D96B27]/30">|</span>

          <button
            onClick={() => scrollToSection('skills')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'skills'
                ? 'bg-[#D96B27] text-white shadow-md shadow-[#D96B27]/20'
                : 'bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40'
            }`}
          >
            Skills
          </button>
          <span className="text-[#D96B27]/30">|</span>

          <button
            onClick={() => scrollToSection('education')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'education'
                ? 'bg-[#D96B27] text-white shadow-md shadow-[#D96B27]/20'
                : 'bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40'
            }`}
          >
            Education
          </button>
          <span className="text-[#D96B27]/30">|</span>

          <button
            onClick={() => scrollToSection('certificates')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeSection === 'certificates'
                ? 'bg-[#D96B27] text-white shadow-md shadow-[#D96B27]/20'
                : 'bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40'
            }`}
          >
            Certificates
          </button>

          <span className="text-[#D96B27]/20 mx-1">✦</span>

          <a
            href="https://github.com/arnav20719"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all"
          >
            <GithubIcon />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/arnav-raj-111z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all"
          >
            <LinkedinIcon />
            LinkedIn
          </a>

          <a
            href="mailto:arnavsawarn143@gmail.com"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-white text-[#6B655B] hover:text-[#D96B27] border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all"
          >
            <Mail className="w-4 h-4" />
            Email
          </a>

          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium bg-green-50 text-green-700 border border-green-200">
            <span className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></span>
              <span className="relative w-2 h-2 rounded-full bg-green-500"></span>
            </span>
            Available for work
          </span>
        </div>

        {/* ===== PAGE HEADER - CENTERED ===== */}
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#1A1A1A]">Experience</h1>
          <p className="text-[#6B655B] mt-2 text-sm">
            Where I've worked, what I've shipped, and the impact that followed.
          </p>
        </div>

        {/* ===== EXPERIENCE SECTION ===== */}
        <div id="experience" className="scroll-mt-20">
          <div className="space-y-6">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="bg-white rounded-2xl p-5 md:p-6 border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#D96B27]/5"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{exp.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[#1A1A1A] group-hover:text-[#D96B27] transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-[#D96B27] font-medium text-sm">{exp.company}</p>
                    <div className="flex flex-wrap items-center gap-3 mt-1.5 text-xs text-[#6B655B]">
                      <span>📅 {exp.period}</span>
                      <span>📍 {exp.location}</span>
                      <span
                        className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium border ${
                          exp.typeColor === 'green'
                            ? 'bg-green-50 text-green-600 border-green-200'
                            : exp.typeColor === 'blue'
                            ? 'bg-blue-50 text-blue-600 border-blue-200'
                            : 'bg-purple-50 text-purple-600 border-purple-200'
                        }`}
                      >
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-[#6B655B] text-sm leading-relaxed mt-3 text-left">
                      {exp.description}
                    </p>

                    <div className="mt-4 pt-4 border-t border-[#F7F2EB]">
                      <h4 className="text-xs font-semibold text-[#6B655B] uppercase tracking-wider mb-2">
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-1.5">
                        {exp.responsibilities.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-[#D96B27] font-bold">▸</span>
                            <span className="font-semibold text-[#1A1A1A]">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== SKILLS SECTION ===== */}
        <div id="skills" className="mt-14 scroll-mt-20">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-[#1A1A1A]">Six Domains I Work In Daily</h2>
            <p className="text-[#6B655B] text-sm mt-1">
              From model internals and retrieval to the interfaces people touch.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all duration-300"
              >
                <h3 className="text-base font-bold text-[#1A1A1A] mb-3 text-center">{category.title}</h3>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between text-xs">
                        <span className="text-[#6B655B]">{skill.name}</span>
                        <span className="text-[#D96B27] font-medium">{getSkillWidth(skill.name)}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#F7F2EB] rounded-full mt-1 overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#D96B27] to-[#EA580C] rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${getSkillWidth(skill.name)}%`,
                            transition: 'width 1.2s ease-out',
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ===== EDUCATION SECTION ===== */}
        <div id="education" className="mt-14 scroll-mt-20">
          <h2 className="text-xl font-bold text-[#1A1A1A] text-center mb-4">Education</h2>
          <div className="bg-white rounded-2xl p-5 border border-[#E8E3DC] hover:border-[#D96B27]/30 transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="text-2xl">🎓</div>
              <div>
                <h3 className="text-base font-bold text-[#1A1A1A]">
                  B.Tech - Electronics and Communication Engineering
                </h3>
                <p className="text-[#D96B27] font-medium text-sm">Vel Tech University, Tamil Nadu</p>
                <span className="inline-block mt-1.5 px-3 py-1 rounded-full bg-[#D96B27]/10 text-[#D96B27] text-xs font-medium border border-[#D96B27]/20">
                  2021 - 2025
                </span>
                <ul className="mt-3 space-y-1.5">
                  <li className="flex items-start gap-2 text-sm text-[#6B655B]">
                    
                
                  </li>
                  <li className="flex items-start gap-2 text-sm text-[#6B655B]">
                    <span className="text-[#D96B27]">✓</span>
                    <span>Complete all fundamental core of Computer Science Engineering</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ===== CERTIFICATES SECTION ===== */}
        <div id="certificates" className="mt-14 scroll-mt-20">
          <h2 className="text-xl font-bold text-[#1A1A1A] text-center mb-4">Honors & Achievements</h2>
          <div className="grid grid-cols-1 gap-3">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 border border-[#E8E3DC] hover:border-[#D96B27]/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{cert.icon}</div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-[#1A1A1A] text-sm">{cert.title}</h4>
                    {cert.subtitle && <p className="text-xs text-[#6B655B]">{cert.subtitle}</p>}
                    <p className="text-xs text-[#6B655B]">{cert.issuer}</p>
                  </div>
                  {cert.link && (
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-[#D96B27] hover:underline whitespace-nowrap"
                    >
                      View →
                    </a>
                  )}
                </div>
                {cert.learnings && (
                  <div className="mt-2 pt-2 border-t border-[#F7F2EB]">
                    <ul className="space-y-1">
                      {cert.learnings.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-[#6B655B]">
                          <span className="text-[#D96B27]">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* ===== BOTTOM NAVIGATION ===== */}
        <div className="mt-12 pt-6 border-t border-[#E8E3DC] flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D96B27] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D96B27] transition-colors text-sm font-medium"
          >
            View My Projects →
          </Link>
        </div>

        {/* ===== CALENDLY BANNER ===== */}
        <div className="mt-6 py-3 px-5 bg-[#D96B27]/10 rounded-2xl border border-[#D96B27]/20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 text-sm font-medium text-[#D96B27] hover:opacity-80 transition-opacity"
          >
            <span>📅</span>
            Schedule time with me
            <span className="text-xs opacity-70">powered by Calendly</span>
          </a>
        </div>
      </div>
    </main>
  );
}