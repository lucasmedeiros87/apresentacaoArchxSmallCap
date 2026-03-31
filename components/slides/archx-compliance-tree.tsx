"use client"

import type { Locale } from "@/content/presentation-i18n"
import { usePresentationLocale } from "@/components/presentation/presentation-locale-context"
import { cn } from "@/lib/utils"

interface ArchxComplianceTreeProps {
  className?: string
}

const complianceTreeCopy: Record<
  Locale,
  {
    sideLeftTitle: string
    sideLeftLines: [string, string]
    sideRightTitle: string
    sideRightLines: [string, string]
    regulatoryStructures: string
    chainAnalysis: string
    auditAndReporting: string
  }
> = {
  en: {
    sideLeftTitle: "DATA & PRIVACY",
    sideLeftLines: ["Identity Verification", "Data Protection"],
    sideRightTitle: "SECURITY & REPORTING",
    sideRightLines: ["Transaction Monitoring", "Compliance & Auditing"],
    regulatoryStructures: "Regulatory Structures",
    chainAnalysis: "Chain Analysis",
    auditAndReporting: "Audit & Reporting",
  },
  "pt-BR": {
    sideLeftTitle: "DADOS E PRIVACIDADE",
    sideLeftLines: ["Verificação de Identidade", "Proteção de Dados"],
    sideRightTitle: "SEGURANÇA E RELATÓRIO",
    sideRightLines: ["Monitoramento de Transações", "Cumprimento e Auditoria"],
    regulatoryStructures: "Estruturas Regulatórias",
    chainAnalysis: "Análise de Cadeia",
    auditAndReporting: "Auditoria e Relatórios",
  },
  es: {
    sideLeftTitle: "DATOS Y PRIVACIDAD",
    sideLeftLines: ["Verificación de Identidad", "Protección de Datos"],
    sideRightTitle: "SEGURIDAD Y REPORTES",
    sideRightLines: ["Monitoreo de Transacciones", "Cumplimiento y Auditoría"],
    regulatoryStructures: "Estructuras Regulatorias",
    chainAnalysis: "Análisis de Cadena",
    auditAndReporting: "Auditoría y Reportes",
  },
  ar: {
    sideLeftTitle: "البيانات والخصوصية",
    sideLeftLines: ["التحقق من الهوية", "حماية البيانات"],
    sideRightTitle: "الأمن والتقارير",
    sideRightLines: ["مراقبة المعاملات", "الامتثال والتدقيق"],
    regulatoryStructures: "الهياكل التنظيمية",
    chainAnalysis: "تحليل السلسلة",
    auditAndReporting: "التدقيق والتقارير",
  },
  ru: {
    sideLeftTitle: "ДАННЫЕ И ПРИВАТНОСТЬ",
    sideLeftLines: ["Проверка личности", "Защита данных"],
    sideRightTitle: "БЕЗОПАСНОСТЬ И ОТЧЕТНОСТЬ",
    sideRightLines: ["Мониторинг транзакций", "Комплаенс и аудит"],
    regulatoryStructures: "Регуляторные структуры",
    chainAnalysis: "Анализ цепочки",
    auditAndReporting: "Аудит и отчетность",
  },
}

function CompliancePill({ label, className }: { label: string; className?: string }) {
  return (
    <div
      className={cn(
        "mx-auto flex h-9 w-full max-w-[176px] items-center rounded-full border border-white/14 bg-[linear-gradient(180deg,rgba(18,18,22,0.97),rgba(7,7,10,0.95))] px-2.5 py-1.5 text-white shadow-[0_14px_28px_rgba(0,0,0,0.42)] backdrop-blur-[6px] sm:h-10 sm:max-w-[212px] sm:px-3 lg:h-[clamp(42px,5.2vh,56px)] lg:max-w-[320px] lg:px-[clamp(9px,0.9vw,15px)] lg:py-[clamp(8px,1.2vh,14px)]",
        className,
      )}
    >
      <span className="mr-3 h-2.5 w-2.5 flex-none rounded-full bg-[#FF2E33] shadow-[0_0_10px_rgba(255,46,51,0.95)]" />
      <span className="min-w-0 whitespace-nowrap text-[0.62rem] font-semibold leading-none tracking-[-0.01em] text-white/92 sm:text-[0.68rem] lg:text-[clamp(0.54rem,0.68vw,0.84rem)] lg:tracking-[-0.015em]">
        {label}
      </span>
    </div>
  )
}

function SideColumn({
  title,
  lines,
  align,
}: {
  title: string
  lines: string[]
  align: "left" | "right"
}) {
  const isLeft = align === "left"

  return (
    <div className="hidden h-full items-center justify-center lg:flex">
      <div className="flex h-[88%] w-full items-center justify-center overflow-hidden rounded-[20px] border border-[#FF2E33]/30 bg-[linear-gradient(180deg,rgba(45,7,10,0.72),rgba(18,5,7,0.58))] px-2">
        <div className={cn("flex items-center gap-[clamp(8px,1vw,16px)] whitespace-nowrap", isLeft ? "-rotate-90" : "rotate-90")}>
          <span className="text-[clamp(0.62rem,0.78vw,0.84rem)] font-semibold uppercase tracking-[0.14em] text-[#FF2E33]">
            {title}
          </span>
          <span className="text-[clamp(0.54rem,0.68vw,0.74rem)] text-white/86">
            {lines.map((line) => `- ${line}`).join(" ")}
          </span>
        </div>
      </div>
    </div>
  )
}

function NodeCell({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "flex items-center justify-center px-1 py-1 sm:px-1.5 sm:py-1.5 lg:px-[clamp(3px,0.5vw,9px)] lg:py-[clamp(6px,0.9vh,12px)]",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ArchxComplianceTree({ className }: ArchxComplianceTreeProps) {
  const { locale } = usePresentationLocale()
  const copy = complianceTreeCopy[locale] ?? complianceTreeCopy.en

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-[24px] border border-white/10 bg-[#030406]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px] opacity-35" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_34%,rgba(255,34,40,0.2),transparent_44%)]" />

      <div className="relative z-20 grid h-full grid-cols-1 px-[clamp(10px,2vw,22px)] py-[clamp(12px,2vh,26px)] lg:grid-cols-[clamp(56px,6vw,88px)_minmax(0,1fr)_clamp(56px,6vw,88px)] lg:gap-x-[clamp(8px,1.4vw,18px)]">
        <SideColumn align="left" title={copy.sideLeftTitle} lines={copy.sideLeftLines} />

        <div className="relative h-full">
          <svg
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <filter id="archx-neon-glow" x="-40%" y="-40%" width="180%" height="180%">
                <feGaussianBlur stdDeviation="2.8" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <g stroke="#FF2E33" strokeWidth="0.3" strokeLinecap="round" fill="none" filter="url(#archx-neon-glow)">
              <path d="M50 16 L20.5 35" />
              <path d="M50 16 L79.5 35" />

              <path d="M20.5 39 L20.5 53" />
              <path d="M79.5 39 L79.5 53" />

              <path d="M20.5 57 L20.5 71" />
              <path d="M79.5 57 L79.5 71" />

              <path d="M20.5 75 L50 84" />
              <path d="M79.5 75 L50 84" />
              <path d="M50 84 L50 90" />
            </g>
          </svg>

          <div className="relative z-20 grid h-full grid-cols-[minmax(0,1fr)_40px_minmax(0,1fr)] grid-rows-[1.05fr_0.86fr_0.86fr_0.86fr_0.72fr] items-center sm:grid-cols-[minmax(0,1fr)_56px_minmax(0,1fr)] sm:grid-rows-[1.18fr_0.92fr_0.92fr_0.92fr_0.78fr] lg:grid-cols-[minmax(0,1.22fr)_minmax(104px,0.56fr)_minmax(0,1.22fr)] lg:grid-rows-[1.35fr_1fr_1fr_1fr_0.9fr]">
            <NodeCell className="col-start-2 row-start-1">
              <div className="relative flex h-[88px] w-[88px] flex-col items-center justify-center rounded-full border border-white/14 bg-[linear-gradient(180deg,rgba(11,12,16,0.98),rgba(5,5,7,0.98))] text-center shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_0_58px_rgba(255,46,51,0.2)] sm:h-[104px] sm:w-[104px] lg:h-[clamp(110px,14.6vh,172px)] lg:w-[clamp(110px,14.6vh,172px)]">
                <span className="text-[0.42rem] font-semibold uppercase tracking-[0.28em] text-[#FF2E33] sm:text-[0.48rem] lg:text-[clamp(0.5rem,0.78vw,0.68rem)] lg:tracking-[0.32em]">
                  CORE
                </span>
                <span className="mt-1 text-[0.55rem] font-semibold leading-[1.03] tracking-[0.01em] text-white sm:text-[0.74rem] lg:mt-1.5 lg:text-[clamp(0.96rem,1.5vw,1.48rem)]">
                  ARCHX
                </span>
                <span className="text-[0.5rem] font-semibold leading-[1.08] tracking-[0.045em] text-white sm:text-[0.66rem] lg:text-[clamp(0.8rem,1.08vw,1.12rem)] lg:tracking-[0.06em]">
                  CONTROL LAYER
                </span>
              </div>
            </NodeCell>

            <NodeCell className="col-start-1 row-start-2">
              <CompliancePill label="KYC / KYB" />
            </NodeCell>
            <NodeCell className="col-start-3 row-start-2">
              <CompliancePill label="LGPD / GDPR" />
            </NodeCell>

            <NodeCell className="col-start-1 row-start-3">
              <CompliancePill label={copy.regulatoryStructures} />
            </NodeCell>
            <NodeCell className="col-start-3 row-start-3">
              <CompliancePill label="OFAC" className="max-w-[198px]" />
            </NodeCell>

            <NodeCell className="col-start-1 row-start-4">
              <CompliancePill label={copy.chainAnalysis} />
            </NodeCell>
            <NodeCell className="col-start-3 row-start-4">
              <CompliancePill label={copy.auditAndReporting} />
            </NodeCell>

            <NodeCell className="col-span-3 row-start-5">
              <CompliancePill label="AML/CFT" className="max-w-[256px] justify-center" />
            </NodeCell>
          </div>
        </div>

        <SideColumn align="right" title={copy.sideRightTitle} lines={copy.sideRightLines} />
      </div>
    </div>
  )
}
