// app/components/sections/Hero.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { socialLinks } from '@/app/lib/data';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  
  const titles = [
    'Full Stack Developer.',
    'AI/ML Engineer.',
    'Next.js Expert.',
    'Problem Solver.'
  ];

  useEffect(() => {
    const currentText = titles[textIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 80);
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  const github = socialLinks.find(s => s.platform === 'github');
  const linkedin = socialLinks.find(s => s.platform === 'linkedin');

  return (
    <section className="min-h-[90vh] flex items-center justify-center px-4 bg-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Glow */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-[#D9531E]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#D9531E]/5 rounded-full blur-3xl"></div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-5 gap-12 items-center">
          {/* Left Content - 3 columns */}
          <div className="md:col-span-3">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-green-700 text-xs font-medium tracking-wider">Available for work</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] leading-tight">
              <span className="italic text-[#D9531E]">AI</span> that makes it past the demo.
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-[#1A1A1A] font-medium mt-3">
              I build the unglamorous parts of AI/ML systems.
            </p>

            {/* Animated Title */}
            <div className="h-10 flex items-center mt-2">
              <span className="text-xl font-bold text-[#D9531E]">
                {displayText}
                <span className="animate-cursor text-[#D9531E]">|</span>
              </span>
            </div>

            {/* Bio */}
            <p className="text-[#6B655B] text-base md:text-lg mt-4 leading-relaxed max-w-xl">
              I'm Arnav, an applied AI/ML and Full Stack engineer. I build production-ready applications that solve real problems.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div>
                <span className="text-2xl font-bold text-[#D9531E]">2+</span>
                <span className="text-sm text-[#6B655B] ml-1">Years Applied</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#D9531E]">2</span>
                <span className="text-sm text-[#6B655B] ml-1">Live Projects</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-[#D9531E]">4.7K+</span>
                <span className="text-sm text-[#6B655B] ml-1">Colleges Listed</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/projects" className="btn-primary">
                View My Work →
              </Link>
              <Link href="/contact" className="btn-outline">
                Let's Talk
              </Link>
            </div>
          </div>

          {/* Right Content - Photo + Tags - 2 columns */}
          <div className="md:col-span-2 flex flex-col items-center">
            {/* Photo with Ring */}
            <div className="relative">
              <div className="absolute inset-0 rounded-full border-4 border-[#D9531E]/20 animate-pulse"></div>
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-[#D9531E] shadow-xl">
                <Image
                  src="/profile.jpg"
                  alt="ARNAV"
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Tags Below Photo */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="badge badge-accent">AI/ML</span>
              <span className="badge badge-ghost">Next.js</span>
              <span className="badge badge-green">Live</span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-3">
              {github && (
                <a href={github.url} target="_blank" rel="noopener noreferrer" className="text-[#6B655B] hover:text-[#D9531E] transition-colors text-sm font-medium">
                  GitHub
                </a>
              )}
              {linkedin && (
                <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="text-[#6B655B] hover:text-[#D9531E] transition-colors text-sm font-medium">
                  LinkedIn
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}