"use client";

import {educationData} from "@/data/educationData";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";
import {useLocale} from "@/lib/i18n/context";

const EducationSection = () => {
  const {t, locale} = useLocale();

  const items = locale === "fr"
    ? educationData.map((edu, i) => ({...edu, ...t.data.education[i]}))
    : educationData;

  return (
    <section aria-label="Education" className="border-t border-border/40">
      <div className="container">
        <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
          <Reveal direction="up">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-1 h-6 bg-accent rounded-full" />
              <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">{t.education.label}</p>
            </div>
          </Reveal>
          <Reveal direction="up" delay={100}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
              {t.education.title}
            </h2>
          </Reveal>
          <Stagger staggerDelay={120} direction="up">
            <div className="grid sm:grid-cols-3 gap-4">
              {items.map((item) => (
                <Reveal key={item.title} direction="up">
                  <div className="p-5 rounded-xl bg-muted/20 border border-border/40 h-full flex flex-col">
                    <p className="text-xs text-accent font-mono mb-2">{item.date}</p>
                    <h5 className="text-primary font-semibold mb-1">{item.title}</h5>
                    <p className="text-sm text-muted-foreground mt-auto">{item.subtitle}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Stagger>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
