// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MapPin, Phone, Send } from 'lucide-react';

// ===== INLINE SVG ICONS =====
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px' }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px' }}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsappIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{ width: '22px', height: '22px' }}>
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
    { id: 'github', href: 'https://github.com/arnav20719', icon: <GithubIcon />, label: 'GitHub', color: '#1A1A1A' },
    { id: 'linkedin', href: 'https://linkedin.com/in/arnavsai', icon: <LinkedinIcon />, label: 'LinkedIn', color: '#0A66C2' },
    { id: 'email', href: 'mailto:arnavsawarn143@gmail.com', icon: <Mail style={{ width: '22px', height: '22px' }} />, label: 'Email', color: '#D9531E' },
    { id: 'call', href: 'tel:+917294920365', icon: <Phone style={{ width: '22px', height: '22px' }} />, label: 'Call', color: '#3B82F6' },
    { id: 'whatsapp', href: 'https://wa.me/917294920365', icon: <WhatsappIcon />, label: 'WhatsApp', color: '#25D366' },
  ];

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#F7F2EB', padding: '64px 24px' }}>
      <div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Back Button */}
        <div style={{ marginBottom: '40px' }}>
          <Link
            href="/"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '15px', fontWeight: 500 }}
          >
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
            Back to Home
          </Link>
        </div>

        {/* ===== PAGE HEADER ===== */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ display: 'inline-block', padding: '8px 20px', borderRadius: '999px', backgroundColor: 'rgba(217, 83, 30, 0.1)', color: '#D9531E', fontSize: '13px', fontWeight: 600, border: '1px solid rgba(217, 83, 30, 0.2)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            📧 Contact
          </span>
          <h1 style={{ fontSize: '56px', fontWeight: 700, color: '#1A1A1A', marginTop: '20px', marginBottom: '20px', lineHeight: 1.1 }}>
            Let's <span style={{ fontStyle: 'italic', color: '#D9531E' }}>Connect</span>
          </h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: '#D9531E', borderRadius: '999px', margin: '0 auto 24px' }}></div>
          <p style={{ color: '#6B655B', fontSize: '18px', lineHeight: 1.6, maxWidth: '600px', margin: '0 auto' }}>
            I'm always open to discussing new projects, ideas, or opportunities to be part of your visions.
          </p>
        </div>

        {/* ===== INFO CARDS ===== */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '24px' }}>
          
          {/* Email Card */}
          <a href="mailto:arnavsawarn143@gmail.com" style={{ 
            display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit', 
            backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', 
            border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(217, 83, 30, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#D9531E', flexShrink: 0 }}>
              <Mail style={{ width: '28px', height: '28px' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: '12px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, margin: 0, marginBottom: '4px' }}>Email</p>
              <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 600, margin: 0, wordBreak: 'break-all' }}>arnavsawarn143@gmail.com</p>
            </div>
          </a>

          {/* Phone Card */}
          <a href="tel:+917294920365" style={{ 
            display: 'flex', alignItems: 'center', gap: '16px', textDecoration: 'none', color: 'inherit', 
            backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', 
            border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3B82F6', flexShrink: 0 }}>
              <Phone style={{ width: '28px', height: '28px' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: '12px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, margin: 0, marginBottom: '4px' }}>Phone</p>
              <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 600, margin: 0 }}>+91 72949 20365</p>
            </div>
          </a>

          {/* Location Card */}
          <div style={{ 
            display: 'flex', alignItems: 'center', gap: '16px', 
            backgroundColor: '#FFFFFF', padding: '24px', borderRadius: '16px', 
            border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)'
          }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '14px', backgroundColor: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#22C55E', flexShrink: 0 }}>
              <MapPin style={{ width: '28px', height: '28px' }} />
            </div>
            <div style={{ minWidth: 0 }}>
              <p style={{ fontSize: '12px', color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, margin: 0, marginBottom: '4px' }}>Location</p>
              <p style={{ fontSize: '15px', color: '#1A1A1A', fontWeight: 600, margin: 0 }}>India · Open to Hybrid</p>
            </div>
          </div>
        </div>

        {/* ===== FOLLOW + SCHEDULE BAR ===== */}
        <div style={{ 
          backgroundColor: '#FFFFFF', padding: '24px 32px', borderRadius: '16px', 
          border: '1px solid #E8E3DC', boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px',
          marginBottom: '32px'
        }}>
          {/* Social Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#6B655B', textTransform: 'uppercase', letterSpacing: '0.08em', whiteSpace: 'nowrap' }}>
              Follow Me:
            </span>
            <div style={{ display: 'flex', gap: '10px' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  target={link.id !== 'email' && link.id !== 'call' ? '_blank' : undefined}
                  rel={link.id !== 'email' && link.id !== 'call' ? 'noopener noreferrer' : undefined}
                  aria-label={link.label}
                  style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '10px',
                    backgroundColor: '#F7F2EB',
                    border: '1px solid #E8E3DC',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: link.color,
                    textDecoration: 'none',
                  }}
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
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 28px',
              backgroundColor: '#D9531E',
              color: 'white',
              fontSize: '15px',
              fontWeight: 700,
              borderRadius: '10px',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 12px rgba(217, 83, 30, 0.25)',
            }}
          >
            <span style={{ fontSize: '18px' }}>📅</span>
            Schedule a Call
          </a>
        </div>

        {/* ===== CONTACT FORM ===== */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: '20px', padding: '48px', border: '1px solid #E8E3DC', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          {submitted ? (
            <div style={{ padding: '80px 0', textAlign: 'center' }}>
              <div style={{ fontSize: '64px', marginBottom: '20px' }}>✅</div>
              <h3 style={{ fontSize: '26px', fontWeight: 700, color: '#1A1A1A', marginBottom: '12px' }}>Message Ready!</h3>
              <p style={{ fontSize: '16px', color: '#6B655B' }}>
                Your email app should open with the message pre-filled.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                style={{ marginTop: '28px', fontSize: '15px', color: '#D9531E', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline', fontWeight: 600 }}
              >
                ← Send another message
              </button>
            </div>
          ) : (
            <>
              <div style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '32px', fontWeight: 700, color: '#1A1A1A', marginBottom: '8px' }}>Send a Message</h2>
                <p style={{ fontSize: '16px', color: '#6B655B', margin: 0 }}>
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Name + Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                  <div>
                    <label style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '10px' }}>
                      Name <span style={{ color: '#D9531E' }}>*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      style={{ width: '100%', padding: '16px 20px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '10px', color: '#1A1A1A', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '10px' }}>
                      Email <span style={{ color: '#D9531E' }}>*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@company.com"
                      style={{ width: '100%', padding: '16px 20px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '10px', color: '#1A1A1A', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '10px' }}>
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Let's talk about..."
                    style={{ width: '100%', padding: '16px 20px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '10px', color: '#1A1A1A', fontSize: '15px', outline: 'none', boxSizing: 'border-box' }}
                  />
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '15px', fontWeight: 600, color: '#1A1A1A', display: 'block', marginBottom: '10px' }}>
                    Message <span style={{ color: '#D9531E' }}>*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell me about the problem, the timeline, and what success looks like."
                    style={{ width: '100%', padding: '16px 20px', backgroundColor: '#F7F2EB', border: '1px solid #E8E3DC', borderRadius: '10px', color: '#1A1A1A', fontSize: '15px', outline: 'none', boxSizing: 'border-box', resize: 'none', fontFamily: 'inherit' }}
                  ></textarea>
                  <p style={{ fontSize: '13px', color: '#9A948A', marginTop: '6px', textAlign: 'right' }}>
                    {formData.message.length}/2000
                  </p>
                </div>

                <button
                  type="submit"
                  style={{ width: '100%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', padding: '18px 32px', backgroundColor: '#D9531E', color: 'white', fontWeight: 700, borderRadius: '10px', border: 'none', cursor: 'pointer', fontSize: '16px' }}
                >
                  <Send style={{ width: '18px', height: '18px' }} />
                  Send Message
                </button>

                <p style={{ fontSize: '13px', color: '#9A948A', textAlign: 'center', margin: 0 }}>
                  Your details are only used to reply. No newsletters, ever.
                </p>
              </form>
            </>
          )}
        </div>

        {/* ===== AVAILABLE BADGE ===== */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '12px 24px', borderRadius: '999px', backgroundColor: '#F0FDF4', color: '#16A34A', border: '1px solid #BBF7D0', fontSize: '15px', fontWeight: 600 }}>
            <span style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ position: 'absolute', width: '14px', height: '14px', borderRadius: '999px', backgroundColor: '#22C55E', opacity: 0.5 }}></span>
              <span style={{ position: 'relative', width: '10px', height: '10px', borderRadius: '999px', backgroundColor: '#22C55E' }}></span>
            </span>
            Available for new opportunities
          </span>
        </div>

        {/* ===== BOTTOM NAVIGATION ===== */}
        <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid #E8E3DC', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
            <ArrowLeft style={{ width: '18px', height: '18px' }} />
            Back to Home
          </Link>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#6B655B', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
            View My Projects →
          </Link>
        </div>
      </div>
    </main>
  );
}