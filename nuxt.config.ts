import { seo } from './content/site'

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: seo.title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: seo.description },
        { property: 'og:title', content: seo.ogTitle },
        { property: 'og:description', content: seo.ogDescription },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: seo.url },
        { property: 'og:image', content: `${seo.url}${seo.ogImage}` },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: seo.ogTitle },
        { name: 'twitter:description', content: seo.ogDescription },
        { name: 'twitter:image', content: `${seo.url}${seo.ogImage}` },
        { name: 'theme-color', content: seo.themeColor },
      ],
      // If JavaScript fails or is off, never leave the page blank behind reveal animations
      noscript: [
        { innerHTML: '<style>.gsap-hidden,#hero .opacity-0{opacity:1!important;transform:none!important}</style>' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'canonical', href: seo.url },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  typescript: {
    strict: true,
  },

  compatibilityDate: '2026-05-18',
})
