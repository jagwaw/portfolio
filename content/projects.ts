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
    title: "Product work I've shipped",
    description:
      'Fintech and SaaS products — KYC, payments, and credit flows in Vue/Nuxt, plus the Python work behind them. Click a card for the case study.',
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
      name: 'In-house Liveness Verification',
      description:
        'Replaced a third-party biometric liveness vendor with an in-house, browser-side detection pipeline for selfie and ID verification — from camera permission to identity confirmation, with resilient retake and recovery paths.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Tailwind CSS', 'Firebase'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'Removed a per-verification vendor cost by moving liveness detection in-house',
        'Face-coverage detection and pose gating before capture',
        'Detection thresholds tunable through remote config without a redeploy',
        'Fallback capture path and clear retake states across mobile and desktop',
      ],
    },
    {
      id: 'fintech-registration',
      name: 'Registration & Account Recovery v2',
      description:
        'KYC onboarding and a full redesign of account recovery for a consumer lending app — clearer UX, stronger bot protection, and the analytics to see where users drop off.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Vue Router', 'Tailwind CSS', 'Firebase'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'End-to-end redesign of Account Recovery v2 with case IDs surfaced to users',
        'Invisible bot protection with an always-available fallback challenge',
        'Firebase App Check failure telemetry for security monitoring',
        'Gov ID validation, address registration, and sign-up business events',
      ],
    },
    {
      id: 'chat-notifications',
      name: 'Real-time Chat Notification UI',
      description:
        'Agent-facing notification interface with real-time updates for a high-traffic fintech product — built for responsiveness, clear UX, and fast production issue resolution.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Tailwind CSS', 'WebSocket'],
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
      id: 'credit-line',
      name: 'Credit Line Product',
      description:
        'Led the frontend build of a new credit line product inside the BillEase app — activation, funding-source selection, and payments wired into four existing purchase flows.',
      stack: ['Vue.js', 'Nuxt.js', 'TypeScript', 'Vuex', 'Tailwind CSS'],
      category: 'Fintech',
      kind: 'work',
      featured: true,
      highlights: [
        'Home tab, activation, and how-to onboarding flow',
        'Funding-source selection shared across load and bills purchases',
        'OTP-gated payments, statements, favorites, and pending tasks',
        'Deep-link entry points and an API migration for availments',
      ],
    },
    {
      id: 'design-tokens',
      name: 'Figma-driven Design Tokens',
      description:
        'Moved a years-old codebase off an ad-hoc hex palette onto a token system generated from Figma, so design and code finally share one source of truth.',
      stack: ['TypeScript', 'CSS Variables', 'Tailwind CSS', 'Figma'],
      category: 'Design System',
      kind: 'work',
      highlights: [
        'Token layer: TypeScript → CSS variables → Tailwind utilities',
        'Drove the migration off legacy hex colors across the app',
        'Paired with a design refresh of payments, notifications, e-wallet, and Pay Now',
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
        'A pandemic-era platform for schools to track student activity and work remotely — built end to end, from gathering requirements with the business team to shipping the APIs and UI.',
      stack: ['Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'AngularJS'],
      category: 'EdTech',
      kind: 'work',
      highlights: [
        'Student activity tracking with screen capture and time tracking',
        'Project and task management for teachers and students',
        'REST APIs in Flask with PostgreSQL and SQLAlchemy',
      ],
    },
    {
      id: 'data-warehouse',
      name: 'Data Warehouse Platform',
      description:
        'Python maintenance work on Panoply.io, a cloud data warehouse — fixing bugs and improving existing features alongside the client engineering team.',
      stack: ['Python', 'REST APIs'],
      category: 'Data Engineering',
      kind: 'work',
      highlights: [
        'Fixed bugs and improved existing features in the Python codebase',
        'Debugged data source integrations pulling from third-party providers',
      ],
    },
  ],
  personalProjects: [
    {
      id: 'agent-desk',
      kind: 'personal',
      name: 'AgentDesk',
      description:
        'Mock NovaDesk agent console: real-time ticket queue, accept flow with race-condition handling, chat panel, connection banner, and responsive 3-column layout — built to mirror production customer-service SaaS UI.',
      stack: ['Nuxt 3', 'Vue 3', 'TypeScript', 'Vuex', 'Vuetify 3', 'SCSS', 'Vitest'],
      category: 'SaaS',
      featured: true,
      githubUrl: 'https://github.com/jagwaw/agent-desk',
      demoUrl: 'https://agent-desk-cyan.vercel.app/console',
      highlights: [
        'Vuex modules for queue, chat, and agent availability with mock real-time events',
        'Accept flow with loading, offline guard, and “claimed by another agent” edge state',
        'Chat send failures with retry-friendly error UI and resolve action',
        'Connection banner for offline/reconnecting with retry sync',
        'Responsive layout: mobile stack, tablet 2-col, desktop queue + chat + details',
      ],
    },
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
