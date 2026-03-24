"use client"

import { motion, type Variants } from "framer-motion"
import { Check } from "lucide-react"
import Card3D from "@/components/ui/card-3d"

export default function MembershipOverview() {
  const tiers = [
    {
      name: "Connector",
      price: "$19",
      gradient: "from-gray-100 to-gray-200",
      textColor: "text-gray-800",
      features: ["Basic opportunity sharing", "5% commission rate", "Community access"],
    },
    {
      name: "Networker",
      price: "$49",
      gradient: "from-blue-100 to-blue-200",
      textColor: "text-blue-800",
      features: ["Enhanced opportunity sharing", "7% commission rate", "Priority matching", "Basic analytics"],
    },
    {
      name: "Facilitator",
      price: "$99",
      gradient: "from-purple-100 to-purple-200",
      textColor: "text-purple-800",
      features: [
        "Advanced opportunity tools",
        "10% commission rate",
        "Deal facilitation support",
        "Enhanced analytics",
      ],
    },
    {
      name: "Broker",
      price: "$199",
      gradient: "from-amber-100 to-amber-200",
      textColor: "text-amber-800",
      features: [
        "Full platform access",
        "12% commission rate",
        "Deal negotiation tools",
        "Comprehensive analytics",
        "Priority support",
      ],
    },
    {
      name: "Partner",
      price: "$399",
      gradient: "from-teal-100 to-emerald-200",
      textColor: "text-emerald-800",
      features: [
        "White-label solutions",
        "15% commission rate",
        "Custom deal structures",
        "Advanced analytics",
        "Dedicated account manager",
      ],
    },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="text-center max-w-5xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-medium text-gray-800 mb-2">
          Membership Tiers Overview
        </motion.h2>

        <motion.p variants={itemVariants} className="text-gray-600 mb-8">
          Choose the tier that best fits your connection-making goals
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {tiers.map((tier, index) => (
            <Card3D key={tier.name} depth={30}>
              <motion.div
                variants={itemVariants}
                className={`backdrop-blur-xl bg-gradient-to-br ${tier.gradient} bg-opacity-40 rounded-2xl p-6 shadow-sm border border-white/50 flex flex-col h-full`}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className={`text-xl font-medium mb-2 ${tier.textColor}`}
                  style={{ transform: "translateZ(15px)" }}
                >
                  {tier.name}
                </motion.div>

                <motion.div className="text-2xl font-medium mb-4" style={{ transform: "translateZ(20px)" }}>
                  {tier.price}
                  <span className="text-sm font-normal text-gray-600">/month</span>
                </motion.div>

                <motion.ul className="text-left space-y-2 mt-4 flex-grow" style={{ transform: "translateZ(10px)" }}>
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </motion.ul>

                <motion.button
                  className="mt-6 backdrop-blur-xl bg-white/70 text-gray-800 hover:bg-white/90 font-medium py-2 px-4 rounded-lg shadow-sm transition-colors border border-white/50"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  style={{ transform: "translateZ(25px)" }}
                >
                  Select {tier.name}
                </motion.button>
              </motion.div>
            </Card3D>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
