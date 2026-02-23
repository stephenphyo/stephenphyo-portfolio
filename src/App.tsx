import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Section from '@/components/Section';
import ExperienceTimeline from '@/components/ExperienceTimeline';
import EducationTimeline from '@/components/EducationTimeline';
import SkillsGrid from '@/components/SkillsGrid';
import CertificatesGrid from '@/components/CertificatesGrid';
import ProjectsGrid from '@/components/ProjectsGrid';
import ProjectModal from '@/components/ProjectModal';
import ContactForm from '@/components/ContactForm';
import SocialIcons from '@/components/SocialIcons';
import useReveal from '@/components/useReveal';
import { portfolioData } from '@/data/portfolio';
import type { Project } from '@/data/types';

const THEME_KEY = 'portfolio-theme';

const App = () => {
  const [activeId, setActiveId] = useState('hero');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showTop, setShowTop] = useState(false);
  const { ref: heroRef, isVisible: heroVisible } = useReveal({ threshold: 0.1 });

  const sectionIds = useMemo(
    () =>
      portfolioData.nav
        .filter((item) => (item.id === 'projects' ? portfolioData.flags.showProjects : true))
        .map((item) => item.id),
    []
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored ?? (prefersDark ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 600);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app-shell min-h-screen text-ink-900 dark:text-ink-50">
      <div className="site-bg pattern-4" aria-hidden="true">
      </div>
      <div className="app-content">
        <Navbar
          navItems={
            portfolioData.flags.showProjects
              ? portfolioData.nav
              : portfolioData.nav.filter((item) => item.id !== 'projects')
          }
          activeId={activeId}
          brand={portfolioData.meta.initials}
        />
        <main>
        <section id="hero" className="section-gradient scroll-mt-24">
          <div
            ref={heroRef}
            className={`mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center reveal ${
              heroVisible ? 'is-visible' : ''
            }`}
          >
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-500">{portfolioData.meta.title}</p>
              <div className="mt-4 inline-flex flex-col items-start">
                <h1 className="text-4xl font-sans font-semibold text-ink-900 dark:text-ink-50 sm:text-5xl lg:text-6xl">
                  {portfolioData.meta.name}
                </h1>
                <div className="mt-2 inline-flex flex-col items-start pb-2">
                  <span className="text-2xl font-sans font-semibold italic text-ink-700 dark:text-ink-200">
                    {portfolioData.meta.fullName}
                  </span>
                </div>
              </div>
              <p className="mt-4 max-w-xl text-lg text-ink-600 dark:text-ink-200">
                {portfolioData.meta.tagline}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-ink-500 dark:text-ink-300">
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-500" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5Z"
                    />
                  </svg>
                  <span>{portfolioData.hero.details.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg viewBox="0 0 24 24" className="h-4 w-4 text-cyan-500" aria-hidden="true">
                    <path
                      fill="currentColor"
                      d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.5a1 1 0 0 1-1 1C10.4 22 2 13.6 2 3.5a1 1 0 0 1 1-1H6.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"
                    />
                  </svg>
                  <span>{portfolioData.hero.details.phone}</span>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {portfolioData.hero.ctas
                  .filter((cta) => (cta.href === '#projects' ? portfolioData.flags.showProjects : true))
                  .map((cta) => {
                  const base = 'focus-ring btn';
                  if (cta.variant === 'primary') {
                    return (
                      <a
                        key={cta.label}
                        href={cta.href}
                        className={`${base} btn-primary`}
                      >
                        {cta.label}
                      </a>
                    );
                  }
                  if (cta.variant === 'outline') {
                    return (
                      <a
                        key={cta.label}
                        href={cta.href}
                        className={`${base} btn-outline`}
                      >
                        {cta.label}
                      </a>
                    );
                  }
                  return (
                    <a
                      key={cta.label}
                      href={cta.href}
                      className={`${base} btn-ghost`}
                    >
                      {cta.label}
                    </a>
                  );
                })}
              </div>
              <div className="mt-8">
                <SocialIcons links={portfolioData.hero.socials} />
              </div>
            </div>
            {portfolioData.flags.showHeroSpotlight ? (
              <div className="flex-1 rounded-3xl p-8 glass-panel">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-500">
                  {portfolioData.hero.spotlight.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-sans font-semibold text-ink-900 dark:text-ink-50">
                  {portfolioData.hero.spotlight.title}
                </h2>
                <p className="mt-4 text-sm text-ink-500 dark:text-ink-200">
                  {portfolioData.hero.spotlight.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  {portfolioData.hero.spotlight.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-ink-200/60 px-4 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink-600 dark:border-ink-800 dark:text-ink-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>



        <Section
          id="experience"
          title={portfolioData.sections.experience.title}
          subtitle={portfolioData.sections.experience.subtitle}
        >
          <ExperienceTimeline items={portfolioData.experience} />
        </Section>

        <Section
          id="skills"
          title={portfolioData.sections.skills.title}
          subtitle={portfolioData.sections.skills.subtitle}
          titleClassName="text-2xl sm:text-3xl"
        >
          <SkillsGrid categories={portfolioData.skills} />
        </Section>

        <Section
          id="certificates"
          title={portfolioData.sections.certificates.title}
          subtitle={portfolioData.sections.certificates.subtitle}
        >
          <CertificatesGrid certificates={portfolioData.certificates} />
        </Section>

        <Section
          id="education"
          title={portfolioData.sections.education.title}
          subtitle={portfolioData.sections.education.subtitle}
        >
          <EducationTimeline items={portfolioData.education} />
        </Section>

        {portfolioData.flags.showProjects ? (
          <Section
            id="projects"
            title={portfolioData.sections.projects.title}
            subtitle={portfolioData.sections.projects.subtitle}
          >
            <ProjectsGrid projects={portfolioData.projects} onSelect={setSelectedProject} />
          </Section>
        ) : null}

        <Section
          id="contact"
          title={portfolioData.sections.contact.title}
          subtitle={portfolioData.sections.contact.subtitle}
        >
          <ContactForm contact={portfolioData.contact} />
        </Section>
        </main>

        <footer className="border-t border-ink-200/60 py-10 dark:border-ink-800">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 text-sm text-ink-500 dark:text-ink-300 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-ink-700 dark:text-ink-200">{portfolioData.footer.text}</p>
            <p className="text-xs">Â© {new Date().getFullYear()} {portfolioData.meta.name}. All rights reserved.</p>
          </div>
          <SocialIcons links={portfolioData.footer.socials} variant="dark" />
        </div>
      </footer>

        {showTop ? (
          <a
            href="#hero"
            className="focus-ring fixed bottom-6 right-6 inline-flex h-12 w-12 items-center justify-center rounded-full border border-ink-200/70 bg-white/80 text-ink-700 shadow-lg backdrop-blur transition hover:-translate-y-1 dark:border-ink-700 dark:bg-ink-800/80 dark:text-ink-100"
            aria-label="Back to top"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 19V5" />
              <path d="m5 12 7-7 7 7" />
            </svg>
          </a>
        ) : null}

        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      </div>
    </div>
  );
};

export default App;
