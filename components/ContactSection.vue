<template>
  <section id="contact" class="relative py-28 pb-16 overflow-hidden">
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />
    <div class="absolute inset-0 dot-bg opacity-20 pointer-events-none" />
    <div class="relative z-10 max-w-6xl mx-auto px-6">
      <div ref="label" class="gsap-hidden flex items-center gap-3 mb-4">
        <span class="font-mono text-xs text-violet-400 tracking-widest uppercase">{{ contact.section.index }}</span>
        <div class="h-px flex-1 bg-violet-500/20" />
      </div>
      <h2 ref="title" class="section-heading font-display text-4xl md:text-5xl font-bold text-white mb-4 gsap-hidden">
        {{ contact.section.title }}
      </h2>
      <p ref="desc" class="font-body text-slate-400 mb-14 max-w-lg gsap-hidden">{{ contact.section.description }}</p>

      <div class="grid md:grid-cols-2 gap-12 lg:gap-20">
        <div ref="formCol" class="gsap-hidden">
          <div class="glass-card p-6 space-y-5">
            <div class="flex items-center gap-2 pb-4 border-b border-violet-500/10">
              <div class="flex gap-1.5">
                <div class="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                <div class="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                <div class="w-2.5 h-2.5 rounded-full bg-emerald-500/40" />
              </div>
              <span class="font-mono text-xs text-slate-600 ml-1">{{ contact.form.filename }}</span>
            </div>
            <div>
              <label class="block font-mono text-xs text-violet-400 mb-1.5">{{ contact.form.fields.name }}</label>
              <input v-model="form.name" type="text" :placeholder="contact.form.placeholders.name" class="w-full bg-void-700 border border-void-500 hover:border-violet-500/30 focus:border-violet-500/60 rounded-lg px-4 py-3 font-body text-sm text-white placeholder-slate-500 outline-none transition-colors" />
            </div>
            <div>
              <label class="block font-mono text-xs text-violet-400 mb-1.5">{{ contact.form.fields.email }}</label>
              <input v-model="form.email" type="email" :placeholder="contact.form.placeholders.email" class="w-full bg-void-700 border border-void-500 hover:border-violet-500/30 focus:border-violet-500/60 rounded-lg px-4 py-3 font-body text-sm text-white placeholder-slate-500 outline-none transition-colors" />
            </div>
            <div>
              <label class="block font-mono text-xs text-violet-400 mb-1.5">{{ contact.form.fields.message }}</label>
              <textarea v-model="form.message" rows="5" :placeholder="contact.form.placeholders.message" class="w-full bg-void-700 border border-void-500 hover:border-violet-500/30 focus:border-violet-500/60 rounded-lg px-4 py-3 font-body text-sm text-white placeholder-slate-500 outline-none transition-colors resize-none" />
            </div>
            <button class="btn-primary w-full justify-center" data-hover @click="handleSubmit">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12L3.27 3.13a.5.5 0 01.68-.6l17.1 8.02a.5.5 0 010 .9l-17.1 8.02a.5.5 0 01-.68-.6L6 12zm0 0h7" /></svg>
              {{ contact.form.submit }}
            </button>
            <p v-if="formError" class="font-mono text-xs text-rose-400 text-center" role="alert">{{ formError }}</p>
            <p v-if="sent && !formError" class="font-mono text-xs text-emerald-400 text-center" role="status">{{ contact.form.successNote }}</p>
          </div>
        </div>

        <div ref="rightCol" class="gsap-hidden flex flex-col gap-8">
          <div>
            <h3 class="font-display font-semibold text-white mb-4">{{ contact.direct.title }}</h3>
            <a :href="`mailto:${links.email}`" class="flex items-center gap-3 text-slate-400 hover:text-violet-300 transition-colors group" data-hover>
              <span class="w-8 h-8 rounded-lg border border-void-500 group-hover:border-violet-500/40 flex items-center justify-center transition-colors">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </span>
              <span class="font-mono text-sm">{{ links.email }}</span>
            </a>
          </div>
          <div>
            <h3 class="font-display font-semibold text-white mb-4">{{ contact.social.title }}</h3>
            <div class="space-y-3">
              <a
                v-for="link in socialLinks"
                :key="link.id"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-3 group"
                data-hover
              >
                <span class="w-10 h-10 rounded-lg border border-void-500 group-hover:border-violet-500/40 group-hover:bg-violet-500/5 flex items-center justify-center text-slate-500 group-hover:text-violet-400 transition-all" v-html="link.icon" />
                <div>
                  <p class="font-display font-medium text-slate-300 group-hover:text-white transition-colors text-sm">{{ link.label }}</p>
                  <p class="font-mono text-xs text-slate-600">{{ link.handle }}</p>
                </div>
                <svg class="w-3.5 h-3.5 text-slate-600 group-hover:text-violet-400 ml-auto transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>
          <div class="glass-card p-4 font-mono text-xs">
            <p class="text-slate-600">$ <span class="text-slate-400">{{ contact.ping.command }}</span></p>
            <p class="text-slate-600 mt-1">{{ contact.ping.line1 }}</p>
            <p class="text-emerald-400 mt-1">{{ contact.ping.line2 }}</p>
            <p class="text-slate-600 mt-1">{{ contact.ping.line3 }}</p>
          </div>
        </div>
      </div>

      <div class="mt-20 pt-8 border-t border-void-500/50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="font-mono text-xs text-slate-600">{{ contact.footer.copyright }}</p>
        <p class="font-mono text-xs text-slate-700">{{ contact.footer.credit }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useSiteLinks } from '~/composables/useSiteLinks'
import { useSiteContent } from '~/composables/useSiteContent'
import { socialIcons } from '~/utils/contentIcons'

const { contact, links: linkContent } = useSiteContent()
const links = useSiteLinks()

const label = ref<HTMLElement | null>(null)
const title = ref<HTMLElement | null>(null)
const desc = ref<HTMLElement | null>(null)
const formCol = ref<HTMLElement | null>(null)
const rightCol = ref<HTMLElement | null>(null)

const form = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

const socialLinks = computed(() =>
  contact.social.links.map((item) => ({
    ...item,
    href: links[item.hrefKey],
    icon: socialIcons[item.icon],
  })),
)

const formError = ref('')

// No backend: open the visitor's email app with the message pre-filled, addressed to me.
const handleSubmit = () => {
  formError.value = ''
  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    formError.value = contact.form.errorMissing
    return
  }
  const subject = `Portfolio message from ${form.name.trim()}`
  const body = `${form.message.trim()}\n\n— ${form.name.trim()} (${form.email.trim()})`
  window.location.href = `mailto:${links.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  sent.value = true
}

const { reveal } = useSectionReveal()

onMounted(() => {
  reveal([label.value, title.value, desc.value, formCol.value, rightCol.value], { stagger: 0.1 })
})
</script>
