import type { SkillsContent } from '~/types/content'

export const skills: SkillsContent = {
  section: {
    index: '02 / Skills',
    title: 'Tools of the trade',
    description:
      'Full-stack tooling from fintech product work: Vue/Nuxt frontends, Django APIs, realtime systems, workers, and production deployment pipelines.',
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
    backend: [
      'Python 3.9',
      'Django 4.1',
      'Django REST Framework',
      'FastAPI',
      'Django Channels',
      'Daphne',
      'Gunicorn',
      'Celery',
      'RabbitMQ',
      'Kafka',
      'REST APIs',
    ],
    database: ['PostgreSQL', 'Redis', 'MySQL', 'MongoDB'],
    devops: [
      'Docker',
      'Docker Compose',
      'Docker Registry',
      'GitLab CI',
      'semantic-release',
      'Ansible',
      'systemd',
      'Nginx',
      'AWS EC2 / RDS / S3',
      'Linux',
    ],
  },
  categories: [
    { id: 'frontend', label: 'Frontend', icon: 'frontend' },
    { id: 'tools', label: 'Tools & AI', icon: 'tools' },
    { id: 'backend', label: 'Backend & Realtime', icon: 'backend' },
    { id: 'database', label: 'Data Stores', icon: 'database' },
    { id: 'devops', label: 'CI/CD & Deployment', icon: 'devops' },
  ],
}
