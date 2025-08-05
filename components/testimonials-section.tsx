"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import TestimonialCard from "@/components/ui/testimonial-card"
import Button from "@/components/ui/button"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 340% increase in ROI within the first quarter. The AI insights are incredibly accurate and actionable.",
  },
  {
    name: "Michael Chen",
    role: "CEO",
    company: "GrowthLab",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The automation features saved us 20+ hours per week. Our team can now focus on strategy while the AI handles the execution. It's like having a marketing expert working 24/7.",
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    company: "Innovate Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "The customer journey mapping feature is phenomenal. We can now see exactly where customers drop off and optimize accordingly. Our conversion rate improved by 180%.",
  },
  {
    name: "David Park",
    role: "VP of Marketing",
    company: "ScaleUp Ventures",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "Implementation was seamless and the support team is outstanding. The AI-generated content is so good, our customers can't tell it wasn't written by our team.",
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Consultant",
    company: "Strategic Growth Co.",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    content:
      "I recommend ADmyBRAND to all my clients. The predictive analytics help us stay ahead of trends and the ROI tracking is incredibly detailed and accurate.",
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  return (
    <section id="testimonials" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Trusted by{" "}
            <span className="text-brand-blue">
              Marketing Leaders
            </span>
          </h2>
          <p className="text-xl text-brand-navy max-w-3xl mx-auto">
            See how businesses like yours are achieving remarkable results with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <TestimonialCard {...testimonials[currentIndex]} />
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-center space-x-4">
            <Button variant="secondary" size="sm" onClick={prevTestimonial} className="p-2">
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-brand-red" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button variant="secondary" size="sm" onClick={nextTestimonial} className="p-2">
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mt-16 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-brand-red mb-2">10,000+</div>
            <div className="text-brand-navy">Active Users</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-red mb-2">340%</div>
            <div className="text-brand-navy">Average ROI Increase</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-brand-red mb-2">4.9/5</div>
            <div className="text-brand-navy flex items-center justify-center">
              Customer Rating
              <div className="flex ml-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
