import { archxSlides } from "@/content/archx-slides"
import type { ArchxSlide } from "@/types/presentation"

export type ProposalContext = {
  slug: string
  clientName: string
  proposalDate: string
}

const proposalDefaultsBySlug: Record<string, Pick<ProposalContext, "clientName" | "proposalDate">> = {
  cliente1: { clientName: "Cliente 1", proposalDate: "27/03/2026" },
  cliente2: { clientName: "Cliente 2", proposalDate: "27/03/2026" },
}

const toSafeLabel = (value: string) => value.trim().replace(/[-_]+/g, " ")

const titleCase = (value: string) =>
  value
    .split(" ")
    .filter(Boolean)
    .map((token) => token[0]?.toUpperCase() + token.slice(1).toLowerCase())
    .join(" ")

const resolveClientName = (slug: string, queryClient?: string | null) => {
  if (queryClient && queryClient.trim()) return queryClient.trim()
  const fromPreset = proposalDefaultsBySlug[slug]?.clientName
  if (fromPreset) return fromPreset
  return titleCase(toSafeLabel(slug))
}

const resolveProposalDate = (slug: string, queryDate?: string | null) => {
  if (queryDate && queryDate.trim()) return queryDate.trim()
  const fromPreset = proposalDefaultsBySlug[slug]?.proposalDate
  if (fromPreset) return fromPreset
  return new Intl.DateTimeFormat("pt-BR").format(new Date())
}

export const buildProposalContext = (
  slugRaw: string,
  query?: { cliente?: string | null; data?: string | null },
): ProposalContext => {
  const slug = slugRaw.trim().toLowerCase()
  return {
    slug,
    clientName: resolveClientName(slug, query?.cliente ?? null),
    proposalDate: resolveProposalDate(slug, query?.data ?? null),
  }
}

const cloneSlide = (slide: ArchxSlide): ArchxSlide => ({
  ...slide,
  bullets: [...slide.bullets],
  groups: slide.groups ? slide.groups.map((group) => ({ title: group.title, items: [...group.items] })) : undefined,
  cta: slide.cta ? { ...slide.cta } : undefined,
  localeOverrides: slide.localeOverrides
    ? {
        ...slide.localeOverrides,
      }
    : undefined,
})

export const buildProposalSlides = (context: ProposalContext): ArchxSlide[] => {
  const slides = archxSlides.map(cloneSlide)

  return slides.map((slide) => {
    if (slide.id === "slide-01-cover") {
      return {
        ...slide,
        proposalClientName: context.clientName,
      }
    }

    return slide
  })
}
