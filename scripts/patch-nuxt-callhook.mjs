import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const target = join(root, 'node_modules/nuxt/dist/app/nuxt.js')

const broken =
  'nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);'
const fixed =
  'nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, args);'

let source
try {
  source = readFileSync(target, 'utf8')
} catch {
  console.warn('[patch-nuxt-callhook] nuxt not installed, skipping')
  process.exit(0)
}

if (source.includes(fixed)) {
  process.exit(0)
}

if (!source.includes(broken)) {
  console.warn('[patch-nuxt-callhook] expected Nuxt callHook pattern not found, skipping')
  process.exit(0)
}

writeFileSync(target, source.replace(broken, fixed))
console.log('[patch-nuxt-callhook] patched server callHook argument passing')
