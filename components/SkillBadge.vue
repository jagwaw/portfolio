<template>
  <span class="skill-pill">
    {{ name }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>
