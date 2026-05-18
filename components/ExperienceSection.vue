<template>
  <section id="experience" class="relative py-28 overflow-hidden">
    <div class="absolute inset-0 dot-bg opacity-30 pointer-events-none" />
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div ref="label" class="gsap-hidden flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-violet-400 tracking-widest uppercase">{{ experience.section.index }}</span>
        <div class="h-px flex-1 bg-violet-500/20" />
      </div>
      <h2 ref="title" class="section-heading font-display text-4xl md:text-5xl font-bold text-white mb-16 gsap-hidden">
        {{ experience.section.title }}
      </h2>
      <div class="relative max-w-3xl">
        <div class="absolute left-[6px] top-2 bottom-0 w-0.5 bg-gradient-to-b from-violet-500 via-violet-500/40 to-transparent" />
        <div class="space-y-10">
          <div
            v-for="(job, i) in experience.jobs"
            :key="job.company"
            :ref="(el) => { timelineItems[i] = el as HTMLElement }"
            class="gsap-hidden"
          >
            <TimelineItem
              :role="job.role"
              :company="job.company"
              :date-range="job.dateRange"
              :bullets="job.bullets"
              :current="job.current"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteContent } from '~/composables/useSiteContent'

const { experience } = useSiteContent()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const timelineItems = ref<HTMLElement[]>([])

const { reveal } = useSectionReveal()

onMounted(() => {
  reveal([label.value, title.value])
  reveal(timelineItems.value, { start: 'top 88%', stagger: 0.1, duration: 0.6 })
})
</script>
