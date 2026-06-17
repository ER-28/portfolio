import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {socialLinks} from "@/data/socialLinks";
import {SOCIAL_LINKS, SITE} from "@/lib/constants";

const HeroSection = () => (
  <section aria-label="Hero">
    <div className="container">
      <div>
        <div className="w-full h-42 bg-orange-700" />
        <div className="border-x border-border">
          <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
            <div className="absolute top-0 transform -translate-y-1/2">
              <Image
                src="/portfolio/images/profil.jpg"
                alt={`Portrait of ${SITE.name}`}
                width={145}
                height={145}
                className="border-4 border-white rounded-full"
              />
              <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
            </div>
            <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
              <h1>{SITE.name}</h1>
              <p className="text-violet-700 font-normal">{SITE.tagline}</p>
              <div className="flex items-center gap-2">
                <Image src="/portfolio/images/icon/map-icon.svg" alt="" width={20} height={20} />
                <p className="text-primary">{SITE.location}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
              <Button className="h-auto rounded-full p-0">
                <Link
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Contact on LinkedIn"
                  className="inline-block p-0.5 rounded-full bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)]"
                >
                  <span className="flex items-center gap-3 bg-primary hover:bg-[linear-gradient(96.09deg,_#9282F8_12.17%,_#F3CA4D_90.71%)] py-2.5 px-5 rounded-full">
                    <Image src="/portfolio/images/icon/spark-icon.svg" alt="" width={14} height={14} />
                    <span className="text-sm sm:text-base font-semibold text-white">Contact</span>
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
