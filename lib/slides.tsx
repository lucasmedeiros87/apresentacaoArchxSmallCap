import type { ComponentType } from "react"
import { archxSlides } from "@/content/archx-slides"
import { ArchxSlideRenderer } from "@/components/slides/renderers/archx-slide-renderer"

export interface PresentationSlide {
  id: string
  title: string
  component: ComponentType
}

export const presentationSlides: PresentationSlide[] = archxSlides
  .slice()
  .sort((left, right) => left.order - right.order)
  .map((slide) => ({
    id: slide.id,
    title: slide.eyebrow ?? slide.headline,
    component: function ContentDrivenArchxSlide() {
      return <ArchxSlideRenderer slide={slide} />
    },
  }))
