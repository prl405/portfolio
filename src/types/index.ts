import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

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
  repoUrl?: string;
}

interface Skill {
  name: string;
  icon: string;
  fa?: IconDefinition;
  color?: string;
}

export interface SkillCategory {
  name: string;
  items: Skill[];
}

export interface NavItem {
  label: string;
  icon: string;
  id: string;
  fa: IconDefinition;
  color: string;
}

