
export interface ProfileData {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export interface CareerGoalsData {
  title: string;
  description: string;
  goals: string[];
}

export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface SkillsData {
  title: string;
  description: string;
  technical: TechnicalSkill[];
  soft: string[];
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  role: string;
  github: string;
  image: string;
}

export interface ProjectsData {
  title: string;
  description: string;
  items: Project[];
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}

export interface ContactData {
  title: string;
  description: string;
  email: string;
  socials: Social[];
}

export interface PortfolioData {
  profile: ProfileData;
  careerGoals: CareerGoalsData;
  skills: SkillsData;
  projects: ProjectsData;
  contact: ContactData;
}
