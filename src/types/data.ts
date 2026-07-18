export interface TechCategory {
  category: string;
  skills: string[];
}

export interface Experience {
  id: number;
  type: string;
  role: string;
  company: string;
  companySize?: string;
  industry?: string;
  locationType?: string;
  websiteUrl?: string;
  period: string;
  summary: string;
  description: string;
  tech: TechCategory[];
  dualStudy?: string;
}

export interface Education {
  id: number;
  type: string;
  studyField: string;
  degree: string;
  school: string;
  url: string;
  location: string;
  year: string;
  summary: string;
  description: string;
  grade: string;
  dualStudy?: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  githubUrl: string;
  deployUrl: string;
}

export interface Certification {
  name: string;
  authority: string;
  url: string;
}

export interface Language {
  language: string;
  proficiency: string;
}

export interface LinkedInProfile {
  name: string;
  headline: string;
  location: string;
  phone: string;
  address: string;
  email: string;
  connections: string;
  about: string;
  fullBio: string;
  avatarUrl: string;
  skills: string[];
  certifications: Certification[];
  languages: Language[];
}

export interface AboutData {
  greeting: string;
  name: string;
  suffix: string;
  lastName: string;
  description: string;
  fullBio: string;
  ctaPrimary: string;
  ctaSecondary: string;
}
