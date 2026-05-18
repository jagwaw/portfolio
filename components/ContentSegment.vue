<template>
  <span :class="variantClass">{{ segment.text }}</span>
</template>

<script setup lang="ts">
import type { TextSegment, TextVariant } from '~/types/content'

const props = defineProps<{
  segment: TextSegment
}>()

const variantClass = computed(() => {
  const map: Record<TextVariant, string> = {
    default: '',
    white: 'text-white font-semibold',
    accent: 'text-violet-300',
    gradient: 'gradient-text font-bold',
  }
  return map[props.segment.variant ?? 'default']
})
</script>
