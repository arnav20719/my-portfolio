// app/page.tsx
import { Hero } from '@/app/components/sections/Hero';
import { projects, skills, experiences, certifications } from '@/app/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { Mail } from 'lucide-react';

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

// ===== LARGE SVG ICONS FOR CONTACT CARDS =====
const WhatsappIconLarge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const PhoneIconLarge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIconLarge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedinIconLarge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const GithubIconLarge = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function HomePage() {
  return (
    <main className="bg-[#FDFBF7]">
      <Hero />

      {/* Services Section */}
      <section className="section-padding container-custom">
        <div className="text-center mb-12">
          <span className="badge badge-accent">✦ What I Do</span>
          <h2 className="heading-lg text-[#1A1A1A] mt-3">Core Competencies</h2>
          <div className="w-12 h-0.5 bg-[#D9531E] rounded-full mx-auto mt-3"></div>
          <p className="text-[#6B655B] mt-3 max-w-2xl mx-auto">
            Specializing in AI/ML engineering and full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 stagger">
          {[
            {
              icon: '🧠',
              title: 'AI / LLM Engineering',
              desc: 'Building intelligent systems with large language models and AI agents.'
            },
            {
              icon: '🔗',
              title: 'RAG Engineering',
              desc: 'Retrieval-augmented generation for accurate, grounded AI responses.'
            },
            {
              icon: '⚙️',
              title: 'Backend Systems',
              desc: 'Scalable APIs, microservices, and production-grade infrastructure.'
            },
            {
              icon: '🤖',
              title: 'AI Chatbot Development',
              desc: 'Conversational AI chatbots with fast, accurate Q&A responses.'
            }
          ].map((service, i) => (
            <div key={i} className="card text-center hover:border-[#D9531E]/50 group">
              <div className="text-4xl mb-3">{service.icon}</div>
              <h3 className="font-bold text-[#1A1A1A]">{service.title}</h3>
              <p className="text-sm text-[#6B655B] mt-2">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Infinite Marquee Banner */}
      <div className="py-4 bg-[#D9531E] text-white overflow-hidden border-y border-[#D9531E]/20">
        <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-medium">
          {[...Array(3)].map((_, i) => (
            <span key={i} className="inline-flex items-center gap-12">
              <span>✦ Next.js</span>
              <span>✦ React</span>
              <span>✦ TypeScript</span>
              <span>✦ Tailwind CSS</span>
              <span>✦ Node.js</span>
              <span>✦ Prisma</span>
              <span>✦ PostgreSQL</span>
              <span>✦ AWS</span>
              <span>✦ Vercel</span>
              <span>✦ AI/ML</span>
              <span>✦ LangChain</span>
              <span>✦ FastAPI</span>
            </span>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      <section className="section-padding container-custom">
        <div className="text-center mb-12">
          <span className="badge badge-accent">💻 Tech Stack</span>
          <h2 className="heading-lg text-[#1A1A1A] mt-3">Tools I Reach For First</h2>
          <div className="w-12 h-0.5 bg-[#D9531E] rounded-full mx-auto mt-3"></div>
          <p className="text-[#6B655B] mt-3">A pragmatic, modern toolchain</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Languages */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'languages').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>

          {/* AI/ML */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">AI/ML</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'ai').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">Backend</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'backend').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Frontend */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">Frontend</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'frontend').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">Data & Infra</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'database').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="card">
            <h4 className="font-bold text-[#D9531E] mb-3">Tools</h4>
            <div className="flex flex-wrap gap-2">
              {skills.filter(s => s.category === 'tools').map(s => (
                <span key={s.id} className="badge badge-ghost">{s.name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="section-padding bg-[#F8F4EE]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-accent">📌 Beyond the Code</span>
            <h2 className="heading-lg text-[#1A1A1A] mt-3">Experience & Leadership</h2>
            <div className="w-12 h-0.5 bg-[#D9531E] rounded-full mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* NCC Experience */}
            <div className="card hover:border-[#D9531E]/50">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⚓</div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">National Cadet Corps · Naval Wing</h4>
                  <p className="text-sm text-[#D9531E] font-medium">Petty Officer Cadet · 2021-2024</p>
                  <ul className="text-sm text-[#6B655B] mt-2 space-y-1">
                    <li>• Technical attachment at INS Valsura (Radar, EW, SONAR)</li>
                    <li>• Sea training aboard ICGS Shaurya, INS Tir, USCG Midget</li>
                    <li>• NCC 'C' Certificate with A Grade</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="badge badge-ghost">Leadership</span>
                    <span className="badge badge-ghost">Discipline</span>
                    <span className="badge badge-ghost">Teamwork</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Marketing Experience */}
            <div className="card hover:border-[#D9531E]/50">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🎯</div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A]">Head of Marketing · LAVAZA '23</h4>
                  <p className="text-sm text-[#D9531E] font-medium">Vel Tech University · 2022-2023</p>
                  <ul className="text-sm text-[#6B655B] mt-2 space-y-1">
                    <li>• Sourced and closed corporate sponsorships</li>
                    <li>• Built brand awareness through campaigns</li>
                    <li>• Planned technical events and collaborations</li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <span className="badge badge-ghost">Marketing</span>
                    <span className="badge badge-ghost">Networking</span>
                    <span className="badge badge-ghost">Strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="section-padding bg-[#FDFBF7]">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="badge badge-accent">📧 Contact</span>
            <h2 className="heading-lg text-[#1A1A1A] mt-3">
              Let's Build Something <span className="italic text-[#D9531E]">Real</span> and <span className="italic text-[#D9531E]">Great</span>
            </h2>
            <div className="w-12 h-0.5 bg-[#D9531E] rounded-full mx-auto mt-3"></div>
            <p className="text-[#6B655B] mt-3 max-w-2xl mx-auto">
              Working on something hard, hiring, or just want to compare notes?<br />
              Send a note. I usually reply within a day.
            </p>
          </div>

          {/* Available Badge */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 border border-green-200">
              <span className="relative flex items-center justify-center">
                <span className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></span>
                <span className="relative w-2 h-2 rounded-full bg-green-500"></span>
              </span>
              Available for new opportunities
            </span>
          </div>

          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* ===== LEFT: Contact Form ===== */}
            <div className="bg-white rounded-2xl p-8 border border-[#E8E3DC] shadow-sm">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-1">Name</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-1">Email</label>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-1">Subject</label>
                  <input
                    type="text"
                    placeholder="Let's talk about..."
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-1">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Tell me about the problem, the timeline, and what success looks like."
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] transition-colors resize-none"
                  ></textarea>
                  <p className="text-xs text-[#9A948A] mt-1 text-right">0/2000</p>
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-[#D9531E] text-white font-medium rounded-lg hover:bg-[#C2410C] transition-all hover:scale-105 shadow-sm hover:shadow-[#D9531E]/25"
                >
                  Send message
                </button>
                <p className="text-xs text-[#9A948A] text-center mt-3">
                  Your details are only used to reply. No newsletters, ever.
                </p>
              </form>
            </div>

            {/* ===== RIGHT: Reach Me Directly ===== */}
            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-6">Or Reach Me Directly</h3>
              
              <div className="space-y-3 flex-1">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/917294920365"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E3DC] hover:border-[#25D366]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] shrink-0 group-hover:scale-110 transition-transform">
                    <WhatsappIconLarge />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">WhatsApp</h4>
                    <p className="text-xs text-[#6B655B]">+91 72949 20365</p>
                  </div>
                  <span className="text-xs text-[#25D366] font-medium group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Call */}
                <a
                  href="tel:+917294920365"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E3DC] hover:border-[#3B82F6]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] shrink-0 group-hover:scale-110 transition-transform">
                    <PhoneIconLarge />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">Call</h4>
                    <p className="text-xs text-[#6B655B]">+91 72949 20365</p>
                  </div>
                  <span className="text-xs text-[#3B82F6] font-medium group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* Email */}
                <a
                  href="mailto:arnavsawarn143@gmail.com"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E3DC] hover:border-[#D9531E]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#D9531E]/10 flex items-center justify-center text-[#D9531E] shrink-0 group-hover:scale-110 transition-transform">
                    <MailIconLarge />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">Email</h4>
                    <p className="text-xs text-[#6B655B] truncate">arnavsawarn143@gmail.com</p>
                  </div>
                  <span className="text-xs text-[#D9531E] font-medium group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/arnav-raj-111z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E3DC] hover:border-[#0A66C2]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] shrink-0 group-hover:scale-110 transition-transform">
                    <LinkedinIconLarge />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">LinkedIn</h4>
                    <p className="text-xs text-[#6B655B]">in/arnav-raj-111z</p>
                  </div>
                  <span className="text-xs text-[#0A66C2] font-medium group-hover:translate-x-1 transition-transform">→</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/arnav20719"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-4 bg-white rounded-xl border border-[#E8E3DC] hover:border-[#1A1A1A]/50 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#1A1A1A]/10 flex items-center justify-center text-[#1A1A1A] shrink-0 group-hover:scale-110 transition-transform">
                    <GithubIconLarge />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-[#1A1A1A]">GitHub</h4>
                    <p className="text-xs text-[#6B655B]">@arnav20719</p>
                  </div>
                  <span className="text-xs text-[#1A1A1A] font-medium group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

              {/* Schedule a Call */}
              <a
                href="https://cal.id/arnav-raj"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-3 px-6 py-4 bg-[#D9531E] text-white font-semibold rounded-xl hover:bg-[#C2410C] transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg hover:shadow-[#D9531E]/30"
              >
                <span className="text-lg">📅</span>
                Schedule a Call
                <span className="text-xs opacity-80">Cal.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}