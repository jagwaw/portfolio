<template>
  <div class="relative h-36 overflow-hidden border-b border-violet-500/10" :class="flush ? 'rounded-t-xl' : 'rounded-xl mb-4'">
    <img
      v-if="!imageFailed"
      :key="imageSrc"
      :src="imageSrc"
      :alt="`${name} preview`"
      class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      @error="onImageError"
    />
    <!-- Designed cover when there is no screenshot (e.g. internal company work) -->
    <div
      v-else
      class="absolute inset-0 bg-gradient-to-br flex items-end p-5 transition-transform duration-500 group-hover:scale-105"
      :class="gradientClass"
    >
      <div class="absolute inset-0 opacity-40" :style="gridStyle" />
      <span
        class="absolute -right-3 -top-6 font-display font-bold text-[7rem] leading-none text-white/[0.04] select-none pointer-events-none"
        aria-hidden="true"
      >{{ initials }}</span>
      <p class="relative font-display font-semibold text-lg leading-snug text-white/90 max-w-[85%]">{{ name }}</p>
    </div>
    <span class="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full bg-void-900/80 border border-violet-500/30 text-violet-200 backdrop-blur-sm">
      {{ category }}
    </span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  id: string
  name: string
  category: string
  flush?: boolean
}>()

const extensions = ['jpg', 'png', 'webp'] as const
const extensionIndex = ref(0)
const imageFailed = ref(false)

const imageSrc = computed(
  () => `/images/projects/${props.id}.${extensions[extensionIndex.value]}`,
)

const initials = computed(() =>
  props.name
    .split(/\s+/)
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join(''),
)

watch(
  () => props.id,
  () => {
    extensionIndex.value = 0
    imageFailed.value = false
  },
)

function onImageError() {
  if (extensionIndex.value < extensions.length - 1) {
    extensionIndex.value += 1
    return
  }
  imageFailed.value = true
}

const gradients: Record<string, string> = {
  Fintech: 'from-violet-600/50 via-violet-900/40 to-void-900',
  EdTech: 'from-indigo-600/40 via-violet-900/30 to-void-900',
  'Data Engineering': 'from-slate-600/40 via-violet-900/20 to-void-900',
  'Internal Tool': 'from-violet-500/30 via-indigo-900/30 to-void-900',
  'Open Source': 'from-emerald-600/40 via-violet-900/30 to-void-900',
  SaaS: 'from-indigo-500/40 via-violet-900/30 to-void-900',
  'Design System': 'from-fuchsia-600/35 via-violet-900/30 to-void-900',
}

const gradientClass = computed(() => gradients[props.category] ?? gradients.Fintech)

const gridStyle = {
  backgroundImage:
    'linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
}
</script>
