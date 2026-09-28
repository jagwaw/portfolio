import type { ExperienceContent } from '~/types/content'

export const experience: ExperienceContent = {
  section: {
    index: '03 / Experience',
    title: "Where I've shipped",
  },
  jobs: [
    {
      company: 'BillEase',
      role: 'Software Engineer',
      dateRange: 'Feb 2024 – Present',
      current: true,
      bullets: [
        "Core contributor to BillEase's consumer lending web app — 3,400+ commits across KYC onboarding, payments, and credit products",
        'Replaced a third-party liveness verification vendor with an in-house detection pipeline, removing a per-verification vendor cost',
        'Led the frontend build of the new Credit Line product: activation, funding-source selection, OTP-gated payments, statements, and deep links across four purchase flows',
        'Redesigned Account Recovery end to end, adding invisible bot protection with a fallback challenge and security telemetry',
        'Drove the migration to a Figma-driven design-token system (TypeScript → CSS variables → Tailwind), ending years of style drift',
        'Owned the design refresh across payments, notifications, e-wallet, auto-renew, and Pay Now',
        "Introduced the team's change-spec practice — proposal, task checklist, and implementation record per feature",
        'Maintain production Python APIs and business analytics events across sign-up, bills, cash loan, promo, and credit line',
      ],
    },
    {
      company: "Penbrothers (Client: Gamesys / Bally's)",
      role: 'Frontend Developer',
      dateRange: 'Oct 2021 – Jan 2024',
      bullets: [
        'Built and maintained responsive, mobile-first interfaces for high-traffic gaming sites',
        'Owned technical SEO: site speed, mobile responsiveness, and crawlability fixes, with regular performance reports',
        'Set up Google Analytics and Dynatrace, built KPI dashboards, and shipped fixes for bottlenecks found in real-user data',
        'Analyzed A/B test results to recommend site improvements; wrote unit tests and reviewed code across time zones with European and US teams',
      ],
    },
    {
      company: 'NarraSoft (Client: Panoply.io)',
      role: 'Python Developer',
      dateRange: 'May 2021 – Oct 2021',
      bullets: [
        "Fixed bugs and improved existing features across a cloud data warehouse platform's Python codebase",
        'Debugged and maintained data source integrations pulling from third-party providers',
        "Worked with the client's engineering team on requirements, fixes, and releases",
      ],
    },
    {
      company: 'Remote Staff',
      role: 'Junior Full-Stack Developer',
      dateRange: 'Jul 2018 – May 2021',
      bullets: [
        'Built Remote Classroom end to end — student activity tracking, screen capture, time tracking, and task management for schools',
        'Designed and built its REST APIs in Flask with PostgreSQL and SQLAlchemy',
        'Migrated a legacy Python 2.7 API to Python 3.7, rebuilding it on FastAPI',
        "Rebuilt the client-facing candidate page (v2) and built the company's pricing page, working directly with Australian clients",
      ],
    },
  ],
}
