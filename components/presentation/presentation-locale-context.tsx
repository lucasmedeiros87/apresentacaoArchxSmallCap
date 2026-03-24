"use client"

import { createContext, useContext } from "react"
import type { Locale } from "@/content/presentation-i18n"

type PresentationLocaleContextValue = {
  locale: Locale
}

const PresentationLocaleContext = createContext<PresentationLocaleContextValue>({
  locale: "en",
})

export const PresentationLocaleProvider = PresentationLocaleContext.Provider

export const usePresentationLocale = () => useContext(PresentationLocaleContext)
