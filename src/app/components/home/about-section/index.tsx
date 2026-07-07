"use client";

import Reveal from "@/components/shared/reveal";
import {projectOverview} from "@/data/projectOverview";
import {featuredWork} from "@/data/featuredWork";
import {contributingRepos} from "@/data/contributing";
import {openSourceProjects} from "@/data/openSourceProjects";
import {useLocale} from "@/lib/i18n/context";

const AboutSection = () => {
  const {t} = useLocale();

  const metrics = [
    {value: `${new Date().getFullYear() - 2023}+`, label: t.about.metrics?.years ?? "Years of Experience"},
    {value: String(projectOverview.caseStudies.length + projectOverview.sideProjects.length + featuredWork.length), label: t.about.metrics?.projects ?? "Projects Delivered"},
    {value: String(contributingRepos.length + openSourceProjects.length), label: t.about.metrics?.openSource ?? "Open Source"},
    {value: "3", label: t.about.metrics?.certifications ?? "Certifications"},
  ];

  return (
    <section aria-label="About" className="border-y border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <div className="grid md:grid-cols-5 gap-10 md:gap-16">
            <div className="md:col-span-3 flex flex-col gap-5">
              <Reveal direction="up">
                <div className="flex items-center gap-3 mb-2">
                  <span className="w-1 h-6 bg-accent rounded-full" />
                  <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">{t.about.label}</p>
                </div>
              </Reveal>
              <Reveal direction="up" delay={100}>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-primary">
                  {t.about.greeting}
                </h2>
              </Reveal>
              <Reveal direction="up" delay={200}>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">{t.about.p1}</p>
              </Reveal>
              <Reveal direction="up" delay={300}>
                <p className="text-base text-muted-foreground leading-relaxed">{t.about.p2}</p>
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
};

export default AboutSection;
