// app/components/sections/Navbar.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CommandPalette } from '@/app/components/ui/CommandPalette';
import { 
  Moon, 
  Sun, 
  FileText,
  Menu,
  X,
  MessageCircle
} from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Experience', href: '/experience' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme toggle
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass shadow-sm' 
            : 'bg-[#F7F2EB]/80 backdrop-blur-sm border-b border-[rgba(26,26,26,0.06)]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 shrink-0">
              <span className="text-lg font-bold text-[#1A1A1A]">◉</span>
              <span className="text-lg font-bold text-[#1A1A1A] tracking-tight">
                ARNAV
                <span className="text-[#D96B27] ml-1">.</span>
              </span>
            </Link>

            {/* Navigation - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-all duration-300 ${
                    pathname === item.href
                      ? 'text-[#D96B27] border-b-2 border-[#D96B27] pb-1'
                      : 'text-[#6B655B] hover:text-[#D96B27] hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Right Side: Search + Theme + Resume + Talk to Me */}
            <div className="flex items-center gap-2">
              {/* Command Palette (Search) */}
              <CommandPalette />

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-[#6B655B] hover:text-[#D96B27] hover:bg-[#D96B27]/10 transition-all"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Resume Button */}
              <Link
                href="/resume.pdf"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-[#D96B27] text-white text-sm font-medium rounded-lg hover:bg-[#B8551E] transition-all hover:scale-105 shadow-sm hover:shadow-[#D96B27]/25"
              >
                <FileText className="w-4 h-4" />
                Résumé
              </Link>

              {/* Talk to Me Button */}
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#D96B27]/10 text-[#D96B27] text-sm font-medium rounded-lg border border-[#D96B27]/20 hover:bg-[#D96B27] hover:text-white transition-all hover:scale-105 shadow-sm hover:shadow-[#D96B27]/25"
              >
                <MessageCircle className="w-4 h-4" />
                Talk to Me
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenu(!mobileMenu)}
                className="md:hidden p-2 rounded-lg text-[#6B655B] hover:text-[#D96B27] hover:bg-[#D96B27]/10 transition-all"
              >
                {mobileMenu ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenu && (
            <div className="md:hidden bg-[#FAF6F0] rounded-xl p-4 mt-2 border border-[rgba(26,26,26,0.06)] shadow-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className={`block py-3 text-center text-sm font-medium border-b border-[rgba(26,26,26,0.06)] last:border-0 ${
                    pathname === item.href ? 'text-[#D96B27]' : 'text-[#6B655B] hover:text-[#D96B27]'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center justify-center gap-4 pt-3 mt-3 border-t border-[rgba(26,26,26,0.06)]">
                {/* Mobile Resume */}
                <Link
                  href="/resume.pdf"
                  className="text-sm font-medium text-[#D96B27] hover:text-[#B8551E] transition-colors"
                >
                  Résumé
                </Link>
                {/* Mobile Talk to Me */}
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#D96B27]/10 text-[#D96B27] text-sm font-medium rounded-lg border border-[#D96B27]/20 hover:bg-[#D96B27] hover:text-white transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  Talk to Me
                </Link>
                {/* Mobile Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className="text-[#6B655B] hover:text-[#D96B27] transition-colors"
                >
                  {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}