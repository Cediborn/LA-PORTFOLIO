import { useEffect } from 'react'

const REDUCED = '(prefers-reduced-motion: reduce)'

/**
 * Adds .is-in to every [data-reveal] element as it scrolls into view.
 * One observer for the whole page — cheap, and elements are unobserved
 * once revealed so nothing keeps running after the animation.
 */
export function useReveal() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return

    const reduced = window.matchMedia(REDUCED).matches
    if (reduced || !('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('is-in'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-in')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
    )

    nodes.forEach((n) => observer.observe(n))
    return () => observer.disconnect()
  }, [])
}
