<template>
  <button
    type="button"
    class="glass-card p-0 text-left overflow-hidden transition-all duration-300 group hover:-translate-y-1.5 hover:shadow-card-hover flex flex-col w-full"
    data-hover
    @click="$emit('select', project)"
  >
    <ProjectThumbnail :id="project.id" :name="project.name" :category="project.category" flush />
    <div class="p-6 flex flex-col flex-1">
      <div class="mb-2">
        <span class="font-mono text-[10px] uppercase tracking-wider text-violet-400">{{ badge }}</span>
      </div>
      <h3 class="font-display font-bold text-white text-base mb-2 group-hover:text-violet-200 transition-colors">
        {{ project.name }}
      </h3>
      <p class="font-body text-slate-500 text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
        {{ project.description }}
      </p>
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tech in project.stack.slice(0, 3)"
          :key="tech"
          class="font-mono text-xs px-2 py-0.5 rounded-full border border-void-500 text-slate-600"
        >
          {{ tech }}
        </span>
        <span v-if="project.stack.length > 3" class="font-mono text-xs text-slate-600">
          +{{ project.stack.length - 3 }}
        </span>
      </div>
      <div class="flex items-center gap-1.5 text-violet-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <span class="font-mono text-xs">{{ cardCta }}</span>
        <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </div>
    </div>
  </button>
</template>

<script setup lang="ts">
import type { Project } from '~/composables/useProjects'
import { useSiteContent } from '~/composables/useSiteContent'

const { projects: projectsContent } = useSiteContent()
const labels = projectsContent.labels

const props = defineProps<{
  project: Project
}>()

defineEmits<{
  select: [project: Project]
}>()

const badge = computed(() => {
  if (props.project.kind === 'personal') return labels.personalBadge
  if (props.project.featured) return labels.featuredBadge
  return labels.workBadge
})

const cardCta = computed(() =>
  props.project.kind === 'personal' ? labels.personalCardCta : labels.workCardCta,
)
</script>
