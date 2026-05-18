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
    { label: 'Focus', value: 'Frontend Engineering', icon: 'code' },
    { label: 'Experience', value: '8+ years', icon: 'clock' },
  ],
  currentRole: {
    label: 'Currently at',
    company: 'BillEase',
    title: 'Frontend Software Engineer',
  },
  paragraphs: [
    [
      { text: "I'm ", variant: 'default' },
      { text: 'Exiequielle John Frias', variant: 'white' },
      { text: ', a ', variant: 'default' },
      { text: 'Frontend Engineer', variant: 'accent' },
      { text: ' focused on shipping polished product UI. Most people just call me ', variant: 'default' },
      { text: 'XC', variant: 'gradient' },
      { text: '.', variant: 'default' },
    ],
    [
      { text: 'I build with ', variant: 'default' },
      { text: 'Vue', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Nuxt', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'TypeScript', variant: 'accent' },
      {
        text: ' — from fintech onboarding flows and verification UIs to component systems that scale across teams.',
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
      { key: 'role', value: 'Frontend Engineer', type: 'string' },
      { key: 'stack', value: ['Vue', 'Nuxt', 'TypeScript', 'Tailwind'], type: 'array' },
      { key: 'aiTools', value: ['Cursor', 'Claude', 'ChatGPT'], type: 'array' },
      { key: 'location', value: 'Manila, Philippines 🇵🇭', type: 'string' },
      { key: 'available', value: true, type: 'boolean' },
    ],
  },
}
