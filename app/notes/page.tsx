'use client';

import React, { useEffect, useState } from 'react';
import { listNotes } from '@notesync/functions';
import { Note } from '@notesync/schema';

export default function NotesSyncPage() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchNotes = async () => {
    setLoading(true);
    const result = await listNotes({
      query: '',
      includeArchived: false,
      maxResults: 20,
      cursor: undefined,
    });
    setNotes(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '50px auto',
        padding: '30px',
        fontFamily: 'Segoe UI, sans-serif',
        backgroundColor: '#fefefe',
        borderRadius: '12px',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
      }}
    >
      <h1 style={{ textAlign: 'center', color: '#333' }}>NoteSync</h1>

      <div style={{ marginTop: '30px' }}>
        {loading ? (
          <p style={{ textAlign: 'center', color: '#777' }}>Loading notes...</p>
        ) : notes.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No notes found.</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.id}
              style={{
                backgroundColor: '#f9f9f9',
                border: '1px solid #e0e0e0',
                borderRadius: '10px',
                padding: '16px',
                marginBottom: '16px',
                transition: 'background-color 0.2s ease',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = '#f0f0f0')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = '#f9f9f9')
              }
            >
              <h3 style={{ margin: '0 0 10px 0', color: '#2c3e50' }}>{note.title}</h3>
              <p style={{ marginBottom: '8px', color: '#555' }}>{note.content}</p>
              <p style={{ fontSize: '14px', color: '#888' }}>
                Last edited: {new Date(note.lastEdited).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
