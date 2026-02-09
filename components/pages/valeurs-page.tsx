"use client"

import { useState } from "react"
import Image from "next/image"
import { Crosshair, ShieldCheck, Zap, Flag } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

const values = [
  {
    num: "01",
    icon: Crosshair,
    title: "Precision",
    desc: "Un pixel decale est une erreur. Une seconde de latence est un echec. Nous visons la perfection mathematique.",
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Transparence",
    desc: "Pas de jargon cache. Vous avez acces a notre Dashboard pour voir l'avancee du code en temps reel.",
  },
  {
    num: "03",
    icon: Zap,
    title: "Velocite",
    desc: "Le marche de Kinshasa bouge vite. Nous deployons rapidement pour tester, apprendre et iterer.",
  },
  {
    num: "04",
    icon: Flag,
    title: "RDC First",
    desc: "Standards de la Silicon Valley, adaptes aux realites locales (bande passante, mobile money).",
  },
]

export function ValeursPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="LOADING_CORE_VALUES" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.4} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-20 px-8 md:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-7xl relative z-10">
            <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
              {"// PROTOCOLE_INTERNE"}
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-title leading-none tracking-tighter mb-12">
              NOTRE <br />
              <span
                className="text-transparent"
                style={{ WebkitTextStroke: "1px white" }}
              >
                CODE.
              </span>
            </h1>
            <p className="text-xl opacity-60 max-w-lg leading-relaxed">
              {"Nous ne sommes pas des mercenaires. Nous sommes des architectes. Voici les lois immuables qui dirigent Kinetix."}
            </p>
          </div>
          <div className="relative h-[500px] w-full rounded-[2rem] overflow-hidden reveal-up border border-white/10 group">
            <div className="absolute inset-0 bg-blue-500/20 mix-blend-overlay z-10" />
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
              alt="Chipset"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
            />
            <div className="absolute bottom-10 left-10 z-20">
              <div className="font-mono-custom text-xs bg-black/80 px-4 py-2 border border-white/20 backdrop-blur-md">
                SYS_INTEGRITY_CHECK: PASS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 px-8 md:px-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.num} className="value-card reveal-up">
                <div className="font-mono-custom text-4xl font-black opacity-10 mb-4">
                  {value.num}
                </div>
                <h3 className="text-3xl font-bold mb-4 flex items-center gap-4">
                  <Icon className="text-blue-500" />
                  {value.title}
                </h3>
                <p className="opacity-60 leading-relaxed">{value.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      <Footer />
    </>
  )
}
