"use client"

import { Binary, BriefcaseBusiness, Landmark, Shield } from "lucide-react"
import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const capabilities = [
  {
    title: "Stablecoins",
    copy: "Infraestrutura de liquidez e movimentacao com linguagem institucional.",
    icon: Landmark,
  },
  {
    title: "Tokenizacao",
    copy: "Representacao eficiente de ativos com camada de governanca e estrutura.",
    icon: Binary,
  },
  {
    title: "Securitizacao",
    copy: "Modelagem para produtos sofisticados conectando capital e distribuicao.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Compliance",
    copy: "KYC, risco, adequacao juridica e disciplina operacional como premissa.",
    icon: Shield,
  },
]

export default function ArchxCapabilitiesSlide() {
  return (
    <SlideSurface
      eyebrow="Capabilities"
      title="Infraestrutura financeira moderna com disciplina institucional."
      description="Os pilares centrais do deck devem comunicar que tecnologia e produto existem para servir estrutura, controle e capacidade de execucao."
      media={<CapabilitiesVisual />}
    >
      <div className="grid grid-cols-2 gap-4">
        {capabilities.map((capability, index) => (
          <motion.div
            key={capability.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.3 }}
            className="rounded-[24px] border border-white/7 bg-white/[0.03] p-5"
          >
            <capability.icon className="h-5 w-5 text-[color:var(--accent-main)]" />
            <h3 className="mt-4 text-xl font-semibold text-[color:var(--primary-text)]">{capability.title}</h3>
            <p className="mt-2 text-sm leading-6 text-[color:var(--secondary-text)]">{capability.copy}</p>
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function CapabilitiesVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      <div className="absolute left-12 top-12 text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)]">Operating Stack</div>
      <div className="absolute left-12 right-12 top-24 grid gap-4">
        {[
          ["Institutional clients", "Structuring layer"],
          ["Compliance and governance", "Liquidity and banking rails"],
          ["Tokenized products", "Execution architecture"],
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="grid grid-cols-2 gap-4">
            {row.map((item) => (
              <div key={item} className="rounded-[20px] border border-white/8 bg-[rgba(255,255,255,0.03)] px-4 py-5 text-sm text-[color:var(--primary-text)]">
                {item}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="absolute bottom-12 left-12 right-12 rounded-[24px] border border-[color:var(--accent-main)]/18 bg-[color:var(--accent-soft)] px-5 py-4">
        <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--accent-main)]">Core Thesis</div>
        <p className="mt-2 text-sm leading-6 text-[color:var(--secondary-text)]">
          A apresentacao precisa mostrar que a Archx nao vende apenas tecnologia: ela organiza acesso, estrutura e confianca em ambiente financeiro global.
        </p>
      </div>
    </div>
  )
}
