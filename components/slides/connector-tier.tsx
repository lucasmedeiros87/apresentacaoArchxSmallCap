"use client"

import { motion, type Variants } from "framer-motion"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Card3D from "@/components/ui/card-3d"

export default function ConnectorTier() {
  const features = [
    { name: "Basic opportunity sharing", included: true },
    { name: "5% commission rate", included: true },
    { name: "Community access", included: true },
    { name: "Up to 10 active opportunities", included: true },
    { name: "Basic profile", included: true },
    { name: "Email support", included: true },
    { name: "Priority matching", included: false },
    { name: "Analytics dashboard", included: false },
    { name: "Deal facilitation tools", included: false },
    { name: "Custom branding", included: false },
  ]

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-4xl mx-auto w-full">
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block backdrop-blur-xl bg-gray-100/70 text-gray-800 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-white/50"
            whileHover={{ scale: 1.05 }}
          >
            Entry Level
          </motion.div>
          <motion.h2 className="text-3xl font-medium text-gray-800 mb-2" variants={itemVariants}>
            Connector Tier
          </motion.h2>
          <motion.p className="text-gray-600 mb-4" variants={itemVariants}>
            Perfect for those just starting their connection journey
          </motion.p>
          <motion.div className="text-4xl font-medium text-gray-800" variants={itemVariants}>
            $19<span className="text-xl font-normal text-gray-600">/month</span>
          </motion.div>
        </motion.div>

        <Card3D depth={40}>
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-sm border border-white/50 overflow-hidden"
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="p-8" style={{ transform: "translateZ(10px)" }}>
              <motion.h3 className="text-xl font-medium text-gray-800 mb-6" variants={itemVariants}>
                What's included in the Connector Tier:
              </motion.h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.name}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                    whileHover={{
                      x: feature.included ? 5 : 0,
                      transition: { type: "spring", stiffness: 300, damping: 20 },
                    }}
                  >
                    {feature.included ? (
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 10 }}
                      >
                        <Check className="h-5 w-5 text-teal-500 shrink-0 mt-0.5" />
                      </motion.div>
                    ) : (
                      <X className="h-5 w-5 text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span className={feature.included ? "text-gray-700" : "text-gray-400"}>{feature.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              variants={itemVariants}
              className="backdrop-blur-xl bg-gray-50/70 p-8 border-t border-white/30"
              style={{ transform: "translateZ(5px)" }}
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="font-medium text-gray-800">Ready to start connecting?</h4>
                  <p className="text-gray-600 text-sm">No long-term contracts. Cancel anytime.</p>
                </div>
                <motion.div
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-gray-700 to-gray-900 hover:from-gray-800 hover:to-black text-white border-0 shadow-sm"
                  >
                    Select Connector Tier
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </Card3D>
      </motion.div>
    </div>
  )
}
