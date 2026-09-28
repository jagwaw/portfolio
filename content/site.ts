import type { NavItem, Person, SiteLinks, SiteSeo } from '~/types/content'

export const person: Person = {
  fullName: 'Exiequielle John Frias',
  nickname: 'XC',
  title: 'AI-Native Frontend Engineer',
  location: 'Manila, Philippines',
  locationFlag: '🇵🇭',
}

export const links: SiteLinks = {
  email: 'frias.exiequiellejohn@gmail.com',
  github: 'https://github.com/jagwaw',
  githubPortfolio: 'https://github.com/jagwaw/portfolio',
  linkedin: 'https://www.linkedin.com/in/exiequielle-john/',
  resumeUrl: '/XCResume-vue-frontend.pdf?v=4',
}

export const seo: SiteSeo = {
  title: 'Exiequielle John Frias (XC) — AI-Native Frontend Engineer',
  description:
    'Exiequielle John Frias (XC) — frontend-leaning full-stack engineer in Manila with 8+ years shipping production web apps. Vue, Nuxt, TypeScript, Tailwind, and Python APIs, built with Claude Code, Cursor, and MCP.',
  ogTitle: 'XC — AI-Native Frontend Engineer',
  ogDescription:
    'Vue/Nuxt + TypeScript engineer at BillEase shipping KYC, payments, and credit products. Python APIs on the side, AI-assisted workflow by default.',
  themeColor: '#0a0a0f',
  url: 'https://xcworks.vercel.app',
  ogImage: '/images/xc-resume-2x2.jpg',
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
