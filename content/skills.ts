import type { SkillsContent } from '~/types/content'

export const skills: SkillsContent = {
  section: {
    index: '02 / Skills',
    title: 'Tools of the trade',
    description:
      'Frontend-first tooling from years of shipping production UI — plus backend familiarity when products need it.',
  },
  groups: {
    frontend: [
      'Vue.js',
      'Nuxt.js 2 & 3',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'SASS/SCSS',
      'Vuex / Pinia',
      'GSAP',
      'PWA',
      'WebSocket',
      'Responsive UI',
    ],
    tools: ['Git', 'Figma', 'Cursor', 'Claude', 'ChatGPT', 'Postman', 'JIRA', 'Confluence', 'Bitbucket', 'ClickUp'],
    backend: ['REST API', 'FastAPI', 'Python', 'Django', 'PHP', 'Symfony', 'SQLAlchemy', 'JWT'],
    database: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
    devops: ['Docker', 'NGINX', 'Linux', 'AWS'],
  },
  categories: [
    { id: 'frontend', label: 'Frontend', icon: 'frontend' },
    { id: 'tools', label: 'Tools & AI', icon: 'tools' },
    { id: 'backend', label: 'Also: Backend', icon: 'backend' },
    { id: 'database', label: 'Databases', icon: 'database' },
    { id: 'devops', label: 'DevOps', icon: 'devops' },
  ],
}
