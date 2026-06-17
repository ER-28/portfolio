import Link from "next/link";
import {SiGithub} from "@icons-pack/react-simple-icons";

import {contributions} from "@/data/contributionsData";

const Contributions = () => {
  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <div className="flex flex-col max-w-3xl mx-auto py-10 px-4 sm:px-7">
            <div className="flex flex-col xs:flex-row gap-5 items-center justify-between">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                Open Source
              </p>
            </div>
          </div>
          <div className="border-t border-border">
            <div className="flex flex-col max-w-3xl mx-auto px-4 sm:px-7 py-9 md:py-16">
              {contributions.map((project, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-5 border-dashed border-b border-border last:border-b-0 pt-8 sm:pt-10 pb-8 sm:pb-10 first:pt-0"
                >
                  <div className="flex items-center gap-3">
                    <SiGithub width={28} height={28} className="text-primary" />
                    <Link
                      href={project.repo}
                      target="_blank"
                      className="group flex items-center gap-2"
                    >
                      <h5>{project.name}</h5>
                    </Link>
                  </div>
                  <p className="text-base font-normal text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-col gap-2">
                    {project.prs.map((pr, i) => (
                      <Link
                        key={i}
                        href={pr.url}
                        target="_blank"
                        className="group flex items-center gap-2 text-primary hover:underline"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span className="text-sm sm:text-base">{pr.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contributions;
