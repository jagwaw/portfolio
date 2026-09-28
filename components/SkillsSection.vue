<template>
  <section id="skills" class="relative py-24 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-radial from-violet-500/5 via-transparent to-transparent pointer-events-none" />
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div ref="label" class="gsap-hidden flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-violet-400 tracking-widest uppercase">{{ skills.section.index }}</span>
        <div class="h-px flex-1 bg-violet-500/20" />
      </div>
      <h2 ref="title" class="section-heading font-display text-4xl md:text-5xl font-bold text-white mb-4 gsap-hidden">
        {{ skills.section.title }}
      </h2>
      <p ref="desc" class="font-body text-slate-400 mb-12 max-w-lg gsap-hidden">{{ skills.section.description }}</p>

      <!-- Every category visible at once: nothing hidden behind tabs or truncated -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="(cat, i) in skills.categories"
          :key="cat.id"
          :ref="(el) => { cards[i] = el as HTMLElement }"
          class="gsap-hidden glass-card p-6"
          :class="cat.id === 'frontend' ? 'lg:col-span-2' : ''"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="text-violet-400" aria-hidden="true" v-html="skillIcons[cat.icon]" />
            <h3 class="font-display font-semibold text-white">{{ cat.label }}</h3>
          </div>
          <ul class="flex flex-wrap gap-2">
            <li v-for="skill in skills.groups[cat.id]" :key="skill">
              <SkillBadge :name="skill" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { skillIcons } from '~/utils/contentIcons'
import { useSiteContent } from '~/composables/useSiteContent'

const { skills } = useSiteContent()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const cards = ref<HTMLElement[]>([])

const { reveal } = useSectionReveal()

onMounted(() => {
  reveal([label.value, title.value, desc.value], { stagger: 0.08 })
  reveal(cards.value, { stagger: 0.06, start: 'top 90%' })
})
</script>
