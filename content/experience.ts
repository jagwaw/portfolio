import type { ExperienceContent } from '~/types/content'

export const experience: ExperienceContent = {
  section: {
    index: '03 / Experience',
    title: "Where I've shipped",
  },
  jobs: [
    {
      company: 'Billlease',
      role: 'Full Stack Developer',
      dateRange: 'Feb 2024 – Present',
      current: true,
      bullets: [
        'Implemented redesigned flows for Account Recovery v2 and sign-up registration',
        'Built product features across Vue/Nuxt frontends and Django REST API integrations',
        'Worked with Django Channels, Daphne, Redis, Celery, RabbitMQ, and Kafka-backed services for realtime and asynchronous workflows',
        'Supported GitLab CI, semantic-release, Docker registry images, and Ansible/systemd deployment scripts for AWS EC2/RDS/S3-style targets',
        'Integrated liveness detection using in-house Innovatrics SDK and backend verification flows',
        'Built Chat Notification UI, Bills Upload AI UI, Pay Now Installments UI, FOMO, and Mobile Load Promo features',
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
