import type { ExperienceContent } from '~/types/content'

export const experience: ExperienceContent = {
  section: {
    index: '03 / Experience',
    title: "Where I've shipped",
  },
  jobs: [
    {
      company: 'Billlease',
      role: 'Frontend Software Engineer',
      dateRange: 'Feb 2024 – Present',
      current: true,
      bullets: [
        'Implemented redesigned flows for Account Recovery v2 and sign-up registration',
        'Integrated liveness detection using in-house Innovatrics SDK on the frontend',
        'Built Chat Notification UI, Bills Upload AI UI, and Pay Now Installments UI',
        'Developed FOMO feature and Mobile Load Promo Feature for user engagement campaigns',
        'Led frontend implementation of TOTP Retirement, migrating users to updated auth flows',
        'Built Activation 2.0 UI, improving the onboarding and account activation experience',
      ],
    },
    {
      company: "Penbrothers (Client: Gamesys / Bally's)",
      role: 'Frontend Developer',
      dateRange: 'Oct 2021 – Jan 2024',
      bullets: [
        'Maintained and improved client-facing websites for a global gaming company',
        'Designed and implemented mobile-first features for better user experience',
        'Collaborated with European and American stakeholders on requirements, reviews, and frontend delivery',
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
        'Wrote clean, testable, PEP-compliant Python code for new features and bug fixes',
      ],
    },
    {
      company: 'Remote Staff',
      role: 'Junior Full-Stack Developer',
      dateRange: 'Jul 2018 – May 2021',
      bullets: [
        'Collaborated with Australian clients on requirements and delivery for remote product work',
        'Built a remote classroom platform tracking real-time user activity throughout the day',
        'Developed a project and task management system for clients and staff',
        'Created an activity and task management system for teachers and students',
      ],
    },
  ],
}
