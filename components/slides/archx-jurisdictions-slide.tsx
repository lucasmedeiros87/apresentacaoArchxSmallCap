"use client"

import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const jurisdictions = [
  "Brasil",
  "Estados Unidos",
  "Emirados Arabes Unidos",
  "Ilhas Cayman",
  "Arabia Saudita",
]

export default function ArchxJurisdictionsSlide() {
  return (
    <SlideSurface
      eyebrow="Global Footprint"
      title="Operacao em cinco jurisdicoes, com leitura global de capital e risco."
      description="O alcance geografico deve entrar como prova de sofisticacao operacional. Nao como mapa turistico, mas como evidencia de capacidade de articulacao institucional."
      media={<JurisdictionsVisual />}
    >
      <div className="grid grid-cols-1 gap-3">
        {jurisdictions.map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.05 * index, duration: 0.3 }}
            className="flex items-center justify-between rounded-[22px] border border-white/7 bg-white/[0.03] px-5 py-4"
          >
            <span className="text-base text-[color:var(--primary-text)]">{item}</span>
            <span className="text-[11px] uppercase tracking-[0.32em] text-[color:var(--muted-text)]">Operational node</span>
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function JurisdictionsVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[28px] border border-white/8" />
      <div className="absolute inset-12 rounded-[24px] bg-[radial-gradient(circle_at_45%_40%,rgba(30,208,181,0.09),transparent_20%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      {[
        { name: "USA", x: "17%", y: "29%" },
        { name: "BR", x: "31%", y: "64%" },
        { name: "UAE", x: "66%", y: "41%" },
        { name: "KY", x: "26%", y: "46%" },
        { name: "KSA", x: "70%", y: "48%" },
      ].map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.08 * index, duration: 0.26 }}
          className="absolute"
          style={{ left: item.x, top: item.y }}
        >
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(30,208,181,0.18),_transparent_72%)]" />
          <div className="relative flex h-9 min-w-9 items-center justify-center rounded-full border border-[color:var(--accent-main)]/24 bg-[rgba(6,8,22,0.86)] px-3 text-xs font-semibold tracking-[0.18em] text-[color:var(--primary-text)]">
            {item.name}
          </div>
        </motion.div>
      ))}
      <svg className="absolute inset-0 h-full w-full">
        <path d="M120 180 C 170 150, 220 160, 260 250" stroke="rgba(255,255,255,0.12)" fill="none" />
        <path d="M260 250 C 350 210, 420 170, 520 180" stroke="rgba(30,208,181,0.28)" fill="none" />
        <path d="M520 180 C 560 180, 590 210, 600 230" stroke="rgba(255,255,255,0.12)" fill="none" />
      </svg>
    </div>
  )
}
