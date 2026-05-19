<template>
  <div class="relative pl-10">
    <!-- Dot -->
    <div
      class="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 transition-all duration-300"
      :class="
        current
          ? 'border-violet-400 bg-violet-500/30 shadow-violet-sm'
          : 'border-slate-600 bg-void-700'
      "
    />

    <!-- Content card -->
    <div class="glass-card p-6 transition-all duration-300 hover:border-violet-500/30">
      <!-- Header -->
      <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 class="font-display font-bold text-white text-lg">{{ role }}</h3>
          <p class="font-body text-violet-300 font-medium text-sm mt-0.5">{{ company }}</p>
        </div>
        <span class="font-mono text-xs text-slate-500 whitespace-nowrap">{{ dateRange }}</span>
      </div>

      <!-- Bullets -->
      <ul class="space-y-2">
        <li
          v-for="(point, i) in bullets"
          :key="i"
          class="flex items-start gap-2.5 text-sm text-slate-400 font-body leading-relaxed"
        >
          <span class="text-violet-500 mt-1.5 flex-shrink-0 text-xs">▸</span>
          {{ point }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  role: string
  company: string
  dateRange: string
  bullets: string[]
  current?: boolean
}>()
</script>
