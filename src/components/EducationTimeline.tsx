import type { Education } from '@/data/types';

type EducationTimelineProps = {
  items: Education[];
};

const EducationTimeline = ({ items }: EducationTimelineProps) => {
  return (
    <div className="grid gap-6">
      {items.map((item) => (
        <article
          key={`${item.school}-${item.program}`}
          className="relative rounded-2xl p-6 transition hover:-translate-y-1 glass-panel"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <h3 className="text-2xl font-sans font-semibold tracking-tight text-ink-900 dark:text-ink-50">
                {item.program}
              </h3>
              <p className="accent-title text-lg font-semibold uppercase">
                {item.school}
              </p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-200">
                {item.dates} · {item.location}
              </p>
            </div>
            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noreferrer noopener"
                className="focus-ring btn btn-outline btn-sm"
              >
                Visit
              </a>
            ) : null}
          </div>
          <ul className="bullet-text mt-4 grid gap-2 text-sm text-ink-600 dark:text-ink-200">
            {item.highlights.map((highlight) => (
              <li key={highlight} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-teal-500" aria-hidden="true" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.focus.map((focus) => (
              <span
                key={focus}
                className="chip-glow rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-ink-700 dark:bg-ink-900/60 dark:text-ink-200"
              >
                {focus}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
};

export default EducationTimeline;
