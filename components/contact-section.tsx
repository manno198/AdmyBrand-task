"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import Button from "@/components/ui/button"
import InputField from "@/components/ui/input-field"
import { Card } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    alert("Thank you for your message! We'll get back to you soon.")
    setFormData({ name: "", email: "", company: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Ready to{" "}
            <span className="text-brand-blue">
              Get Started?
            </span>
          </h2>
          <p className="text-xl text-brand-navy max-w-3xl mx-auto">
            Have questions or want to see a personalized demo? We'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8">
              <h3 className="text-2xl font-semibold text-brand-navy mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your full name"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                <InputField
                  label="Company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                />
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-brand-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell us about your marketing goals..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent transition-colors"
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-5 h-5 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-brand-navy mb-6">Get in touch</h3>
              <p className="text-brand-navy mb-8">
                Our team is here to help you transform your marketing with AI. Reach out and let's discuss how we can
                help you achieve your goals.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Email</h4>
                  <p className="text-brand-navy">hello@admybrand.ai</p>
                  <p className="text-brand-navy">support@admybrand.ai</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Phone</h4>
                  <p className="text-brand-navy">+1 (555) 123-4567</p>
                  <p className="text-brand-navy">Mon-Fri 9am-6pm PST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy">Office</h4>
                  <p className="text-brand-navy">123 Innovation Drive</p>
                  <p className="text-brand-navy">San Francisco, CA 94105</p>
                </div>
              </div>
            </div>

            <Card className="p-6 bg-gradient-to-r from-brand-red/5 to-brand-red/10 border-brand-red/20">
              <h4 className="font-semibold text-brand-navy mb-2">Schedule a Demo</h4>
              <p className="text-brand-navy mb-4">
                See ADmyBRAND AI Suite in action with a personalized demo tailored to your business needs.
              </p>
              <Button variant="secondary" size="sm">
                Book Demo Call
              </Button>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
