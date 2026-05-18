<template>
  <section
    id="hero"
    class="relative min-h-screen flex items-center justify-center overflow-hidden dot-bg"
  >
    <div class="absolute inset-0 bg-hero-glow pointer-events-none" />
    <div class="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-violet-500/5 blur-3xl animate-float pointer-events-none" />
    <div class="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-indigo-500/5 blur-3xl animate-float pointer-events-none" style="animation-delay: -3s" />
    <canvas ref="particleCanvas" class="absolute inset-0 pointer-events-none opacity-40" />

    <div class="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div class="max-w-3xl">
        <div ref="promptLine" class="font-mono text-sm text-violet-400/70 mb-6 opacity-0">
          <span class="text-violet-500">{{ hero.terminal.path }}</span>
          <span class="text-slate-500"> $ </span>
          <span class="text-slate-400">{{ hero.terminal.command }}</span>
          <span class="inline-block w-2 h-4 bg-violet-400 ml-1 animate-pulse" />
        </div>

        <h1
          ref="heading"
          class="font-display font-black leading-[1.05] mb-4 opacity-0"
          style="font-size: clamp(3rem, 8vw, 6rem)"
        >
          <span class="text-white">{{ hero.greeting }}</span>
          <span class="gradient-text">{{ hero.nickname }}</span>
        </h1>

        <div ref="subtitle" class="font-display text-2xl md:text-3xl font-medium text-slate-300 mb-6 opacity-0 min-h-[1.5em]">
          <span class="text-slate-500">{{ hero.typewriterPrefix }}</span>
          <span class="text-violet-300 border-r-2 border-violet-400">{{ displayedRole }}</span>
        </div>

        <p ref="bio" class="font-body text-slate-400 text-lg leading-relaxed max-w-xl mb-10 opacity-0">
          {{ person.title }} based in
          <span class="text-violet-300 font-medium">{{ hero.bio.location }}</span>.
          {{ hero.bio.body }}
        </p>

        <div ref="ctaRow" class="flex flex-wrap gap-4 opacity-0">
          <button class="btn-primary" data-hover @click="scrollTo('projects')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>
            {{ hero.ctas.viewWork }}
          </button>
          <button class="btn-ghost" data-hover @click="scrollTo('contact')">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            {{ hero.ctas.contact }}
          </button>
          <a :href="links.resumeUrl" target="_blank" rel="noopener noreferrer" class="btn-ghost" data-hover>{{ hero.ctas.resume }}</a>
          <a :href="links.githubPortfolio" target="_blank" rel="noopener noreferrer" class="btn-ghost" data-hover>{{ hero.ctas.source }}</a>
        </div>

        <div ref="statsRow" class="flex flex-wrap gap-8 mt-16 opacity-0">
          <div v-for="stat in hero.stats" :key="stat.label" class="flex flex-col">
            <span class="font-display font-bold text-3xl text-white">{{ stat.value }}</span>
            <span class="font-body text-sm text-slate-500 mt-0.5">{{ stat.label }}</span>
          </div>
          <div class="w-px bg-violet-500/20 self-stretch hidden sm:block" />
          <div class="flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span class="font-mono text-sm text-slate-400">{{ hero.availability }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
      <span class="font-mono text-xs text-slate-500">{{ hero.scrollHint }}</span>
      <div class="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteLinks } from '~/composables/useSiteLinks'
import { useScrollTo } from '~/composables/useScrollTo'
import { useSiteContent } from '~/composables/useSiteContent'

const { hero, person } = useSiteContent()
const links = useSiteLinks()
const { scrollTo } = useScrollTo()

const promptLine = ref<HTMLElement | null>(null)
const heading = ref<HTMLElement | null>(null)
const subtitle = ref<HTMLElement | null>(null)
const bio = ref<HTMLElement | null>(null)
const ctaRow = ref<HTMLElement | null>(null)
const statsRow = ref<HTMLElement | null>(null)
const particleCanvas = ref<HTMLCanvasElement | null>(null)

const roles = hero.roles
const displayedRole = ref('')
let roleIndex = 0
let charIndex = 0
let isDeleting = false
let typewriterTimer: ReturnType<typeof setTimeout>

const typewriter = () => {
  const current = roles[roleIndex]
  if (isDeleting) {
    displayedRole.value = current.slice(0, charIndex--)
    if (charIndex < 0) {
      isDeleting = false
      roleIndex = (roleIndex + 1) % roles.length
      typewriterTimer = setTimeout(typewriter, 500)
      return
    }
  } else {
    displayedRole.value = current.slice(0, ++charIndex)
    if (charIndex === current.length) {
      isDeleting = true
      typewriterTimer = setTimeout(typewriter, 2000)
      return
    }
  }
  typewriterTimer = setTimeout(typewriter, isDeleting ? 50 : 80)
}

const initParticles = (canvas: HTMLCanvasElement) => {
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight }
  resize()
  window.addEventListener('resize', resize)
  const particles: Array<{ x: number; y: number; vx: number; vy: number; size: number; opacity: number }> = []
  for (let i = 0; i < 60; i++) {
    particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, size: Math.random() * 1.5 + 0.5, opacity: Math.random() * 0.5 + 0.1 })
  }
  let animId: number
  const draw = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particles.forEach((p) => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0) p.x = canvas.width
      if (p.x > canvas.width) p.x = 0
      if (p.y < 0) p.y = canvas.height
      if (p.y > canvas.height) p.y = 0
      ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(139, 92, 246, ${p.opacity})`; ctx.fill()
    })
    particles.forEach((a, i) => {
      particles.slice(i + 1).forEach((b) => {
        const dist = Math.hypot(a.x - b.x, a.y - b.y)
        if (dist < 120) {
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y)
          ctx.strokeStyle = `rgba(124, 58, 237, ${0.08 * (1 - dist / 120)})`; ctx.lineWidth = 0.5; ctx.stroke()
        }
      })
    })
    animId = requestAnimationFrame(draw)
  }
  draw()
  onUnmounted(() => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) })
}

onMounted(async () => {
  if (particleCanvas.value) initParticles(particleCanvas.value)
  await nextTick()

  const { gsap } = await import('gsap')
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
  tl.to(promptLine.value, { opacity: 1, y: 0, duration: 0.5 })
    .to(heading.value, { opacity: 1, y: 0, duration: 0.7 }, '-=0.2')
    .to(subtitle.value, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to(bio.value, { opacity: 1, y: 0, duration: 0.6 }, '-=0.3')
    .to(ctaRow.value, { opacity: 1, y: 0, duration: 0.5 }, '-=0.2')
    .to(statsRow.value, { opacity: 1, y: 0, duration: 0.5 }, '-=0.1')
    .call(() => typewriter())
})

onUnmounted(() => clearTimeout(typewriterTimer))
</script>
