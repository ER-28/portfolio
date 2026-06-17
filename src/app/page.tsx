import Contributions from "./components/home/contributions"
import OpenSourceProjects from "./components/home/open-source-projects"
import Divider from "./components/divider"
import AboutMe from "./components/home/about-me"
import Education from "./components/home/education"
import Experience from "./components/home/experience"
import FeaturedWork from "./components/home/featured-work"
import HeroSection from "./components/home/hero-section"
import ProjectOverview from "./components/home/project-overview"

const Page = () => {
  return (
    <main>
      <HeroSection/>
      <Divider/>
      <AboutMe/>
      <Divider/>
      <OpenSourceProjects/>
      <Divider/>
      <Contributions/>
      <Divider/>
      <FeaturedWork/>
      <Divider/>
      <Experience/>
      <Divider/>
      <Education/>
      <Divider/>
      <ProjectOverview/>
      <Divider/>
    </main>
  )
}

export default Page