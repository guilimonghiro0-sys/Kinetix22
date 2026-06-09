"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const links = [
    { href: "/services", label: "MATRICE" },
    { href: "/projets", label: "NEXUS" },
    { href: "/valeurs", label: "LE_CODE" },
    { href: "/blog", label: "FLUX" },
    { href: "/about", label: "LE_LAB" },
    { href: "/zen-mode", label: "ZEN_MODE", special: true },
  ]

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] flex justify-between items-center px-6 py-6 md:px-16 mix-blend-difference text-white">
        <Link
          href="/"
          className="group cursor-pointer flex items-start gap-1 select-none z-[101]"
        >
          <span className="font-mono-custom text-[10px] text-blue-500 opacity-80 mt-1">
            {"<"}
          </span>
          <span className="text-xl md:text-2xl font-black font-title tracking-tighter leading-none">
            KINETIX<span className="text-blue-500 inline-block">.</span>
          </span>
          <span className="font-mono-custom text-[10px] text-blue-500 opacity-80 mt-1">
            {"/>"}
          </span>
        </Link>

        <div className="hidden xl:flex gap-8 items-center pointer-events-auto font-mono-custom text-[9px] tracking-[0.2em]">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href
                  ? "text-blue-500 font-bold"
                  : "hover:text-blue-500 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="px-6 py-2 bg-white text-black rounded-full font-bold hover:bg-blue-600 hover:text-white transition-all transform hover:scale-105 active:scale-95"
          >
            CONTACT
          </Link>
        </div>

        <button
          className="xl:hidden pointer-events-auto text-xs font-mono-custom z-[101] flex items-center gap-2 group cursor-pointer"
          onClick={toggleMenu}
        >
          <span
            className={`group-hover:text-blue-500 transition-colors font-bold ${isMenuOpen ? "text-blue-500" : ""}`}
          >
            {isMenuOpen ? "FERMER -" : "MENU +"}
          </span>
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`fixed inset-0 bg-[#020305] z-[90] flex flex-col justify-center items-center xl:hidden text-center ${isMenuOpen ? "open" : ""}`}
      >
        <div className="flex flex-col gap-8 font-title text-3xl font-bold">
          <Link
            href="/"
            className="hover:text-blue-500 transition-colors"
            onClick={toggleMenu}
          >
            ACCUEIL
          </Link>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                link.special
                  ? "text-green-500"
                  : "hover:text-blue-500 transition-colors"
              }
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="text-sm font-mono-custom border border-white/20 px-8 py-3 rounded-full mt-4"
            onClick={toggleMenu}
          >
            {"CONTACTER L'AGENCE"}
          </Link>
        </div>
        <div className="absolute bottom-10 opacity-30 font-mono-custom text-[10px]">
          KINSHASA / RDC
        </div>
      </div>
    </>
  )
}
