import z from 'zod';
import { ListNotesSchema, type ListNotesResponse, type Note } from './notesync.schema';

const NOTES_DB: Note[] = [
  {
    id: 'n01',
    title: 'Sad',
    content: 'Scold by me professor. such a sad day',
    lastEdited: new Date('2025-05-10T09:00:00Z'),
    isArchived: false
  },
  {
    id: 'n02',
    title: 'Heaven',
    content: 'Just I slip in the steps, but my reflex saved my',
    lastEdited: new Date('2025-05-11T11:30:00Z'),
    isArchived: false
  },
  {
    id: 'n03',
    title: 'Happening to all',
    content: 'I wish for a PS5 for long time. A small kid have it easier by their parents',
    lastEdited: new Date('2025-05-11T11:30:00Z'),
    isArchived: false
  }
];

export async function listNotes(
  params: z.infer<typeof ListNotesSchema>
): Promise<ListNotesResponse> {
  const { maxResults, query, includeArchived, cursor } = params;

  // Filtering
  let results = NOTES_DB.filter(note => 
    includeArchived ? true : !note.isArchived
  );

  // Search
  if (query) {
    results = results.filter(note => 
      `${note.title} ${note.content}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }

  // Pagination
  const startIdx = cursor ? parseInt(atob(cursor)) : 0;
  const paginated = results.slice(startIdx, startIdx + maxResults);

  return {
    data: paginated,
    hasMore: startIdx + maxResults < results.length,
    nextCursor: paginated.length 
      ? btoa(String(startIdx + maxResults))
      : undefined
  };
}
