// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';

// ===== INLINE SVG ICONS =====
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:arnavsawarn143@gmail.com?subject=${encodeURIComponent(
      formData.subject || 'Portfolio Contact'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  const socialLinks = [
    { id: 'github', href: 'https://github.com/arnav20719', icon: <GithubIcon />, label: 'GitHub', color: 'text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white' },
    { id: 'linkedin', href: 'https://linkedin.com/in/arnavsai', icon: <LinkedinIcon />, label: 'LinkedIn', color: 'text-[#0A66C2] hover:bg-[#0A66C2] hover:text-white' },
    { id: 'email', href: 'mailto:arnavsawarn143@gmail.com', icon: <Mail className="w-5 h-5" />, label: 'Email', color: 'text-[#D9531E] hover:bg-[#D9531E] hover:text-white' },
    { id: 'call', href: 'tel:+917294920365', icon: <Phone className="w-5 h-5" />, label: 'Call', color: 'text-[#3B82F6] hover:bg-[#3B82F6] hover:text-white' },
    { id: 'whatsapp', href: 'https://wa.me/917294920365', icon: <WhatsappIcon />, label: 'WhatsApp', color: 'text-[#25D366] hover:bg-[#25D366] hover:text-white' },
  ];

  return (
    <main className="min-h-screen py-16 md:py-24 bg-[#F7F2EB]">
      <div className="max-w-3xl mx-auto px-6 md:px-8 w-full">
        {/* Back Button */}
        <div className="mb-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D9531E] transition-colors text-sm font-medium group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </div>

        {/* ===== PAGE HEADER ===== */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#D9531E]/10 text-[#D9531E] text-xs font-semibold border border-[#D9531E]/20">
            📧 Contact
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] mt-4">
            Let's <span className="italic text-[#D9531E]">Connect</span>
          </h1>
          <div className="w-16 h-1 bg-[#D9531E] rounded-full mx-auto mt-4"></div>
          <p className="text-[#6B655B] mt-4 text-base leading-relaxed">
            I'm always open to discussing new projects, ideas, or
            opportunities to be part of your visions.
          </p>
        </div>

        {/* ===== INFO BAR ===== */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E3DC] shadow-sm mb-8">
          {/* Contact Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6 pb-6 border-b border-[#F7F2EB]">
            {/* Email */}
            <a
              href="mailto:arnavsawarn143@gmail.com"
              className="group flex items-center gap-3 hover:text-[#D9531E] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#D9531E]/10 flex items-center justify-center text-[#D9531E] shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#6B655B] uppercase tracking-wider font-semibold">Email</p>
                <p className="text-sm text-[#1A1A1A] font-medium truncate group-hover:text-[#D9531E]">arnavsawarn143@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917294920365"
              className="group flex items-center gap-3 hover:text-[#D9531E] transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center text-[#3B82F6] shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#6B655B] uppercase tracking-wider font-semibold">Phone</p>
                <p className="text-sm text-[#1A1A1A] font-medium group-hover:text-[#D9531E]">+91 72949 20365</p>
              </div>
            </a>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#22C55E]/10 flex items-center justify-center text-[#22C55E] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-[#6B655B] uppercase tracking-wider font-semibold">Location</p>
                <p className="text-sm text-[#1A1A1A] font-medium">India · Open to Hybrid</p>
              </div>
            </div>
          </div>

          {/* Follow Me + Schedule Row */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold text-[#6B655B] uppercase tracking-wider whitespace-nowrap">
                Follow Me:
              </span>
              <div className="flex gap-2 flex-wrap">
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.id !== 'email' && link.id !== 'call' ? '_blank' : undefined}
                    rel={link.id !== 'email' && link.id !== 'call' ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    className={`w-9 h-9 rounded-lg bg-[#F7F2EB] border border-[#E8E3DC] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 ${link.color}`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Schedule CTA */}
            <a
              href="https://cal.id/arnav-raj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#D9531E] text-white text-sm font-semibold rounded-lg hover:bg-[#C2410C] transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-[#D9531E]/30 whitespace-nowrap"
            >
              <span>📅</span>
              Schedule a Call
            </a>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#E8E3DC] shadow-sm">
          {submitted ? (
            <div className="py-16 text-center">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-bold text-[#1A1A1A] mb-2">Message Ready!</h3>
              <p className="text-sm text-[#6B655B]">
                Your email app should open with the message pre-filled.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm text-[#D9531E] hover:underline"
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-[#1A1A1A]">Send a Message</h2>
                <p className="text-sm text-[#6B655B] mt-1">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#6B655B] block mb-2">
                      Name <span className="text-[#D9531E]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/10 transition-all"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B655B] block mb-2">
                      Email <span className="text-[#D9531E]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/10 transition-all"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's talk about..."
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/10 transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-sm font-medium text-[#6B655B] block mb-2">
                    Message <span className="text-[#D9531E]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the problem, the timeline, and what success looks like."
                    className="w-full px-4 py-3 bg-[#F7F2EB] border border-[#E8E3DC] rounded-lg text-[#1A1A1A] placeholder:text-[#9A948A] focus:outline-none focus:border-[#D9531E] focus:ring-2 focus:ring-[#D9531E]/10 transition-all resize-none"
                  ></textarea>
                  <p className="text-xs text-[#9A948A] mt-1 text-right">
                    {formData.message.length}/2000
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#D9531E] text-white font-semibold rounded-lg hover:bg-[#C2410C] transition-all duration-300 hover:scale-[1.02] shadow-md hover:shadow-lg hover:shadow-[#D9531E]/30"
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>

                <p className="text-xs text-[#9A948A] text-center">
                  Your details are only used to reply. No newsletters, ever.
                </p>
              </form>
            </>
          )}
        </div>

        {/* ===== AVAILABLE BADGE ===== */}
        <div className="text-center mt-10">
          <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-50 text-green-700 border border-green-200">
            <span className="relative flex items-center justify-center">
              <span className="absolute w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75"></span>
              <span className="relative w-2 h-2 rounded-full bg-green-500"></span>
            </span>
            Available for new opportunities
          </span>
        </div>

        {/* ===== BOTTOM NAVIGATION ===== */}
        <div className="mt-10 pt-8 border-t border-[#E8E3DC] flex flex-wrap justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D9531E] transition-colors text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[#6B655B] hover:text-[#D9531E] transition-colors text-sm font-medium"
          >
            View My Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}