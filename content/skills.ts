import type { SkillsContent } from '~/types/content'

export const skills: SkillsContent = {
  section: {
    index: '02 / Skills',
    title: 'Tools of the trade',
    description:
      'Vue and Nuxt on the frontend, Python on the backend, and AI agents in the loop for all of it.',
  },
  groups: {
    frontend: [
      'Vue.js',
      'Nuxt.js 2 & 3',
      'TypeScript',
      'Tailwind CSS',
      'Vuex',
      'Vue Router',
      'JavaScript (ES6+)',
      'SCSS / SASS',
      'Webpack',
      'Vuetify',
      'Firebase',
      'React',
      'GSAP',
      'PWA',
      'WebSocket',
      'Responsive UI',
    ],
    tools: ['Claude Code', 'Cursor', 'MCP', 'Git', 'Figma', 'Postman', 'JIRA', 'ClickUp', 'Google Analytics', 'Dynatrace'],
    backend: [
      'Python',
      'Django REST Framework',
      'Django',
      'FastAPI',
      'Flask',
      'SQLAlchemy',
      'REST APIs',
    ],
    database: ['PostgreSQL', 'Redis', 'MySQL'],
    devops: ['GitLab CI', 'Docker', 'Nginx', 'AWS', 'Linux'],
  },
  categories: [
    { id: 'frontend', label: 'Frontend', icon: 'frontend' },
    { id: 'tools', label: 'AI & Tools', icon: 'tools' },
    { id: 'backend', label: 'Backend', icon: 'backend' },
    { id: 'database', label: 'Data Stores', icon: 'database' },
    { id: 'devops', label: 'CI/CD & Deployment', icon: 'devops' },
  ],
}
