"use client"

import { useEffect, useRef } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const followerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)").matches
    if (!isDesktop) return

    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const handleMouseMove = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`
      follower.style.transform = `translate(${e.clientX - 20}px, ${e.clientY - 20}px)`
    }

    document.addEventListener("mousemove", handleMouseMove)
    return () => document.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <>
      <div ref={cursorRef} id="custom-cursor" />
      <div ref={followerRef} id="cursor-follower" />
    </>
  )
}
