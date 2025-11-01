export interface Note {
  id: string;
  title: string;
  description: string;
  category: string;
  topics: string[];
  downloadUrl: string;
  previewUrl?: string;
  lastUpdated: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  pages?: number;
  format: 'PDF' | 'MD' | 'DOC';
}

export interface NoteCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  totalNotes: number;
}