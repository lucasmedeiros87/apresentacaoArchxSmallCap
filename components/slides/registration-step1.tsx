"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function RegistrationStep1() {
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
                  1
                </div>
                <div className="h-1 w-6 bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-medium">
                  2
                </div>
                <div className="h-1 w-6 bg-gray-200"></div>
                <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-medium">
                  3
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-medium text-gray-800 mb-2">Create Your Account</h3>
            <p className="text-gray-600 mb-6">Let's start with your basic information</p>

            <form className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Label htmlFor="fullName" className="text-gray-700">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  placeholder="John Smith"
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Label htmlFor="email" className="text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Label htmlFor="password" className="text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Label htmlFor="confirmPassword" className="text-gray-700">
                  Confirm Password
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
              </motion.div>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="backdrop-blur-xl bg-gray-50/70 p-6 border-t border-gray-100/50 flex justify-between items-center"
          >
            <Button variant="outline" className="border border-gray-200 bg-white/80 hover:bg-white text-gray-700">
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white border-0 shadow-sm">
              Continue to Step 2
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
