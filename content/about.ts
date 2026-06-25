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
    { label: 'Focus', value: 'Vue.js & Frontend Development', icon: 'code' },
    { label: 'Experience', value: '8+ years', icon: 'clock' },
  ],
  currentRole: {
    label: 'Currently at',
    company: 'Billlease',
    title: 'Vue.js Developer',
  },
  paragraphs: [
    [
      { text: "I'm ", variant: 'default' },
      { text: 'Exiequielle John Frias', variant: 'white' },
      { text: ', a ', variant: 'default' },
      { text: 'Vue.js Developer', variant: 'accent' },
      { text: ' focused on responsive interfaces, Vuex state, and real-time product experiences. Most people just call me ', variant: 'default' },
      { text: 'XC', variant: 'gradient' },
      { text: '.', variant: 'default' },
    ],
    [
      { text: 'At Billlease, I build with ', variant: 'default' },
      { text: 'Vue', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Vuex', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Vue Router', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'TypeScript', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'SCSS', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'Webpack', variant: 'accent' },
      { text: ', ', variant: 'default' },
      { text: 'Vuetify', variant: 'accent' },
      { text: ', and ', variant: 'default' },
      { text: 'Firebase', variant: 'accent' },
      {
        text: ' — shipping customer-facing flows, real-time notification UIs, and performance-conscious interfaces for products used by thousands of daily end-users.',
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
      { key: 'role', value: 'Vue.js Developer', type: 'string' },
      { key: 'stack', value: ['Vue', 'Vuex', 'Vue Router', 'Vuetify', 'TypeScript', 'SCSS', 'Webpack', 'Firebase'], type: 'array' },
      { key: 'aiTools', value: ['Cursor', 'Claude', 'ChatGPT'], type: 'array' },
      { key: 'location', value: 'Manila, Philippines 🇵🇭', type: 'string' },
      { key: 'available', value: true, type: 'boolean' },
    ],
  },
}
