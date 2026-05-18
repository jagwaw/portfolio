<template>
  <header
    ref="navbar"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'bg-void-900/90 backdrop-blur-xl border-b border-violet-500/10 py-3' : 'py-5'"
  >
    <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <button
        class="font-display font-bold text-xl tracking-tight group"
        @click="scrollTo('hero')"
        data-hover
      >
        <span class="text-white group-hover:text-violet-300 transition-colors duration-300">{{ person.nickname }}</span>
        <span class="text-violet-400">.</span>
      </button>

      <!-- Desktop nav -->
      <nav class="hidden md:flex items-center gap-1">
        <button
          v-for="item in nav"
          :key="item.id"
          class="relative px-4 py-2 text-sm font-medium font-body transition-colors duration-200 rounded-md group"
          :class="
            activeSection === item.id
              ? 'text-violet-300'
              : 'text-slate-400 hover:text-slate-200'
          "
          @click="scrollTo(item.id)"
          data-hover
        >
          <span
            v-if="activeSection === item.id"
            class="absolute inset-0 bg-violet-500/10 rounded-md"
          />
          {{ item.label }}
        </button>

        <a
          :href="links.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost ml-2 !py-2 !px-4 !text-sm"
          data-hover
        >
          {{ hero.ctas.resume }}
        </a>
        <a
          :href="`mailto:${links.email}`"
          class="btn-primary ml-2 !py-2 !px-5 !text-sm"
          data-hover
        >
          {{ hero.ctas.contact }}
        </a>
      </nav>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 group"
        @click="mobileOpen = !mobileOpen"
        data-hover
        aria-label="Toggle menu"
      >
        <span
          class="block h-0.5 w-6 bg-slate-400 transition-all duration-300 origin-center"
          :class="mobileOpen ? 'rotate-45 translate-y-2' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-slate-400 transition-all duration-300"
          :class="mobileOpen ? 'opacity-0 scale-x-0' : ''"
        />
        <span
          class="block h-0.5 w-6 bg-slate-400 transition-all duration-300 origin-center"
          :class="mobileOpen ? '-rotate-45 -translate-y-2' : ''"
        />
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="md:hidden bg-void-800/95 backdrop-blur-xl border-t border-violet-500/10 px-6 py-4 flex flex-col gap-1"
      >
        <button
          v-for="item in nav"
          :key="item.id"
          class="text-left px-4 py-3 text-sm font-medium font-body rounded-md transition-all duration-200"
          :class="
            activeSection === item.id
              ? 'text-violet-300 bg-violet-500/10'
              : 'text-slate-400 hover:text-slate-200 hover:bg-void-600'
          "
          @click="scrollTo(item.id); mobileOpen = false"
        >
          {{ item.label }}
        </button>
        <a
          :href="links.resumeUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-ghost mt-2 justify-center !text-sm"
          @click="mobileOpen = false"
        >
          {{ hero.ctas.resume }}
        </a>
        <a
          :href="`mailto:${links.email}`"
          class="btn-primary mt-2 justify-center !text-sm"
          @click="mobileOpen = false"
        >
          {{ hero.ctas.contact }}
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { useSiteLinks } from '~/composables/useSiteLinks'
import { useScrollTo } from '~/composables/useScrollTo'
import { useSiteContent } from '~/composables/useSiteContent'

const { nav, person, hero } = useSiteContent()
const links = useSiteLinks()
const { scrollTo } = useScrollTo()

const scrolled = ref(false)
const mobileOpen = ref(false)
const activeSection = ref('hero')
const navbar = ref<HTMLElement | null>(null)

const onScroll = () => {
  scrolled.value = window.scrollY > 30

  const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'contact']
  for (const id of [...sectionIds].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
