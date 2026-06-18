import Link from "next/link";
import {projectOverview} from "@/data/projectOverview";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

interface ProjectItem {
  name: string
  url: string | null
  comingSoon: boolean
  description: string | null
  tags: string[]
}

const allProjects: ProjectItem[] = [
  ...projectOverview.caseStudies.map((cs) => ({
    name: cs.name,
    url: cs.url,
    comingSoon: false,
    description: null as string | null,
    tags: [] as string[],
  })),
  ...projectOverview.sideProjects.map((sp) => ({
    name: sp.name,
    url: sp.href ?? null,
    comingSoon: sp.comingSoon ?? false,
    description: null as string | null,
    tags: [] as string[],
  })),
];

const ProjectsSection = () => {
  if (allProjects.length === 0) return null;

  return (
    <section aria-label="Projects" className="border-t border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Work</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
              Projects
            </h2>
          </Reveal>
          <Stagger staggerDelay={120} direction="up">
            <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
              {allProjects.map((project) => (
                <Reveal key={project.name} direction="up">
                  {project.comingSoon ? (
                    <div className="group relative p-6 rounded-xl bg-muted/20 border border-border/40 h-full flex flex-col">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                          <span className="text-muted-foreground text-xs font-mono">*</span>
                        </div>
                        <h4 className="text-muted-foreground">{project.name}</h4>
                      </div>
                      <div className="mt-auto">
                        <span className="text-[10px] tracking-wider uppercase text-muted-foreground/50 bg-muted/50 py-1 px-2 rounded">
                          Coming Soon
                        </span>
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={project.url!}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-6 rounded-xl bg-muted/20 border border-border/40 hover:border-accent/30 hover:bg-muted/40 transition-all duration-300 h-full"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                          <span className="text-accent text-xs font-bold">&lt;/&gt;</span>
                        </div>
                        <h4 className="text-primary group-hover:text-accent transition-colors duration-300">
                          {project.name}
                        </h4>
                      </div>
                      {project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {project.tags.map((tag) => (
                            <span key={tag} className="text-[10px] text-muted-foreground bg-muted/50 py-0.5 px-2 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </Link>
                  )}
                </Reveal>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
