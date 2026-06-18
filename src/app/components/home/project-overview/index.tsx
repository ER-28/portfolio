import Image from "next/image";
import Link from "next/link";
import {projectOverview} from "@/data/projectOverview";
import Reveal from "@/components/shared/reveal";

const ProjectOverview = () => (
  <section aria-label="Project overview">
    <div className="container">
      <div className="border-x border-border">
        <div className="flex flex-col max-w-3xl mx-auto gap-10 sm:gap-16 px-4 sm:px-7 py-9 md:py-16">
          <Reveal direction="up">
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Case studies
              </p>
              <div className="flex flex-col gap-2.5">
                {projectOverview.caseStudies.map((item, index) => (
                  <Link
                    key={index}
                    href={item.url}
                    className="group flex items-center gap-2"
                  >
                    <h4>{item.name}</h4>
                    <Image
                      src="/portfolio/images/icon/tile-arrow-icon.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <div className="flex flex-col xs:flex-row items-start gap-5 xs:gap-10 md:gap-28 lg:gap-5">
              <p className="max-w-fit lg:max-w-2xs w-full text-sm tracking-[2px] text-primary uppercase font-medium">
                Side Projects
              </p>
              <div className="flex flex-col gap-2.5">
                {projectOverview.sideProjects.map((item, index) => {
                  const content = (
                    <div className="group flex flex-wrap items-center gap-2">
                      <h4 className={item.comingSoon ? "text-muted-foreground" : ""}>
                        {item.name}
                      </h4>
                      {item.comingSoon ? (
                        <div className="py-1.5 px-3 bg-muted rounded-lg">
                          <p className="text-xs md:text-base font-normal text-muted-foreground">
                            Coming Soon
                          </p>
                        </div>
                      ) : (
                        <Image
                          src="/portfolio/images/icon/tile-arrow-icon.svg"
                          alt=""
                          width={24}
                          height={24}
                          className="group-hover:translate-x-1.5 group-hover:rotate-45 transition-all duration-300 ease-in"
                        />
                      )}
                    </div>
                  );

                  return item.comingSoon ? (
                    <div key={index}>{content}</div>
                  ) : (
                    <Link key={index} href={item.href!} className="group" target="_blank">
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default ProjectOverview;
