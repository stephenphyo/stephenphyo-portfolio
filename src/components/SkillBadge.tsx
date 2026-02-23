import type { Skill } from '@/data/portfolio';

type SkillBadgeProps = {
  skill: Skill;
};

const SkillBadge = ({ skill }: SkillBadgeProps) => {
  return (
    <div className="group flex flex-col items-center text-center">
      <img
        src={skill.logo}
        alt={`${skill.name} logo`}
        className="h-20 w-20 transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-24 lg:h-28 lg:w-28"
        loading="lazy"
      />
      <div className="mt-4 space-y-2">
        <p className="text-base font-semibold text-cyan-500 dark:text-cyan-300">{skill.name}</p>
        {skill.level ? (
          <p className="text-sm leading-relaxed text-ink-500 dark:text-ink-300">{skill.level}</p>
        ) : null}
        {skill.note ? (
          <p className="text-sm leading-relaxed text-ink-400 dark:text-ink-300">{skill.note}</p>
        ) : null}
      </div>
    </div>
  );
};

export default SkillBadge;
