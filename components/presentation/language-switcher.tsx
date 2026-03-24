"use client"

import { localeOptions, type Locale } from "@/content/presentation-i18n"

type LanguageSwitcherProps = {
  locale: Locale
  onChange: (locale: Locale) => void
}

export function LanguageSwitcher({ locale, onChange }: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-white/12 bg-black/35 p-1 shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md">
      {localeOptions.map((option) => {
        const isActive = option.value === locale

        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={[
              "rounded-full px-2 py-1.5 text-[10px] font-medium tracking-[0.12em] uppercase transition-all",
              isActive
                ? "bg-white/[0.08] text-white shadow-[0_0_0_1px_rgba(223,44,47,0.28)_inset]"
                : "text-white/58 hover:text-white/84",
            ].join(" ")}
            aria-label={`Switch language to ${option.label}`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
