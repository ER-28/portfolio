export interface SkillCategory {
  label: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    skills: ["NestJS", "Python", "Rust", "C / C++", "SQL / MongoDB", "Neo4j"],
  },
  {
    label: "DevOps",
    skills: ["Kubernetes", "Docker", "Proxmox", "NixOS", "Traefik"],
  },
  {
    label: "Design & Practices",
    skills: ["Graphic Design", "UI/UX", "TDD", "Refactoring", "Architecture"],
  },
];
