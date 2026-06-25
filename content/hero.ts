import type { HeroContent } from '~/types/content'

export const hero: HeroContent = {
  terminal: { path: '~/portfolio', command: 'node index.js' },
  greeting: "Hi, I'm ",
  nickname: 'XC.',
  typewriterPrefix: 'I build as a ',
  roles: ['Vue.js Developer', 'Vuex & TypeScript Engineer', 'Real-time UI Builder', 'SaaS Product Developer'],
  bio: {
    location: 'Manila, Philippines',
    body:
      'At Billlease, I build responsive Vue and Vuetify interfaces with Firebase-backed production apps — from user stories and peer review through real-time UI, performance tuning, and production support.',
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
