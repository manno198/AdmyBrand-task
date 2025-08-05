import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface FeatureIconProps {
  icon: LucideIcon
  color?: "navy" | "blue" | "teal"
  className?: string
}

const colorVariants = {
  navy: "bg-brand-navy/10 text-brand-navy",
  blue: "bg-brand-blue/10 text-brand-blue",
  teal: "bg-brand-teal/30 text-brand-navy",
}

export default function FeatureIcon({ icon: Icon, color = "navy", className }: FeatureIconProps) {
  return (
    <div className={cn("w-12 h-12 rounded-lg flex items-center justify-center", colorVariants[color], className)}>
      <Icon className="w-6 h-6" />
    </div>
  )
}
