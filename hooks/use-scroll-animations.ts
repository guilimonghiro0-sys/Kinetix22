"use client"

import { useEffect } from "react"

export function useScrollAnimations(active: boolean = true) {
  useEffect(() => {
    if (!active) return

    const loadGsap = async () => {
      const gsapModule = await import("gsap")
      const scrollModule = await import("gsap/ScrollTrigger")
      const gsap = gsapModule.default
      gsap.registerPlugin(scrollModule.ScrollTrigger)

      gsap.utils.toArray<HTMLElement>(".reveal-up").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 85%" },
          y: 80,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
      })

      gsap.utils.toArray<HTMLElement>(".reveal-side").forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: { trigger: elem, start: "top 85%" },
          x: -50,
          opacity: 0,
          duration: 1.2,
          ease: "power3.out",
        })
      })
    }

    loadGsap()
  }, [active])
}
