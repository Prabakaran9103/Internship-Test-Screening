import { listNotes } from '@notesync/functions';
import { toCardFormat } from '@notesync/embed';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const result = await listNotes({
    maxResults: Number(searchParams.get('limit')) || 20,
    query: searchParams.get('q') || undefined
  });

  return Response.json({
    notes: toCardFormat(result.data),
    hasMore: result.hasMore
  });
}