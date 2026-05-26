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
    { label: 'Focus', value: 'Full Stack Development', icon: 'code' },
    { label: 'Experience', value: '8+ years', icon: 'clock' },
  ],
  currentRole: {
    label: 'Currently at',
    company: 'Billlease',
    title: 'Full Stack Developer',
  },
  paragraphs: [
    [
      { text: "I'm ", variant: 'default' },
      { text: 'Exiequielle John Frias', variant: 'white' },
      { text: ', a ', variant: 'default' },
      { text: 'Full Stack Developer', variant: 'accent' },
      { text: ' focused on shipping product features from interface to API to deployment. Most people just call me ', variant: 'default' },
      { text: 'XC', variant: 'gradient' },
      { text: '.', variant: 'default' },
    ],
    [
      { text: 'I build with ', variant: 'default' },
      { text: 'Vue', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Nuxt', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Django REST Framework', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'PostgreSQL', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Redis', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'Docker', variant: 'accent' },
      {
        text: ' — from fintech onboarding flows and verification UIs to APIs, async workers, realtime services, and production deployment targets.',
        variant: 'default',
      },
    ],
    [
      { text: 'I use AI tools like ', variant: 'default' },
      { text: 'Cursor', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Claude', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'ChatGPT', variant: 'accent' },
      {
        text: ' to move faster on implementation, while keeping architecture, UX decisions, and code quality in my hands.',
        variant: 'default',
      },
    ],
  ],
  codeSnippet: {
    filename: 'xc.ts',
    fields: [
      { key: 'role', value: 'Full Stack Developer', type: 'string' },
      { key: 'stack', value: ['Vue', 'Nuxt', 'Django', 'PostgreSQL', 'Redis', 'Docker'], type: 'array' },
      { key: 'aiTools', value: ['Cursor', 'Claude', 'ChatGPT'], type: 'array' },
      { key: 'location', value: 'Manila, Philippines 🇵🇭', type: 'string' },
      { key: 'available', value: true, type: 'boolean' },
    ],
  },
}
