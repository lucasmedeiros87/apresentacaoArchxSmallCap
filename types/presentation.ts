export type SlideVisualType =
  | "hero"
  | "split"
  | "grid"
  | "diagram"
  | "map"
  | "table"
  | "cards"
  | "editorial"

export type SlideContentStatus = "official-site" | "proposed-offering" | "hybrid"

export type ArchxSlide = {
  id: string
  order: number
  eyebrow?: string
  headline: string
  subheadline: string
  bullets: string[]
  body?: string
  closingLine?: string
  groups?: {
    title: string
    items: string[]
  }[]
  cta?: {
    title: string
    text: string
  }
  speakerNotes: string
  visualType: SlideVisualType
  theme: "deep-navy" | "dark-accent" | "dark-minimal"
  status: SlideContentStatus
  visualNotes: {
    layout: string
    emphasis?: string
    mediaHint?: string
    motionHint?: string
  }
  footerNote?: string
}
