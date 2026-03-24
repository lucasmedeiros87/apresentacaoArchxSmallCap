"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function BrokerTier() {
  const features = [
    { name: "Full platform access", included: true },
    { name: "12% commission rate", included: true },
    { name: "Deal negotiation tools", included: true },
    { name: "Comprehensive analytics", included: true },
    { name: "Priority support", included: true },
    { name: "Unlimited active opportunities", included: true },
    { name: "VIP profile with featured placement", included: true },
    { name: "Priority support with 12-hour response", included: true },
    { name: "Advanced deal templates and workflows", included: true },
    { name: "Basic custom branding", included: true },
  ]

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto w-full"
      >
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block backdrop-blur-xl bg-amber-100/70 text-amber-800 px-4 py-1 rounded-full text-sm font-medium mb-4 border border-white/50"
          >
            Expert Level
          </motion.div>
          <h2 className="text-3xl font-medium text-gray-800 mb-2">Broker Tier</h2>
          <p className="text-gray-600 mb-4">For professional deal-makers and opportunity brokers</p>
          <div className="text-4xl font-medium text-gray-800">
            $199<span className="text-xl font-normal text-gray-600">/month</span>
          </div>
        </div>

        <div className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-sm border border-white/50 overflow-hidden">
          <div className="p-8">
            <h3 className="text-xl font-medium text-gray-800 mb-6">What's included in the Broker Tier:</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <Check className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-xl bg-amber-50/70 p-8 border-t border-amber-100/50"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-medium text-gray-800">Maximize your deal-making potential</h4>
                <p className="text-gray-600 text-sm">No long-term contracts. Cancel anytime.</p>
              </div>
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white border-0 shadow-sm"
              >
                Select Broker Tier
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
