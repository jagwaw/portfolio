import type { ProjectsContent } from '~/types/content'

export const projects: ProjectsContent = {
  section: {
    index: '04 / Projects',
  },
  labels: {
    personalBadge: 'Personal · Open source',
    featuredBadge: 'Featured · Full stack',
    workBadge: 'Work · Product engineering',
    workCardCta: 'View case study',
    personalCardCta: 'View details',
    modalPersonalType: 'Personal project',
    modalWorkType: 'Project',
    personalModalBadge: 'Open source · GitHub',
    featuredModalBadge: 'Full stack · company-internal',
    workModalBadge: 'Company-internal project',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live demo',
    techStackHeading: 'Tech Stack',
    highlightsHeading: 'Key Highlights',
    close: 'Close',
  },
  work: {
    title: "Vue product work I've shipped",
    description:
      'Customer-facing SaaS and fintech interfaces — responsive Vue/Nuxt frontends, Vuex state, real-time UI, and production support. Click a card for the full case study.',
  },
  personal: {
    title: 'Personal projects',
    description:
      'Open-source demos on my GitHub — built to show fintech-grade UI patterns. Each repo includes a live demo when deployed.',
    empty: {
      codeComment: '// personalProjects[]',
      hint: 'Add your GitHub projects in',
      contentPath: 'content/projects.ts',
      thumbnailPath: 'public/images/projects/{id}.jpg',
    },
  },
  workProjects: [
    {
      id: 'liveness-verification',
      name: 'Liveness Verification Flow',
      description:
        'A real-time selfie and ID verification flow using an in-house biometric SDK, API-backed verification states, and resilient user recovery paths. Designed to handle the full journey — from camera permission to identity confirmation — with robust error handling, liveness detection, OCR fallback, and intuitive retake support.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Vuetify', 'Firebase', 'Django Channels', 'Redis'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'Integrated Innovatrics SDK for real-time liveness detection',
        'Built OCR fallback flow for failed ID scans',
        'Implemented multi-step retake flow with user-friendly error states',
        'Designed accessible camera capture UI across mobile and desktop',
      ],
    },
    {
      id: 'fintech-registration',
      name: 'Fintech Registration & Recovery Platform',
      description:
        'Redesigned sign-up and account recovery flows for a fintech platform, pairing UX clarity and component architecture with API integrations, auth state handling, and deployment-aware delivery.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Vue Router', 'Vuetify', 'SCSS', 'Firebase'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'Full redesign of Account Recovery v2 with multi-step wizard pattern',
        'Improved form validation UX with real-time feedback',
        'Refactored Vuex state structure for auth and recovery flows',
        'Reduced drop-off during registration through clearer UX and responsive layouts',
      ],
    },
    {
      id: 'chat-notifications',
      name: 'Real-time Chat Notification UI',
      description:
        'Agent-facing notification interface with real-time updates for a high-traffic fintech product — built for responsiveness, clear UX, and fast production issue resolution.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Vuetify', 'Firebase', 'WebSocket', 'SCSS'],
      category: 'SaaS',
      kind: 'work',
      featured: true,
      highlights: [
        'Built responsive notification UI with real-time WebSocket updates',
        'Structured Vuex modules for unread state and notification routing',
        'Tuned performance for frequent updates without UI jank',
        'Supported production troubleshooting across mobile and desktop',
      ],
    },
    {
      id: 'billlease-platform-delivery',
      name: 'Billlease Platform Delivery Stack',
      description:
        'Production delivery work across backend services, async workers, realtime channels, and CI/CD automation for fintech product releases.',
      stack: [
        'Python 3.9',
        'Django 4.1',
        'Django REST Framework',
        'Celery',
        'RabbitMQ',
        'Kafka',
        'Docker',
        'GitLab CI',
        'Ansible',
      ],
      category: 'Platform',
      kind: 'work',
      featured: true,
      highlights: [
        'Supported Gunicorn, Nginx, Daphne, and systemd service patterns for production serving',
        'Worked with PostgreSQL, Redis, RabbitMQ, and Kafka-backed services',
        'Used Docker Compose and registry images to standardize deployable services',
        'Contributed to GitLab CI and semantic-release workflows for repeatable releases',
      ],
    },
    {
      id: 'activity-tracker',
      name: 'Activity Tracking System',
      description:
        'An internal platform designed to monitor and record user activity, project assignments, and task progress across a distributed remote work environment.',
      stack: ['JavaScript', 'PHP', 'Python', 'MySQL'],
      category: 'Internal Tool',
      kind: 'work',
      highlights: [
        'Dashboard showing real-time activity status across all team members',
        'Project and task assignment system with timeline views',
        'Automated daily/weekly summary reports',
      ],
    },
    {
      id: 'remote-classroom',
      name: 'Remote Classroom Platform',
      description:
        'Early-career full-stack project: a classroom management system to track teacher and student activity in real time.',
      stack: ['JavaScript', 'jQuery', 'PHP', 'Python', 'Django'],
      category: 'EdTech',
      kind: 'work',
      highlights: [
        'Real-time activity tracking with WebSocket-based session monitoring',
        'Teacher-student assignment system with progress tracking',
        'Role-based access for students, teachers, and admins',
      ],
    },
    {
      id: 'data-warehouse',
      name: 'Data Warehouse Integrations',
      description:
        'Backend-focused work on a cloud data warehouse platform — building connectors and ingestion pipelines with clean, testable Python.',
      stack: ['Python', 'FastAPI', 'SQLAlchemy', 'PostgreSQL'],
      category: 'Data Engineering',
      kind: 'work',
      highlights: [
        'Developed multiple data source connectors for third-party APIs',
        'Wrote comprehensive unit tests for all integration modules',
        'Optimized database queries for large-scale data ingestion',
      ],
    },
  ],
  personalProjects: [
    {
      id: 'nova-ui',
      kind: 'personal',
      name: 'NovaUI',
      description:
        'Fintech & support SaaS component library on Vuetify 3 — typed APIs, agent-console variants, design tokens, and SDK-style docs for NvButton, NvInput, and NvDialog.',
      stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuetify 3', 'SCSS'],
      category: 'Open Source',
      featured: true,
      githubUrl: 'https://github.com/jagwaw/nova-ui',
      demoUrl: 'https://novaui-mocha.vercel.app/',
      highlights: [
        'Wraps Vuetify with consistent variants, density presets, and agent-alert tones',
        'Design tokens page mapping colors, spacing, typography, and elevation',
        'Component docs with live previews, props/emits tables, and copy-to-clipboard snippets',
        'Dark theme default with novaDark/novaLight Vuetify theme registration',
      ],
    },
    {
      id: 'statecraft',
      kind: 'personal',
      name: 'Statecraft',
      description:
        'Flow modeling before UI: edit states and transitions, analyze gaps, preview legal paths, and export a typed useFlowMachine() skeleton.',
      stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Tailwind CSS'],
      category: 'Open Source',
      featured: true,
      githubUrl: 'https://github.com/jagwaw/statecraft',
      demoUrl: 'https://statecraft-lyart.vercel.app/',
      highlights: [
        'Editor with draft validation and localStorage persistence',
        'Analysis: unreachable states, dead ends, and broken transition targets',
        'Preview runner with illegal-transition feedback and keyboard navigation',
        'Composable + Mermaid export for handoff to production code',
      ],
    },
  ],
}
