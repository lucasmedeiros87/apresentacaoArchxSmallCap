"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, DollarSign, Globe, MapPin, User } from "lucide-react"

export default function OpportunityPreview() {
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
                ✓
              </div>
              <div className="h-1 w-6 bg-gradient-to-r from-teal-400 to-emerald-500"></div>
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white text-xs font-medium shadow-sm">
                3
              </div>
            </div>

            <h3 className="text-lg font-medium text-gray-800 mb-1">Preview Your Opportunity</h3>
            <p className="text-gray-600 text-sm mb-6">Review all details before submitting</p>
          </div>

          <div className="p-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="backdrop-blur-xl bg-white/80 border border-gray-200/50 rounded-2xl overflow-hidden"
            >
              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-4 border-b border-teal-100/30">
                <div className="inline-block backdrop-blur-md bg-teal-100/70 text-teal-800 px-3 py-1 rounded-full text-xs font-medium mb-2 border border-teal-200/50">
                  Job Opportunity
                </div>
                <h3 className="text-xl font-medium text-gray-800">Senior Software Developer Position at Tech Co.</h3>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-gray-400" />
                    <span>Technology</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span>New York, NY or Remote</span>
                  </div>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <span>$120,000-$150,000/year</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Description</h4>
                  <p className="text-gray-600">
                    We're looking for an experienced Software Developer to join our growing team at Tech Co. This is a
                    full-time position with competitive compensation and benefits. The ideal candidate will have strong
                    experience with modern web technologies and a passion for building scalable applications.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>5+ years of experience in software development</li>
                    <li>Strong proficiency in JavaScript, TypeScript, and React</li>
                    <li>Experience with Node.js and RESTful APIs</li>
                    <li>Familiarity with cloud services (AWS, Azure, or GCP)</li>
                    <li>Bachelor's degree in Computer Science or related field</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Benefits</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Competitive salary and equity package</li>
                    <li>Comprehensive health, dental, and vision insurance</li>
                    <li>Flexible remote work options</li>
                    <li>Professional development budget</li>
                    <li>401(k) matching program</li>
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Company/Organization</h4>
                    <p className="text-gray-600">Tech Innovations Inc.</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Application Deadline</h4>
                    <div className="flex items-center gap-1 text-gray-600">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span>June 30, 2023</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Contact Information</h4>
                    <p className="text-gray-600">careers@techinnovations.com</p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Visibility</h4>
                    <div className="flex items-center gap-1 text-gray-600">
                      <User className="h-4 w-4 text-gray-400" />
                      <span>My Network Only</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gray-50/70 p-4 border-t border-gray-100/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium shadow-sm">
                    A
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-800">Posted by Alex Johnson</div>
                    <div className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>Just now</span>
                    </div>
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  Commission: <span className="font-medium text-teal-600">7%</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-6 p-4 backdrop-blur-xl bg-blue-50/70 border border-blue-100/50 rounded-xl"
            >
              <h4 className="font-medium text-gray-800 mb-2">Potential Reach</h4>
              <p className="text-gray-600 text-sm">
                This opportunity will be visible to <span className="font-medium">24 connections</span> in your network.
                Based on your settings, we estimate <span className="font-medium">15-20 potential matches</span>.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="backdrop-blur-xl bg-gray-50/70 p-6 border-t border-gray-100/50 flex justify-between items-center"
          >
            <Button variant="outline" className="border border-gray-200 bg-white/80 hover:bg-white text-gray-700">
              Back to Edit
            </Button>
            <Button className="bg-gradient-to-r from-teal-400 to-emerald-500 hover:from-teal-500 hover:to-emerald-600 text-white border-0 shadow-sm">
              Submit Opportunity
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
