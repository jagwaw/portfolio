<template>
  <div>
    <div ref="cursorRing" class="cursor-ring" />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const cursorRing = ref<HTMLElement | null>(null)

let animFrame = 0
let onMouseMove: ((e: MouseEvent) => void) | null = null
let onPointerOver: ((e: PointerEvent) => void) | null = null
let onPointerOut: ((e: PointerEvent) => void) | null = null

onMounted(() => {
  const ring = cursorRing.value
  if (!ring) return
  // Mouse users only, and never when the visitor prefers reduced motion
  if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  let mouseX = 0
  let mouseY = 0
  let ringX = 0
  let ringY = 0

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  onMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX
    mouseY = e.clientY
    if (ring.style.opacity !== '1') {
      // Start the ring under the pointer instead of sweeping in from the corner
      ringX = mouseX
      ringY = mouseY
      ring.style.opacity = '1'
    }
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
