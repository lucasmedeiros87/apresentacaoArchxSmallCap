"use client"

import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const lanes = [
  ["Origination", "Structuring", "Compliance"],
  ["Banking Relationships", "Execution", "Reporting"],
  ["Private Clients", "Institutions", "Cross-border flows"],
]

export default function ArchxPlatformSlide() {
  return (
    <SlideSurface
      eyebrow="Platform Architecture"
      title="Capital, tecnologia e private banking tratados como um sistema unico."
      description="A percepcao visual precisa reforcar integracao. Nao sao blocos isolados: e uma plataforma de articulacao entre produtos, governanca e distribuicao."
      media={<PlatformVisual />}
    >
      <div className="space-y-4">
        {lanes.map((lane, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.32 }}
            className="grid grid-cols-3 gap-3"
          >
            {lane.map((item) => (
              <div key={item} className="rounded-[20px] border border-white/7 bg-white/[0.03] px-4 py-4 text-center text-sm text-[color:var(--secondary-text)]">
                {item}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function PlatformVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[28px] border border-white/8" />
      <div className="absolute left-1/2 top-[17%] -translate-x-1/2 rounded-full border border-white/8 bg-[rgba(255,255,255,0.03)] px-5 py-3 text-sm text-[color:var(--primary-text)]">
        Archx orchestration layer
      </div>
      {[
        { label: "Capital Markets", left: "13%", top: "36%" },
        { label: "Private Banking", left: "58%", top: "34%" },
        { label: "Stablecoin Rails", left: "12%", top: "64%" },
        { label: "Institutional Compliance", left: "53%", top: "66%" },
      ].map((item) => (
        <div
          key={item.label}
          className="absolute rounded-[22px] border border-white/8 bg-[rgba(16,24,42,0.9)] px-5 py-4 text-sm text-[color:var(--primary-text)]"
          style={{ left: item.left, top: item.top }}
        >
          {item.label}
        </div>
      ))}
      <svg className="absolute inset-0 h-full w-full">
        <path d="M335 120 L 220 200" stroke="rgba(255,255,255,0.16)" fill="none" />
        <path d="M335 120 L 470 198" stroke="rgba(255,255,255,0.16)" fill="none" />
        <path d="M335 120 L 220 350" stroke="rgba(30,208,181,0.28)" fill="none" />
        <path d="M335 120 L 470 360" stroke="rgba(255,255,255,0.16)" fill="none" />
      </svg>
    </div>
  )
}
