"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

const projects = [
  {
    title: "Aether Capital",
    desc: "Plateforme d'investissement decentralisee pour le marche de la RDC.",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?q=80&w=2070&auto=format&fit=crop",
    tags: ["REACT.JS", "WEB3"],
    offset: false,
  },
  {
    title: "KinFlow Systems",
    desc: "Suivi logistique en temps reel avec visualisation 3D de la flotte.",
    image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1974&auto=format&fit=crop",
    tags: ["IOT", "THREE.JS"],
    offset: true,
  },
  {
    title: "ImmoFutur Gombe",
    desc: "Visites virtuelles d'appartements de luxe a Kinshasa.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    tags: ["VR", "MOBILE APP"],
    offset: false,
  },
  {
    title: "Luxe Kinshasa",
    desc: "Experience e-commerce premium pour une marque de mode locale.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop",
    tags: ["SHOPIFY PLUS", "BRANDING"],
    offset: true,
  },
]

export function ProjetsPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="LOADING_ARCHIVES" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.5} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-20 px-8 md:px-24">
        <div className="max-w-7xl">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
            {"// ARCHIVES_DU_NEXUS"}
          </div>
          <h1 className="text-6xl md:text-9xl font-black font-title leading-none tracking-tighter mb-12">
            REALITES <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              DEPLOYEES.
            </span>
          </h1>
          <div className="flex flex-wrap gap-8 mt-12 font-mono-custom text-xs tracking-widest cursor-pointer">
            <span className="text-blue-500 border-b border-blue-500 pb-1">
              TOUT [4]
            </span>
            <span className="opacity-40 hover:opacity-100 hover:text-white transition-all">
              FINTECH [1]
            </span>
            <span className="opacity-40 hover:opacity-100 hover:text-white transition-all">
              LOGISTIQUE [1]
            </span>
            <span className="opacity-40 hover:opacity-100 hover:text-white transition-all">
              IMMOBILIER [1]
            </span>
            <span className="opacity-40 hover:opacity-100 hover:text-white transition-all">
              E-COMMERCE [1]
            </span>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="pb-40 px-8 md:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`project-card group reveal-up ${project.offset ? "mt-0 md:mt-20" : ""}`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="project-img"
              />
              <div className="project-overlay" />
              <div className="project-info">
                <div className="flex gap-4 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 rounded-full font-mono-custom text-[9px] tracking-widest ${i === 0 ? "bg-blue-500/20 text-blue-500" : "bg-white/10"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-4xl font-bold mb-2">{project.title}</h3>
                <p className="opacity-60 text-sm">{project.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
