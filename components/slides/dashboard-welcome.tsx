"use client"

import { motion, type Variants } from "framer-motion"
import { Bell, ChevronRight, MessageSquare, Plus, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Card3D from "@/components/ui/card-3d"

export default function DashboardWelcome() {
  const quickActions = [
    { name: "Share an Opportunity", icon: Plus, color: "bg-teal-100 text-teal-600" },
    { name: "Browse Opportunities", icon: ChevronRight, color: "bg-blue-100 text-blue-600" },
    { name: "View Your Network", icon: User, color: "bg-purple-100 text-purple-600" },
    { name: "Messages", icon: MessageSquare, color: "bg-amber-100 text-amber-600" },
  ]

  const recentActivity = [
    {
      title: "New connection request",
      description: "Sarah Johnson wants to connect with you",
      time: "2 hours ago",
      icon: User,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "New opportunity match",
      description: "Your profile matches a new software development opportunity",
      time: "Yesterday",
      icon: ChevronRight,
      color: "bg-teal-100 text-teal-600",
    },
    {
      title: "Commission earned",
      description: "You earned $750 from the Marketing Consultant connection",
      time: "2 days ago",
      icon: Plus,
      color: "bg-amber-100 text-amber-600",
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
    <div className="h-full overflow-auto bg-gradient-to-br from-white to-gray-50 p-6">
      <motion.div initial="hidden" animate="visible" variants={containerVariants} className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-medium text-gray-800">Welcome back, Alex!</h2>
            <p className="text-gray-600">Here's what's happening with your account today.</p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex items-center gap-3">
            <motion.div whileHover={{ scale: 1.1, rotate: 15 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80"
              >
                <Bell className="h-5 w-5 text-gray-700" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.1, rotate: -15 }} whileTap={{ scale: 0.9 }}>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80"
              >
                <Settings className="h-5 w-5 text-gray-700" />
              </Button>
            </motion.div>
            <motion.div
              className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium shadow-sm"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              A
            </motion.div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: "Active Connections", value: "24", change: "+3 this month", color: "text-teal-600" },
            { title: "Pending Opportunities", value: "7", change: "5 new this week", color: "text-blue-600" },
            { title: "Total Earnings", value: "$4,250", change: "+$750 this month", color: "text-amber-600" },
          ].map((stat, index) => (
            <Card3D key={stat.title} depth={30}>
              <motion.div
                variants={itemVariants}
                className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3 className="text-lg font-medium text-gray-800 mb-2" style={{ transform: "translateZ(15px)" }}>
                  {stat.title}
                </motion.h3>
                <motion.div className={`text-3xl font-medium ${stat.color}`} style={{ transform: "translateZ(20px)" }}>
                  {stat.value}
                </motion.div>
                <motion.div className="text-sm text-gray-500" style={{ transform: "translateZ(10px)" }}>
                  {stat.change}
                </motion.div>
              </motion.div>
            </Card3D>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div variants={itemVariants} className="md:col-span-2">
            <Card3D depth={25}>
              <div
                className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3 className="text-lg font-medium text-gray-800 mb-4" style={{ transform: "translateZ(15px)" }}>
                  Recent Activity
                </motion.h3>
                <div className="space-y-4" style={{ transform: "translateZ(10px)" }}>
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={activity.title}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.02,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        transition: { type: "spring", stiffness: 300, damping: 20 },
                      }}
                      className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/50 transition-colors"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        className={`${activity.color} p-2 rounded-lg`}
                        whileHover={{ rotate: 10 }}
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <activity.icon className="h-5 w-5" />
                      </motion.div>
                      <div className="flex-1 min-w-0" style={{ transform: "translateZ(15px)" }}>
                        <div className="font-medium text-gray-800">{activity.title}</div>
                        <div className="text-sm text-gray-600 truncate">{activity.description}</div>
                      </div>
                      <div className="text-xs text-gray-500" style={{ transform: "translateZ(15px)" }}>
                        {activity.time}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  className="mt-4 text-center"
                  whileHover={{ scale: 1.05 }}
                  style={{ transform: "translateZ(15px)" }}
                >
                  <Button variant="link" className="text-teal-600">
                    View All Activity
                  </Button>
                </motion.div>
              </div>
            </Card3D>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card3D depth={25}>
              <div
                className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50 h-full"
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.h3 className="text-lg font-medium text-gray-800 mb-4" style={{ transform: "translateZ(15px)" }}>
                  Quick Actions
                </motion.h3>
                <div className="space-y-3" style={{ transform: "translateZ(10px)" }}>
                  {quickActions.map((action, index) => (
                    <motion.button
                      key={action.name}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        x: 5,
                        transition: { type: "spring", stiffness: 300, damping: 20 },
                      }}
                      className="flex items-center gap-3 w-full p-3 rounded-lg hover:bg-white/50 text-left transition-colors"
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <motion.div
                        className={`${action.color} p-2 rounded-lg`}
                        whileHover={{ rotate: 10 }}
                        style={{ transform: "translateZ(20px)" }}
                      >
                        <action.icon className="h-5 w-5" />
                      </motion.div>
                      <div className="font-medium text-gray-800" style={{ transform: "translateZ(15px)" }}>
                        {action.name}
                      </div>
                    </motion.button>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100" style={{ transform: "translateZ(15px)" }}>
                  <h4 className="font-medium text-gray-800 mb-2">Your Membership</h4>
                  <div className="bg-blue-50 text-blue-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                    Networker Tier
                  </div>
                  <div className="mt-2 text-sm text-gray-600">7% commission rate</div>
                  <motion.div whileHover={{ scale: 1.05, x: 5 }}>
                    <Button variant="link" className="text-teal-600 p-0 h-auto mt-1">
                      Upgrade Your Plan
                    </Button>
                  </motion.div>
                </div>
              </div>
            </Card3D>
          </motion.div>
        </div>
      </motion.div>
    </div>
  )
}
