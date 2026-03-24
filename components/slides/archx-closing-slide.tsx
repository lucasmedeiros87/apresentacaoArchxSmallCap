"use client"

import { motion } from "framer-motion"

import { SlideSurface } from "@/components/presentation/slide-surface"

export default function ArchxClosingSlide() {
  return (
    <SlideSurface
      eyebrow="Next Step"
      title="Fundacao visual pronta para receber o deck final da Archx."
      description="Com a estrutura premium definida, o proximo passo e substituir os placeholders por narrativa final, imagens reais, dados e provas institucionais."
      media={<ClosingVisual />}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {["Narrativa final", "Conteudo slide a slide", "Imagens e ativos reais"].map((item, index) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06 * index, duration: 0.3 }}
            className="rounded-[22px] border border-white/7 bg-white/[0.03] px-5 py-6"
          >
            <div className="text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)]">Layer {String(index + 1).padStart(2, "0")}</div>
            <div className="mt-3 text-lg font-semibold text-[color:var(--primary-text)]">{item}</div>
          </motion.div>
        ))}
      </div>
    </SlideSurface>
  )
}

function ClosingVisual() {
  return (
    <div className="relative h-full p-8">
      <div className="absolute inset-8 rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,24,42,0.86),rgba(6,8,22,0.92))]" />
      <div className="absolute left-12 top-12 text-[11px] uppercase tracking-[0.34em] text-[color:var(--muted-text)]">Archx Capital</div>
      <div className="absolute left-12 right-12 top-24 h-[220px] rounded-[24px] border border-white/8 bg-[radial-gradient(circle_at_30%_30%,rgba(30,208,181,0.12),transparent_22%),radial-gradient(circle_at_72%_34%,rgba(234,38,46,0.12),transparent_18%),linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01))]" />
      <div className="absolute bottom-12 left-12 right-12 rounded-[24px] border border-white/8 bg-white/[0.03] px-5 py-5 text-sm leading-7 text-[color:var(--secondary-text)]">
        Deck foundation focused on institutional tone, premium motion, fixed-ratio stage and a visual system closer to global private banking than generic fintech.
      </div>
    </div>
  )
}
