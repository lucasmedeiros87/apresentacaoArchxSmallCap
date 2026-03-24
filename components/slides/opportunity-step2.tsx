"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "lucide-react"

export default function OpportunityStep2() {
  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-white to-gray-50 p-6">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-sm border border-white/50 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100/50">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium shadow-sm">
                M
              </div>
              <h2 className="text-xl font-medium text-gray-800">Share a New Opportunity</h2>
            </div>

            <div className="flex items-center gap-1 mb-6">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                ✓
              </div>
              <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                2
              </div>
              <div className="h-1 w-6 bg-gray-200"></div>
              <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs font-medium">
                3
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-1">Detailed Information</h3>
            <p className="text-gray-600 text-sm mb-6">Provide more specific details about the opportunity</p>
          </div>

          <div className="p-6">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Label htmlFor="requirements" className="text-gray-700">
                  Requirements
                </Label>
                <Textarea
                  id="requirements"
                  placeholder="List the key requirements or qualifications needed..."
                  className="mt-1 min-h-[100px] backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Label htmlFor="benefits" className="text-gray-700">
                  Benefits
                </Label>
                <Textarea
                  id="benefits"
                  placeholder="Describe the benefits or advantages of this opportunity..."
                  className="mt-1 min-h-[100px] backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="company" className="text-gray-700">
                    Company/Organization
                  </Label>
                  <Input
                    id="company"
                    placeholder="e.g., Tech Innovations Inc."
                    className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label htmlFor="deadline" className="flex items-center gap-1 text-gray-700">
                    <span>Application Deadline</span>
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </Label>
                  <Input
                    id="deadline"
                    type="date"
                    className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Label htmlFor="contact" className="text-gray-700">
                  Contact Information
                </Label>
                <Input
                  id="contact"
                  placeholder="e.g., Email, phone number, or website"
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  How interested parties can get in touch about this opportunity
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="space-y-3"
              >
                <Label className="text-gray-700">Visibility Settings</Label>

                <div className="flex items-start space-x-2">
                  <Checkbox id="public" className="border-gray-300 text-teal-500 focus:ring-teal-200" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="public"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                    >
                      Public
                    </Label>
                    <p className="text-xs text-gray-500">Visible to all members of The Middleman Club</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="network" defaultChecked className="border-gray-300 text-teal-500 focus:ring-teal-200" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="network"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                    >
                      My Network Only
                    </Label>
                    <p className="text-xs text-gray-500">Only visible to your direct connections</p>
                  </div>
                </div>

                <div className="flex items-start space-x-2">
                  <Checkbox id="anonymous" className="border-gray-300 text-teal-500 focus:ring-teal-200" />
                  <div className="grid gap-1.5 leading-none">
                    <Label
                      htmlFor="anonymous"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                    >
                      Post Anonymously
                    </Label>
                    <p className="text-xs text-gray-500">Your identity will not be revealed with this opportunity</p>
                  </div>
                </div>
              </motion.div>
            </form>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-xl bg-gray-50/70 p-6 border-t border-gray-100/50 flex justify-between items-center"
          >
            <Button variant="outline" className="border border-gray-200 bg-white/80 hover:bg-white text-gray-700">
              Back to Step 1
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white border-0 shadow-sm">
              Preview & Submit
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
