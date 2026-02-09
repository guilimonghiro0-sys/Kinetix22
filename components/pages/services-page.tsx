"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

export function ServicesPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="LOADING_BLUEPRINTS" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.4} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="pt-48 pb-20 px-8 md:px-24">
        <div className="max-w-7xl">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
            {"// ARCHITECTURE_DETAILLEE"}
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-title leading-none tracking-tighter mb-12">
            LA MATRICE <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              {"D'INTERVENTION."}
            </span>
          </h1>
        </div>
      </section>

      {/* SERVICES BLUEPRINT */}
      <section className="pb-40 px-8 md:px-24 relative z-10 flex flex-col gap-32">
        {/* SERVICE 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-up">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono-custom text-4xl font-black text-blue-500 opacity-20">
                01
              </span>
              <h2 className="text-4xl font-bold">Web Cinematique</h2>
            </div>
            <p className="text-lg opacity-70 mb-8 leading-relaxed">
              {"Nous ne faisons pas de sites statiques. Nous creons des univers immersifs qui retiennent l'attention."}
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <div className="w-1 bg-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold">{"WebGL & 3D Interactive"}</h4>
                  <p className="text-xs opacity-50 mt-1">
                    {"Integration d'objets 3D et animations GSAP."}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 bg-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold">Performance SPA</h4>
                  <p className="text-xs opacity-50 mt-1">
                    Sites React/Next.js sans rechargement.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="order-1 lg:order-2 blueprint-container rounded-2xl">
            <div className="schematic-web absolute" />
            <div className="absolute font-mono-custom text-[9px] text-blue-500 bottom-4 right-4">
              FIG_1.0: DOM_STRUCTURE
            </div>
            <div className="absolute w-full h-[1px] bg-blue-500/20 top-1/2" />
            <div className="absolute h-full w-[1px] bg-blue-500/20 left-1/2" />
          </div>
        </div>

        {/* SERVICE 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center reveal-up">
          <div className="blueprint-container rounded-2xl">
            <div className="schematic-phone absolute" />
            <div className="absolute w-2 h-2 bg-blue-500 rounded-full animate-ping top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute font-mono-custom text-[9px] text-blue-500 bottom-4 right-4">
              FIG_2.0: REACT_NATIVE
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono-custom text-4xl font-black text-blue-500 opacity-20">
                02
              </span>
              <h2 className="text-4xl font-bold">Apps Mobiles Natives</h2>
            </div>
            <p className="text-lg opacity-70 mb-8 leading-relaxed">
              Votre entreprise dans la poche de chaque Congolais.
            </p>
            <ul className="flex flex-col gap-6">
              <li className="flex gap-4">
                <div className="w-1 bg-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold">Cross-Platform (iOS/Android)</h4>
                  <p className="text-xs opacity-50 mt-1">
                    {"Un code unique, deploiement double."}
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-1 bg-blue-500 shrink-0" />
                <div>
                  <h4 className="font-bold">Mode Hors-Ligne</h4>
                  <p className="text-xs opacity-50 mt-1">
                    {"Fonctionne meme sans connexion internet."}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
