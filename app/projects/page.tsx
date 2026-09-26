// app/projects/page.tsx
'use client';

import { useState } from 'react';
import { projects } from '@/app/lib/data';

export default function ProjectsPage() {
  const [selected, setSelected] = useState<typeof projects[0] | null>(null);

  return (
    <div style={{ 
      minHeight: '100vh', 
      padding: '80px 20px', 
      backgroundColor: '#F7F2EB' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* ===== HEADER ===== */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <span style={{ 
            display: 'inline-block', 
            padding: '4px 16px', 
            borderRadius: '9999px', 
            background: 'rgba(217, 107, 39, 0.1)',
            color: '#D96B27',
            fontSize: '12px',
            fontWeight: '600',
            border: '1px solid rgba(217, 107, 39, 0.2)'
          }}>
            ✦ Projects
          </span>
          <h1 style={{ 
            fontSize: '40px', 
            fontWeight: '700', 
            color: '#1A1A1A', 
            marginTop: '16px' 
          }}>
            Everything I've Shipped
          </h1>
          <p style={{ 
            color: '#6B655B', 
            marginTop: '12px', 
            maxWidth: '600px', 
            marginLeft: 'auto', 
            marginRight: 'auto',
            fontSize: '16px'
          }}>
            The full catalog — AI-powered platforms, chatbots, tools, and production systems.
          </p>
        </div>

        {/* ===== PROJECTS GRID - 2 Columns ===== */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(380px, 1fr))',
          gap: '24px'
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              style={{
                background: 'white',
                borderRadius: '16px',
                padding: '28px',
                border: '1px solid #E8E3DC',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setSelected(project)}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#D96B27';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(217, 107, 39, 0.08)';
                e.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E8E3DC';
                e.currentTarget.style.boxShadow = 'none';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {/* Top Accent Bar */}
              <div style={{
                height: '3px',
                background: 'linear-gradient(90deg, #D96B27, #EA580C)',
                borderRadius: '4px',
                margin: '-28px -28px 20px -28px'
              }}></div>

              {/* Title */}
              <h3 style={{ 
                fontSize: '22px', 
                fontWeight: '700', 
                color: '#1A1A1A',
                marginBottom: '8px'
              }}>
                {project.title}
              </h3>

              {/* Description */}
              <p style={{ 
                fontSize: '14px', 
                color: '#6B655B', 
                marginBottom: '16px',
                lineHeight: '1.6'
              }}>
                {project.description}
              </p>

              {/* Tech Stack - HORIZONTAL */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '8px', 
                marginBottom: '20px' 
              }}>
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '12px',
                      background: '#F7F2EB',
                      color: '#6B655B',
                      padding: '4px 14px',
                      borderRadius: '9999px',
                      border: '1px solid #E8E3DC'
                    }}
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span style={{
                    fontSize: '12px',
                    background: '#F7F2EB',
                    color: '#6B655B',
                    padding: '4px 14px',
                    borderRadius: '9999px',
                    border: '1px solid #E8E3DC'
                  }}>
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* View Project Button */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: '#D96B27',
                fontSize: '14px',
                fontWeight: '500',
                cursor: 'pointer',
                padding: '6px 0',
                borderBottom: '2px solid transparent',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderBottomColor = '#D96B27';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderBottomColor = 'transparent';
              }}>
                View project
                <span style={{ transition: 'transform 0.3s ease' }}>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* ===== CALENDLY ===== */}
        <div style={{ 
          textAlign: 'center', 
          marginTop: '60px', 
          paddingTop: '40px', 
          borderTop: '1px solid #E8E3DC' 
        }}>
          <a
            href="#"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '14px 36px',
              border: '2px solid #D96B27',
              color: '#D96B27',
              fontWeight: '600',
              borderRadius: '12px',
              textDecoration: 'none',
              fontSize: '14px',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#D96B27';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#D96B27';
            }}
          >
            <span>📅</span>
            Schedule time with me
            <span style={{ fontSize: '12px', opacity: '0.6' }}>powered by Calendly</span>
          </a>
        </div>
      </div>

      {/* ===== MODAL ===== */}
      {selected && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(8px)',
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}
          onClick={() => setSelected(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '85vh',
              overflowY: 'auto',
              padding: '40px',
              border: '1px solid #E8E3DC',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15)',
              position: 'relative'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '20px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#6B655B',
                padding: '8px',
                borderRadius: '8px',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#F7F2EB';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
              }}
            >
              ✕
            </button>

            {/* Category Badge */}
            <span style={{ 
              fontSize: '11px', 
              fontWeight: '600', 
              color: '#D96B27', 
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              background: 'rgba(217, 107, 39, 0.08)',
              padding: '4px 14px',
              borderRadius: '9999px',
              display: 'inline-block'
            }}>
              {selected.category}
            </span>

            {/* Title */}
            <h2 style={{ 
              fontSize: '30px', 
              fontWeight: '700', 
              color: '#1A1A1A', 
              marginTop: '12px',
              marginBottom: '8px'
            }}>
              {selected.title}
            </h2>

            {/* Description */}
            <p style={{ 
              color: '#6B655B', 
              fontSize: '17px', 
              marginBottom: '24px',
              lineHeight: '1.6'
            }}>
              {selected.description}
            </p>

            {/* Divider */}
            <div style={{ borderTop: '1px solid #E8E3DC', marginBottom: '24px' }}></div>

            {/* Overview */}
            <h4 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#1A1A1A', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              marginBottom: '8px'
            }}>
              Overview
            </h4>
            <p style={{ 
              color: '#6B655B', 
              fontSize: '15px', 
              lineHeight: '1.7',
              marginBottom: '24px'
            }}>
              {selected.longDescription || selected.description}
            </p>

            {/* Problem */}
            {selected.problem && (
              <>
                <h4 style={{ 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  color: '#1A1A1A', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  marginBottom: '8px'
                }}>
                  The Problem
                </h4>
                <p style={{ 
                  color: '#6B655B', 
                  fontSize: '15px', 
                  lineHeight: '1.7',
                  marginBottom: '24px'
                }}>
                  {selected.problem}
                </p>
              </>
            )}

            {/* Approach */}
            {selected.approach && (
              <>
                <h4 style={{ 
                  fontSize: '12px', 
                  fontWeight: '600', 
                  color: '#1A1A1A', 
                  textTransform: 'uppercase', 
                  letterSpacing: '0.05em',
                  marginBottom: '8px'
                }}>
                  The Approach
                </h4>
                <p style={{ 
                  color: '#6B655B', 
                  fontSize: '15px', 
                  lineHeight: '1.7',
                  marginBottom: '24px'
                }}>
                  {selected.approach}
                </p>
              </>
            )}

            {/* Key Features */}
            <h4 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#1A1A1A', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              Key Features
            </h4>
            <ul style={{ 
              paddingLeft: '0', 
              listStyle: 'none',
              marginBottom: '24px'
            }}>
              {selected.features.map((feature, idx) => (
                <li key={idx} style={{ 
                  color: '#6B655B', 
                  fontSize: '15px', 
                  padding: '6px 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  borderBottom: '1px solid #F7F2EB'
                }}>
                  <span style={{ color: '#D96B27', fontWeight: 'bold' }}>✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Built With */}
            <h4 style={{ 
              fontSize: '12px', 
              fontWeight: '600', 
              color: '#1A1A1A', 
              textTransform: 'uppercase', 
              letterSpacing: '0.05em',
              marginBottom: '12px'
            }}>
              Built With
            </h4>
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '8px',
              marginBottom: '24px'
            }}>
              {selected.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '12px',
                    background: '#F7F2EB',
                    color: '#6B655B',
                    padding: '6px 16px',
                    borderRadius: '9999px',
                    border: '1px solid #E8E3DC'
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Live Demo */}
            {selected.liveUrl && selected.liveUrl !== '#' && (
              <div style={{ 
                paddingTop: '20px', 
                borderTop: '1px solid #E8E3DC' 
              }}>
                <a
                  href={selected.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '12px 28px',
                    background: '#D96B27',
                    color: 'white',
                    fontWeight: '600',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#C2410C';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#D96B27';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  🔗 Live Demo
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}