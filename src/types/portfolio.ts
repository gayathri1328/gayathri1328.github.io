export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  role?: string;
  team?: string;
  description: string;
  longDescription: string;
  problem: string;
  solution: string;
  keyContributions: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string; // only if verified; otherwise undefined
  accentColor: string;
  gradient: string;
  hasArchitectureDiagram?: boolean;
  architectureSteps?: { step: string; label: string; desc: string }[];
  visualType: 'education' | 'rag-ai' | 'computer-vision' | 'decision-system' | 'telematics';
  badge?: string;
}

export interface SkillCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  iconName: string;
  skills: {
    name: string;
    focus: string;
    levelTag: 'Core Foundation' | 'Practical Experience' | 'Active Exploration';
  }[];
}

export interface JourneyMilestone {
  year: string;
  phase: string;
  title: string;
  organization?: string;
  role?: string;
  description: string;
  highlightBadge?: string;
  tags: string[];
}

export interface ExploringTopic {
  id: string;
  title: string;
  category: string;
  description: string;
  learningFocus: string;
  connectedTopics: string[];
  color: string;
  icon: string;
}
