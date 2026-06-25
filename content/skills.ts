import type { SkillsContent } from '~/types/content'

export const skills: SkillsContent = {
  section: {
    index: '02 / Skills',
    title: 'Tools of the trade',
    description:
      'Vue-first frontend tooling for SaaS product work — Vue, Vuex, Vuetify, TypeScript, SCSS, Webpack, Firebase, and real-time applications.',
  },
  groups: {
    frontend: [
      'Vue.js',
      'Vuex',
      'Vue Router',
      'Nuxt.js 2 & 3',
      'TypeScript',
      'JavaScript (ES6+)',
      'SCSS / SASS',
      'Webpack',
      'Vuetify',
      'Firebase',
      'Tailwind CSS',
      'GSAP',
      'PWA',
      'WebSocket',
      'Responsive UI',
    ],
    tools: ['Git', 'Figma', 'Postman', 'JIRA', 'Confluence', 'Bitbucket', 'ClickUp', 'Cursor', 'Claude', 'ChatGPT'],
    backend: [
      'Python',
      'Django REST Framework',
      'Django Channels',
      'Redis',
      'REST APIs',
      'FastAPI',
    ],
    database: ['PostgreSQL', 'Redis', 'MySQL'],
    devops: ['GitLab CI', 'Docker', 'Nginx', 'Linux'],
  },
  categories: [
    { id: 'frontend', label: 'Frontend', icon: 'frontend' },
    { id: 'tools', label: 'Tools & Collaboration', icon: 'tools' },
    { id: 'backend', label: 'Backend familiarity', icon: 'backend' },
    { id: 'database', label: 'Data Stores', icon: 'database' },
    { id: 'devops', label: 'CI/CD & Deployment', icon: 'devops' },
  ],
}
