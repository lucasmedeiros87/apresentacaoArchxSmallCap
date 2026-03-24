"use client"

import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

const pillars = [
  {
    label: "Elegant Structures",
    copy: "Arquitetura financeira desenhada para preservar sofisticacao sem perder rigor operacional.",
  },
  {
    label: "Solid Foundations",
    copy: "Governanca, controles e desenho juridico preparados para interlocucao institucional.",
  },
  {
    label: "Scalable Systems",
    copy: "Capacidade de estruturar produtos e fluxos adaptados a multiplos mercados e jurisdicoes.",
  },
]

export default function ArchxPositioningSlide() {
  return (
    <SlideSurface
      eyebrow="Positioning"
      title="Estruturas elegantes, solidas e escalaveis."
      description="A linguagem do deck precisa refletir exatamente essa tese: menos startup, mais private banking global, capital markets e infraestrutura institucional."
      media={<PositioningVisual />}
    >
      <div className="grid gap-4">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 * index, duration: 0.32 }}
            className="rounded-[24px] border border-white/7 bg-white/[0.03] p-5"
          >
            <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--accent-main)]">{pillar.label}</div>
            <p className="mt-3 text-base leading-7 text-[color:var(--secondary-text)]">{pillar.copy}</p>
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function PositioningVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[28px] border border-white/8" />
      <div className="absolute inset-x-12 top-12 h-px bg-gradient-to-r from-transparent via-white/16 to-transparent" />
      <div className="absolute inset-x-12 bottom-12 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[color:var(--accent-main)]/20" />
      <div className="absolute left-1/2 top-1/2 h-[120px] w-[120px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(30,208,181,0.18),_rgba(30,208,181,0.02)_72%)]" />
      {[
        { label: "Capital", x: "16%", y: "24%" },
        { label: "Technology", x: "66%", y: "18%" },
        { label: "Compliance", x: "66%", y: "70%" },
        { label: "Private Banking", x: "10%", y: "68%" },
      ].map((item) => (
        <div
          key={item.label}
          className="absolute rounded-full border border-white/8 bg-[rgba(16,24,42,0.92)] px-4 py-2 text-sm text-[color:var(--primary-text)]"
          style={{ left: item.x, top: item.y }}
        >
          {item.label}
        </div>
      ))}
    </div>
  )
}
