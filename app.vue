<template>
  <div>
    <div ref="cursorDot" class="cursor-dot" />
    <div ref="cursorRing" class="cursor-ring" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const cursorDot = ref<HTMLElement | null>(null)
const cursorRing = ref<HTMLElement | null>(null)

let animFrame = 0
let onMouseMove: ((e: MouseEvent) => void) | null = null
let onPointerOver: ((e: PointerEvent) => void) | null = null
let onPointerOut: ((e: PointerEvent) => void) | null = null

onMounted(() => {
  const dot = cursorDot.value
  const ring = cursorRing.value
  if (!dot || !ring) return

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
    dot.style.left = `${mouseX}px`
    dot.style.top = `${mouseY}px`
  }

  const animateRing = () => {
    ringX = lerp(ringX, mouseX, 0.12)
    ringY = lerp(ringY, mouseY, 0.12)
    ring.style.left = `${ringX}px`
    ring.style.top = `${ringY}px`
    animFrame = requestAnimationFrame(animateRing)
  }

  onPointerOver = (e: PointerEvent) => {
    const target = e.target as HTMLElement | null
    if (target?.closest('a, button, [data-hover]')) {
      ring.classList.add('hovering')
    }
  }

  onPointerOut = (e: PointerEvent) => {
    const target = e.target as HTMLElement | null
    if (target?.closest('a, button, [data-hover]')) {
      ring.classList.remove('hovering')
    }
  }

  window.addEventListener('mousemove', onMouseMove)
  document.addEventListener('pointerover', onPointerOver)
  document.addEventListener('pointerout', onPointerOut)
  animFrame = requestAnimationFrame(animateRing)
})

onUnmounted(() => {
  if (onMouseMove) window.removeEventListener('mousemove', onMouseMove)
  if (onPointerOver) document.removeEventListener('pointerover', onPointerOver)
  if (onPointerOut) document.removeEventListener('pointerout', onPointerOut)
  cancelAnimationFrame(animFrame)
})
</script>
