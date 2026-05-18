<template>
  <section id="skills" class="relative py-28 overflow-hidden">
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

      <div ref="tabs" class="gsap-hidden flex flex-wrap gap-2 mb-10">
        <button
          v-for="cat in skills.categories"
          :key="cat.id"
          class="px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 border"
          :class="activeCategory === cat.id ? 'bg-violet-500/20 border-violet-500/50 text-violet-200' : 'border-void-500 text-slate-500 hover:text-slate-300 hover:border-slate-600 bg-transparent'"
          @click="activeCategory = cat.id"
          data-hover
        >
          {{ cat.label }}
        </button>
      </div>

      <div ref="skillsGrid" class="gsap-hidden">
        <TransitionGroup name="skills" tag="div" class="flex flex-wrap gap-3">
          <SkillBadge v-for="skill in activeSkills" :key="skill" :name="skill" />
        </TransitionGroup>
      </div>

      <div ref="overview" class="gsap-hidden mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div
          v-for="cat in skills.categories"
          :key="cat.id"
          class="glass-card p-5 transition-all duration-300 cursor-default"
          :class="activeCategory === cat.id ? 'border-violet-500/40' : ''"
          @click="activeCategory = cat.id"
          data-hover
        >
          <div class="flex items-center gap-3 mb-3">
            <span class="text-violet-400" v-html="skillIcons[cat.icon]" />
            <h3 class="font-display font-semibold text-white text-sm">{{ cat.label }}</h3>
            <span class="ml-auto font-mono text-xs text-slate-600">{{ skills.groups[cat.id].length }}</span>
          </div>
          <p class="font-mono text-xs text-slate-500 leading-relaxed">
            {{ skills.groups[cat.id].slice(0, 4).join(', ') }}{{ skills.groups[cat.id].length > 4 ? '...' : '' }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SkillCategoryId } from '~/types/content'
import { skillIcons } from '~/utils/contentIcons'
import { useSiteContent } from '~/composables/useSiteContent'

const { skills } = useSiteContent()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const tabs = ref<HTMLElement | null>(null)
const skillsGrid = ref<HTMLElement | null>(null)
const overview = ref<HTMLElement | null>(null)

const activeCategory = ref<SkillCategoryId>('frontend')
const activeSkills = computed(() => skills.groups[activeCategory.value] ?? [])

const { reveal } = useSectionReveal()

onMounted(() => {
  reveal([label.value, title.value, desc.value, tabs.value, skillsGrid.value, overview.value], {
    stagger: 0.08,
  })
})
</script>

<style scoped>
.skills-enter-active { transition: all 0.3s ease; }
.skills-leave-active { transition: all 0.2s ease; }
.skills-enter-from { opacity: 0; transform: translateY(8px) scale(0.95); }
.skills-leave-to { opacity: 0; transform: translateY(-4px) scale(0.95); }
.skills-move { transition: transform 0.3s ease; }
</style>
