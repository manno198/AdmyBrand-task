import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
  description:
    "AI-powered marketing platform for automation, analytics, and customer engagement. Boost ROI by 340% with intelligent campaigns.",
  keywords: "AI marketing, marketing automation, customer analytics, campaign optimization, artificial intelligence",
  authors: [{ name: "ADmyBRAND AI Team" }],
  openGraph: {
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "AI-powered marketing platform for automation, analytics, and customer engagement.",
    type: "website",
    url: "https://admybrand.ai",
  },
  twitter: {
    card: "summary_large_image",
    title: "ADmyBRAND AI Suite - Transform Your Marketing with AI",
    description: "AI-powered marketing platform for automation, analytics, and customer engagement.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
