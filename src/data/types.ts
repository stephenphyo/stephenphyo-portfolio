export type NavItem = {
  id: string;
  label: string;
};

export type SocialLink = {
  label: string;
  url: string;
  icon: 'github' | 'linkedin' | 'email';
};

export type Experience = {
  role: string;
  company: string;
  companyLogo?: string;
  dates: string;
  location: string;
  highlights: string[];
  tech: string[];
  link?: string;
  showVisit?: boolean;
};

export type Education = {
  program: string;
  school: string;
  dates: string;
  location: string;
  highlights: string[];
  focus: string[];
  link?: string;
};

export type Skill = {
  name: string;
  logo: string;
  level?: string;
  note?: string;
};

export type SkillCategory = {
  category: string;
  skills: Skill[];
};

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verifyUrl: string;
  logo?: string;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  longDescription: string;
  thumbnail?: string;
  tags: string[];
  links: {
    live?: string;
    repo?: string;
    caseStudy?: string;
  };
  results: string[];
  stack: string[];
  category: string;
};
