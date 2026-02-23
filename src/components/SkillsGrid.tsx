import type { SkillCategory } from '@/data/portfolio';
import SkillBadge from './SkillBadge';

type SkillsGridProps = {
  categories: SkillCategory[];
};

const SkillsGrid = ({ categories }: SkillsGridProps) => {
  return (
    <div className="grid gap-10">
      {categories.map((category) => (
        <section
          key={category.category}
          className="skills-panel relative overflow-hidden rounded-2xl p-6 sm:p-8 glass-panel"
        >
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-sans font-semibold text-ink-900 sm:text-2xl dark:text-ink-50">
                {category.category}
              </h3>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-y-6 gap-x-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 skill-logos">
            {category.skills.map((skill) => (
              <SkillBadge key={skill.name} skill={skill} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default SkillsGrid;
