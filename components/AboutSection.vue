<template>
  <section id="about" class="relative py-28 overflow-hidden">
    <div class="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div ref="label" class="gsap-hidden flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-violet-400 tracking-widest uppercase">{{ about.section.index }}</span>
        <div class="h-px flex-1 bg-violet-500/20" />
      </div>
      <h2 ref="title" class="section-heading font-display text-4xl md:text-5xl font-bold text-white mb-16 gsap-hidden">
        {{ about.section.title }}
      </h2>
      <div class="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div ref="leftCol" class="gsap-hidden flex flex-col items-center md:items-start gap-8">
          <div class="relative">
            <div class="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-500/20 to-indigo-500/10 border border-violet-500/20 animate-pulse-glow shadow-violet-sm">
              <img
                :src="profilePhoto"
                :alt="about.photoAlt"
                class="w-full h-full object-cover"
                width="160"
                height="160"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-violet-500/50 rounded-br-lg" />
            <div class="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-violet-500/50 rounded-tl-lg" />
          </div>
          <div class="space-y-3 w-full max-w-xs">
            <div v-for="fact in about.facts" :key="fact.label" class="flex items-center gap-3 text-sm">
              <span class="w-5 h-5 text-violet-400 flex-shrink-0" v-html="factIcons[fact.icon]" />
              <span class="text-slate-500 font-mono text-xs">{{ fact.label }}:</span>
              <span class="text-slate-300 font-body">{{ fact.value }}</span>
            </div>
          </div>
          <div class="glass-card px-4 py-3 flex items-center gap-3 w-full max-w-xs">
            <div class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
            <div>
              <p class="font-mono text-xs text-slate-500">{{ about.currentRole.label }}</p>
              <p class="font-display font-semibold text-white text-sm">{{ about.currentRole.company }}</p>
              <p class="font-mono text-xs text-violet-400">{{ about.currentRole.title }}</p>
            </div>
          </div>
        </div>
        <div ref="rightCol" class="gsap-hidden space-y-6">
          <p
            v-for="(paragraph, pi) in about.paragraphs"
            :key="pi"
            class="font-body leading-relaxed"
            :class="pi === 0 ? 'text-slate-300 text-lg' : 'text-slate-400'"
          >
            <ContentSegment v-for="(segment, si) in paragraph" :key="si" :segment="segment" />
          </p>
          <AboutCodeSnippet :snippet="about.codeSnippet" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import profilePhoto from '~/assets/img/xc.jpg'
import { factIcons } from '~/utils/contentIcons'
import { useSiteContent } from '~/composables/useSiteContent'

const { about } = useSiteContent()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const leftCol = ref<HTMLElement | null>(null)
const rightCol = ref<HTMLElement | null>(null)

const { reveal } = useSectionReveal()

onMounted(() => {
  reveal([label.value, title.value, leftCol.value, rightCol.value], { stagger: 0.1 })
})
</script>
