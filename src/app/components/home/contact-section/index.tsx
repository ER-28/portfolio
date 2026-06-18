import Link from "next/link";
import {SOCIAL_LINKS, SITE} from "@/lib/constants";
import {socialLinks} from "@/data/socialLinks";
import Reveal from "@/components/shared/reveal";

const ContactSection = () => (
  <section aria-label="Contact" className="border-t border-border/40">
    <div className="container">
      <div className="max-w-5xl mx-auto px-4 sm:px-7 py-16 md:py-24 text-center">
        <Reveal direction="up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-1 h-6 bg-accent rounded-full" />
            <p className="text-xs tracking-[0.25em] text-muted-foreground uppercase font-medium">Contact</p>
          </div>
        </Reveal>
        <Reveal direction="up" delay={100}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary">
            Let&apos;s work together
          </h2>
        </Reveal>
        <Reveal direction="up" delay={200}>
          <p className="text-muted-foreground max-w-md mx-auto mb-8">
            {SITE.location} — Open for opportunities and collaboration.
          </p>
        </Reveal>
        <Reveal direction="up" delay={300}>
          <div className="flex items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-11 h-11 flex items-center justify-center text-secondary hover:text-accent border border-border/60 hover:border-accent/50 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                {link.icon}
              </Link>
            ))}
            <Link
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="h-11 flex items-center gap-2 bg-accent text-accent-foreground hover:bg-accent/90 px-5 rounded-xl text-sm font-semibold transition-all duration-300"
            >
              LinkedIn
            </Link>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default ContactSection;
