"use client"

import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Preloader } from "@/components/preloader"
import { CustomCursor } from "@/components/custom-cursor"
import { ParticleBackground } from "@/components/particle-background"
import { useScrollAnimations } from "@/hooks/use-scroll-animations"

const articles = [
  {
    title: "Les banques RDC face aux nouvelles cyber-menaces",
    category: "CYBERSECURITE",
    categoryColor: "text-emerald-500",
    desc: "Comment securiser les infrastructures financieres locales face aux attaques DDOS internationales.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Pourquoi React Native domine le marche mobile africain",
    category: "TECH TRENDS",
    categoryColor: "text-blue-500",
    desc: "Performance native, cout reduit. L'equation parfaite pour les startups de Kinshasa.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "La tokenisation de l'immobilier a Gombe",
    category: "WEB3 & CRYPTO",
    categoryColor: "text-blue-400",
    desc: "Etude de cas sur notre projet Aether Capital et l'avenir de la blockchain.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032&auto=format&fit=crop",
  },
]

export function BlogPage() {
  const [loaded, setLoaded] = useState(false)
  useScrollAnimations(loaded)

  return (
    <>
      <Preloader label="DOWNLOADING_INTEL" onComplete={() => setLoaded(true)} />
      <CustomCursor />
      <ParticleBackground particleCount={800} opacity={0.4} size={0.015} />
      <Navbar />

      {/* HERO */}
      <section className="relative pt-48 pb-12 px-8 md:px-24">
        <div className="max-w-7xl">
          <div className="font-mono-custom text-[10px] tracking-[0.6em] text-blue-500 mb-8">
            {"// VEILLE_TECHNOLOGIQUE_MONDIALE"}
          </div>
          <h1 className="text-6xl md:text-8xl font-black font-title leading-none tracking-tighter mb-12">
            FLUX <br />
            <span
              className="text-transparent"
              style={{ WebkitTextStroke: "1px white" }}
            >
              NEURAL.
            </span>
          </h1>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker-wrap mb-20 relative z-20">
        <div className="ticker">
          {"+++  ALERT: GPT-5 ANNONCE +++ NOUVEAU PROTOCOLE WEB3 DEPLOYE A KINSHASA +++ KINETIX RECRUTE DES INGENIEURS SENIOR +++ LE WEBGL DEVIENT LE STANDARD +++ GOOGLE UPDATE Q1 2026 +++ "}
          {"+++  ALERT: GPT-5 ANNONCE +++ NOUVEAU PROTOCOLE WEB3 DEPLOYE A KINSHASA +++ KINETIX RECRUTE DES INGENIEURS SENIOR +++ LE WEBGL DEVIENT LE STANDARD +++ GOOGLE UPDATE Q1 2026 +++ "}
        </div>
      </div>

      {/* ARTICLES */}
      <section className="pb-40 px-8 md:px-24 relative z-10">
        {/* Featured */}
        <div className="mb-20 glass p-0 rounded-[2rem] overflow-hidden group blog-card reveal-up cursor-pointer">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-[400px] overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                alt="AI Art"
                fill
                className="blog-img object-cover"
              />
              <div className="absolute top-6 left-6 bg-blue-500 text-black px-4 py-1 font-mono-custom text-[9px] font-bold tracking-widest rounded-full">
                A LA UNE
              </div>
            </div>
            <div className="p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6 font-mono-custom text-[9px] opacity-40 tracking-widest">
                <span>12 JAN 2025</span>
                <span>//</span>
                <span>INTELLIGENCE ARTIFICIELLE</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 group-hover:text-blue-500 transition-colors">
                {"L'IA generative va-t-elle remplacer les codeurs a Kinshasa ?"}
              </h2>
              <p className="opacity-60 text-sm leading-relaxed mb-8">
                {"Analyse profonde de l'impact de Copilot et ChatGPT sur l'ecosysteme tech congolais. Pourquoi l'humain reste l'architecte indispensable."}
              </p>
              <span className="text-blue-500 font-mono-custom text-xs tracking-widest border-b border-blue-500 self-start pb-1">
                LIRE LE DECRYPTAGE
              </span>
            </div>
          </div>
        </div>

        {/* Standard Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.title}
              className="glass rounded-3xl overflow-hidden blog-card group cursor-pointer reveal-up"
            >
              <div className="h-60 overflow-hidden relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="blog-img object-cover"
                />
              </div>
              <div className="p-8">
                <div className={`font-mono-custom text-[9px] ${article.categoryColor} tracking-widest mb-4`}>
                  {article.category}
                </div>
                <h3 className="text-xl font-bold mb-4 leading-tight">
                  {article.title}
                </h3>
                <p className="text-xs opacity-50 mb-6 line-clamp-3">
                  {article.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
