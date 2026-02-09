"use client"

import { useState } from "react"
import { MapPin, Mail, Phone, Send } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

export function ContactPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="ESTABLISHING_UPLINK" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={600} opacity={0.4} size={0.015} interactive={false} />
      <Navbar />

      <section className="min-h-screen flex flex-col lg:flex-row pt-40 px-8 md:px-24 gap-20 relative z-10 pb-20">
        {/* Left */}
        <div className="lg:w-1/3 flex flex-col gap-12 mt-12 reveal-up">
          <div>
            <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-4">
              {"// STATUT_LIGNE_SECURISEE"}
            </div>
            <h1 className="text-5xl md:text-7xl font-black font-title tracking-tighter mb-6 leading-none">
              SIGNAL <br />PRET.
            </h1>
            <p className="opacity-50 text-sm max-w-sm leading-relaxed">
              {"Nos ingenieurs sont en veille active. Decrivez votre vision, nous calculerons la trajectoire optimale pour votre deploiement numerique."}
            </p>
          </div>

          <div className="flex flex-col gap-8 font-mono-custom text-xs tracking-widest border-l border-white/10 pl-8">
            <div className="group cursor-pointer">
              <div className="opacity-40 mb-2">QG OPERATIONNEL</div>
              <div className="text-white group-hover:text-blue-500 transition-colors flex items-center gap-2">
                <MapPin className="w-4 h-4" /> KINSHASA, GOMBE, RDC
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="opacity-40 mb-2">CANAL DIRECT</div>
              <div className="text-white group-hover:text-blue-500 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" /> HELLO@KINETIX.TECH
              </div>
            </div>
            <div className="group cursor-pointer">
              <div className="opacity-40 mb-2">{"LIGNE D'URGENCE"}</div>
              <div className="text-white group-hover:text-blue-500 transition-colors flex items-center gap-2">
                <Phone className="w-4 h-4" /> +243 81 000 0000
              </div>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="lg:w-2/3 reveal-up">
          <form className="glass p-8 md:p-12 rounded-[2rem] flex flex-col gap-8 border border-white/5 relative overflow-hidden group">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2 relative z-10">
                <label className="font-mono-custom text-[9px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full" /> Identifiant (Nom)
                </label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-mono-custom"
                  placeholder="Ex: John Doe"
                />
              </div>
              <div className="flex flex-col gap-2 relative z-10">
                <label className="font-mono-custom text-[9px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                  <span className="w-1 h-1 bg-blue-500 rounded-full" /> Frequence (Email)
                </label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-mono-custom"
                  placeholder="Ex: john@company.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <label className="font-mono-custom text-[9px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full" /> Type de Mission
              </label>
              <select className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-mono-custom cursor-pointer appearance-none">
                <option>{"Developpement Web Cinematique"}</option>
                <option>Application Mobile Native</option>
                <option>Architecture Backend / API</option>
                <option>{"Branding & Design 3D"}</option>
                <option>Consulting Technique</option>
              </select>
            </div>

            <div className="flex flex-col gap-2 relative z-10">
              <label className="font-mono-custom text-[9px] uppercase tracking-widest opacity-50 flex items-center gap-2">
                <span className="w-1 h-1 bg-blue-500 rounded-full" /> Donnees de la Mission
              </label>
              <textarea
                rows={5}
                className="w-full bg-white/5 border border-white/10 rounded-xl p-4 focus:bg-blue-500/10 focus:border-blue-500 outline-none transition-all text-sm font-mono-custom resize-none"
                placeholder="Decrivez vos objectifs, votre budget estime et votre timeline..."
              />
            </div>

            <button className="w-full py-6 bg-blue-500 hover:bg-white hover:text-black text-white font-bold tracking-widest rounded-xl transition-all uppercase font-title text-sm md:text-lg flex justify-center items-center gap-4 group relative z-10 overflow-hidden">
              <span className="relative z-10">Transmettre les donnees</span>
              <Send className="w-4 h-4 group-hover:translate-x-2 transition-transform relative z-10" />
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  )
}
