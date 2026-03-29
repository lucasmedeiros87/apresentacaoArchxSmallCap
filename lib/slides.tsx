import type { ComponentType } from "react"
import { archxSlides } from "@/content/archx-slides"
import { PresentationSlideFrame } from "@/components/slides/presentation-slide-frame"
import type { ArchxSlide } from "@/types/presentation"

export interface PresentationSlide {
  id: string
  title: string
  component: ComponentType
}

export type PresentationRenderMode = "interactive" | "print"

type BuildPresentationSlidesOptions = {
  mode?: PresentationRenderMode
}

export const buildPresentationSlides = (
  slidesSource: ArchxSlide[],
  options?: BuildPresentationSlidesOptions,
): PresentationSlide[] => {
  const mode = options?.mode ?? "interactive"

  return slidesSource
    .slice()
    .sort((left, right) => left.order - right.order)
    .map((slide) => ({
      id: slide.id,
      title: slide.eyebrow ?? slide.headline,
      component: function ContentDrivenArchxSlide() {
        return <PresentationSlideFrame slide={slide} mode={mode} />
      },
    }))
}

export const presentationSlides: PresentationSlide[] = buildPresentationSlides(archxSlides)
