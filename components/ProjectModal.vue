<template>
  <Teleport to="body">
    <Transition name="modal">
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="titleId"
        @click.self="emit('close')"
        @keydown.escape="emit('close')"
      >
        <div class="absolute inset-0 bg-void-950/90 backdrop-blur-md" @click="emit('close')" />

        <div
          ref="panelRef"
          class="relative z-10 w-full max-w-2xl glass-card border-violet-500/20 overflow-hidden max-h-[90vh] flex flex-col"
        >
          <div class="p-6 border-b border-violet-500/10 flex items-start justify-between gap-4">
            <div>
              <div class="flex items-center gap-2 mb-2">
                <span class="w-1.5 h-1.5 rounded-full bg-violet-400" />
                <span class="font-mono text-xs text-violet-400 uppercase tracking-widest">
                  {{ project?.kind === 'personal' ? labels.modalPersonalType : labels.modalWorkType }}
                </span>
              </div>
              <h3 :id="titleId" class="font-display font-bold text-2xl text-white">{{ project?.name }}</h3>
            </div>
            <button
              type="button"
              class="flex-shrink-0 w-8 h-8 rounded-lg border border-void-500 text-slate-500 hover:text-white hover:border-violet-500/50 transition-all flex items-center justify-center"
              :aria-label="labels.close"
              data-hover
              @click="emit('close')"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div class="overflow-y-auto flex-1">
            <ProjectThumbnail
              v-if="project"
              :id="project.id"
              :name="project.name"
              :category="project.category"
              flush
            />
            <div class="p-6 space-y-6">
              <p class="font-body text-slate-300 leading-relaxed">{{ project?.description }}</p>

              <div v-if="project?.kind === 'personal' && (project.githubUrl || project.demoUrl)" class="flex flex-wrap gap-3">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-ghost !py-2 !px-4 !text-sm"
                  data-hover
                >
                  {{ labels.viewGithub }}
                </a>
                <a
                  v-if="project.demoUrl"
                  :href="project.demoUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn-primary !py-2 !px-4 !text-sm"
                  data-hover
                >
                  {{ labels.liveDemo }}
                </a>
              </div>

              <div>
                <h4 class="font-display font-semibold text-sm text-slate-400 uppercase tracking-widest mb-3">
                  {{ labels.techStackHeading }}
                </h4>
                <div class="flex flex-wrap gap-2">
                  <SkillBadge v-for="tech in project?.stack" :key="tech" :name="tech" />
                </div>
              </div>

              <div v-if="project?.highlights?.length">
                <h4 class="font-display font-semibold text-sm text-slate-400 uppercase tracking-widest mb-3">
                  {{ labels.highlightsHeading }}
                </h4>
                <ul class="space-y-2">
                  <li
                    v-for="(h, i) in project.highlights"
                    :key="i"
                    class="flex items-start gap-2.5 text-sm text-slate-400"
                  >
                    <span class="text-violet-500 mt-1 flex-shrink-0">▸</span>
                    {{ h }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="p-4 border-t border-violet-500/10 flex items-center justify-between gap-4">
            <span class="font-mono text-xs text-slate-600">{{ footerLabel }}</span>
            <button type="button" class="btn-ghost !py-1.5 !px-4 !text-xs" data-hover @click="emit('close')">
              {{ labels.close }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'
import { useSiteContent } from '~/composables/useSiteContent'

const { projects: projectsContent } = useSiteContent()
const labels = projectsContent.labels

const props = defineProps<{
  open: boolean
  project: Project | null
}>()

const emit = defineEmits<{
  close: []
}>()

const panelRef = ref<HTMLElement | null>(null)
const titleId = `project-modal-title-${useId()}`

const footerLabel = computed(() => {
  if (props.project?.kind === 'personal') return labels.personalModalBadge
  if (props.project?.featured) return labels.featuredModalBadge
  return labels.workModalBadge
})

watch(
  () => props.open,
  (isOpen) => {
    if (!import.meta.client) return
    document.body.style.overflow = isOpen ? 'hidden' : ''
    if (isOpen) {
      nextTick(() => panelRef.value?.querySelector('button')?.focus())
    }
  },
)

onUnmounted(() => {
  if (import.meta.client) document.body.style.overflow = ''
})
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}
.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
.modal-enter-from .relative {
  transform: scale(0.96) translateY(12px);
  opacity: 0;
}
</style>
