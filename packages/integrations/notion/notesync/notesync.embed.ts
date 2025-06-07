import { type Note } from './notesync.schema';

export function embedNote(
  note: Note,
  options: { 
    previewLength?: number; 
    showMetadata?: boolean 
  } = {}
) {
  const { previewLength = 100, showMetadata = false } = options;
  
  return {
    id: note.id,
    title: note.title,
    preview: note.content.slice(0, previewLength) + 
           (note.content.length > previewLength ? '...' : ''),
    lastEdited: note.lastEdited.toISOString(),
    ...(showMetadata && { metadata: note.metadata }),
    isArchived: note.isArchived
  };
}

// Utility for UI card generation
export function toCardFormat(notes: Note[]) {
  return notes.map(note => ({
    ...embedNote(note),
    href: `/notes/${note.id}`,
    badge: note.isArchived ? 'Archived' : 'Active'
  }));
}