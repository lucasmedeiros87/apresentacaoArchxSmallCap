"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface SlideSurfaceProps {
  eyebrow?: string
  title: string
  description?: string
  media?: ReactNode
  children?: ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
  contentClassName?: string
  mediaClassName?: string
}

export function SlideSurface({
  eyebrow,
  title,
  description,
  media,
  children,
  align = "left",
  tone = "dark",
  className,
  contentClassName,
  mediaClassName,
}: SlideSurfaceProps) {
  return (
    <section className={cn("relative h-full px-8 py-8", className)}>
      <div className="grid h-full grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "col-span-12 flex h-full flex-col justify-between rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(11,16,32,0.97),rgba(6,8,22,0.96))] p-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)] lg:col-span-7",
            align === "center" && "items-center text-center",
            contentClassName,
          )}
        >
          <div>
            {eyebrow ? (
              <div className={cn("mb-5 text-[12px] font-medium uppercase tracking-[0.34em]", tone === "light" ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>{eyebrow}</div>
            ) : null}
            <h2 className={cn("font-display max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.04em] xl:text-6xl", tone === "light" ? "text-[color:var(--page-dark-text)]" : "text-[color:var(--primary-text)]")}>
              {title}
            </h2>
            {description ? <p className={cn("mt-5 max-w-2xl text-lg leading-8", tone === "light" ? "text-[color:var(--page-dark-muted)]" : "text-[color:var(--secondary-text)]")}>{description}</p> : null}
          </div>

          {children ? <div className="mt-8">{children}</div> : null}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.985, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.46, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "relative col-span-12 hidden h-full overflow-hidden rounded-[30px] border border-white/8 bg-[linear-gradient(180deg,rgba(16,24,42,0.88),rgba(10,16,32,0.94))] lg:col-span-5 lg:block",
            mediaClassName,
          )}
        >
          <div className="absolute inset-0 bg-[linear-gradient(140deg,rgba(255,255,255,0.05),transparent_42%,rgba(30,208,181,0.08)_120%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_18%,rgba(30,208,181,0.09),transparent_26%),radial-gradient(circle_at_78%_12%,rgba(234,38,46,0.12),transparent_20%),radial-gradient(circle_at_72%_72%,rgba(42,82,255,0.08),transparent_26%)]" />
          <div className="relative h-full">{media}</div>
        </motion.div>
      </div>
    </section>
  )
}
