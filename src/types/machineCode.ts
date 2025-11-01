export interface MachineCodingProject {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  demo: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  timeLimit: string;
  features: string[];
}