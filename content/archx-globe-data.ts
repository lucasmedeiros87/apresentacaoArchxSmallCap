export type ArchxHub = {
  id: string
  label: string
  city: string
  country: string
  lat: number
  lng: number
  tier: "primary" | "secondary"
  pointAltitude: number
  pointRadius: number
  color: string
}

export type ArchxArc = {
  id: string
  from: string
  to: string
  color: string
  stroke: number
  altitude: number
  dashLength: number
  dashGap: number
  animateTime: number
  emphasis?: boolean
}

export const archxHubs: ArchxHub[] = [
  {
    id: "sp",
    label: "SP",
    city: "Sao Paulo",
    country: "Brasil",
    lat: -23.5505,
    lng: -46.6333,
    tier: "primary",
    pointAltitude: 0.02,
    pointRadius: 0.55,
    color: "#DF2C2F",
  },
  {
    id: "ny",
    label: "NY",
    city: "New York",
    country: "United States",
    lat: 40.7128,
    lng: -74.006,
    tier: "secondary",
    pointAltitude: 0.018,
    pointRadius: 0.48,
    color: "rgba(255,255,255,0.85)",
  },
  {
    id: "ky",
    label: "KY",
    city: "George Town",
    country: "Cayman Islands",
    lat: 19.3133,
    lng: -81.2546,
    tier: "primary",
    pointAltitude: 0.02,
    pointRadius: 0.52,
    color: "#DF2C2F",
  },
  {
    id: "dxb",
    label: "DXB",
    city: "Dubai",
    country: "UAE",
    lat: 25.2048,
    lng: 55.2708,
    tier: "primary",
    pointAltitude: 0.022,
    pointRadius: 0.56,
    color: "#DF2C2F",
  },
  {
    id: "ksa",
    label: "KSA",
    city: "Riyadh",
    country: "Saudi Arabia",
    lat: 24.7136,
    lng: 46.6753,
    tier: "secondary",
    pointAltitude: 0.018,
    pointRadius: 0.48,
    color: "rgba(255,255,255,0.78)",
  },
]

export const archxArcs: ArchxArc[] = [
  {
    id: "sp-ny",
    from: "sp",
    to: "ny",
    color: "rgba(223,44,47,0.72)",
    stroke: 0.55,
    altitude: 0.22,
    dashLength: 0.32,
    dashGap: 0.95,
    animateTime: 3600,
    emphasis: true,
  },
  {
    id: "sp-ky",
    from: "sp",
    to: "ky",
    color: "rgba(255,255,255,0.28)",
    stroke: 0.42,
    altitude: 0.18,
    dashLength: 0.28,
    dashGap: 1.1,
    animateTime: 4300,
  },
  {
    id: "ky-dxb",
    from: "ky",
    to: "dxb",
    color: "rgba(223,44,47,0.78)",
    stroke: 0.62,
    altitude: 0.26,
    dashLength: 0.34,
    dashGap: 0.88,
    animateTime: 3400,
    emphasis: true,
  },
  {
    id: "dxb-ksa",
    from: "dxb",
    to: "ksa",
    color: "rgba(255,255,255,0.24)",
    stroke: 0.38,
    altitude: 0.12,
    dashLength: 0.24,
    dashGap: 1.1,
    animateTime: 4700,
  },
  {
    id: "ny-ky",
    from: "ny",
    to: "ky",
    color: "rgba(255,255,255,0.22)",
    stroke: 0.36,
    altitude: 0.16,
    dashLength: 0.22,
    dashGap: 1.18,
    animateTime: 5000,
  },
]
