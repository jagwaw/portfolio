<template>
  <div class="relative h-36 overflow-hidden border-b border-violet-500/10" :class="flush ? '-mx-6 -mt-6 rounded-t-xl' : 'rounded-xl mb-4'">
    <img
      v-if="!imageFailed"
      :src="imageSrc"
      :alt="`${name} preview`"
      class="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      @error="imageFailed = true"
    />
    <div
      v-else
      class="absolute inset-0 bg-gradient-to-br flex flex-col justify-end p-4"
      :class="gradientClass"
    >
      <div class="absolute inset-0 opacity-30" :style="gridStyle" />
      <div class="relative space-y-2">
        <div class="h-2 w-16 rounded-full bg-white/20" />
        <div class="h-2 w-full max-w-[85%] rounded-full bg-white/10" />
        <div class="h-2 w-2/3 rounded-full bg-white/10" />
        <p class="font-mono text-[10px] text-white/50 pt-1">UI preview</p>
      </div>
    </div>
    <span class="absolute top-3 right-3 font-mono text-[10px] px-2 py-0.5 rounded-full bg-void-900/80 border border-violet-500/30 text-violet-300 backdrop-blur-sm">
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

const imageSrc = computed(() => `/images/projects/${props.id}.jpg`)
const imageFailed = ref(false)

watch(() => props.id, () => { imageFailed.value = false })

const gradients: Record<string, string> = {
  Fintech: 'from-violet-600/50 via-violet-900/40 to-void-900',
  EdTech: 'from-indigo-600/40 via-violet-900/30 to-void-900',
  'Data Engineering': 'from-slate-600/40 via-violet-900/20 to-void-900',
  'Internal Tool': 'from-violet-500/30 via-indigo-900/30 to-void-900',
}

const gradientClass = computed(() => gradients[props.category] ?? gradients.Fintech)

const gridStyle = {
  backgroundImage: 'linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px)',
  backgroundSize: '20px 20px',
}
</script>
