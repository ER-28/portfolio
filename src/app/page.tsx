import HeroSection from "./components/home/hero-section"
import AboutSection from "./components/home/about-section"
import SkillsSection from "./components/home/skills-section"
import ProjectsSection from "./components/home/projects-section"
import ExperienceSection from "./components/home/experience-section"
import EducationSection from "./components/home/education-section"
import ContributionsSection from "./components/home/contributions-section"
import OpenSourceLibsSection from "./components/home/open-source-libs-section"
import ContactSection from "./components/home/contact-section"
import Header from "@/app/components/layout/header";
import React from "react";
import Footer from "@/app/components/layout/footer";

const Page = () => (
  <main>
    <Header />
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <EducationSection/>
    <ContributionsSection/>
    <OpenSourceLibsSection/>
    <ContactSection/>
    <Footer/>
  </main>
)

export default Page
