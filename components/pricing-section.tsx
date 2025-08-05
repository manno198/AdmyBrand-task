"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Button from "@/components/ui/button"
import PricingCard from "@/components/ui/pricing-card"

const pricingPlans = [
  {
    name: "Basic",
    price: 29,
    description: "Perfect for small businesses getting started with AI marketing",
    features: [
      "Up to 1,000 contacts",
      "Basic AI analytics",
      "5 automated campaigns",
      "Email support",
      "Standard templates",
      "Basic reporting",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: 99,
    description: "Advanced features for growing businesses and marketing teams",
    features: [
      "Up to 10,000 contacts",
      "Advanced AI analytics",
      "Unlimited campaigns",
      "Priority support",
      "Custom templates",
      "Advanced reporting",
      "A/B testing",
      "Customer journey mapping",
      "API access",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: 299,
    description: "Complete solution for large organizations with custom needs",
    features: [
      "Unlimited contacts",
      "Full AI suite access",
      "White-label solution",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "Custom reporting",
      "Multi-team collaboration",
      "SLA guarantee",
      "Training & onboarding",
    ],
    popular: false,
  },
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Choose Your{" "}
            <span className="text-brand-blue">
              Perfect Plan
            </span>
          </h2>
          <p className="text-xl text-brand-navy max-w-3xl mx-auto mb-8">
            Start with a 14-day free trial. No credit card required. Upgrade or downgrade at any time.
          </p>

          <div className="inline-flex items-center bg-brand-red/10 text-brand-red px-4 py-2 rounded-full text-sm font-medium border border-brand-red/20">
            <Star className="w-4 h-4 mr-2" />
            Save 20% with annual billing
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PricingCard
                name={plan.name}
                price={plan.price}
                description={plan.description}
                features={plan.features}
                popular={plan.popular}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-brand-navy mb-4">Need a custom solution? We've got you covered.</p>
          <Button variant="secondary" size="lg">
            Contact Sales
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
