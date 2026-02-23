import { useMemo, useState } from 'react';
import type { Project } from '@/data/types';

type ProjectsGridProps = {
  projects: Project[];
  onSelect: (project: Project) => void;
};

const ProjectsGrid = ({ projects, onSelect }: ProjectsGridProps) => {
  const [search, setSearch] = useState('');
  const [activeTag, setActiveTag] = useState('All');

  const tags = useMemo(() => {
    const tagSet = new Set<string>();
    projects.forEach((project) => project.tags.forEach((tag) => tagSet.add(tag)));
    return ['All', ...Array.from(tagSet)];
  }, [projects]);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesTag = activeTag === 'All' || project.tags.includes(activeTag);
      const matchesQuery =
        query.length === 0 ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tags.some((tag) => tag.toLowerCase().includes(query));
      return matchesTag && matchesQuery;
    });
  }, [projects, search, activeTag]);

  return (
    <div className="grid gap-6">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setActiveTag(tag)}
              className={`focus-ring btn btn-sm ${
                activeTag === tag ? 'btn-primary' : 'btn-outline'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="ml-auto flex items-center gap-2">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search projects"
            className="focus-ring w-full rounded-full border border-ink-200/70 bg-white/80 px-4 py-2 text-sm text-ink-700 placeholder:text-ink-400 dark:border-ink-700 dark:bg-ink-800/70 dark:text-ink-100"
          />
          <span className="text-xs text-ink-500 dark:text-ink-300">{filtered.length} results</span>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <article
            key={project.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl transition hover:-translate-y-1 glass-panel"
          >
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={`${project.title} preview`} className="h-44 w-full object-cover" loading="lazy" />
            ) : null}
            <div className="flex flex-1 flex-col gap-4 p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-500">
                  {project.category}
                </p>
                <h3 className="mt-2 text-xl font-sans font-semibold text-ink-900 dark:text-ink-50">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-ink-500 dark:text-ink-200">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="chip-glow rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-ink-900/60 dark:text-ink-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex flex-wrap gap-3">
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring btn btn-primary btn-sm"
                  >
                    Live
                  </a>
                ) : null}
                {project.links.repo ? (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring btn btn-outline btn-sm"
                  >
                    GitHub
                  </a>
                ) : null}
                {project.links.caseStudy ? (
                  <a
                    href={project.links.caseStudy}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="focus-ring btn btn-outline btn-sm"
                  >
                    Case Study
                  </a>
                ) : null}
                <button
                  type="button"
                  onClick={() => onSelect(project)}
                  className="focus-ring btn btn-outline btn-sm"
                >
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ProjectsGrid;


