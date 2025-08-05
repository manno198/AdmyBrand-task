"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Zap, Brain, Target, TrendingUp } from "lucide-react"
import Button from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Balatro from "@/components/ui/Balatro"

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 overflow-hidden">
      {/* Balatro Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <Balatro
          isRotate={false}
          mouseInteraction={false}
          pixelFilter={700}
          color1="#FFE6E1"
          color2="#FF3E32"
          color3="#005F60"
          spinSpeed={5.0}
          contrast={2.5}
          lighting={0.3}
          spinAmount={0.15}
        />
      </div>

      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-brand-background/20 z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 lg:order-1 order-2"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 bg-brand-teal/30 text-black rounded-full text-sm font-medium"
              >
                <Zap className="w-4 h-4 mr-2" />
                AI-Powered Marketing Revolution
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-black leading-tight"
              >
                Transform Your{" "}
                <span className="text-black">
                  Marketing
                </span>{" "}
                with AI
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-black leading-relaxed"
              >
                ADmyBRAND AI Suite empowers businesses to automate campaigns, analyze customer behavior, and drive
                engagement with cutting-edge artificial intelligence.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="primary" size="lg" className="group">
                Get Started for Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="secondary" size="lg" className="group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center space-x-8 text-sm text-black"
            >
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-teal rounded-full mr-2" />
                Free 14-day trial
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-brand-teal rounded-full mr-2" />
                No credit card required
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:order-2 order-1"
          >
            <div className="relative">
              {/* Main Hero Illustration Container */}
              <motion.div
                className="relative bg-gradient-to-br from-brand-teal/30 via-brand-white to-brand-blue/20 rounded-2xl p-8 shadow-2xl border border-brand-teal/30 backdrop-blur-sm overflow-hidden group"
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              >
                {/* AI Marketing Illustration */}
                <div className="relative w-full h-96 flex items-center justify-center">
                  {/* Background Elements */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand-teal/20 to-brand-blue/20 rounded-xl" />

                  {/* Main Illustration Content */}
                  <div className="relative z-10 w-full h-full flex flex-col items-center justify-center space-y-6">
                    {/* Top Section - Analytics Dashboard */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-brand-white rounded-full shadow-lg flex items-center justify-center">
                        <Brain className="w-8 h-8 text-black" />
                      </div>
                      <div className="space-y-2">
                        <div className="w-24 h-3 bg-brand-teal rounded-full" />
                        <div className="w-16 h-2 bg-brand-blue/60 rounded-full" />
                      </div>
                    </div>

                    {/* Center Section - Charts and Graphs */}
                    <div className="flex items-center justify-center space-x-6">
                      {/* Bar Chart */}
                      <div className="flex items-end space-x-1">
                        <div className="w-3 h-8 bg-brand-teal rounded-t" />
                        <div className="w-3 h-12 bg-brand-blue rounded-t" />
                        <div className="w-3 h-6 bg-brand-teal/70 rounded-t" />
                        <div className="w-3 h-16 bg-brand-navy rounded-t" />
                      </div>

                      {/* Central AI Icon */}
                      <div className="w-20 h-20 bg-gradient-to-br from-brand-navy to-brand-blue rounded-2xl shadow-xl flex items-center justify-center transform rotate-3">
                        <Zap className="w-10 h-10 text-brand-white" />
                      </div>

                      {/* Pie Chart */}
                      <div className="w-16 h-16 relative">
                        <div className="w-full h-full bg-brand-white rounded-full shadow-md" />
                        <div
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-teal to-transparent rounded-full"
                          style={{ clipPath: "polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)" }}
                        />
                        <div
                          className="absolute inset-0 w-full h-full bg-gradient-to-r from-brand-blue to-transparent rounded-full"
                          style={{ clipPath: "polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)" }}
                        />
                      </div>
                    </div>

                    {/* Bottom Section - Marketers */}
                    <div className="flex items-center space-x-4">
                      {/* Marketer 1 */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-teal-light rounded-full mb-2 shadow-md" />
                        <div className="w-8 h-2 bg-brand-teal/60 rounded-full" />
                      </div>

                      {/* Marketer 2 */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-blue to-brand-blue-light rounded-full mb-2 shadow-md" />
                        <div className="w-8 h-2 bg-brand-blue/60 rounded-full" />
                      </div>

                      {/* Marketer 3 */}
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-brand-navy to-brand-navy-light rounded-full mb-2 shadow-md" />
                        <div className="w-8 h-2 bg-brand-navy/60 rounded-full" />
                      </div>
                    </div>
                  </div>

                  {/* Floating Data Points */}
                  <motion.div
                    animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
                    className="absolute top-4 left-4 w-8 h-8 bg-brand-teal rounded-lg shadow-lg flex items-center justify-center"
                  >
                    <TrendingUp className="w-4 h-4 text-black" />
                  </motion.div>

                  <motion.div
                    animate={{ y: [0, 8, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                    className="absolute bottom-4 right-4 w-6 h-6 bg-brand-blue rounded-full shadow-lg"
                  />

                  <motion.div
                    animate={{ x: [0, 8, 0], y: [0, -4, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
                    className="absolute top-1/2 right-2 w-4 h-4 bg-brand-navy rounded-full shadow-md"
                  />
                </div>

                {/* Floating AI Analysis Tag */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute -top-3 -right-3 bg-brand-white/90 backdrop-blur-md border border-brand-teal/30 rounded-xl px-4 py-2 shadow-lg"
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-brand-teal rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-black">AI Analysis</span>
                  </div>
                  <div className="text-xs text-black font-semibold">+127% engagement</div>
                </motion.div>
              </motion.div>

              {/* Additional Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="absolute -top-4 -left-4"
              >
                <Card className="p-4 bg-brand-white/90 backdrop-blur-sm border-brand-teal/20 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                      <Brain className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">Smart Insights</p>
                      <p className="text-xs text-black">Real-time data</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: 1 }}
                className="absolute -bottom-4 -right-4"
              >
                <Card className="p-4 bg-brand-white/90 backdrop-blur-sm border-brand-teal/20 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-brand-teal/20 rounded-lg flex items-center justify-center">
                      <Target className="w-5 h-5 text-black" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-black">Campaign ROI</p>
                      <p className="text-xs text-black">+340% increase</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blur Box for Text Distinction */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-background/80 to-transparent backdrop-blur-sm z-10" />
    </section>
  )
}
