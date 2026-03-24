"use client"

import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const governanceItems = [
  "Governanca e adequacao regulatoria como camada central do produto",
  "Leitura institucional de risco, onboarding e relacionamento",
  "Disciplina visual e narrativa coerente com private banking global",
]

export default function ArchxGovernanceSlide() {
  return (
    <SlideSurface
      eyebrow="Governance"
      title="Compliance institucional nao como apendice, mas como estrutura."
      description="A apresentacao precisa mostrar seriedade, previsibilidade e capacidade de protecao patrimonial. O design entra como prova indireta dessa postura."
      media={<GovernanceVisual />}
    >
      <div className="space-y-4">
        {governanceItems.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.3 }}
            className="rounded-[22px] border border-white/7 bg-white/[0.03] px-5 py-4 text-base leading-7 text-[color:var(--secondary-text)]"
          >
            {item}
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function GovernanceVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[28px] border border-white/8" />
      <div className="absolute inset-x-14 top-14 rounded-[24px] border border-[color:var(--accent-main)]/18 bg-[color:var(--accent-soft)] px-5 py-4">
        <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--accent-main)]">Governance Signal</div>
        <div className="mt-3 text-sm leading-6 text-[color:var(--secondary-text)]">Rigor regulatorio, arquitetura juridica e disciplina de execucao.</div>
      </div>
      <div className="absolute left-14 right-14 top-[34%] grid gap-4">
        {["Jurisdictional awareness", "Institutional onboarding", "Product and structure review", "Monitoring and controls"].map((item) => (
          <div key={item} className="rounded-[20px] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-4 text-sm text-[color:var(--primary-text)]">
            {item}
          </div>
        ))}
      </div>
      <div className="absolute bottom-14 left-14 right-14 h-px bg-gradient-to-r from-transparent via-[color:var(--accent-main)]/40 to-transparent" />
    </div>
  )
}
