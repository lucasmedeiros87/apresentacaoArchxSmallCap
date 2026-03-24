"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function OpportunityStep1() {
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

            <h3 className="text-lg font-medium text-gray-800 mb-1">Basic Information</h3>
            <p className="text-gray-600 text-sm mb-6">Start by providing the basic details about this opportunity</p>
          </div>

          <div className="p-6">
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <Label htmlFor="title" className="text-gray-700">
                  Opportunity Title
                </Label>
                <Input
                  id="title"
                  placeholder="e.g., Senior Software Developer Position at Tech Co."
                  className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Be specific and descriptive to attract the right connections
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <Label htmlFor="category" className="text-gray-700">
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-xl bg-white/90 border border-gray-200/80">
                    <SelectItem value="job">Job Opportunity</SelectItem>
                    <SelectItem value="project">Project Collaboration</SelectItem>
                    <SelectItem value="investment">Investment Opportunity</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                    <SelectItem value="service">Service Offering</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Label htmlFor="industry" className="text-gray-700">
                  Industry
                </Label>
                <Select>
                  <SelectTrigger className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50">
                    <SelectValue placeholder="Select an industry" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-xl bg-white/90 border border-gray-200/80">
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="finance">Finance</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="real-estate">Real Estate</SelectItem>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Label htmlFor="description" className="text-gray-700">
                  Brief Description
                </Label>
                <Textarea
                  id="description"
                  placeholder="Provide a brief overview of the opportunity..."
                  className="mt-1 min-h-[120px] backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Highlight the key aspects that would make this opportunity attractive (300 characters max)
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
              >
                <div>
                  <Label htmlFor="location" className="text-gray-700">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="e.g., New York, NY or Remote"
                    className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <Label htmlFor="value" className="text-gray-700">
                    Estimated Value
                  </Label>
                  <Input
                    id="value"
                    placeholder="e.g., $5,000 or $80,000-$100,000/year"
                    className="mt-1 backdrop-blur-md bg-white/50 border border-gray-200/80 focus:border-teal-300 focus:ring focus:ring-teal-200 focus:ring-opacity-50"
                  />
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
              Cancel
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white border-0 shadow-sm">
              Continue to Step 2
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
