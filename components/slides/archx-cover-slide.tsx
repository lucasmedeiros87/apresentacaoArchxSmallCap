"use client"

import { ArrowUpRight, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const heroPoints = [
  "Private banking global com arquitetura institucional",
  "Infraestrutura para stablecoins, tokenizacao e securitizacao",
  "Compliance-first em operacao multijurisdicional",
]

export default function ArchxCoverSlide() {
  return (
    <SlideSurface
      eyebrow="Archx Capital"
      title="Conectando capital, tecnologia e private banking global."
      description="Uma fundacao visual para um deck finance-first, premium e institucional. O foco agora e consolidar linguagem, ritmo, hierarquia e presenca."
      media={<CoverVisual />}
    >
      <div className="grid gap-4">
        {heroPoints.map((point, index) => (
          <motion.div
            key={point}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.35 }}
            className="flex items-start gap-4 rounded-[22px] border border-white/7 bg-white/[0.03] px-5 py-4"
          >
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent-main)]">
              {index === 0 ? <ShieldCheck className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
            </div>
            <p className="text-base leading-7 text-[color:var(--secondary-text)]">{point}</p>
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function CoverVisual() {
  return (
    <div className="relative h-full">
      <div className="absolute inset-6 rounded-[26px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))]" />
      <div className="absolute left-10 top-10 right-10 h-[210px] rounded-[24px] border border-white/8 bg-[linear-gradient(160deg,rgba(22,33,55,0.95),rgba(10,16,32,0.95))] p-6">
        <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)]">Institutional Layer</div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {["Capital Markets", "Stablecoin Rails", "Private Banking", "Regulatory Control"].map((item) => (
            <div key={item} className="rounded-[18px] border border-white/8 bg-white/[0.03] px-4 py-5 text-sm text-[color:var(--primary-text)]">
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 left-10 right-10 rounded-[24px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,24,42,0.96),rgba(9,14,28,0.96))] p-6">
        <div className="flex items-center justify-between gap-6">
          <div>
            <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)]">Global Reach</div>
            <div className="mt-3 font-display text-4xl font-extrabold text-[color:var(--primary-text)]">5</div>
            <div className="mt-1 text-sm text-[color:var(--secondary-text)]">jurisdicoes operacionais</div>
          </div>
          <div className="grid grid-cols-2 gap-3 text-sm text-[color:var(--secondary-text)]">
            {["Brasil", "Estados Unidos", "EAU", "Cayman", "Arabia Saudita"].map((item, index) => (
              <div key={item} className={index === 4 ? "col-span-2 rounded-full border border-white/8 px-4 py-2 text-center" : "rounded-full border border-white/8 px-4 py-2 text-center"}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
