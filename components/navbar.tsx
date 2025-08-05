"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Menu, X, Sparkles } from "lucide-react"
import Button from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-brand-white/90 backdrop-blur-lg border-b border-brand-teal/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-brand-navy" />
            </div>
            <span className="text-xl font-bold text-brand-navy">
              ADmyBRAND AI
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-brand-navy hover:text-brand-red transition-colors">
              Features
            </a>
            <a href="#pricing" className="text-brand-navy hover:text-brand-red transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="text-brand-navy hover:text-brand-red transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-brand-navy hover:text-brand-red transition-colors">
              FAQ
            </a>
            <Button variant="secondary" size="sm">
              Sign In
            </Button>
            <Button variant="primary" size="sm">
              Get Started Free
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-brand-navy hover:text-brand-red transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4 space-y-4"
          >
            <a href="#features" className="block text-brand-navy hover:text-brand-red transition-colors">
              Features
            </a>
            <a href="#pricing" className="block text-brand-navy hover:text-brand-red transition-colors">
              Pricing
            </a>
            <a href="#testimonials" className="block text-brand-navy hover:text-brand-red transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="block text-brand-navy hover:text-brand-red transition-colors">
              FAQ
            </a>
            <div className="flex flex-col space-y-2 pt-4">
              <Button variant="secondary" size="sm">
                Sign In
              </Button>
              <Button variant="primary" size="sm">
                Get Started Free
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
