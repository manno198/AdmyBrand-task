import { Star } from "lucide-react"
import { Card } from "./card"

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  avatar: string
  rating: number
  content: string
}

export default function TestimonialCard({ name, role, company, avatar, rating, content }: TestimonialCardProps) {
  return (
    <Card className="p-8 text-center max-w-3xl mx-auto">
      <div className="flex justify-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>

      <blockquote className="text-xl text-gray-700 leading-relaxed mb-6">"{content}"</blockquote>

      <div className="flex items-center justify-center space-x-4">
        <img src={avatar || "/placeholder.svg"} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="text-left">
          <div className="font-semibold text-gray-900">{name}</div>
          <div className="text-gray-600 text-sm">
            {role} at {company}
          </div>
        </div>
      </div>
    </Card>
  )
}
