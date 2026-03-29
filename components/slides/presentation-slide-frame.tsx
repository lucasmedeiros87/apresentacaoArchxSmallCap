"use client"

import { MotionConfig } from "framer-motion"

import { ArchxSlideRenderer } from "@/components/slides/renderers/archx-slide-renderer"
import type { ArchxSlide } from "@/types/presentation"
import type { PresentationRenderMode } from "@/lib/slides"

type PresentationSlideFrameProps = {
  slide: ArchxSlide
  mode?: PresentationRenderMode
}

export function PresentationSlideFrame({ slide, mode = "interactive" }: PresentationSlideFrameProps) {
  if (mode === "print") {
    return (
      <MotionConfig reducedMotion="always">
        <div data-render-mode="print">
          <ArchxSlideRenderer slide={slide} />
        </div>
      </MotionConfig>
    )
  }

  return <ArchxSlideRenderer slide={slide} />
}

