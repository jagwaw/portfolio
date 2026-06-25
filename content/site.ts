import type { NavItem, Person, SiteLinks, SiteSeo } from '~/types/content'

export const person: Person = {
  fullName: 'Exiequielle John Frias',
  nickname: 'XC',
  title: 'Vue.js Developer',
  location: 'Manila, Philippines',
  locationFlag: '🇵🇭',
}

export const links: SiteLinks = {
  email: 'frias.exiequiellejohn@gmail.com',
  github: 'https://github.com/jagwaw',
  githubPortfolio: 'https://github.com/jagwaw/portfolio',
  linkedin: 'https://www.linkedin.com/in/exiequielle-john/',
  resumeUrl: '/XCResume-vue-frontend.pdf?v=3',
}

export const seo: SiteSeo = {
  title: 'XC — Vue.js Developer',
  description:
    'Exiequielle John Frias (XC) — Vue.js Developer in Manila, Philippines. Building responsive SaaS interfaces with Vue, Vuex, Vuetify, TypeScript, Firebase, and real-time production apps.',
  ogTitle: 'XC — Vue.js Developer',
  ogDescription:
    'Vue.js Developer shipping responsive product UIs with Vuex, Vuetify, Firebase, real-time features, and production support for high-traffic web applications.',
  themeColor: '#0a0a0f',
}

export const nav: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]
