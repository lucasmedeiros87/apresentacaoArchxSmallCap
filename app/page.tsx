"use client"

import { PresentationShell } from "@/components/presentation/presentation-shell"
import { presentationSlides } from "@/lib/slides"

export default function Home() {
  return <PresentationShell brandName="Archx Capital" slides={presentationSlides} />
}
