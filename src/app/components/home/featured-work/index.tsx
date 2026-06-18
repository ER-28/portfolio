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
        <div className="border-x border-border">
          <Reveal direction="up">
            <SectionHeader title="Featured work" />
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            <Stagger staggerDelay={150} direction="up">
              {featuredWork.map((item, index) => {
                const isRightCol = index % 2 === 1;
                return (
                  <Reveal key={index} direction="up">
                    <div
                      className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-border" : ""}`}
                    >
                      <Link href="/" className="overflow-hidden block">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={490}
                          height={300}
                          className="w-full h-full group-hover:scale-105 transition-all duration-300 ease-in-out"
                        />
                      </Link>
                      <div className="flex flex-col gap-1 sm:gap-2 px-2">
                        <Link href="/">
                          <h4>{item.title}</h4>
                        </Link>
                        <div className="flex">
                          <p>{item.roles.join(", ")}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
