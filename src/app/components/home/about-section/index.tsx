import Reveal from "@/components/shared/reveal";
import {projectOverview} from "@/data/projectOverview";
import {featuredWork} from "@/data/featuredWork";
import {contributingRepos} from "@/data/contributing";
import {openSourceProjects} from "@/data/openSourceProjects";

const metrics = [
  {value: `${new Date().getFullYear() - 2023}+`, label: "Years of Experience"},
  {value: String(projectOverview.caseStudies.length + projectOverview.sideProjects.length + featuredWork.length), label: "Projects Delivered"},
  {value: String(contributingRepos.length + openSourceProjects.length), label: "Open Source"},
  {value: "3", label: "Certifications"},
];

const AboutSection = () => (
  <section aria-label="About" className="border-y border-border/40">
    <div className="container">
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
        <div className="grid md:grid-cols-5 gap-10 md:gap-16">
          <div className="md:col-span-3 flex flex-col gap-5">
            <Reveal direction="up">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-1 h-6 bg-accent rounded-full" />
                <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">About</p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-primary">
                Hey, I&apos;m Lylian.
              </h2>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                A Developer, DevOps and Sysadmin based in Lyon, currently making frontend development at{" "}
                <span className="text-accent font-medium">DGFIP</span>, the French Directorate General of Public Finance.
              </p>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <p className="text-base text-muted-foreground leading-relaxed">
                New technology enthusiast, love refactoring and creation of modern architecture.
                I build enterprise-grade software, open-source tools, and occasionally capture street photography.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-2">
            <Reveal direction="up" delay={150}>
              <div className="grid grid-cols-2 gap-3">
                {metrics.map((m) => (
                  <div key={m.label} className="flex flex-col gap-1 p-4 rounded-xl bg-muted/50 border border-border/40">
                    <span className="text-2xl sm:text-3xl font-bold text-accent">{m.value}</span>
                    <span className="text-xs text-muted-foreground">{m.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
