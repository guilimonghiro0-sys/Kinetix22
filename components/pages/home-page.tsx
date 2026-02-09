"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { MonitorPlay, Smartphone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

export function HomePage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader
        label="INITIALIZING_KINETIX_ENGINE"
        onComplete={() => setLoaded(true)}
      />
      <CustomCursor />
      <ParticleBackground />
      <Navbar />

      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center px-6 md:px-24 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-full pointer-events-none opacity-10">
          <h1
            className="text-[20vw] font-black font-title leading-none"
            style={{
              WebkitTextStroke: "1px white",
              color: "transparent",
            }}
          >
            KINETIX
          </h1>
        </div>
        <div className="max-w-7xl relative z-10">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8 overflow-hidden">
            <span className={`inline-block transition-transform duration-1000 ease-out ${loaded ? "translate-y-0" : "translate-y-full"}`}>
              {"// L'ELITE_DIGITALE_DE_KINSHASA"}
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-[11rem] font-black font-title leading-[0.9] tracking-tighter mb-12 break-words">
            <div className="text-reveal">
              <span className={`char ${loaded ? "!translate-y-0" : ""}`} style={{ transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                BEYOND
              </span>
            </div>
            <div className="text-reveal">
              <span
                className={`text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-white char ${loaded ? "!translate-y-0" : ""}`}
                style={{ transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.1s" }}
              >
                LIMITS.
              </span>
            </div>
          </h1>
          <div
            className={`flex flex-col md:flex-row items-start md:items-center gap-12 transition-opacity duration-1000 ${loaded ? "opacity-100" : "opacity-0"}`}
            style={{ transitionDelay: "0.8s" }}
          >
            <p className="text-base md:text-2xl font-light opacity-50 max-w-lg leading-relaxed italic">
              {"\"Nous architecturons le futur numerique de la RDC. Pas de templates. Pas de limites. Juste du code pur et de l'emotion.\""}
            </p>
            <Link
              href="/projets"
              className="px-8 py-4 border border-white/20 hover:border-blue-500 hover:bg-blue-500/10 rounded-full transition-all font-mono-custom text-xs tracking-widest uppercase text-center w-full md:w-auto"
            >
              Explorer le Nexus
            </Link>
          </div>
        </div>
      </section>

      {/* PARTENAIRES */}
      <div className="px-6 md:px-24 mb-32">
        <p className="font-mono-custom text-[9px] text-gray-600 uppercase tracking-widest mb-8 border-t border-white/10 pt-8">
          Trusted By
        </p>
        <div className="flex flex-wrap items-center gap-12 md:gap-20">
          <Image
            src="/images/WEACT.png"
            alt="WE_ACT"
            width={120}
            height={50}
            className="partner-logo"
          />
          <Image
            src="/images/TALKBYEZER.png"
            alt="TALK_BY_EZER"
            width={120}
            height={50}
            className="partner-logo"
          />
          <Image
            src="/images/RAWBANK.png"
            alt="RAWBANK"
            width={120}
            height={50}
            className="partner-logo"
          />
          <div className="partner-logo font-title font-bold text-xl text-gray-400 border border-gray-600 p-2 rounded !filter-none !opacity-50 hover:!opacity-100">
            CLIENT_RDC
          </div>
        </div>
      </div>

      {/* SERVICES PREVIEW */}
      <section className="py-20 md:py-40 px-6 md:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-start mb-32">
          <div className="lg:sticky lg:top-40">
            <h2 className="text-blue-500 font-mono-custom text-[10px] tracking-[0.6em] mb-6 uppercase reveal-side">
              Nos Armes Digitales
            </h2>
            <h3 className="text-4xl md:text-7xl font-black font-title tracking-tighter leading-none mb-12 reveal-side">
              {"L'ART DU"} <br />
              <span className="text-blue-500">MOUVEMENT.</span>
            </h3>
            <p className="text-lg md:text-xl opacity-40 leading-relaxed max-w-md reveal-side">
              {"Chaque pixel est orchestre. Chaque interaction est une emotion. Nous fusionnons la force brute du code et la poesie du design."}
            </p>
            <Link
              href="/services"
              className="inline-block mt-8 text-sm font-mono-custom tracking-widest text-blue-500 hover:text-white transition-colors reveal-side"
            >
              {"VOIR LES SCHEMAS TECHNIQUES ->"}
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="glass glare-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group cursor-pointer hover:border-blue-500 transition-all reveal-up">
              <div className="flex justify-between items-center mb-10">
                <MonitorPlay className="w-8 h-8 text-blue-500" />
                <span className="font-mono-custom text-[9px] opacity-30">
                  01_WEB_CINEMATIC
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Sites Immersifs
              </h4>
              <p className="text-sm opacity-50 leading-relaxed">
                {"WebGL et GSAP pour des experiences fluides a 120fps."}
              </p>
            </div>

            <div className="glass glare-card p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] group cursor-pointer hover:border-blue-500 transition-all reveal-up">
              <div className="flex justify-between items-center mb-10">
                <Smartphone className="w-8 h-8 text-blue-500" />
                <span className="font-mono-custom text-[9px] opacity-30">
                  02_MOBILE_ELITE
                </span>
              </div>
              <h4 className="text-2xl md:text-3xl font-bold mb-4">
                Apps Natives
              </h4>
              <p className="text-sm opacity-50 leading-relaxed">
                {"iOS et Android. Des interactions tactiles qui semblent naturelles."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
