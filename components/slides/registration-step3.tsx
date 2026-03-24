"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Check } from "lucide-react"

export default function RegistrationStep3() {
  const tiers = [
    {
      id: "connector",
      name: "Connector",
      price: "$19/month",
      description: "Perfect for those just starting their connection journey",
      gradient: "from-gray-50 to-gray-100",
      border: "border-gray-200",
    },
    {
      id: "networker",
      name: "Networker",
      price: "$49/month",
      description: "For active connectors looking to expand their reach",
      gradient: "from-blue-50 to-blue-100",
      border: "border-blue-200",
    },
    {
      id: "facilitator",
      name: "Facilitator",
      price: "$99/month",
      description: "For serious connectors who facilitate valuable deals",
      gradient: "from-purple-50 to-purple-100",
      border: "border-purple-200",
    },
    {
      id: "broker",
      name: "Broker",
      price: "$199/month",
      description: "For professional deal-makers and opportunity brokers",
      gradient: "from-amber-50 to-amber-100",
      border: "border-amber-200",
    },
    {
      id: "partner",
      name: "Partner",
      price: "$399/month",
      description: "For elite deal-makers and enterprise opportunity brokers",
      gradient: "from-teal-50 to-emerald-100",
      border: "border-emerald-200",
    },
  ]

  return (
    <div className="h-full flex flex-col items-center justify-center p-8 bg-gradient-to-br from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full mx-auto"
      >
        <div className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-sm border border-white/50 overflow-hidden">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium shadow-sm">
                  M
                </div>
                <h2 className="text-xl font-medium text-gray-800">The Middleman Club</h2>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                  ✓
                </div>
                <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                  ✓
                </div>
                <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
                <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                  3
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-800 mb-2">Choose Your Membership</h3>
            <p className="text-gray-600 mb-6">Select the tier that best fits your needs</p>

            <RadioGroup defaultValue="networker" className="space-y-3">
              {tiers.map((tier, index) => (
                <motion.div
                  key={tier.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.5 }}
                >
                  <Label
                    htmlFor={tier.id}
                    className={`flex items-center p-3 rounded-xl backdrop-blur-md bg-gradient-to-br ${tier.gradient} bg-opacity-40 border ${tier.border} cursor-pointer transition-all hover:shadow-md`}
                  >
                    <RadioGroupItem value={tier.id} id={tier.id} className="sr-only" />
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <div className="font-medium text-gray-800">{tier.name}</div>
                        <div className="font-medium text-gray-800">{tier.price}</div>
                      </div>
                      <div className="text-sm text-gray-600 mt-1">{tier.description}</div>
                    </div>
                    <div className="ml-3 h-5 w-5 rounded-full border border-gray-300 flex items-center justify-center peer-data-[state=checked]:bg-gradient-to-br from-teal-400 to-emerald-500 peer-data-[state=checked]:border-teal-400">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                  </Label>
                </motion.div>
              ))}
            </RadioGroup>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-xl bg-gray-50/70 p-6 border-t border-gray-100/50 flex justify-between items-center"
          >
            <Button variant="outline" className="border border-gray-200 bg-white/80 hover:bg-white text-gray-700">
              Back
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white border-0 shadow-sm">
              Complete Registration
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
