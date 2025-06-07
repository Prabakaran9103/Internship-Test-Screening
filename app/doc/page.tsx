'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  // Styles
  const mainStyle: React.CSSProperties = {
    width: '500px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  };

  const headingStyle: React.CSSProperties = {
    color: '#333',
    marginBottom: '20px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '12px 24px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '8px',
    backgroundColor: '#4caf50',
    color: '#fff',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#45a049';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.backgroundColor = '#4caf50';
  };

  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>Internship Project Parts</h1>
      <div style={buttonContainerStyle}>
        <button
          onClick={() => router.push('/part3')}
          aria-label="Go to Part 3"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Part 3: AI Integration
        </button>

        <button
          onClick={() => router.push('/part4')}
          aria-label="Go to Part 4"
          style={buttonStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          Part 4: Developer Mindset
        </button>
      </div>
    </main>
  );
}
