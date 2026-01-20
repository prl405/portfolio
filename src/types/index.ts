export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  type: 'work' | 'education';
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl: string;
}
