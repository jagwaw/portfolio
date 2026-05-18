<template>
  <div class="glass-card p-4 font-mono text-sm">
    <div class="flex items-center gap-2 mb-3 pb-3 border-b border-violet-500/10">
      <div class="flex gap-1.5">
        <div class="w-3 h-3 rounded-full bg-red-500/50" />
        <div class="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div class="w-3 h-3 rounded-full bg-emerald-500/50" />
      </div>
      <span class="text-slate-600 text-xs">{{ snippet.filename }}</span>
    </div>
    <div class="space-y-1 text-xs leading-relaxed">
      <p><span class="text-indigo-400">const</span> <span class="text-white">xc</span> <span class="text-slate-500">= {</span></p>
      <p v-for="field in snippet.fields" :key="field.key" class="pl-4">
        <span class="text-violet-300">{{ field.key }}</span><span class="text-slate-500">:</span>
        <span :class="valueClass(field)">{{ formatValue(field) }}</span><span class="text-slate-500">,</span>
      </p>
      <p><span class="text-slate-500">}</span></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { AboutContent } from '~/types/content'

defineProps<{
  snippet: AboutContent['codeSnippet']
}>()

const formatValue = (field: AboutContent['codeSnippet']['fields'][number]) => {
  if (field.type === 'boolean') return String(field.value)
  if (field.type === 'array') return `[${(field.value as string[]).map((v) => `'${v}'`).join(', ')}]`
  return `'${field.value}'`
}

const valueClass = (field: AboutContent['codeSnippet']['fields'][number]) =>
  field.type === 'boolean' ? 'text-orange-400' : 'text-emerald-400'
</script>
