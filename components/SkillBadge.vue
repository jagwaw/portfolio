<template>
  <span class="skill-pill" :class="sizeClass">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
