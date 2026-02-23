import React from 'react';
import useReveal from './useReveal';

type SectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  titleClassName?: string;
  children: React.ReactNode;
};

const Section = ({ id, title, subtitle, titleClassName, children }: SectionProps) => {
  const { ref, isVisible } = useReveal({ threshold: 0.15 });

  return (
    <section id={id} className="scroll-mt-24 py-10 sm:py-14">
      <div
        ref={ref}
        className={`mx-auto w-full max-w-6xl px-6 reveal ${isVisible ? 'is-visible' : ''}`}
      >
        <div className="mb-10">
          <h2 className={`section-title mt-3 text-3xl font-sans font-semibold sm:text-4xl ${titleClassName ?? ''}`}>
            {title}
          </h2>
          <div className="mt-4 flex items-center" aria-hidden="true">
            <span className="section-underline h-0.5 w-56 rounded-full" />
          </div>
          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base text-ink-500 dark:text-ink-200">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
