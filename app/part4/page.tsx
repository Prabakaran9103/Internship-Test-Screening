'use client';
import React from 'react';

export default function Page() {
  // Styles
  const containerStyle: React.CSSProperties = {
    width: '600px',
    height: '600px',
    margin: '50px auto',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '20px',
  };

  const iframeStyle: React.CSSProperties = {
    flex: 1,
    width: '100%',
    border: '1px solid #ccc',
    borderRadius: '8px',
  };

  return (
    <main style={containerStyle}>
      <h2 style={headingStyle}>Part 4: Developer Mindset</h2>
      <iframe
        src="/DEVELOPER MINDSET.TXT"
        title="Developer Mindset Document"
        style={iframeStyle}
      ></iframe>
    </main>
  );
}


