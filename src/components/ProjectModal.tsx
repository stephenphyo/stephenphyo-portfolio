import { useEffect, useRef } from 'react';
import type { Project } from '@/data/types';

type ProjectModalProps = {
  project: Project | null;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  useEffect(() => {
    if (!project) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/70 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      aria-describedby="project-modal-description"
      onClick={onClose}
    >
      <div
        className="no-scrollbar max-h-full w-full max-w-3xl overflow-y-auto rounded-2xl p-6 text-ink-50 shadow-xl glass-panel"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal-300">{project.category}</p>
            <h3 id="project-modal-title" className="mt-2 text-2xl font-sans font-semibold">
              {project.title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="focus-ring btn btn-primary btn-sm"
          >
            Close
          </button>
        </div>
        <p id="project-modal-description" className="mt-4 text-sm text-ink-200">
          {project.longDescription}
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <h4 className="text-sm font-semibold text-teal-200">Results</h4>
            <ul className="bullet-text mt-2 grid gap-2 text-sm text-ink-200">
              {project.results.map((result) => (
                <li key={result} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300" aria-hidden="true" />
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-teal-200">Stack</h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-ink-700 px-3 py-1 text-xs font-semibold text-ink-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {project.links.live ? (
            <a
              href={project.links.live}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring btn btn-primary btn-sm"
            >
              Live Demo
            </a>
          ) : null}
          {project.links.repo ? (
            <a
              href={project.links.repo}
              target="_blank"
              rel="noreferrer noopener"
              className="focus-ring btn btn-outline btn-sm"
            >
              GitHub Repo
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
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;


