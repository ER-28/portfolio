import SectionHeader from "@/components/shared/section-header";
import {educationData} from "@/data/educationData";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const Education = () => (
  <section aria-label="Education">
    <div className="container">
      <Reveal direction="up">
        <SectionHeader title="Education" />
      </Reveal>
      <div className="relative max-w-3xl mx-auto px-4 sm:px-0 py-10">
          <div className="hidden sm:flex absolute left-5 sm:left-[15.9rem] sm:translate-x-1/2 top-0 bottom-0 w-px bg-accent/20" />
          <div className="relative">
            <Stagger staggerDelay={150} direction="up">
              {educationData.map((item, index) => (
                <Reveal key={index} direction="up">
                  <div
                    className={`relative flex flex-col sm:flex-row sm:items-start gap-4 ${
                      index !== educationData.length - 1 ? "mb-8 sm:mb-16" : ""
                    }`}
                  >
                    <div className="relative pl-8 sm:pl-0 sm:w-64 sm:text-right sm:pr-16">
                      <p className="ml-2.5 sm:ml-0 text-base font-normal sm:mb-0 leading-relaxed text-muted-foreground">
                        {item.date}
                      </p>
                      <div className="absolute left-1.5 sm:left-auto sm:-right-3 top-0 z-10 p-1 border border-accent/30 rounded-full bg-background">
                        <div className="w-3 h-3 bg-accent rounded-full" />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 flex-1 sm:pl-16 ml-2 sm:ml-0">
                      <h5 className="font-semibold">{item.title}</h5>
                      <p className="text-secondary">{item.subtitle}</p>
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

export default Education;
