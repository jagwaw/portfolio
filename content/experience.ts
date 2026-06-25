import type { ExperienceContent } from '~/types/content'

export const experience: ExperienceContent = {
  section: {
    index: '03 / Experience',
    title: "Where I've shipped",
  },
  jobs: [
    {
      company: 'Billlease',
      role: 'Full Stack Developer (Vue/Nuxt focus)',
      dateRange: 'Feb 2024 – Present',
      current: true,
      bullets: [
        'Ship responsive Vue/Nuxt + Vuetify interfaces for Billlease fintech flows used by thousands of daily end-users',
        'Refactored Vuex state for sign-up, account recovery, and verification journeys',
        'Built real-time Chat Notification UI and verification flows with WebSocket-backed updates',
        'Integrate Firebase (App Check, client SDK) in production Billlease Nuxt applications',
        'Partnered with product owners on user stories, grooming, demos, and peer code reviews',
        'Diagnosed and resolved production UI issues across mobile and desktop breakpoints',
        'Delivered Bills Upload AI UI, Pay Now Installments UI, FOMO, and Mobile Load Promo features',
      ],
    },
    {
      company: "Penbrothers (Client: Gamesys / Bally's)",
      role: 'Frontend Developer',
      dateRange: 'Oct 2021 – Jan 2024',
      bullets: [
        'Maintained and improved client-facing websites for a global gaming company',
        'Designed and implemented mobile-first, performance-conscious UI features',
        'Collaborated with European and American stakeholders on requirements and frontend delivery',
        'Participated in sprint planning, reviews, and cross-timezone communication',
      ],
    },
    {
      company: 'Narrasoft (Client: Panoply.io)',
      role: 'Python Developer',
      dateRange: 'May 2021 – Oct 2021',
      bullets: [
        'Worked on a cloud-based data warehouse platform for an Asia-based client team',
        'Created and modified data source integrations to collect data from multiple providers',
        'Collaborated with Asian stakeholders on requirements, delivery, and technical decisions',
      ],
    },
    {
      company: 'Remote Staff',
      role: 'Junior Full-Stack Developer',
      dateRange: 'Jul 2018 – May 2021',
      bullets: [
        'Built a remote classroom platform with real-time activity tracking for teachers and students',
        'Developed project and task management UIs for clients, staff, teachers, and students',
        'Collaborated with Australian clients on requirements and delivery for remote product work',
      ],
    },
  ],
}
