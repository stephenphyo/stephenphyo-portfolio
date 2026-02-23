import awsLogo from '@/assets/skills/aws.png';
import dockerLogo from '@/assets/skills/docker.png';
import kubernetesLogo from '@/assets/skills/kubernetes.png';
import jenkinsLogo from '@/assets/skills/jenkins.png';
import gitlabLogo from '@/assets/skills/gitlab.png';
import terraformLogo from '@/assets/skills/terraform.png';
import reactLogo from '@/assets/skills/react.svg';
import nodeLogo from '@/assets/skills/node.png';
import postgresLogo from '@/assets/skills/postgres.png';
import pythonLogo from '@/assets/skills/python.png';
import microsoftsqlLogo from '@/assets/skills/microsoft-sql.png';
import oraclesqlLogo from '@/assets/skills/oracle-sql.png';
import mysqlLogo from '@/assets/skills/mysql.png';
import mongodbLogo from '@/assets/skills/mongodb.png';
import csharpLogo from '@/assets/skills/csharp.png';

import awsCertLogo from '@/assets/certs/aws.svg';
import microsoftLogo from '@/assets/certs/microsoft.svg';
import credlyLogo from '@/assets/certs/credly.svg';
import cloudCertImage from '@/assets/certs/cloud-architecture.svg';
import azureCertImage from '@/assets/certs/azure-developer.svg';
import dataCertImage from '@/assets/certs/data-engineering.svg';

import pulseThumb from '@/assets/projects/pulse.svg';
import atlasThumb from '@/assets/projects/atlas.svg';
import novaThumb from '@/assets/projects/nova.svg';
import signalThumb from '@/assets/projects/signal.svg';

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

export const portfolioData = {
  meta: {
    name: 'Stephen Phyo',
    initials: 'Stephen\'s Portfolio',
    title: 'Software Developer',
    tagline: 'Building cloud-native products, data pipelines, and resilient frontends.',
    location: 'Singapore',
    description:
      'Alex Morgan is a software developer focused on cloud-native apps, infrastructure automation, and design-driven web experiences.'
  },
  nav: [
    { id: 'hero', label: 'Home' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ] satisfies NavItem[],
  hero: {
    ctas: [
      { label: 'View Projects', href: '#projects', variant: 'primary' },
      { label: 'Download Resume', href: '/resume.pdf', variant: 'outline' },
      // { label: 'Contact', href: '#contact', variant: 'ghost' }
    ],
    socials: [
      { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
      { label: 'Email', url: 'mailto:hello@alexmorgan.dev', icon: 'email' }
    ] satisfies SocialLink[],
    spotlight: {
      eyebrow: 'Now',
      title: 'Focused on product-led engineering and cloud scale.',
      description:
        'I collaborate with product, design, and data teams to ship resilient systems, tidy UI, and measurable impact.',
      highlights: ['Cloud Native', 'Observability', 'UI Systems']
    }
  },
  sections: {
    experience: {
      title: 'Work Experience',
      subtitle:
        'Recent roles where I drove platform reliability, product velocity, and measurable business outcomes.'
    },
    education: {
      title: 'Education History',
      subtitle: 'Academic background and focused coursework aligned to cloud and software delivery.'
    },
    skills: {
      title: 'Skills',
      subtitle: 'Deep experience across cloud, backend systems, and frontend delivery.'
    },
    certificates: {
      title: 'Certificates',
      subtitle: 'Industry credentials with verified proof links.'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Selected work across platforms, data products, and user-focused tools.'
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let us build something together. Reach out and tell me about your roadmap.'
    }
  },
  experience: [
    {
      role: 'Software Engineer',
      company: 'Systems on Silicon Manufacturing Company (SSMC) Pte. Ltd.',
      companyLogo: '',
      dates: '2022 - Present',
      location: 'On-Site',
      highlights: [
        'Led the migration to a multi-tenant platform, reducing infrastructure spend by 28%.',
        'Built a React + TypeScript dashboard that cut onboarding time from 4 days to 1 day.',
        'Designed CI/CD workflows with automated rollbacks and real-time alerts.'
      ],
      tech: ['React', 'TypeScript', 'AWS', 'Terraform', 'Kubernetes', 'PostgreSQL'],
      link: 'https://www.ssmc.com/',
      showVisit: true
    },
    {
      role: 'Software Engineer (Intern)',
      company: 'Systems on Silicon Manufacturing Company (SSMC) Pte. Ltd.',
      companyLogo: '',
      dates: 'September 2023 - January 2024',
      location: 'On-Site',
      highlights: [
        'Led the migration to a multi-tenant platform, reducing infrastructure spend by 28%.',
        'Built a React + TypeScript dashboard that cut onboarding time from 4 days to 1 day.',
        'Designed CI/CD workflows with automated rollbacks and real-time alerts.'
      ],
      tech: ['React', 'TypeScript', 'AWS', 'Terraform', 'Kubernetes', 'PostgreSQL'],
      link: 'https://www.ssmc.com/',
      showVisit: true
    },
    {
      role: 'Fullstack Developer',
      company: 'Artifica Lab IT Solutions Co., Ltd.',
      companyLogo: '',
      dates: '2019 - 2022',
      location: 'Austin, TX',
      highlights: [
        'Created data ingestion pipelines processing 2B events per month with 99.9% uptime.',
        'Shipped a design system that improved feature delivery cadence by 40%.',
        'Partnered with product to deliver customer-facing insights in under 6 weeks.'
      ],
      tech: ['Node.js', 'Python', 'Docker', 'Redis', 'Tailwind CSS'],
      link: 'https://example.com',
      showVisit: false
    },
  ] satisfies Experience[],
  education: [
    {
      program: 'B.Sc. in Computer Science',
      school: 'Pacific Tech University',
      dates: '2016 - 2020',
      location: 'San Diego, CA',
      highlights: [
        'Graduated with honors; capstone focused on cloud-native telemetry pipelines.',
        'Led the ACM student chapter and organized three campus hackathons.',
        'Published a senior thesis on scalable event-driven architectures.'
      ],
      focus: ['Distributed Systems', 'Cloud Computing', 'Databases', 'Human-Computer Interaction'],
      link: 'https://example.com'
    },
    {
      program: 'Full-Stack Engineering Certificate',
      school: 'Nimbus Academy',
      dates: '2020',
      location: 'Online',
      highlights: [
        'Completed 650+ hours of hands-on product delivery.',
        'Built a multi-tenant dashboard with React, Node.js, and PostgreSQL.',
        'Mentored junior cohort members on testing and deployment workflows.'
      ],
      focus: ['React', 'Node.js', 'CI/CD', 'Product Design'],
      link: 'https://example.com'
    }
  ] satisfies Education[],
  skills: [
    {
      category: 'Cloud Technologies',
      skills: [
        { name: 'AWS', logo: awsLogo, level: 'Advanced', note: 'Compute, storage, IAM, and networking.' },
      ]
    },
    {
      category: 'DevOps',
      skills: [
        { name: 'Docker', logo: dockerLogo/*, level: 'Advanced'*/ },
        { name: 'Kubernetes', logo: kubernetesLogo/*, level: 'Intermediate', note: 'Helm, autoscaling, observability.'*/ },
        { name: 'Jenkins', logo: jenkinsLogo },
        { name: 'GitLab CI/CD', logo: gitlabLogo },
      ]
    },
    {
      category: 'IaC',
      skills: [
        { name: 'Terraform', logo: terraformLogo },
      ]
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', logo: reactLogo, level: 'Advanced' },
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'C# ASP.NET', logo: csharpLogo, level: 'Advanced' },
        { name: 'Node.js', logo: nodeLogo, level: 'Advanced' },
        { name: 'Python', logo: pythonLogo, level: 'Intermediate' }
      ]
    },
    {
      category: 'Databases',
      skills: [
        { name: 'Microsoft SQL', logo: microsoftsqlLogo/*, level: 'Advanced'*/ },
        { name: 'PostgreSQL', logo: postgresLogo/*, level: 'Advanced'*/ },
        { name: 'Oracle SQL', logo: oraclesqlLogo/*, level: 'Advanced'*/ },
        { name: 'MySQL', logo: mysqlLogo/*, level: 'Advanced'*/ },
        { name: 'MongoDB', logo: mongodbLogo/*, level: 'Advanced'*/ },
      ]
    },
  ] satisfies SkillCategory[],
  certificates: [
    {
      name: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-ASA-10293',
      verifyUrl: 'https://www.credly.com/',
      logo: awsCertLogo,
      image: cloudCertImage
    },
    {
      name: 'Microsoft Certified: Azure Developer Associate',
      issuer: 'Microsoft',
      date: '2023',
      credentialId: 'MS-DEV-09231',
      verifyUrl: 'https://learn.microsoft.com/en-us/certifications/',
      logo: microsoftLogo,
      image: azureCertImage
    },
    {
      name: 'Google Cloud Professional Cloud Architect',
      issuer: 'Google Cloud',
      date: '2022',
      credentialId: 'GCP-PCA-44512',
      verifyUrl: 'https://www.credly.com/',
      logo: credlyLogo,
      image: dataCertImage
    }
  ] satisfies Certificate[],
  projects: [
    {
      title: 'Pulse Observability',
      description: 'A real-time monitoring suite for edge deployments with customizable SLOs.',
      longDescription:
        'Pulse is a full-stack observability platform that unifies logs, traces, and metrics into a single workspace. The project focused on high-cardinality data, fast search, and an ergonomic React UI for operators.',
      thumbnail: pulseThumb,
      tags: ['React', 'TypeScript', 'OpenTelemetry', 'AWS'],
      links: {
        live: 'https://example.com',
        repo: 'https://github.com/',
        caseStudy: 'https://example.com'
      },
      results: [
        'Reduced mean time to detect by 43% through live dashboards.',
        'Cut operator triage time from 15 minutes to 5 minutes.'
      ],
      stack: ['React', 'TypeScript', 'Node.js', 'OpenTelemetry', 'PostgreSQL'],
      category: 'Platform'
    },
    {
      title: 'Atlas Delivery OS',
      description: 'Workflow automation for distributed logistics teams.',
      longDescription:
        'Atlas centralizes routing, dispatch, and SLA tracking for logistics operations. It integrates with third-party APIs to automate decisions and provides visibility into performance metrics.',
      thumbnail: atlasThumb,
      tags: ['Node.js', 'PostgreSQL', 'Redis', 'Terraform'],
      links: {
        live: 'https://example.com',
        repo: 'https://github.com/'
      },
      results: [
        'Improved on-time delivery by 18%.',
        'Automated 70% of manual dispatch steps.'
      ],
      stack: ['Node.js', 'PostgreSQL', 'Redis', 'Terraform'],
      category: 'Automation'
    },
    {
      title: 'Nova Commerce Studio',
      description: 'Headless commerce front-end for multi-brand storefronts.',
      longDescription:
        'Nova provides a composable storefront with fast search, personalization, and analytics baked in. The focus was on performance budgets and accessible UI patterns.',
      thumbnail: novaThumb,
      tags: ['React', 'Tailwind CSS', 'Vite', 'A11y'],
      links: {
        live: 'https://example.com',
        caseStudy: 'https://example.com'
      },
      results: [
        'Achieved sub-2 second LCP on mobile.',
        'Increased conversion by 12% with updated UX flows.'
      ],
      stack: ['React', 'Vite', 'Tailwind CSS', 'Storybook'],
      category: 'Frontend'
    },
    {
      title: 'Signal Data Mesh',
      description: 'Streaming data mesh for fintech risk analytics.',
      longDescription:
        'Signal is a data mesh that aggregates streaming transactions and applies risk models in near real-time. It delivers compliance-ready dashboards and automated reports.',
      thumbnail: signalThumb,
      tags: ['Python', 'Kafka', 'Kubernetes', 'AWS'],
      links: {
        repo: 'https://github.com/',
        caseStudy: 'https://example.com'
      },
      results: [
        'Processed 1.2M events per minute with 99.95% availability.',
        'Reduced report generation time from hours to minutes.'
      ],
      stack: ['Python', 'Kafka', 'Kubernetes', 'AWS'],
      category: 'Data'
    }
  ] satisfies Project[],
  contact: {
    email: 'hello@alexmorgan.dev',
    emailJs: {
      enabled: false,
      serviceId: 'YOUR_SERVICE_ID',
      templateId: 'YOUR_TEMPLATE_ID',
      publicKey: 'YOUR_PUBLIC_KEY'
    },
    detailsTitle: 'Contact details',
    detailsText:
      'Prefer email? I typically respond within 24 hours. EmailJS integration is optional and disabled by default.'
  },
  footer: {
    text: 'Designed and built by Stephen Phyo.',
    socials: [
      { label: 'GitHub', url: 'https://github.com/', icon: 'github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/', icon: 'linkedin' },
      { label: 'Email', url: 'mailto:hello@alexmorgan.dev', icon: 'email' }
    ] satisfies SocialLink[]
  }
};
