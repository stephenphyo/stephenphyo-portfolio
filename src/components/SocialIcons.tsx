import React from 'react';
import type { SocialLink } from '@/data/types';

type SocialIconsProps = {
  links: SocialLink[];
  variant?: 'light' | 'dark';
};

const iconMap: Record<SocialLink['icon'], React.ReactNode> = {
  github: (
    <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.48 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.39-3.37-1.39-.45-1.2-1.11-1.52-1.11-1.52-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.15-4.56-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.33.1-2.78 0 0 .84-.27 2.75 1.06.8-.23 1.65-.34 2.5-.34.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.06 2.75-1.06.55 1.45.2 2.52.1 2.78.64.73 1.03 1.66 1.03 2.79 0 3.96-2.34 4.83-4.57 5.08.36.33.68.97.68 1.96 0 1.41-.01 2.55-.01 2.9 0 .27.18.59.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
  ),
  linkedin: (
    <path d="M4.98 3.5C3.33 3.5 2 4.85 2 6.52c0 1.67 1.33 3.02 2.98 3.02 1.65 0 2.98-1.35 2.98-3.02 0-1.67-1.33-3.02-2.98-3.02ZM2.4 21.5h5.16V9.5H2.4v12ZM9.7 9.5h4.95v1.64h.07c.69-1.2 2.38-2.47 4.9-2.47 5.24 0 6.2 3.55 6.2 8.16V21.5h-5.16v-4.16c0-1 .02-2.3-1.38-2.3-1.38 0-1.59 1.1-1.59 2.23v4.23H9.7V9.5Z" />
  ),
  email: (
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
  )
};

const SocialIcons = ({ links, variant = 'light' }: SocialIconsProps) => {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.map((link) => (
        <a
          key={link.label}
          href={link.url}
          target={link.url.startsWith('http') ? '_blank' : undefined}
          rel={link.url.startsWith('http') ? 'noreferrer noopener' : undefined}
          className={`focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border transition ${
            variant === 'dark'
              ? 'border-cyan-300 text-cyan-300 hover:border-2 hover:text-cyan-200 hover:scale-105'
              : 'border-cyan-300/60 text-ink-700 hover:border-cyan-400 hover:text-teal-600 hover:border-2 hover:scale-105 dark:border-cyan-300 dark:text-cyan-300 dark:hover:border-cyan-200 dark:hover:text-cyan-200'
          }`}
          aria-label={link.label}
        >
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="h-5 w-5"
            fill="currentColor"
          >
            {iconMap[link.icon]}
          </svg>
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;


