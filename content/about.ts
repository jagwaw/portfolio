import type { AboutContent } from '~/types/content'

export const about: AboutContent = {
  section: {
    index: '01 / About',
    title: 'The human behind the code',
  },
  photoAlt: 'Exiequielle John Frias (XC)',
  facts: [
    { label: 'Name', value: 'Exiequielle John Frias', icon: 'user' },
    { label: 'Location', value: 'Manila, Philippines', icon: 'location' },
    { label: 'Focus', value: 'Vue/Nuxt frontend + Python APIs', icon: 'code' },
    { label: 'Experience', value: '8+ years', icon: 'clock' },
  ],
  currentRole: {
    label: 'Currently at',
    company: 'BillEase',
    title: 'Software Engineer',
  },
  paragraphs: [
    [
      { text: "I'm ", variant: 'default' },
      { text: 'Exiequielle John Frias', variant: 'white' },
      { text: ', a ', variant: 'default' },
      { text: 'frontend-leaning full-stack engineer', variant: 'accent' },
      { text: ' with 8+ years of shipping production web apps. Most people just call me ', variant: 'default' },
      { text: 'XC', variant: 'gradient' },
      { text: '.', variant: 'default' },
    ],
    [
      { text: 'At BillEase, a Philippine fintech, I build customer-facing flows with ', variant: 'default' },
      { text: 'Vue', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Nuxt', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'TypeScript', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'Tailwind', variant: 'accent' },
      {
        text: ' — KYC onboarding, ID and liveness verification, account recovery, payments, and a new credit line product — and maintain production ',
        variant: 'default',
      },
      { text: 'Python', variant: 'accent' },
      { text: ' APIs.', variant: 'default' },
    ],
    [
      { text: 'I build with AI agents by default — ', variant: 'default' },
      { text: 'Claude Code', variant: 'accent' },
      { text: ' and ', variant: 'default' },
      { text: 'Cursor', variant: 'accent' },
      { text: ', with ', variant: 'default' },
      { text: 'MCP', variant: 'accent' },
      {
        text: ' integrations for Figma and ClickUp. AI handles the repetitive parts so I ship faster; architecture, UX decisions, and code review stay in my hands.',
        variant: 'default',
      },
    ],
  ],
  codeSnippet: {
    filename: 'xc.ts',
    fields: [
      { key: 'role', value: 'AI-Native Frontend Engineer', type: 'string' },
      { key: 'stack', value: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind', 'Vuex', 'Python'], type: 'array' },
      { key: 'aiTools', value: ['Claude Code', 'Cursor', 'MCP'], type: 'array' },
      { key: 'location', value: 'Manila, Philippines 🇵🇭', type: 'string' },
      { key: 'available', value: true, type: 'boolean' },
    ],
  },
}
