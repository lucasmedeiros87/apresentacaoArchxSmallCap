"use client"

import { useEffect } from "react"

export function VercelAnalytics() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return

    let cancelled = false

    import("@vercel/analytics")
      .then(({ inject }) => {
        if (!cancelled) {
          inject()
        }
      })
      .catch(() => {
        // Keep the app resilient even if analytics fails to load.
      })

    return () => {
      cancelled = true
    }
  }, [])

  return null
}
