import { Badge } from "@/components/ui/badge";
import {services} from "@/data/services";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const AboutMe = () => (
  <section aria-label="About me">
    <div className="container">
      <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
          <div className="flex flex-col gap-4">
            <Reveal direction="up">
              <div className="flex items-center gap-3">
                <span className="w-1 h-5 bg-accent rounded-full" />
                <p className="text-sm tracking-[0.2em] text-muted-foreground uppercase font-medium">
                  About Me
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <h2>
                Hey there. I&apos;m Lylian — Developer, Devops and Sysadmin based in Lyon,
                currently{" "}
                <span className="text-accent">
                  making frontend development
                </span>{" "}
                at <span className="border-b-2 border-accent/50">DGFIP</span>, the French Directorate General of Public Finance
              </h2>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <h5 className="text-muted-foreground font-normal">
                New technology enthusiast, love refactoring and creation of modern architecture
              </h5>
            </Reveal>
          </div>
          <div className="flex flex-col gap-4">
            <Reveal direction="up" delay={200}>
              <p className="text-sm text-muted-foreground uppercase font-medium tracking-[0.2em]">Services</p>
            </Reveal>
            <Stagger staggerDelay={60} direction="up" className="flex flex-wrap gap-2 sm:gap-3">
              {services.map((service) => (
                <Reveal key={service} direction="up">
                  <Badge
                    variant="outline"
                    className="py-1.5 px-3 rounded-lg h-full border-border/60 text-muted-foreground hover:border-accent/30 hover:text-accent transition-colors duration-300"
                  >
                    <span className="text-xs sm:text-sm font-medium">{service}</span>
                  </Badge>
                </Reveal>
              ))}
            </Stagger>
          </div>
      </div>
    </div>
  </section>
);

export default AboutMe;
