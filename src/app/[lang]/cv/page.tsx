import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {translations, defaultLocale, type Locale} from "@/lib/i18n/translations";
import {SOCIAL_LINKS, SITE} from "@/lib/constants";
import {skillCategories} from "@/data/skills";
import {experienceData} from "@/data/experienceData";
import {educationData} from "@/data/educationData";
import CvPrintButton from "@/components/shared/cv-print-button";

export const dynamicParams = false;

export function generateStaticParams() {
  return (Object.keys(translations) as Locale[]).map((lang) => ({lang}));
}

export async function generateMetadata({params}: {params: Promise<{lang: string}>}): Promise<Metadata> {
  const {lang} = await params;
  const locale = (Object.keys(translations) as Locale[]).includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  const t = translations[locale];
  return {
    title: `${t.cv.title} — ${SITE.name}`,
    description: t.cv.about,
  };
}

const skillRows: Record<string, string[][]> = {
  en: [["React", "Next.js", "TypeScript", "Tailwind CSS"], ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"], ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"], ["Graphic Design", "UI/UX", "TDD", "Refactoring", "Architecture"]],
  fr: [["React", "Next.js", "TypeScript", "Tailwind CSS"], ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"], ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"], ["Design Graphique", "UI/UX", "TDD", "Refactoring", "Architecture"]],
  de: [["React", "Next.js", "TypeScript", "Tailwind CSS"], ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"], ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"], ["Grafikdesign", "UI/UX", "TDD", "Refactoring", "Architektur"]],
  it: [["React", "Next.js", "TypeScript", "Tailwind CSS"], ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"], ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"], ["Graphic Design", "UI/UX", "TDD", "Refactoring", "Architettura"]],
  es: [["React", "Next.js", "TypeScript", "Tailwind CSS"], ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"], ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"], ["Diseño Gráfico", "UI/UX", "TDD", "Refactoring", "Arquitectura"]],
};

const CvPage = async ({params}: {params: Promise<{lang: string}>}) => {
  const {lang} = await params;
  const locale = (Object.keys(translations) as Locale[]).includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  if (!locale || locale === defaultLocale && lang !== defaultLocale) notFound();

  const t = translations[locale];
  const skills = skillRows[locale];

  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        @page { size: A4; margin: 1.2cm; }
        @media print { .no-print { display: none !important; } }
      `}</style>

      <div className="no-print" style={{textAlign: "right", padding: "16px 24px", maxWidth: "210mm", margin: "0 auto"}}>
        <CvPrintButton locale={locale} />
      </div>

      <div style={{maxWidth: "210mm", margin: "0 auto", padding: "0 24px 32px"}}>
        <header style={{borderBottom: "2px solid #d1d5db", paddingBottom: "16px", marginBottom: "20px"}}>
          <h1 style={{fontSize: "26px", fontWeight: 700, letterSpacing: "-0.02em", color: "#000"}}>{SITE.name}</h1>
          <p style={{fontSize: "14px", color: "#4b5563", marginTop: "4px"}}>{t.hero.role}</p>
          <div style={{display: "flex", flexWrap: "wrap", gap: "16px", marginTop: "6px", fontSize: "12px", color: "#6b7280"}}>
            <span>{SITE.location}</span>
            <a href={SOCIAL_LINKS.github} style={{color: "#6b7280", textDecoration: "underline", textUnderlineOffset: "2px"}}>{SOCIAL_LINKS.github.replace("https://", "")}</a>
            <a href={SOCIAL_LINKS.linkedin} style={{color: "#6b7280", textDecoration: "underline", textUnderlineOffset: "2px"}}>LinkedIn</a>
          </div>
        </header>

        <section style={{marginBottom: "18px"}}>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "6px"}}>{t.cv.summary}</h2>
          <p style={{fontSize: "12px", color: "#374151", lineHeight: "1.6"}}>{t.cv.about}</p>
        </section>

        <section style={{marginBottom: "18px"}}>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "6px"}}>{t.cv.technicalSkills}</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
            {skills.map((row, i) => (
              <p key={i} style={{fontSize: "12px", color: "#374151"}}>
                <span style={{fontWeight: 600, color: "#1f2937"}}>{skillCategories[i]?.label ?? ""}:</span>{" "}
                {row.join(" · ")}
              </p>
            ))}
          </div>
        </section>

        <section style={{marginBottom: "18px"}}>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "10px"}}>{t.cv.experience}</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
            {t.data.experience.map((exp, i) => (
              <div key={i}>
                <div style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                  <h3 style={{fontSize: "12px", fontWeight: 600, color: "#1f2937"}}>{exp.role}</h3>
                  <span style={{fontSize: "10px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: "12px"}}>{experienceData[i]?.startYear} – {experienceData[i]?.endYear}</span>
                </div>
                <ul style={{marginTop: "3px", listStyle: "none"}}>
                  {exp.bulletPoints.map((bp, j) => (
                    <li key={j} style={{fontSize: "11px", color: "#4b5563", paddingLeft: "12px", position: "relative"}}>
                      <span style={{position: "absolute", left: "0"}}>–</span> {bp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: "18px"}}>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "8px"}}>{t.cv.education}</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
            {t.data.education.map((edu, i) => (
              <div key={i} style={{display: "flex", justifyContent: "space-between", alignItems: "baseline"}}>
                <div>
                  <h3 style={{fontSize: "12px", fontWeight: 600, color: "#1f2937"}}>{edu.title}</h3>
                  <p style={{fontSize: "11px", color: "#6b7280"}}>{edu.subtitle}</p>
                </div>
                <span style={{fontSize: "10px", color: "#9ca3af", whiteSpace: "nowrap", marginLeft: "12px"}}>{educationData[i]?.date}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{marginBottom: "18px"}}>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "5px"}}>{t.cv.languages}</h2>
          <div style={{display: "flex", flexWrap: "wrap", gap: "16px"}}>
            {t.cv.langItems.map((lang) => (
              <span key={lang.label} style={{fontSize: "12px", color: "#374151"}}>
                <span style={{fontWeight: 600, color: "#1f2937"}}>{lang.label}:</span> {lang.level}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 style={{fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em", color: "#9ca3af", marginBottom: "8px"}}>{t.cv.projects}</h2>
          <div style={{display: "flex", flexDirection: "column", gap: "6px"}}>
            {t.data.projects.map((proj, i) => (
              <div key={i}>
                <h3 style={{fontSize: "12px", fontWeight: 600, color: "#1f2937"}}>{proj.name}</h3>
                <p style={{fontSize: "11px", color: "#4b5563"}}>{proj.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default CvPage;
