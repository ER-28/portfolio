import HeroSection from "./components/home/hero-section"
import AboutSection from "./components/home/about-section"
import SkillsSection from "./components/home/skills-section"
import ProjectsSection from "./components/home/projects-section"
import ExperienceSection from "./components/home/experience-section"
import EducationSection from "./components/home/education-section"
import ContributionsSection from "./components/home/contributions-section"
import OpenSourceLibsSection from "./components/home/open-source-libs-section"
import ContactSection from "./components/home/contact-section"

const Page = () => (
  <main>
    <HeroSection/>
    <AboutSection/>
    <SkillsSection/>
    <ProjectsSection/>
    <ExperienceSection/>
    <EducationSection/>
    <ContributionsSection/>
    <OpenSourceLibsSection/>
    <ContactSection/>
  </main>
)

export default Page
