import type { HeroContent } from '~/types/content'

export const hero: HeroContent = {
  terminal: { path: '~/portfolio', command: 'node index.js' },
  greeting: "Hi, I'm ",
  nickname: 'XC.',
  typewriterPrefix: 'I build as a ',
  roles: ['Frontend Engineer', 'Vue.js Developer', 'Nuxt Specialist', 'UI Engineer'],
  bio: {
    location: 'Manila, Philippines',
    body: 'I ship production UI with Vue, Nuxt, and TypeScript — with a sharp eye for UX, performance, and polish.',
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
    { value: '10+', label: 'Projects Shipped' },
  ],
  availability: 'Available for opportunities',
  scrollHint: 'scroll',
}
