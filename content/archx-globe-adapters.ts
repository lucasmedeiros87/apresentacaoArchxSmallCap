import type { ArchxArc, ArchxHub } from "@/content/archx-globe-data"

export const buildGlobePoints = (hubs: ArchxHub[]) =>
  hubs.map((hub) => ({
    lat: hub.lat,
    lng: hub.lng,
    label: hub.label,
    city: hub.city,
    country: hub.country,
    size: hub.pointRadius,
    altitude: hub.pointAltitude,
    color: hub.color,
  }))

export const buildGlobeArcs = (hubs: ArchxHub[], arcs: ArchxArc[]) => {
  const hubMap = new Map(hubs.map((hub) => [hub.id, hub]))

  return arcs
    .map((arc) => {
      const fromHub = hubMap.get(arc.from)
      const toHub = hubMap.get(arc.to)

      if (!fromHub || !toHub) return null

      return {
        startLat: fromHub.lat,
        startLng: fromHub.lng,
        endLat: toHub.lat,
        endLng: toHub.lng,
        color: arc.color,
        stroke: arc.stroke,
        altitude: arc.altitude,
        dashLength: arc.dashLength,
        dashGap: arc.dashGap,
        animateTime: arc.animateTime,
        emphasis: arc.emphasis ?? false,
      }
    })
    .filter(Boolean) as {
    startLat: number
    startLng: number
    endLat: number
    endLng: number
    color: string
    stroke: number
    altitude: number
    dashLength: number
    dashGap: number
    animateTime: number
    emphasis: boolean
  }[]
}
