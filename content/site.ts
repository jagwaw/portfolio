import type { NavItem, Person, SiteLinks, SiteSeo } from '~/types/content'

export const person: Person = {
  fullName: 'Exiequielle John Frias',
  nickname: 'XC',
  title: 'Frontend Engineer',
  location: 'Manila, Philippines',
  locationFlag: '🇵🇭',
}

export const links: SiteLinks = {
  email: 'frias.exiequiellejohn@gmail.com',
  github: 'https://github.com/jagwaw',
  githubPortfolio: 'https://github.com/jagwaw/portfolio',
  linkedin: 'https://www.linkedin.com/in/exiequielle-john/',
  resumeUrl: '/XCResume2026.pdf?v=4',
}

export const seo: SiteSeo = {
  title: 'XC — Frontend Engineer',
  description:
    'Exiequielle John Frias (XC) — Frontend Engineer in Manila, Philippines. Shipping production UI with Vue, Nuxt, and TypeScript.',
  ogTitle: 'XC — Frontend Engineer',
  ogDescription: 'Frontend Engineer building polished product UI with Vue, Nuxt, and TypeScript.',
  themeColor: '#0a0a0f',
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
