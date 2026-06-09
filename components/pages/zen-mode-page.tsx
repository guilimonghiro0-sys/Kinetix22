"use client"

import { useState } from "react"
import { Activity, MessageCircle } from "lucide-react"
import { Footer } from "@/components/footer"

export function ZenModePage() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [error, setError] = useState(false)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [progress, setProgress] = useState(0)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (username.toUpperCase() === "CLIENT" && password === "2026") {
      setLoggedIn(true)
      // Animate progress
      setTimeout(() => {
        setProgress(65)
      }, 1000)
    } else {
      setError(true)
      setTimeout(() => setError(false), 2000)
    }
  }

  if (!loggedIn) {
    return (
      <div
        className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center"
        style={{ fontFamily: "'JetBrains Mono', monospace" }}
      >
        <div className="mb-8 text-center">
          <h1 className="font-title text-3xl tracking-tighter mb-2 text-white font-bold">
            ZEN_MODE
          </h1>
          <p className="text-[10px] text-zen tracking-[0.4em] uppercase">
            Portail Client Securise
          </p>
        </div>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="ID CLIENT"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-field rounded-t"
          />
          <input
            type="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-field rounded-b"
          />
          <button
            type="submit"
            className="bg-zen text-black py-3 text-xs font-bold tracking-[0.2em] hover:bg-white hover:text-black transition-all uppercase btn-zen mt-4"
          >
            {"Initialiser l'Acces"}
          </button>
        </form>
        {error && (
          <p className="text-red-500 text-[9px] mt-4 font-mono-custom tracking-widest animate-pulse">
            ACCES REFUSE
          </p>
        )}
      </div>
    )
  }

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{
        backgroundColor: "#050906",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Header */}
      <header className="border-b border-white/5 px-8 py-6 flex justify-between items-center bg-black/50 backdrop-blur-md sticky top-0 z-40">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-zen rounded-full animate-pulse shadow-[0_0_10px_#00FF9D]" />
          <span className="font-mono-custom text-xs tracking-widest text-gray-400">
            CONNEXION ETABLIE
          </span>
        </div>
        <div className="text-right">
          <h2 className="font-title text-lg tracking-tighter text-white font-bold">
            CLIENT_V.I.P
          </h2>
          <p className="text-[9px] text-zen">PROJET #KIN-2026-A1</p>
        </div>
      </header>

      <main className="flex-grow p-8 md:p-16 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 text-white">
            Bienvenue, M. le Client.
          </h1>
          <p className="text-gray-500 font-mono-custom text-sm">
            Statut actuel :{" "}
            <span className="text-zen">EN DEVELOPPEMENT ACTIF</span>
          </p>
        </div>

        {/* STATUS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="status-card p-8 rounded-2xl col-span-1 md:col-span-2 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 text-zen group-hover:opacity-20 transition-opacity">
              <Activity className="w-24 h-24" />
            </div>
            <h3 className="text-xs font-mono-custom text-zen mb-2 uppercase tracking-widest opacity-80">
              Progression Globale
            </h3>
            <div className="flex items-end gap-4 mb-6">
              <span className="text-6xl font-bold font-title text-white">
                {progress}%
              </span>
              <span className="text-sm text-zen mb-2 animate-pulse font-mono-custom">
                {">"} Traitement en cours...
              </span>
            </div>
            <div className="progress-track">
              <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="status-card p-8 rounded-2xl flex flex-col justify-center">
            <h3 className="text-xs font-mono-custom text-gray-400 mb-4 uppercase tracking-widest">
              Prochaine Livraison
            </h3>
            <div className="text-2xl font-bold mb-1 text-white">
              24 Janvier
            </div>
            <p className="text-sm text-zen">Validation Maquettes UI/UX</p>
            <div className="mt-auto pt-6">
              <button className="w-full border border-zen/30 text-zen py-2 text-[10px] hover:bg-zen hover:text-black transition-all uppercase font-bold tracking-widest">
                Telecharger le Rapport
              </button>
            </div>
          </div>
        </div>

        {/* TIMELINE */}
        <div className="mb-16">
          <h3 className="font-mono-custom text-xs text-gray-500 mb-8 uppercase tracking-widest border-b border-white/5 pb-4">
            Chronologie des Operations
          </h3>
          <div className="relative flex justify-between items-center max-w-4xl mx-auto py-8">
            <div className="step-line" />
            <div
              className="step-line-fill"
              style={{ width: progress > 0 ? "50%" : "0%" }}
            />
            {[
              { label: "Briefing", status: "Termine", active: true },
              { label: "Wireframes", status: "Valide", active: true },
              {
                label: "Design UI",
                status: "En cours",
                active: true,
                current: true,
              },
              { label: "Code", status: "En attente", active: false },
              { label: "Deploiement", status: "Final", active: false },
            ].map((step) => (
              <div
                key={step.label}
                className={`flex flex-col items-center gap-4 relative z-10 ${!step.active ? "opacity-50" : ""}`}
              >
                <div
                  className={`step-dot ${step.active ? "active" : ""} ${step.current ? "animate-pulse ring-4 ring-[#00FF9D]/20" : ""}`}
                />
                <div className="text-center">
                  <p
                    className={`text-[10px] font-bold uppercase ${step.active ? (step.current ? "text-white" : "text-zen") : "text-gray-400"}`}
                  >
                    {step.label}
                  </p>
                  <p
                    className={`text-[9px] ${step.current ? "text-zen" : "text-gray-500"}`}
                  >
                    {step.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MESSAGE */}
        <div className="max-w-2xl mx-auto text-center border border-dashed border-zen/20 bg-zen/5 p-8 rounded-xl">
          <p className="text-sm text-gray-300 mb-4 font-mono-custom">
            {"Une question sur l'avancement ?"}
          </p>
          <a
            href="https://wa.me/message/BVQ7YLS7PGQ6L1"
            className="inline-flex items-center gap-2 bg-[#25D366] text-black px-8 py-3 rounded font-bold text-xs uppercase tracking-wider hover:bg-white transition-all btn-zen shadow-lg shadow-green-900/50"
          >
            <MessageCircle className="w-4 h-4" /> Contacter Guili sur WhatsApp
          </a>
        </div>
      </main>

      <Footer />
    </div>
  )
}
