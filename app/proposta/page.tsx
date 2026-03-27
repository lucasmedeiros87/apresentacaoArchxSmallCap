"use client"

import { useMemo, useState } from "react"

const toSlug = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")

const defaultDate = new Intl.DateTimeFormat("pt-BR").format(new Date())

export default function ProposalGeneratorPage() {
  const [clientName, setClientName] = useState("")
  const [proposalDate, setProposalDate] = useState(defaultDate)
  const [slug, setSlug] = useState("")

  const effectiveSlug = useMemo(() => toSlug(slug || clientName || "cliente"), [clientName, slug])
  const finalUrl = useMemo(() => {
    const params = new URLSearchParams({
      cliente: clientName || "Cliente",
      data: proposalDate || defaultDate,
    })
    return `/proposta/${effectiveSlug}?${params.toString()}`
  }, [clientName, effectiveSlug, proposalDate])

  const copyLink = async () => {
    if (typeof window === "undefined") return
    const full = `${window.location.origin}${finalUrl}`
    await navigator.clipboard.writeText(full)
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#060606,#0c0c0c)] px-6 py-10 text-white">
      <div className="mx-auto w-full max-w-2xl rounded-3xl border border-white/10 bg-black/50 p-6 sm:p-8">
        <div className="mb-6 text-sm uppercase tracking-[0.2em] text-[color:var(--accent-main)]">Propostas Comerciais</div>
        <h1 className="font-display text-3xl font-semibold tracking-tight">Gerador de Proposta</h1>
        <p className="mt-2 text-white/70">Preencha apenas nome do cliente e data. O link final já sai pronto.</p>

        <div className="mt-7 space-y-4">
          <label className="block">
            <div className="mb-2 text-sm text-white/80">Nome do cliente</div>
            <input
              value={clientName}
              onChange={(event) => setClientName(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none ring-[color:var(--accent-main)]/40 focus:ring-2"
              placeholder="Ex.: Empresa XPTO"
            />
          </label>

          <label className="block">
            <div className="mb-2 text-sm text-white/80">Data da proposta</div>
            <input
              value={proposalDate}
              onChange={(event) => setProposalDate(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none ring-[color:var(--accent-main)]/40 focus:ring-2"
              placeholder="dd/mm/aaaa"
            />
          </label>

          <label className="block">
            <div className="mb-2 text-sm text-white/80">Slug do cliente (opcional)</div>
            <input
              value={slug}
              onChange={(event) => setSlug(event.target.value)}
              className="w-full rounded-xl border border-white/15 bg-white/[0.04] px-4 py-3 text-white outline-none ring-[color:var(--accent-main)]/40 focus:ring-2"
              placeholder="Ex.: cliente-xpto"
            />
          </label>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/80">{finalUrl}</div>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href={finalUrl}
            className="inline-flex items-center rounded-xl bg-[color:var(--accent-main)] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[color:var(--accent-main-hover)]"
          >
            Abrir proposta
          </a>
          <button
            type="button"
            onClick={copyLink}
            className="inline-flex items-center rounded-xl border border-white/15 px-4 py-2.5 text-sm font-medium text-white/90 transition-colors hover:bg-white/[0.06]"
          >
            Copiar link
          </button>
        </div>
      </div>
    </main>
  )
}
