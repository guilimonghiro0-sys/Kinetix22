"use client"

import { useState } from "react"
import { Zap, Globe, TrendingUp, ChevronDown } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

const perks = [
  {
    icon: Zap,
    title: "Materiel de Guerre",
    desc: "MacBook Pro M3 Max et ecrans 4K fournis a chaque membre de l'unite.",
  },
  {
    icon: Globe,
    title: "Remote First",
    desc: "Travaillez depuis notre QG a Gombe ou depuis chez vous. Seul le resultat compte.",
  },
  {
    icon: TrendingUp,
    title: "Salaires en USD",
    desc: "Remuneration alignee sur les standards internationaux, pas locaux.",
  },
]

const jobs = [
  {
    title: "Senior React Engineer",
    tag: "REMOTE",
    tagColor: "bg-blue-500/20 text-blue-500",
    stack: "STACK: NEXT.JS, TYPESCRIPT, THREE.JS",
  },
  {
    title: "3D WebGL Artist",
    tag: "GOMBE",
    tagColor: "bg-emerald-500/20 text-emerald-500",
    stack: "STACK: BLENDER, SPLINE, GSAP",
  },
]

const faqs = [
  {
    q: "Quel est le processus de recrutement ?",
    a: "Notre processus est impitoyable mais juste. 1. Analyse du portfolio (GitHub/Behance). 2. Test technique (Code Challenge de 4h). 3. Entretien \"Culture Fit\" avec les fondateurs. Nous ne recrutons pas sur CV, mais sur preuves.",
  },
  {
    q: "Acceptez-vous les freelances ?",
    a: "Oui. Nous avons un reseau d'agents \"Black Ops\" que nous activons pour des missions specifiques. Si vous etes un expert dans une niche (Cybersec, 3D avancee), envoyez vos coordonnees.",
  },
  {
    q: "Quelle est la stack technique principale ?",
    a: "Nous sommes agnostiques mais preferons l'ecosysteme JavaScript moderne : React/Next.js pour le front, Node/Python pour le back, et WebGL/Three.js pour l'immersion.",
  },
  {
    q: "Offrez-vous des stages ?",
    a: "Uniquement via notre programme \"Kinetix Academy\" qui a lieu une fois par an. Suivez notre flux neural (Blog) pour les annonces d'ouverture.",
  },
]

export function RejoindrePage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="SCANNING_CANDIDATE" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.4} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-20 px-8 md:px-24">
        <div className="max-w-7xl">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
            {"// REJOINDRE_L'UNITE"}
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-title leading-none tracking-tighter mb-12">
            ETES-VOUS <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              {"L'ELITE ?"}
            </span>
          </h1>
          <p className="text-xl opacity-60 max-w-2xl leading-relaxed">
            {"Kinetix n'est pas pour tout le monde. Nous cherchons les 1% de developpeurs et creatifs a Kinshasa qui sont obsedes par la performance, l'esthetique et l'innovation."}
          </p>
        </div>
      </section>

      {/* PERKS */}
      <section className="py-20 px-8 md:px-24 relative z-10 border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {perks.map((perk) => {
            const Icon = perk.icon
            return (
              <div key={perk.title} className="flex flex-col gap-4 reveal-up">
                <Icon className="w-10 h-10 text-blue-500" />
                <h3 className="text-2xl font-bold">{perk.title}</h3>
                <p className="opacity-50 text-sm">{perk.desc}</p>
              </div>
            )
          })}
        </div>
      </section>

      {/* JOBS */}
      <section className="py-20 px-8 md:px-24">
        <h2 className="text-4xl font-bold mb-12 font-title">
          SLOTS DISPONIBLES
        </h2>
        <div className="flex flex-col gap-4">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="glass p-8 rounded-2xl flex flex-col md:flex-row justify-between items-center group hover:bg-white/5 cursor-pointer reveal-up"
            >
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <h3 className="text-2xl font-bold">{job.title}</h3>
                  <span
                    className={`px-2 py-1 ${job.tagColor} text-[10px] font-mono-custom tracking-widest rounded`}
                  >
                    {job.tag}
                  </span>
                </div>
                <p className="opacity-50 font-mono-custom text-xs">
                  {job.stack}
                </p>
              </div>
              <button className="mt-6 md:mt-0 px-8 py-3 border border-white/20 rounded-full hover:bg-blue-500 hover:border-blue-500 transition-all font-mono-custom text-xs tracking-widest">
                POSTULER
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 px-8 md:px-24 relative z-10 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-6">
              {"// BASE_DE_CONNAISSANCE"}
            </div>
            <h2 className="text-5xl font-black font-title">
              {"PROTOCOLES & FAQ"}
            </h2>
          </div>
          <div className="flex flex-col gap-6">
            {faqs.map((faq) => (
              <details key={faq.q} className="glass rounded-2xl group reveal-up">
                <summary className="p-8 flex justify-between items-center font-bold text-xl cursor-pointer">
                  <span>{faq.q}</span>
                  <span className="transform group-open:rotate-180 transition-transform text-blue-500">
                    <ChevronDown />
                  </span>
                </summary>
                <div className="px-8 pb-8 opacity-60 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
