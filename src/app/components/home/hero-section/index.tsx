import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {socialLinks} from "@/data/socialLinks";
import {SOCIAL_LINKS, SITE} from "@/lib/constants";
import {featuredWork} from "@/data/featuredWork";
import {projectOverview} from "@/data/projectOverview";
import ProfileImage from "./profile-image";

const stats = [
  {label: "Experience", value: `${new Date().getFullYear() - 2023}+ Years`},
  {label: "Projects", value: String(projectOverview.caseStudies.length + projectOverview.sideProjects.length + featuredWork.length)},
  {label: "Open Source", value: "3+"},
  {label: "Location", value: SITE.location},
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
    <div className="absolute inset-0 bg-gradient-to-b from-accent/[0.04] via-background to-background pointer-events-none" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
    <div className="container relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-7 pt-24 pb-16">
        <div className="flex flex-col items-center text-center gap-8">
          <div className="animate-hero-scale-in">
            <div className="relative">
              <ProfileImage />
              <span className="absolute -bottom-1 -right-1 w-5 h-5 border-2 border-background bg-emerald-400 rounded-full animate-glow-pulse" />
            </div>
          </div>
          <div className="flex flex-col gap-3 animate-hero-fade-up">
            <p className="text-accent font-mono text-sm tracking-[0.3em] uppercase">
              Developer &amp; Sys-admin
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-[0.95] text-primary">
              {SITE.name}
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed">
              {SITE.tagline}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg animate-hero-fade-up" style={{animationDelay: "200ms"}}>
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5 py-3 px-2 rounded-lg bg-muted/50 border border-border/40">
                <span className="text-lg sm:text-xl font-bold text-primary">{stat.value}</span>
                <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="animate-hero-fade-in flex flex-col sm:flex-row items-center gap-4" style={{animationDelay: "350ms"}}>
            <div className="flex items-center gap-2">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="w-10 h-10 flex items-center justify-center text-secondary hover:text-accent border border-border/60 hover:border-accent/50 rounded-lg transition-all duration-300 hover:-translate-y-0.5"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
            <Button className="h-auto rounded-lg p-0 glow-card">
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact on LinkedIn"
              >
                <span className="flex items-center gap-2.5 bg-accent text-accent-foreground hover:bg-accent/90 py-2.5 px-5 rounded-lg transition-all duration-300">
                  <Image src="/portfolio/images/icon/spark-icon.svg" alt="" width={14} height={14} />
                  <span className="text-sm sm:text-base font-semibold">Contact</span>
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
