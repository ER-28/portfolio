import Reveal from "@/components/shared/reveal";
import {skillCategories} from "@/data/skills";

const SkillsSection = () => (
  <section aria-label="Skills">
    <div className="container">
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1 h-6 bg-accent rounded-full" />
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Skills</p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
            Tech Stack
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {skillCategories.map((category) => (
            <Reveal key={category.label} direction="up">
              <div className="p-5 rounded-xl bg-muted/30 border border-border/40">
                <h5 className="text-accent font-semibold mb-4 tracking-wide">{category.label}</h5>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs sm:text-sm text-muted-foreground bg-muted/50 py-1.5 px-2.5 rounded-md border border-border/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default SkillsSection;
