import Link from "next/link"
import { Linkedin, Instagram, Twitter, MessageCircle } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative z-10 bg-[#020305] border-t border-white/5 pt-16 pb-8 px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="block mb-6">
            <span className="text-2xl font-black font-title tracking-tighter text-white">
              KINETIX<span className="text-blue-500">.</span>
            </span>
          </Link>
          <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
            {"Agence digitale d'elite basee a Kinshasa. Nous aidons les entreprises ambitieuses a dominer leur marche grace a la technologie."}
          </p>
        </div>
        <div>
          <h4 className="font-mono-custom text-[10px] uppercase tracking-widest text-blue-500 mb-6">
            Exploration
          </h4>
          <ul className="flex flex-col gap-4 text-sm text-gray-400 font-mono-custom">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-white transition-colors">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                {"L'Agence"}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/mentions" className="hover:text-white transition-colors">
                Mentions Legales
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-mono-custom text-[10px] uppercase tracking-widest text-blue-500 mb-6">
            Connexion
          </h4>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5 text-gray-400" />
            </a>
            <a
              href="https://wa.me/message/BVQ7YLS7PGQ6L1"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-gray-400" />
            </a>
          </div>
          <div className="mt-6">
            <p className="text-[10px] font-mono-custom text-gray-600 uppercase">
              Kinshasa, RDC
            </p>
            <p className="text-[10px] font-mono-custom text-gray-600 uppercase">
              +243 900 260 394
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-mono-custom text-gray-600 uppercase tracking-widest">
        <p>&copy; 2026 KINETIX AGENCY. Tous droits reserves.</p>
        <p>
          Designed by <strong>Guili MONGHIRO</strong>
        </p>
      </div>
    </footer>
  )
}
