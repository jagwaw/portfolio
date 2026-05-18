<template>
  <section id="projects" class="relative py-28 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent pointer-events-none" />
    <div class="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div ref="label" class="gsap-hidden flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-violet-400 tracking-widest uppercase">{{ projectsContent.section.index }}</span>
        <div class="h-px flex-1 bg-violet-500/20" />
      </div>

      <h2 ref="title" class="section-heading font-display text-4xl md:text-5xl font-bold text-white mb-4 gsap-hidden">
        {{ projectsContent.work.title }}
      </h2>
      <p ref="desc" class="font-body text-slate-400 mb-12 max-w-2xl gsap-hidden">
        {{ projectsContent.work.description }}
      </p>

      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(project, i) in workProjects"
          :key="project.id"
          :ref="(el) => setWorkCardRef(el, i)"
          class="gsap-hidden"
        >
          <ProjectCard :project="project" @select="openProject" />
        </div>
      </div>

      <div ref="personalBlock" class="mt-20 gsap-hidden">
        <div class="flex items-center gap-3 mb-4">
          <h3 class="font-display text-2xl font-bold text-white">{{ projectsContent.personal.title }}</h3>
          <div class="h-px flex-1 bg-violet-500/20" />
        </div>
        <p class="font-body text-slate-400 mb-8 max-w-2xl">{{ projectsContent.personal.description }}</p>

        <div v-if="personalProjects.length" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(project, i) in personalProjects"
            :key="project.id"
            :ref="(el) => setPersonalCardRef(el, i)"
            class="gsap-hidden"
          >
            <ProjectCard :project="project" @select="openProject" />
          </div>
        </div>

        <div v-else class="glass-card p-8 text-center border-dashed border-violet-500/20">
          <p class="font-mono text-sm text-violet-300 mb-2">{{ projectsContent.personal.empty.codeComment }}</p>
          <p class="font-body text-slate-400 text-sm max-w-md mx-auto">
            {{ projectsContent.personal.empty.hint }}
            <code class="text-violet-300">{{ projectsContent.personal.empty.contentPath }}</code>
            (see the commented example). Drop thumbnails at
            <code class="text-violet-300">{{ projectsContent.personal.empty.thumbnailPath }}</code>.
          </p>
        </div>
      </div>
    </div>

    <ProjectModal :open="modalOpen" :project="selectedProject" @close="closeModal" />
  </section>
</template>

<script setup lang="ts">
import { useProjects, type Project } from '~/composables/useProjects'

const { workProjects, personalProjects, projectsContent } = useProjects()
const { reveal } = useSectionReveal()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const personalBlock = ref<HTMLElement | null>(null)
const workCardRefs = ref<HTMLElement[]>([])
const personalCardRefs = ref<HTMLElement[]>([])

const modalOpen = ref(false)
const selectedProject = ref<Project | null>(null)

const setWorkCardRef = (el: unknown, index: number) => {
  if (el) workCardRefs.value[index] = el as HTMLElement
}

const setPersonalCardRef = (el: unknown, index: number) => {
  if (el) personalCardRefs.value[index] = el as HTMLElement
}

const openProject = (project: Project) => {
  selectedProject.value = project
  modalOpen.value = true
}

const closeModal = () => {
  modalOpen.value = false
}

onMounted(() => {
  reveal([label.value, title.value, desc.value])
  reveal(workCardRefs.value, { start: 'top 90%', stagger: 0.1, duration: 0.6 })
  reveal(personalBlock.value)
  reveal(personalCardRefs.value, { start: 'top 90%', stagger: 0.1, duration: 0.6 })
})
</script>
