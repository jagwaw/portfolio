import type { NavItem, Person, SiteLinks, SiteSeo } from '~/types/content'

export const person: Person = {
  fullName: 'Exiequielle John Frias',
  nickname: 'XC',
  title: 'Full Stack Developer',
  location: 'Manila, Philippines',
  locationFlag: '🇵🇭',
}

export const links: SiteLinks = {
  email: 'frias.exiequiellejohn@gmail.com',
  github: 'https://github.com/jagwaw',
  githubPortfolio: 'https://github.com/jagwaw/portfolio',
  linkedin: 'https://www.linkedin.com/in/exiequielle-john/',
  resumeUrl: '/XCResume2026.pdf?v=5',
}

export const seo: SiteSeo = {
  title: 'XC — Full Stack Developer',
  description:
    'Exiequielle John Frias (XC) — Full Stack Developer in Manila, Philippines. Shipping Vue/Nuxt interfaces, Django REST APIs, and production deployment workflows.',
  ogTitle: 'XC — Full Stack Developer',
  ogDescription: 'Full Stack Developer building Vue/Nuxt products, Django APIs, and production-ready deployment pipelines.',
  themeColor: '#0a0a0f',
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
