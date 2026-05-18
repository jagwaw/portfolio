export interface SectionRevealOptions {
  duration?: number
  ease?: string
  start?: string
  y?: number
  /** Delay between each target (seconds) */
  stagger?: number
  /** Fixed delay on every target (seconds) */
  delay?: number
}

type RevealTarget = HTMLElement | null | undefined

export const useSectionReveal = () => {
  const cleanups: Array<() => void> = []

  const reveal = async (
    targets: RevealTarget | RevealTarget[],
    options: SectionRevealOptions = {},
  ) => {
    if (!import.meta.client) return

    const { gsap } = await import('gsap')
    const { ScrollTrigger } = await import('gsap/ScrollTrigger')
    gsap.registerPlugin(ScrollTrigger)

    const {
      duration = 0.7,
      ease = 'power3.out',
      start = 'top 85%',
      y = 0,
      stagger = 0,
      delay = 0,
    } = options

    const elements = (Array.isArray(targets) ? targets : [targets]).filter(
      (el): el is HTMLElement => !!el,
    )

    elements.forEach((el, index) => {
      const tween = gsap.to(el, {
        opacity: 1,
        y,
        duration,
        ease,
        delay: stagger ? index * stagger : delay,
        scrollTrigger: { trigger: el, start },
      })

      cleanups.push(() => {
        tween.scrollTrigger?.kill()
        tween.kill()
      })
    })
  }

  onUnmounted(() => {
    cleanups.forEach((cleanup) => cleanup())
    cleanups.length = 0
  })

  return { reveal }
}
