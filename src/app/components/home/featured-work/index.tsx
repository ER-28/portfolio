import Image from "next/image";
import Link from "next/link";
import SectionHeader from "@/components/shared/section-header";
import {featuredWork} from "@/data/featuredWork";

const FeaturedWork = () => {
  if (featuredWork.length === 0) return null;

  return (
    <section>
      <div className="container">
        <div className="border-x border-border">
          <SectionHeader title="Featured work" />
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-border">
            {featuredWork.map((item, index) => {
              const isRightCol = index % 2 === 1;
              return (
                <div
                  key={index}
                  className={`group flex flex-col gap-3.5 sm:gap-5 p-3.5 sm:p-6 ${isRightCol ? "md:border-l md:border-border" : ""}`}
                >
                  <Link href="/" className="overflow-hidden">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
