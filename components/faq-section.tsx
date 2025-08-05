"use client"

import { motion } from "framer-motion"
import Accordion from "@/components/ui/accordion"

const faqs = [
  {
    question: "How does ADmyBRAND AI Suite work?",
    answer:
      "ADmyBRAND AI Suite uses advanced machine learning algorithms to analyze your customer data, predict behavior patterns, and automate marketing campaigns. It integrates with your existing tools and provides real-time insights to optimize your marketing strategy.",
  },
  {
    question: "What integrations are available?",
    answer:
      "We integrate with over 100+ popular marketing tools including Salesforce, HubSpot, Mailchimp, Google Analytics, Facebook Ads, LinkedIn, Shopify, and many more. Our API also allows for custom integrations.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We use enterprise-grade security with end-to-end encryption, SOC 2 compliance, and GDPR compliance. Your data is stored in secure, redundant data centers and never shared with third parties.",
  },
  {
    question: "Can I cancel my subscription anytime?",
    answer:
      "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees. You'll continue to have access to your account until the end of your current billing period.",
  },
  {
    question: "Do you offer training and support?",
    answer:
      "Yes! We provide comprehensive onboarding, training materials, video tutorials, and 24/7 customer support. Enterprise customers also get a dedicated account manager and custom training sessions.",
  },
  {
    question: "What makes ADmyBRAND different from other marketing tools?",
    answer:
      "Our AI is specifically trained for marketing use cases and provides more accurate predictions. We offer a complete suite of tools in one platform, reducing the need for multiple subscriptions. Plus, our user-friendly interface makes advanced AI accessible to marketers of all skill levels.",
  },
  {
    question: "Can I try it before purchasing?",
    answer:
      "We offer a 14-day free trial with full access to all features. No credit card required. You can explore the platform, run campaigns, and see results before making any commitment.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "While results vary by industry and implementation, our customers typically see 180-340% increase in ROI, 50-80% improvement in conversion rates, and save 15-25 hours per week on manual marketing tasks within the first 90 days.",
  },
]

export default function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-brand-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Frequently Asked{" "}
            <span className="text-brand-blue">
              Questions
            </span>
          </h2>
          <p className="text-xl text-brand-navy">Everything you need to know about ADmyBRAND AI Suite</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Accordion items={faqs} />
        </motion.div>
      </div>
    </section>
  )
}
