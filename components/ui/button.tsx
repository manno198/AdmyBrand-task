import { cn } from "@/lib/utils"
import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline"
  size?: "sm" | "md" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5"

    const variants = {
      primary:
        "bg-brand-blue text-brand-navy hover:bg-brand-teal hover:text-brand-navy focus:ring-brand-blue shadow-lg hover:shadow-xl",
      secondary:
        "bg-brand-red text-white border border-brand-red hover:bg-brand-red-light hover:border-brand-red-light focus:ring-brand-red shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-brand-white focus:ring-brand-navy shadow-sm hover:shadow-md",
    }

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
    }

    return (
      <button className={cn(baseStyles, variants[variant], sizes[size], className)} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export default Button
