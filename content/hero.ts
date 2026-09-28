import type { HeroContent } from '~/types/content'

export const hero: HeroContent = {
  terminal: { path: '~/portfolio', command: 'node index.js' },
  greeting: "Hi, I'm ",
  nickname: 'XC.',
  typewriterPrefix: 'I build as a ',
  roles: ['Frontend Engineer', 'Vue & Nuxt Specialist', 'Full-Stack Builder', 'AI-Native Developer'],
  bio: {
    location: 'Manila, Philippines',
    body:
      'At BillEase, I ship customer-facing Vue/Nuxt + TypeScript flows for KYC, payments, and credit products — and I build with Claude Code, Cursor, and MCP every day.',
  },
  ctas: {
    viewWork: 'View My Work',
    contact: 'Get In Touch',
    resume: 'Resume',
    source: 'Source',
  },
  stats: [
    { value: '8+', label: 'Years Experience' },
    { value: '4', label: 'Companies' },
    { value: '3,400+', label: 'Commits at BillEase' },
  ],
  availability: 'Available for opportunities',
  scrollHint: 'scroll',
}
