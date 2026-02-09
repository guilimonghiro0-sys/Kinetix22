"use client"

import { useEffect, useState, useCallback } from "react"

interface PreloaderProps {
  label?: string
  onComplete?: () => void
}

export function Preloader({
  label = "INITIALIZING_KINETIX_ENGINE",
  onComplete,
}: PreloaderProps) {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleComplete = useCallback(() => {
    onComplete?.()
  }, [onComplete])

  useEffect(() => {
    let current = 0
    const interval = setInterval(() => {
      current += Math.random() * 4
      if (current >= 100) {
        current = 100
        clearInterval(interval)
        setTimeout(() => {
          setVisible(false)
          handleComplete()
        }, 500)
      }
      setProgress(current)
    }, 40)

    return () => clearInterval(interval)
  }, [handleComplete])

  if (!visible) return null

  return (
    <div
      id="preloader"
      className="fixed inset-0 bg-black z-[10000] flex flex-col items-center justify-center transition-opacity duration-1000"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div className="font-title text-xs tracking-[1em] opacity-50 mb-4 text-center">
        {label}
      </div>
      <div className="text-3xl font-black mb-2">{Math.floor(progress)}%</div>
      <div className="loader-bar">
        <div
          className="loader-progress"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  )
}
