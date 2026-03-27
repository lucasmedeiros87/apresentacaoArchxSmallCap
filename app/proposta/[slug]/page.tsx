"use client"

import { useMemo } from "react"
import { useParams, useSearchParams } from "next/navigation"

import { PresentationShell } from "@/components/presentation/presentation-shell"
import { buildProposalContext, buildProposalSlides } from "@/content/proposal-template"
import { buildPresentationSlides } from "@/lib/slides"

export default function ProposalBySlugPage() {
  const params = useParams<{ slug: string }>()
  const searchParams = useSearchParams()

  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug
  const context = useMemo(
    () =>
      buildProposalContext(slug, {
        cliente: searchParams.get("cliente"),
        data: searchParams.get("data"),
      }),
    [searchParams, slug],
  )

  const slides = useMemo(() => buildPresentationSlides(buildProposalSlides(context)), [context])
  const progressCaption = useMemo(() => `Proposta Comercial - ${context.proposalDate}`, [context.proposalDate])

  return (
    <PresentationShell
      brandName="Archx Capital"
      slides={slides}
      initialLocale="pt-BR"
      progressCaption={progressCaption}
    />
  )
}
