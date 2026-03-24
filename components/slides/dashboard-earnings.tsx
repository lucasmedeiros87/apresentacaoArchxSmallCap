"use client"

import { motion } from "framer-motion"
import { ArrowDown, ArrowUp, Bell, Calendar, ChevronRight, Download, Settings, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function DashboardEarnings() {
  const transactions = [
    {
      title: "Software Developer Connection",
      amount: "+$1,200.00",
      date: "Apr 12, 2023",
      status: "Completed",
      type: "income",
    },
    {
      title: "Marketing Consultant Referral",
      amount: "+$750.00",
      date: "Apr 5, 2023",
      status: "Completed",
      type: "income",
    },
    {
      title: "Project Manager Introduction",
      amount: "+$950.00",
      date: "Mar 28, 2023",
      status: "Completed",
      type: "income",
    },
    {
      title: "Monthly Subscription",
      amount: "-$49.00",
      date: "Mar 1, 2023",
      status: "Completed",
      type: "expense",
    },
    {
      title: "UX Designer Connection",
      amount: "+$850.00",
      date: "Feb 15, 2023",
      status: "Completed",
      type: "income",
    },
  ]

  return (
    <div className="h-full overflow-auto bg-gradient-to-br from-white to-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-medium text-gray-800">Earnings & Metrics</h2>
            <p className="text-gray-600">Track your performance and financial metrics</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80"
            >
              <Bell className="h-5 w-5 text-gray-700" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80"
            >
              <Settings className="h-5 w-5 text-gray-700" />
            </Button>
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-white font-medium shadow-sm">
              A
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Total Earnings</h3>
              <div className="bg-teal-100 text-teal-600 p-1 rounded">
                <ArrowUp className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-medium text-gray-800">$4,250.00</div>
            <div className="text-sm text-teal-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" />
              <span>12% from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Successful Connections</h3>
              <div className="bg-blue-100 text-blue-600 p-1 rounded">
                <User className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-medium text-gray-800">18</div>
            <div className="text-sm text-teal-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" />
              <span>5 new this month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Average Commission</h3>
              <div className="bg-amber-100 text-amber-600 p-1 rounded">
                <ChevronRight className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-medium text-gray-800">$850.00</div>
            <div className="text-sm text-teal-600 flex items-center gap-1 mt-1">
              <ArrowUp className="h-3 w-3" />
              <span>3% from last month</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-sm font-medium text-gray-500">Expenses</h3>
              <div className="bg-red-100 text-red-600 p-1 rounded">
                <ArrowDown className="h-4 w-4" />
              </div>
            </div>
            <div className="text-2xl font-medium text-gray-800">$49.00</div>
            <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
              <span>Networker Tier Subscription</span>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="md:col-span-2 backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium text-gray-800">Earnings Over Time</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80 text-gray-700"
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>Filter</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80 text-gray-700"
                >
                  <Download className="h-4 w-4 mr-1" />
                  <span>Export</span>
                </Button>
              </div>
            </div>

            <div className="h-64 flex items-end gap-2">
              {Array.from({ length: 12 }).map((_, index) => {
                const height = Math.floor(Math.random() * 60) + 20
                return (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.6 + index * 0.05, duration: 0.8, ease: "easeOut" }}
                    className="flex-1 bg-gradient-to-t from-teal-400/80 to-teal-300/50 backdrop-blur-sm rounded-t-md relative group"
                  >
                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 backdrop-blur-xl bg-gray-800/90 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      ${Math.floor(Math.random() * 1000) + 200}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            <div className="flex justify-between mt-2 text-xs text-gray-500">
              <div>Jan</div>
              <div>Feb</div>
              <div>Mar</div>
              <div>Apr</div>
              <div>May</div>
              <div>Jun</div>
              <div>Jul</div>
              <div>Aug</div>
              <div>Sep</div>
              <div>Oct</div>
              <div>Nov</div>
              <div>Dec</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-sm border border-white/50"
          >
            <h3 className="text-lg font-medium text-gray-800 mb-4">Connection Types</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Technology</span>
                  <span className="font-medium">45%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-teal-400 to-emerald-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "45%" }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Finance</span>
                  <span className="font-medium">25%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-400 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Healthcare</span>
                  <span className="font-medium">15%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-400 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "15%" }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Real Estate</span>
                  <span className="font-medium">10%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "10%" }}
                    transition={{ delay: 1.0, duration: 0.8 }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Other</span>
                  <span className="font-medium">5%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "5%" }}
                    transition={{ delay: 1.1, duration: 0.8 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="backdrop-blur-xl bg-white/60 rounded-2xl shadow-sm border border-white/50 overflow-hidden"
        >
          <div className="p-6 border-b border-gray-100/50">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-800">Transaction History</h3>
              <div className="flex items-center gap-2">
                <Select defaultValue="all">
                  <SelectTrigger className="w-[130px] h-8 text-xs backdrop-blur-md bg-white/50 border border-gray-200/80">
                    <SelectValue placeholder="Filter" />
                  </SelectTrigger>
                  <SelectContent className="backdrop-blur-xl bg-white/90 border border-gray-200/80">
                    <SelectItem value="all">All Transactions</SelectItem>
                    <SelectItem value="income">Income Only</SelectItem>
                    <SelectItem value="expense">Expenses Only</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 backdrop-blur-md bg-white/50 border border-gray-200/80 hover:bg-white/80 text-gray-700"
                >
                  <Download className="h-4 w-4 mr-1" />
                  <span>Export</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50/80">
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Transaction
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Date
                  </th>
                  <th className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider py-3 px-6">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100/50">
                {transactions.map((transaction, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                    className="hover:bg-white/50 transition-colors"
                  >
                    <td className="py-4 px-6 text-sm text-gray-800">{transaction.title}</td>
                    <td
                      className={`py-4 px-6 text-sm font-medium ${
                        transaction.type === "income" ? "text-teal-600" : "text-red-600"
                      }`}
                    >
                      {transaction.amount}
                    </td>
                    <td className="py-4 px-6 text-sm text-gray-500">{transaction.date}</td>
                    <td className="py-4 px-6">
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-teal-100/70 text-teal-800">
                        {transaction.status}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 border-t border-gray-100/50 text-center">
            <Button variant="link" className="text-teal-600">
              View All Transactions
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
