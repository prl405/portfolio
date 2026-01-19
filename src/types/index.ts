export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  type: 'work' | 'education';
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  repoUrl: string;
}
