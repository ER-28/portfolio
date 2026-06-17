import {SiFigma, SiGithub, SiX} from "@icons-pack/react-simple-icons";
import type {ReactNode} from "react";
import {SOCIAL_LINKS} from "@/lib/constants";

export interface SocialLink {
  icon: ReactNode
  href: string
  label: string
}

export const socialLinks: SocialLink[] = [
  {icon: <SiGithub width={18} height={18} />, href: SOCIAL_LINKS.github, label: "GitHub"},
  {icon: <SiX width={18} height={18} />, href: SOCIAL_LINKS.x, label: "X (Twitter)"},
  {icon: <SiFigma width={18} height={18} />, href: SOCIAL_LINKS.figma, label: "Figma"},
];
