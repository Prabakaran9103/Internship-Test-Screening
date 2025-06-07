'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const projects = [
    { name: 'Todo List', link: '/todos' },
    { name: 'NoteSync', link: '/notes' },
    { name: 'Documents', link: '/doc' },
  ];

  const mainStyle: React.CSSProperties = {
    fontFamily: 'Segoe UI, sans-serif',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #f5f7fa, #c3cfe2)',
    padding: '60px 20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  const cardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    padding: '40px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    width: '100%',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    fontSize: '2.5rem',
    marginBottom: '10px',
    color: '#222',
  };

  const subHeadingStyle: React.CSSProperties = {
    fontSize: '1.5rem',
    marginBottom: '30px',
    color: '#666',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    fontSize: '1rem',
    border: '2px solid transparent',
    borderRadius: '10px',
    backgroundColor: '#0070f3',
    color: 'white',
    cursor: 'pointer',
    fontWeight: 600,
    transition: 'all 0.3s ease',
  };

  const spanStyle: React.CSSProperties = {
    display: 'block',
    letterSpacing: '0.5px',
  };

  const hoverStyle: React.CSSProperties = {
    backgroundColor: '#0056c1',
    transform: 'scale(1.03)',
  };

  return (
    <main style={mainStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>From Prabakaran C</h1>
        <h2 style={subHeadingStyle}>Given Tasks</h2>

        <div style={buttonContainerStyle}>
          {projects.map((project) => (
            <button
              key={project.name}
              style={buttonStyle}
              onMouseEnter={(e) => Object.assign(e.currentTarget.style, hoverStyle)}
              onMouseLeave={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
              onClick={() => router.push(project.link)}
            >
              <span style={spanStyle}>{project.name}</span>
            </button>
          ))}
        </div>
      </div>
    </main>
  );
}
