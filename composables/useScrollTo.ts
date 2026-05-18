const DEFAULT_OFFSET = 80

export const useScrollTo = (offset = DEFAULT_OFFSET) => {
  const scrollTo = (id: string) => {
    if (!import.meta.client) return
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return { scrollTo }
}
