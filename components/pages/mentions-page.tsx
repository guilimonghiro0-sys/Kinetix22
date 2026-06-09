import Link from "next/link"

export function MentionsPage() {
  return (
    <div
      className="p-8 md:p-20 max-w-4xl mx-auto"
      style={{
        backgroundColor: "#05070A",
        color: "#ccc",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh",
      }}
    >
      <div className="mb-12 border-b border-white/10 pb-8">
        <Link
          href="/"
          className="text-blue-500 font-mono-custom text-sm hover:underline"
        >
          {"< RETOUR AU TERMINAL"}
        </Link>
        <h1 className="text-4xl font-bold text-white mt-4 font-mono-custom">
          SYSTEM_LEGAL_LOGS
        </h1>
        <div className="text-xs font-mono-custom opacity-50 mt-2">
          LAST_UPDATE: 2026-01-01 // STATUS: COMPLIANT
        </div>
      </div>

      <h2 className="text-blue-500 font-mono-custom mt-8 mb-4 uppercase text-xl">
        {"1. Editeur du Site"}
      </h2>
      <p className="mb-4 text-sm leading-relaxed">
        Le site KINETIX.TECH est edite par l'agence KINETIX SARL.
        <br />
        Siege social : Immeuble du Futur, Boulevard du 30 Juin, Gombe,
        Kinshasa, RDC.
        <br />
        RCCM : CD/KIN/RCCM/14-B-0000
        <br />
        Email : legal@kinetix.tech
      </p>

      <h2 className="text-blue-500 font-mono-custom mt-8 mb-4 uppercase text-xl">
        2. Hebergement
      </h2>
      <p className="mb-4 text-sm leading-relaxed">
        Le site est heberge sur des serveurs cloud securises (AWS / Vercel).
        <br />
        Localisation des donnees : Afrique du Sud & Europe (RGPD Compliant).
      </p>

      <h2 className="text-blue-500 font-mono-custom mt-8 mb-4 uppercase text-xl">
        3. Propriete Intellectuelle
      </h2>
      <p className="mb-4 text-sm leading-relaxed">
        {"L'ensemble de ce site releve de la legislation congolaise et internationale sur le droit d'auteur et la propriete intellectuelle. Tous les droits de reproduction sont reserves, y compris pour les documents telechargeables et les representations iconographiques et photographiques (Design 3D, Code Source)."}
      </p>

      <h2 className="text-blue-500 font-mono-custom mt-8 mb-4 uppercase text-xl">
        4. Donnees Personnelles
      </h2>
      <p className="mb-4 text-sm leading-relaxed">
        {"Les informations recueillies via le formulaire \"Initialiser\" sont enregistrees dans un fichier informatise par KINETIX pour la gestion de notre clientele. Elles sont conservees pendant 3 ans. Conformement aux lois en vigueur, vous pouvez exercer votre droit d'acces aux donnees vous concernant en contactant : privacy@kinetix.tech."}
      </p>

      <div className="mt-20 pt-8 border-t border-white/10 text-center font-mono-custom text-xs opacity-30">
        END_OF_LOG_FILE
      </div>
    </div>
  )
}
