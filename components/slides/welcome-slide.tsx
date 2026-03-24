"use client"

import { motion, type Variants } from "framer-motion"
import { Button } from "@/components/ui/button"
import Card3D from "@/components/ui/card-3d"

export default function WelcomeSlide() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
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
        className="text-center max-w-3xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.1,
            rotate: [0, -1, 1, -1, 0],
            transition: { duration: 0.5 },
          }}
          className="h-20 w-20 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full flex items-center justify-center text-white text-3xl font-medium mx-auto mb-6 shadow-lg"
          style={{ transformStyle: "preserve-3d" }}
        >
          <span style={{ transform: "translateZ(10px)" }}>M</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">
          Welcome to The Middleman Club
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl text-gray-600 mb-8">
          Connect. Facilitate. Profit. The premier platform for opportunity brokers and connectors.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { title: "Connect", description: "Link people and opportunities together to create value" },
            { title: "Facilitate", description: "Help transactions happen smoothly and efficiently" },
            { title: "Profit", description: "Earn commissions on successful connections" },
          ].map((item, index) => (
            <Card3D key={item.title} depth={40}>
              <motion.div
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/40 p-6 rounded-2xl shadow-sm border border-white/50 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="text-teal-500 text-xl font-medium mb-2"
                  style={{ transform: "translateZ(20px)" }}
                >
                  {item.title}
                </motion.div>
                <motion.p className="text-gray-600" style={{ transform: "translateZ(10px)" }}>
                  {item.description}
                </motion.p>
              </motion.div>
            </Card3D>
          ))}
        </div>

        <motion.div
          variants={itemVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white px-8 py-6 text-lg border-0 shadow-md"
          >
            Join The Club Today
          </Button>
        </motion.div>
      </motion.div>
    </div>
  )
}
