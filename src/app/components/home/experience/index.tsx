import Image from "next/image";
import SectionHeader from "@/components/shared/section-header";
import {experienceData} from "@/data/experienceData";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const Experience = () => (
  <section aria-label="Experience">
    <div className="container">
      <div className="border-x border-border">
        <Reveal direction="up">
          <SectionHeader title="Experience" />
        </Reveal>
        <div className="border-t border-border">
          <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
            <Stagger staggerDelay={150} direction="up">
              {experienceData.map((item, index) => (
                <Reveal key={index} direction="up">
                  <div className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0 last:pb-0">
                    <Image src={item.icon} alt="" width={32} height={19} />
                    <div className="flex flex-wrap gap-5 items-center justify-between">
                      <h5>{item.role}</h5>
                      <div className="flex items-center gap-2.5 border border-border rounded-lg py-1.5 px-3">
                        <div
                          className={`w-4 h-2 rounded-sm ${item.endYear === "Present" ? "bg-primary" : "bg-primary/10"}`}
                        />
                        <p className="text-sm xs:text-base text-primary">
                          {item.startYear} – {item.endYear} · {item.location}
                        </p>
                      </div>
                    </div>
                    <ul>
                      {item.bulletPoints.map((point, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-base font-normal text-muted-foreground"
                        >
                          <span className="w-2.5 h-2.5 text-muted-foreground">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Experience;
