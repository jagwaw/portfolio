/** Shared content models — edit copy in `content/*.ts`, not in Vue files. */

export type ProjectKind = 'work' | 'personal'

export interface SiteLinks {
  email: string
  github: string
  githubPortfolio: string
  linkedin: string
  resumeUrl: string
}

export interface SiteSeo {
  title: string
  description: string
  ogTitle: string
  ogDescription: string
  themeColor: string
}

export interface NavItem {
  id: string
  label: string
}

export interface Person {
  fullName: string
  nickname: string
  title: string
  location: string
  locationFlag?: string
}

export interface SectionHeader {
  index: string
  title: string
  description?: string
}

export interface StatItem {
  value: string
  label: string
}

export interface HeroContent {
  terminal: { path: string; command: string }
  greeting: string
  nickname: string
  typewriterPrefix: string
  roles: string[]
  bio: {
    location: string
    body: string
  }
  ctas: {
    viewWork: string
    contact: string
    resume: string
    source: string
  }
  stats: StatItem[]
  availability: string
  scrollHint: string
}

export type TextVariant = 'default' | 'white' | 'accent' | 'gradient'

export interface TextSegment {
  text: string
  variant?: TextVariant
}

export type FactIconKey = 'user' | 'location' | 'code' | 'clock'

export interface AboutFact {
  label: string
  value: string
  icon: FactIconKey
}

export interface CodeSnippetField {
  key: string
  value: string | boolean | string[]
  type: 'string' | 'boolean' | 'array'
}

export interface AboutContent {
  section: SectionHeader
  photoAlt: string
  facts: AboutFact[]
  currentRole: {
    label: string
    company: string
    title: string
  }
  paragraphs: TextSegment[][]
  codeSnippet: {
    filename: string
    fields: CodeSnippetField[]
  }
}

export type SkillCategoryId = 'frontend' | 'tools' | 'backend' | 'database' | 'devops'

export type SkillIconKey = SkillCategoryId

export interface SkillCategory {
  id: SkillCategoryId
  label: string
  icon: SkillIconKey
}

export interface SkillsContent {
  section: SectionHeader
  groups: Record<SkillCategoryId, string[]>
  categories: SkillCategory[]
}

export interface ExperienceItem {
  company: string
  role: string
  dateRange: string
  current?: boolean
  bullets: string[]
}

export interface ExperienceContent {
  section: SectionHeader
  jobs: ExperienceItem[]
}

export interface Project {
  id: string
  name: string
  description: string
  stack: string[]
  highlights: string[]
  category: string
  kind?: ProjectKind
  featured?: boolean
  githubUrl?: string
  demoUrl?: string
}

export interface ProjectLabels {
  personalBadge: string
  featuredBadge: string
  workBadge: string
  workCardCta: string
  personalCardCta: string
  modalPersonalType: string
  modalWorkType: string
  personalModalBadge: string
  featuredModalBadge: string
  workModalBadge: string
  viewGithub: string
  liveDemo: string
  techStackHeading: string
  highlightsHeading: string
  close: string
}

export interface ProjectsContent {
  section: { index: string }
  labels: ProjectLabels
  work: {
    title: string
    description: string
  }
  personal: {
    title: string
    description: string
    empty: {
      codeComment: string
      hint: string
      contentPath: string
      thumbnailPath: string
    }
  }
  workProjects: Project[]
  personalProjects: Project[]
}

export type SocialIconKey = 'github' | 'linkedin'

export interface SocialLinkConfig {
  id: string
  label: string
  handle: string
  hrefKey: keyof SiteLinks
  icon: SocialIconKey | 'portfolio'
}

export interface ContactContent {
  section: SectionHeader
  form: {
    filename: string
    fields: { name: string; email: string; message: string }
    placeholders: { name: string; email: string; message: string }
    submit: string
    sending: string
    sent: string
    successNote: string
  }
  direct: {
    title: string
  }
  social: {
    title: string
    links: SocialLinkConfig[]
  }
  ping: {
    command: string
    line1: string
    line2: string
    line3: string
  }
  footer: {
    copyright: string
    credit: string
  }
}

export interface SiteContent {
  person: Person
  links: SiteLinks
  seo: SiteSeo
  nav: NavItem[]
  hero: HeroContent
  about: AboutContent
  skills: SkillsContent
  experience: ExperienceContent
  projects: ProjectsContent
  contact: ContactContent
}
