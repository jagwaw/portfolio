import { about } from './about'
import { contact } from './contact'
import { experience } from './experience'
import { hero } from './hero'
import { projects } from './projects'
import { links, nav, person, seo } from './site'
import { skills } from './skills'
import type { SiteContent } from '~/types/content'

export const siteContent: SiteContent = {
  person,
  links,
  seo,
  nav,
  hero,
  about,
  skills,
  experience,
  projects,
  contact,
}

export { about, contact, experience, hero, projects, links, nav, person, seo, skills }
