export interface Experience {
  icon: string
  role: string
  location: string
  startYear: string
  endYear: string
  bulletPoints: string[]
}

export interface Education {
  date: string
  title: string
  subtitle: string
}

export interface CaseStudy {
  name: string
  url: string
}

export interface SideProject {
  name: string
  href?: string
  comingSoon?: boolean
}

export interface ProjectOverview {
  caseStudies: CaseStudy[]
  sideProjects: SideProject[]
}

export interface FeaturedWorkItem {
  title: string
  description: string
  image: string
  roles: string[]
}

export interface GitHubRepo {
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  topics: string[]
}

export interface GitHubPr {
  id: number
  number: number
  title: string
  state: string
  html_url: string
  repository_url: string
  pull_request: Record<string, unknown>
  created_at: string
}
