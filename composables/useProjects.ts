import { useSiteContent } from '~/composables/useSiteContent'

export type { Project, ProjectKind } from '~/types/content'

export const useProjects = () => {
  const { projects } = useSiteContent()

  return {
    projects: [...projects.workProjects, ...projects.personalProjects],
    workProjects: projects.workProjects,
    personalProjects: projects.personalProjects,
    projectsContent: projects,
  }
}
