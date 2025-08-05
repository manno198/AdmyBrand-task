import { cn } from "@/lib/utils"
import { type HTMLAttributes, forwardRef } from "react"

interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "destructive" | "outline"
  size?: "sm" | "md" | "lg"
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"

    const variants = {
      default: "bg-brand-red text-white hover:bg-brand-red-light",
      secondary: "bg-brand-red/10 text-brand-red border border-brand-red/20 hover:bg-brand-red/20",
      destructive: "bg-red-500 text-white hover:bg-red-600",
      outline: "border border-brand-red text-brand-red hover:bg-brand-red hover:text-white",
    }

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-2.5 py-0.5 text-sm",
      lg: "px-3 py-1 text-base",
    }

    return (
      <div className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
        {children}
      </div>
    )
  },
)

Badge.displayName = "Badge"

export default Badge
