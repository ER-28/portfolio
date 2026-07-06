import Image from "next/image";
import {experienceData} from "@/data/experienceData";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const ExperienceSection = () => (
  <section aria-label="Experience" className="border-t border-border/40">
    <div className="container">
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24">
        <Reveal direction="up">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-1 h-6 bg-accent rounded-full" />
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Career</p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 md:mb-12 text-primary">
            Experience
          </h2>
        </Reveal>
        <div className="relative">
          <div className="absolute left-[18px] sm:left-[180px] top-0 bottom-0 w-px bg-accent/20" />
          <Stagger staggerDelay={120} direction="up" className="flex flex-col gap-8">
            {experienceData.map((item, index) => (
              <Reveal key={index} direction="up">
                <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="flex sm:w-[180px] shrink-0">
                    <div className="relative flex items-start gap-3 sm:justify-end sm:w-full">
                      <div className="absolute left-0 sm:left-auto sm:right-[-8px] top-1.5 z-10 w-3 h-3 rounded-full bg-accent border-2 border-background" />
                      <p className="pl-8 sm:pl-0 sm:pr-6 text-sm text-muted-foreground font-mono whitespace-nowrap">
                        {item.startYear} – {item.endYear}
                      </p>
                    </div>
                  </div>
                  <div className="flex-1 pl-8 sm:pl-6">
                    <div className="flex flex-col gap-3 p-5 rounded-xl bg-muted/20 border border-border/40">
                      <div className="flex items-center gap-3">
                        <Image
                          src={item.icon}
                          alt=""
                          width={28}
                          height={28}
                          className="rounded"
                        />
                        <div>
                          <h5 className="text-primary font-semibold">{item.role}</h5>
                          <p className="text-xs text-muted-foreground">{item.location}</p>
                        </div>
                      </div>
                      <ul className="flex flex-col gap-2">
                        {item.bulletPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                            <span className="w-1.5 h-1.5 mt-1.5 rounded-full bg-accent/40 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </Stagger>
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
