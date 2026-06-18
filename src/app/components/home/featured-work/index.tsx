import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/section-header";
import {featuredWork} from "@/data/featuredWork";
import Reveal from "@/components/shared/reveal";
import Stagger from "@/components/shared/stagger";

const FeaturedWork = () => {
  if (featuredWork.length === 0) return null;

  return (
    <section aria-label="Featured work">
    <div className="container">
      <Reveal direction="up">
        <SectionHeader title="Featured work" />
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2">
            <Stagger staggerDelay={150} direction="up">
              {featuredWork.map((item, index) => {
                const isRightCol = index % 2 === 1;
                return (
                  <Reveal key={index} direction="up">
                    <div
                      className={`group glow-card rounded-none border-border/60 md:even:border-l ${isRightCol ? "md:border-l" : ""}`}
                    >
                      <Link href="/" className="overflow-hidden block border-b border-border/60">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={490}
                          height={300}
                          className="w-full h-full group-hover:scale-105 transition-all duration-500 ease-out"
                        />
                      </Link>
                      <div className="flex flex-col gap-1 sm:gap-2 p-4 sm:p-6">
                        <Link href="/">
                          <h4>{item.title}</h4>
                        </Link>
                        <p>{item.roles.join(", ")}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </Stagger>
          </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
