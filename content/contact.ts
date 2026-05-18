import type { ContactContent } from '~/types/content'

export const contact: ContactContent = {
  section: {
    index: '05 / Contact',
    title: "Let's work together",
    description: "Have a project in mind, or just want to connect? Drop a message — I'll get back to you.",
  },
  form: {
    filename: 'new-message.send',
    fields: { name: '// name', email: '// email', message: '// message' },
    placeholders: { name: 'Your name', email: 'you@example.com', message: "What's on your mind?" },
    submit: 'Send Message',
    sending: 'Sending...',
    sent: 'Message Sent!',
    successNote: "✓ Thanks! I'll reply as soon as possible.",
  },
  direct: {
    title: 'Get in touch directly',
  },
  social: {
    title: 'Find me online',
    links: [
      { id: 'github', label: 'GitHub', handle: 'github.com/jagwaw', hrefKey: 'github', icon: 'github' },
      {
        id: 'portfolio',
        label: 'Portfolio source',
        handle: 'github.com/jagwaw/portfolio',
        hrefKey: 'githubPortfolio',
        icon: 'portfolio',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        handle: 'linkedin.com/in/exiequielle-john',
        hrefKey: 'linkedin',
        icon: 'linkedin',
      },
    ],
  },
  ping: {
    command: 'ping xc',
    line1: 'PING xc.dev (127.0.0.1): 56 bytes',
    line2: '64 bytes from xc: time=1ms',
    line3: 'Round-trip: always fast 🚀',
  },
  footer: {
    copyright: '© 2025 XC. Built with Nuxt 3 & ☕',
    credit: 'Designed & developed by Exiequielle John Frias',
  },
}
