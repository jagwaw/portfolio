import type { ProjectsContent } from '~/types/content'

export const projects: ProjectsContent = {
  section: {
    index: '04 / Projects',
  },
  labels: {
    personalBadge: 'Personal · Open source',
    featuredBadge: 'Featured · Frontend',
    workBadge: 'Work · Product UI',
    workCardCta: 'View case study',
    personalCardCta: 'View details',
    modalPersonalType: 'Personal project',
    modalWorkType: 'Project',
    personalModalBadge: 'Open source · GitHub',
    featuredModalBadge: 'Frontend · company-internal',
    workModalBadge: 'Company-internal project',
    viewGithub: 'View on GitHub',
    liveDemo: 'Live demo',
    techStackHeading: 'Tech Stack',
    highlightsHeading: 'Key Highlights',
    close: 'Close',
  },
  work: {
    title: "Frontend work I've shipped",
    description:
      'Product UI from Billlease and earlier roles — mostly Vue, Nuxt, and TypeScript. Click a card for the full case study.',
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
        'A frontend implementation of a real-time selfie and ID verification system using an in-house biometric SDK. Designed to handle the full user journey — from camera permission to identity confirmation — with robust error handling, liveness detection, OCR fallback, and intuitive retake support.',
      stack: ['Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Vuex'],
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
      name: 'Fintech Registration & Recovery UI',
      description:
        'Redesigned the sign-up and account recovery flows for a fintech platform, focusing on UX clarity, accessibility, and performance. Involved an overhaul of the component architecture, improved state management, and a fresh visual design aligned with brand standards.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'Full redesign of Account Recovery v2 with multi-step wizard pattern',
        'Improved form validation UX with real-time feedback',
        'Refactored Vuex state structure for auth flows',
        'Achieved significant reduction in drop-off rates during registration',
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
