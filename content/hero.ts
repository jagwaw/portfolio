import type { HeroContent } from '~/types/content'

export const hero: HeroContent = {
  terminal: { path: '~/portfolio', command: 'node index.js' },
  greeting: "Hi, I'm ",
  nickname: 'XC.',
  typewriterPrefix: 'I build as a ',
  roles: ['Full Stack Developer', 'Vue/Nuxt Engineer', 'Django API Developer', 'Deployment-Focused Builder'],
  bio: {
    location: 'Manila, Philippines',
    body: 'I ship production products across Vue/Nuxt frontends, Django REST APIs, realtime services, and deployment pipelines.',
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
