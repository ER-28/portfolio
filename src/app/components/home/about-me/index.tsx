import { Badge } from "@/components/ui/badge";

const AboutMe = () => {
  const servicesBedge = [
    "Graphic Design",
    "User Experience",
      "Architecture",
      "Development",
      "Refactoring",
      "TDD",
      "Kubernetes",
      "Proxmox",
      "Nixos",
      "Treafik",
      "Docker",
      "Javascript / TypeScript",
      "Python",
      "Rust",
      "C / C++",
      "SQL / MongoDB",
      "Neo4j",
      "NestJS",
      "Nextjs",
      "React"
  ];
  return (
    <section>
      <div className="container">
        <div className="border-x border-border bg-[url('/images/about-me/about-me-bg.svg')] bg-cover bg-center bg-no-repeat">
          <div className="flex flex-col gap-9 sm:gap-12 max-w-3xl mx-auto px-4 sm:px-7 py-11 md:py-20">
            <div className="flex flex-col gap-4">
              <p className="text-sm tracking-[2px] text-primary uppercase font-medium">
                About Me
              </p>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
                Hey there. I'm Lylian — Developer, Devops and Sysadmin based in Lyon,
                currently{" "}
                <span className="bg-[linear-gradient(90deg,_rgba(243,202,77,0.4)_0%,_rgba(243,202,77,0.05)_100%)]">
                  making frontend development
                </span>{" "}
                at <span className="border-b-2">DGFIP</span>, the French Directorate General of Public Finance
              </h2>
              <h5 className="text-secondary font-normal">
                New technology enthusiast, love refactoring and creation of modern architecture
              </h5>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-sm text-primary uppercase font-medium">
                Services
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {servicesBedge?.map((value, index) => {
                  return (
                    <Badge
                      variant={"outline"}
                      key={index}
                      className="py-1.5 px-3 rounded-lg h-full"
                    >
                      <p className="text-xs sm:text-sm font-medium text-primary">
                        {value}
                      </p>
                    </Badge>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
