"use client"

import { useEffect, useRef } from "react"

interface ParticleBackgroundProps {
  particleCount?: number
  color?: number
  opacity?: number
  size?: number
  interactive?: boolean
}

export function ParticleBackground({
  particleCount = 1200,
  color = 0x3b82f6,
  opacity = 0.7,
  size = 0.012,
  interactive = true,
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    let animationId: number
    let mouseX = 0

    const initThree = async () => {
      const THREE = await import("three")

      const renderer = new THREE.WebGLRenderer({ canvas, alpha: true })
      const dpr = Math.min(window.devicePixelRatio, 2)
      renderer.setPixelRatio(dpr)
      renderer.setSize(window.innerWidth, window.innerHeight)

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      )
      camera.position.z = 5

      const geometry = new THREE.BufferGeometry()
      const positions = new Float32Array(particleCount * 3)
      for (let i = 0; i < particleCount * 3; i++) {
        positions[i] = (Math.random() - 0.5) * 15
      }
      geometry.setAttribute(
        "position",
        new THREE.BufferAttribute(positions, 3)
      )

      const material = new THREE.PointsMaterial({
        size,
        color,
        transparent: true,
        opacity,
      })

      const particles = new THREE.Points(geometry, material)
      scene.add(particles)

      if (interactive) {
        const handleMouseMove = (e: MouseEvent) => {
          mouseX = (e.clientX / window.innerWidth - 0.5) * 2
        }
        document.addEventListener("mousemove", handleMouseMove)
      }

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener("resize", handleResize)

      const animate = () => {
        animationId = requestAnimationFrame(animate)
        particles.rotation.y += 0.0008
        if (interactive) {
          particles.position.x +=
            (mouseX * 0.4 - particles.position.x) * 0.05
        }
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener("resize", handleResize)
        cancelAnimationFrame(animationId)
        renderer.dispose()
        geometry.dispose()
        material.dispose()
      }
    }

    const cleanup = initThree()

    return () => {
      cleanup.then((fn) => fn?.())
      cancelAnimationFrame(animationId)
    }
  }, [particleCount, color, opacity, size, interactive])

  return <canvas ref={canvasRef} id="webgl-canvas" />
}
