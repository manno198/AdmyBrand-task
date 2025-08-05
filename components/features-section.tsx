"use client"

import { motion } from "framer-motion"
import { Brain, Zap, Target, BarChart3, Users, Shield, Sparkles, TrendingUp } from "lucide-react"
import { Card } from "@/components/ui/card"
import FeatureIcon from "@/components/ui/feature-icon"
import Badge from "@/components/ui/badge"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analytics",
    description: "Advanced machine learning algorithms analyze customer behavior and predict trends with 95% accuracy.",
    color: "navy",
    badge: "New",
  },
  {
    icon: Zap,
    title: "Campaign Automation",
    description: "Automate your entire marketing funnel from lead generation to conversion with intelligent workflows.",
    color: "teal",
    badge: "Popular",
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the perfect moment with AI-driven customer segmentation.",
    color: "blue",
  },
  {
    icon: BarChart3,
    title: "Real-time Insights",
    description: "Get instant performance metrics and actionable insights to optimize your campaigns on the fly.",
    color: "navy",
    badge: "Beta",
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey for maximum engagement.",
    color: "teal",
  },
  {
    icon: Shield,
    title: "Data Security & Privacy",
    description: "Enterprise-grade security ensures your customer data is protected with end-to-end encryption.",
    color: "blue",
  },
  {
    icon: Sparkles,
    title: "Content Generation",
    description: "AI-powered content creation for emails, social media, and ad copy that converts.",
    color: "navy",
    badge: "Sale",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Continuously improve campaign performance with AI-driven A/B testing and optimization.",
    color: "teal",
  },
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Powerful AI Features for{" "}
            <span className="text-brand-blue">
              Modern Marketing
            </span>
          </h2>
          <p className="text-xl text-brand-navy max-w-3xl mx-auto">
            Discover how our AI-powered suite transforms your marketing strategy with intelligent automation, deep
            analytics, and personalized customer experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 group cursor-pointer border-brand-teal/20 hover:border-brand-red/40 bg-brand-white/80 backdrop-blur-sm relative">
                {feature.badge && (
                  <div className="absolute -top-2 -right-2">
                    <Badge variant="default" size="sm">
                      {feature.badge}
                    </Badge>
                  </div>
                )}
                <div className="space-y-4">
                  <FeatureIcon
                    icon={feature.icon}
                    color={feature.color as any}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                  <h3 className="text-xl font-semibold text-brand-navy group-hover:text-brand-red transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-brand-navy leading-relaxed">{feature.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
