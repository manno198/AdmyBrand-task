import { Check, Star } from "lucide-react"
import Button from "./button"
import { Card } from "./card"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
}

export default function PricingCard({ name, price, description, features, popular = false }: PricingCardProps) {
  return (
    <Card className={cn("p-8 relative h-full", popular && "border-brand-red border-2 shadow-lg scale-105")}>
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-brand-red text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
            <Star className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-gray-900">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <Button variant={popular ? "primary" : "secondary"} size="lg" className="w-full">
        {name === "Enterprise" ? "Contact Sales" : "Start Free Trial"}
      </Button>
    </Card>
  )
}
