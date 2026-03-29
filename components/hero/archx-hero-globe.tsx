"use client"

import dynamic from "next/dynamic"
import { useEffect, useMemo, useRef, useState } from "react"

import { buildGlobeArcs, buildGlobePoints } from "@/content/archx-globe-adapters"
import { archxArcs, archxHubs } from "@/content/archx-globe-data"

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_58%_36%,rgba(223,44,47,0.13),transparent_22%),radial-gradient(circle_at_42%_68%,rgba(223,44,47,0.08),transparent_18%)]" />
      <div className="absolute inset-[26px] rounded-[26px] border border-white/6 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),rgba(255,255,255,0.008))]" />
    </div>
  ),
})

export function ArchxHeroGlobe() {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<any>(null)
  const [size, setSize] = useState({ width: 760, height: 760 })
  const [reduceMotion, setReduceMotion] = useState(false)

  const points = useMemo(() => buildGlobePoints(archxHubs), [])
  const arcs = useMemo(() => buildGlobeArcs(archxHubs, archxArcs), [])
  const hubs = [
    { code: "NY", name: "New York", node: "left-[16%] top-[18%]", label: "left-[7%] top-[25%]" },
    { code: "KY", name: "Cayman", node: "left-[30%] top-[42%]", label: "left-[38%] top-[44%]" },
    { code: "SP", name: "Sao Paulo", node: "left-[21%] top-[68%]", label: "left-[30%] top-[64%]" },
    { code: "DXB", name: "Dubai", node: "left-[72%] top-[29%]", label: "left-[60%] top-[31%]" },
    { code: "KSA", name: "Saudi Arabia", node: "left-[74%] top-[64%]", label: "left-[57%] top-[59%]" },
  ] as const

  useEffect(() => {
    if (!containerRef.current) return

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0]
      if (!entry) return
      const width = Math.max(320, Math.floor(entry.contentRect.width))
      const height = Math.max(320, Math.floor(entry.contentRect.height))
      setSize({ width, height })
    })

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)")
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener("change", update)
    return () => media.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    if (!globeRef.current) return

    const controls = globeRef.current.controls?.()
    if (controls) {
      controls.autoRotate = !reduceMotion
      controls.autoRotateSpeed = 0.22
      controls.enablePan = false
      controls.enableZoom = false
      controls.minDistance = 260
      controls.maxDistance = 260
    }

    globeRef.current.pointOfView({ lat: 18, lng: -18, altitude: 2.15 }, 0)

    const material = globeRef.current.globeMaterial?.()
    if (material) {
      material.color.set("#0e121b")
      material.emissive.set("#07090f")
      material.emissiveIntensity = 0.35
      material.shininess = 0.2
    }
  }, [reduceMotion])

  return (
    <div ref={containerRef} className="archx-hero-globe relative h-full w-full overflow-hidden rounded-[28px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_40%,rgba(223,44,47,0.12),transparent_32%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_70%,rgba(223,44,47,0.08),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:28px_28px]" />

      <div className="archx-hero-globe-webgl absolute inset-0 opacity-[0.4]">
        <Globe
          ref={globeRef}
          width={size.width}
          height={size.height}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          showAtmosphere
          atmosphereColor="#3a0d10"
          atmosphereAltitude={0.09}
          pointsData={points}
          pointLat="lat"
          pointLng="lng"
          pointAltitude="altitude"
          pointRadius="size"
          pointColor="color"
          pointResolution={8}
          arcsData={arcs}
          arcStartLat="startLat"
          arcStartLng="startLng"
          arcEndLat="endLat"
          arcEndLng="endLng"
          arcColor="color"
          arcStroke="stroke"
          arcAltitude="altitude"
          arcDashLength="dashLength"
          arcDashGap="dashGap"
          arcDashAnimateTime={reduceMotion ? 0 : "animateTime"}
          arcCurveResolution={64}
          enablePointerInteraction={false}
        />
      </div>

      <div className="archx-hero-globe-overlay pointer-events-none absolute inset-0">
        <div className="absolute left-[44%] top-[44%] h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.16),_transparent_72%)] blur-3xl" />
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M21 68 C 24 58, 26 50, 30 42" stroke="rgba(223,44,47,0.65)" strokeWidth="0.26" fill="none" />
          <path d="M30 42 C 45 34, 59 30, 72 29" stroke="rgba(223,44,47,0.65)" strokeWidth="0.26" fill="none" />
          <path d="M21 68 C 19 51, 18 33, 16 18" stroke="rgba(255,255,255,0.18)" strokeWidth="0.22" fill="none" />
          <path d="M72 29 C 74 40, 74 52, 74 64" stroke="rgba(255,255,255,0.2)" strokeWidth="0.22" fill="none" />
          <path d="M21 68 C 40 72, 56 71, 74 64" stroke="rgba(255,255,255,0.16)" strokeWidth="0.2" fill="none" />
        </svg>

        {hubs.map((hub) => (
          <div key={hub.code}>
            <div className={`absolute ${hub.node}`}>
              <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(223,44,47,0.16),_transparent_72%)]" />
              <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-white/8 bg-[rgba(16,16,18,0.92)] text-[11px] font-semibold tracking-[0.08em] text-white/92 shadow-[0_8px_18px_rgba(0,0,0,0.35)]">
                <span className="font-mono">{hub.code}</span>
              </div>
            </div>
            <div className={`absolute ${hub.label} text-[12px] font-medium leading-[1.2] text-white/74`}>{hub.name}</div>
          </div>
        ))}

        <div className="absolute bottom-7 left-8 text-[11px] uppercase tracking-[0.22em] text-white/48">
          <span className="font-mono">GLOBAL ACCESS</span>
        </div>
      </div>
    </div>
  )
}
