import { z } from 'zod';

// Input Validation Schema
export const ListNotesSchema = z.object({
  maxResults: z.number().min(1).max(100).default(20),
  query: z.string().optional(),
  includeArchived: z.boolean().default(false),
  cursor: z.string().optional().describe("Pagination token")
});

// Core Data Types
export type Note = {
  id: string;
  title: string;
  content: string;
  lastEdited: Date;
  isArchived: boolean;
  metadata?: Record<string, unknown>;
};

// Response Type
export type ListNotesResponse = {
  data: Note[];
  nextCursor?: string;
  hasMore: boolean;
};