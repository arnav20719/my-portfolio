// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';

// ===== INLINE SVG ICONS =====
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px' }}>
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
    { id: 'github', href: 'https://github.com/arnav20719', icon: <GithubIcon />, label: 'GitHub', bgHover: '#1A1A1A', color: '#1A1A1A' },
    { id: 'linkedin', href: 'https://linkedin.com/in/arnavsai', icon: <LinkedinIcon />, label: 'LinkedIn', bgHover: '#0A66C2', color: '#0A66C2' },
    { id: 'email', href: 'mailto:arnavsawarn143@gmail.com', icon: <Mail style={{ width: '20px', height: '20px' }} />, label: 'Email', bgHover: '#D9531E', color: '#D9531E' },
    { id: 'call', href: 'tel:+917294920365', icon: <Phone style={{ width: '20px', height: '20px' }} />, label: 'Call', bgHover: '#3B82F6', color: '#3B82F6' },
    { id: 'whatsapp', href: 'https://wa.me/917294920365', icon: <WhatsappIcon />, label: 'WhatsApp', bgHover: '#25D366', color: '#25D366' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F2EB', padding: '64px 24px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '720px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <div style={{ marginBottom: '40px' }}>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Back to Home
          </Link>
        </div>

        {/* ===== PAGE HEADER ===== */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', padding: '6px 16px', borderRadius: '999px', backgroundColor: 'rgba(217, 83, 30, 0.1)', color: '#D9531E', fontSize: '12px', fontWeight: 600, border: '1px solid rgba(217, 83, 30, 0.2)' }}>
            📧 Contact
          </span>
          <h1 style={{ fontSize: '48px', fontWeight: 700, color: '#1A1A1A', marginTop: '16px', marginBottom: '16px', lineHeight: 1.1 }}>
            Let's <span style={{ fontStyle: 'italic', color: '#D9531E' }}>Connect</span>
          </h1>
          <div style={{ width: '64px', height: '4px', backgroundColor: '#D9531E', borderRadius: '999px', margin: '0 auto 16px' }}></div>
          <p style={{ color: '#6B655B', fontSize: '16px', lineHeight: 1.6 }}>
            I'm always open to discussing new projects, ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* ===== INFO BAR ===== */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)', marginBottom: '32px' }}>
          {/* Contact Info Row */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid #F7F2EB' }}>
            {/* Email */}
            <a href="mailto:arnavsawarn143@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(217, 83, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D9531E', flexShrink: 0 }}>
                <Mail style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '11px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, margin: 0 }}>Email</p>
                <p style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500, margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>arnavsawarn143@gmail.com</p>
              </div>
            </a>

            {/* Phone */}
            <a href="tel:+917294920365" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', flexShrink: 0 }}>
                <Phone style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '11px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, margin: 0 }}>Phone</p>
                <p style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500, margin: 0 }}>+91 72949 20365</p>
              </div>
            </a>

            {/* Location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', flexShrink: 0 }}>
                <MapPin style={{ width: '20px', height: '20px' }} />
              </div>
              <div style={{ minWidth: 0 }}>
                <p style={{ fontSize: '11px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 600, margin: 0 }}>Location</p>
                <p style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 500, margin: 0 }}>India · Open to Hybrid</p>
              </div>
            </div>
          </div>

          {/* Follow Me + Schedule Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.05em', whiteSpace: 'nowrap' }}>
                Follow Me:
              </span>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {socialLinks.map((link) => (
                  <a
                    key={link.id}
                    href={link.href}
                    target={link.id !== 'email' && link.id !== 'call' ? '_blank' : undefined}
                    rel={link.id !== 'email' && link.id !== 'call' ? 'noopener noreferrer' : undefined}
                    aria-label={link.label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      backgroundColor: '#F7F2EB',
                      border: '1px solid #E8E3DC',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: link.color,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <a
              href="https://cal.id/arnav-raj"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#D9531E',
                color: 'white',
                fontSize: '14px',
                fontWeight: 600,
                borderRadius: '8px',
                textDecoration: 'none',
                whiteSpace: 'nowrap',
              }}
            >
              <span>📅</span>
              Schedule a Call
            </a>
          </div>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '16px', padding: '32px', border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
          {submitted ? (
            <div style={{ padding: '64px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '48px', marginBottom: '16px' }}>✅</div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Message Ready!</h3>
              <p style={{ fontSize: '14px', color: '#6B655B' }}>
                Your email app should open with the message pre-filled.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '24px', fontSize: '14px', color: '#D9531E', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '24px' }}>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#1A1A1A', marginBottom: '4px' }}>Send a Message</h2>
                <p style={{ fontSize: '14px', color: '#6B655B', margin: 0 }}>
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Name + Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 500, color: '#6B655B', display: 'block', marginBottom: '8px' }}>
                      Name <span style={{ color: '#D9531E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={{ width: '100%', padding: '12px 16px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '8px', color: '#1A1A1A', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '14px', fontWeight: 500, color: '#6B655B', display: 'block', marginBottom: '8px' }}>
                      Email <span style={{ color: '#D9531E' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      style={{ width: '100%', padding: '12px 16px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '8px', color: '#1A1A1A', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: 500, color: '#6B655B', display: 'block', marginBottom: '8px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's talk about..."
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '8px', color: '#1A1A1A', fontSize: '14px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '14px', fontWeight: 500, color: '#6B655B', display: 'block', marginBottom: '8px' }}>
                    Message <span style={{ color: '#D9531E' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about the problem, the timeline, and what success looks like."
                    style={{ width: '100%', padding: '12px 16px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '8px', color: '#1A1A1A', fontSize: '14px', outline: 'none', boxSizing: 'border-box', resize: 'none' }}
                  ></textarea>
                  <p style={{ fontSize: '12px', color: '#9A948A', marginTop: '4px', textAlign: 'right' }}>
                    {formData.message.length}/2000
                  </p>
                </div>

                <button
                  type="submit"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 32px', backgroundColor: '#D9531E', color: 'white', fontWeight: 600, borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '14px' }}
                >
                  <Send style={{ width: '16px', height: '16px' }} />
                  Send Message
                </button>

                <p style={{ fontSize: '12px', color: '#9A948A', textAlign: 'center', margin: 0 }}>
                  Your details are only used to reply. No newsletters, ever.
                </p>
              </form>
            </>
          )}
        </div>

        {/* ===== AVAILABLE BADGE ===== */}
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '999px', backgroundColor: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', fontSize: '14px' }}>
            <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'absolute', width: '12px', height: '12px', borderRadius: '999px', backgroundColor: '#22C55E', opacity: 0.75 }}></span>
              <span style={{ position: 'relative', width: '8px', height: '8px', borderRadius: '999px', backgroundColor: '#22C55E' }}></span>
            </span>
            Available for new opportunities
          </span>
        </div>

        {/* ===== BOTTOM NAVIGATION ===== */}
        <div style={{ marginTop: '40px', paddingTop: '32px', borderTop: '1px solid #E8E3DC', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            Back to Home
          </Link>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>
            View My Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}