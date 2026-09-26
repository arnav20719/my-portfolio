// app/components/sections/Footer.tsx
import Link from 'next/link';
import { socialLinks } from '@/app/lib/data';

export function Footer() {
  const year = new Date().getFullYear();
  const github = socialLinks.find(s => s.platform === 'github');
  const linkedin = socialLinks.find(s => s.platform === 'linkedin');
  const email = socialLinks.find(s => s.platform === 'email');

  return (
    <footer className="bg-[#0A0A0F] border-t border-[rgba(255,255,255,0.06)] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-extrabold text-white">
              <span className="text-red-500">◉</span> ARNAV
            </Link>
            <p className="text-gray-500 text-sm mt-2 max-w-xs">
              Full Stack Developer building AI-powered applications with modern web technologies.
            </p>
            <div className="flex gap-3 mt-3">
              {github && <a href={github.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-500 transition-colors">GitHub</a>}
              {linkedin && <a href={linkedin.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-500 transition-colors">LinkedIn</a>}
              {email && <a href={email.url} className="text-gray-500 hover:text-green-500 transition-colors">Email</a>}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/projects" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-gray-500 hover:text-red-500 text-sm transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Contact</Link></li>
              <li><Link href="/resume" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Resume</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:arnav@email.com" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Email</a></li>
              <li><a href="#" className="text-gray-500 hover:text-red-500 text-sm transition-colors">Schedule Call</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[rgba(255,255,255,0.06)] mt-8 pt-8 flex flex-col sm:flex-row justify-between text-sm text-gray-500">
          <p>© {year} ARNAV. All rights reserved.</p>
          <p className="mt-2 sm:mt-0">Built with ❤️ using Next.js</p>
        </div>
      </div>
    </footer>
  );
}