"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

const team = [
  { name: "Guili M.", role: "Architecte Systeme", image: "/images/GM..jpg" },
  { name: "NARCISSE M.", role: "Fullstack Engineer", image: "/images/NARCISSE.jpg" },
  {
    name: "EPHRAIM Y.",
    role: "Lead Engineer 3D",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
]

export function AboutPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="DECRYPTING_DATA" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.5} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-20 px-8 md:px-24">
        <div className="max-w-7xl">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
            {"// LE_LABORATOIRE_CENTRAL"}
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-title leading-none tracking-tighter mb-12">
            {"L'ORIGINE DU"} <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              CODE.
            </span>
          </h1>
          <p className="text-xl opacity-60 max-w-2xl leading-relaxed">
            {"Kinetix n'est pas ne dans une salle de reunion climatisee, mais devant un ecran noir a 3h du matin. C'est l'histoire d'une obsession pour la perfection numerique a Kinshasa."}
          </p>
        </div>
      </section>

      {/* HISTOIRE / TIMELINE */}
      <section className="py-20 px-8 md:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-blue-500/20 blur-[50px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <Image
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              alt="Bureau Kinetix"
              width={800}
              height={600}
              className="rounded-[2rem] opacity-60 grayscale hover:grayscale-0 transition-all duration-700 w-full relative z-10 border border-white/5"
            />
            <div className="absolute bottom-10 left-10 z-20 font-mono-custom text-xs tracking-widest bg-black/50 backdrop-blur-sm px-4 py-2 rounded border border-white/10">
              HQ_GOMBE // ZONE_DE_DEV
            </div>
          </div>

          <div className="relative pl-10 flex flex-col gap-20">
            <div className="timeline-line" />

            <div className="relative reveal-up">
              <div className="timeline-point" style={{ top: 8 }} />
              <span className="font-mono-custom text-blue-500 text-xs tracking-widest block mb-2">
                2023 // GENESIS
              </span>
              <h3 className="text-3xl font-bold mb-4">{"L'Anomalie"}</h3>
              <p className="opacity-50 text-sm leading-relaxed">
                {"Constat alarmant : 90% des sites web en RDC etaient lents, non-securises et bases sur des templates depasses. La decision est prise de creer une \"Force Speciale\" du digital."}
              </p>
            </div>

            <div className="relative reveal-up">
              <div className="timeline-point" style={{ top: 8 }} />
              <span className="font-mono-custom text-blue-500 text-xs tracking-widest block mb-2">
                2026 // KINETIX V1
              </span>
              <h3 className="text-3xl font-bold mb-4">Le Deploiement</h3>
              <p className="opacity-50 text-sm leading-relaxed">
                {"Ouverture officielle des bureaux a Gombe. Premier contrat majeur avec une Fintech locale. Lancement de notre framework proprietaire \"ZenMode\"."}
              </p>
            </div>

            <div className="relative reveal-up">
              <div
                className="timeline-point"
                style={{
                  top: 8,
                  borderColor: "#10B981",
                  boxShadow: "0 0 10px rgba(16, 185, 129, 0.5)",
                }}
              />
              <span className="font-mono-custom text-emerald-500 text-xs tracking-widest block mb-2">
                2025 // EXPANSION
              </span>
              <h3 className="text-3xl font-bold mb-4">La Domination</h3>
              <p className="opacity-50 text-sm leading-relaxed">
                {"Integration de l'IA generative dans nos workflows. Kinetix devient la reference standard pour les entreprises qui refusent la mediocrite."}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-20 px-8 md:px-24">
        <div className="mb-20 text-center reveal-up">
          <h2 className="text-blue-500 font-mono-custom text-[10px] tracking-[0.6em] mb-6 uppercase">
            Les Operateurs
          </h2>
          <h3 className="text-4xl md:text-6xl font-black font-title tracking-tighter leading-none">
            {"L'UNITE"} <span className="text-blue-500">CENTRALE.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div key={member.name} className="team-card reveal-up">
              <div className="team-img-wrapper h-[400px] mb-6 bg-white/5">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="team-img object-cover"
                />
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold mb-1">{member.name}</h4>
                <div className="font-mono-custom text-[9px] text-blue-500 tracking-[0.2em] uppercase">
                  {member.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
