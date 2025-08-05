"use client"

import { Sparkles, Twitter, Linkedin, Github, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-teal to-brand-blue rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-brand-navy" />
              </div>
              <span className="text-xl font-bold">ADmyBRAND AI</span>
            </div>
            <p className="text-brand-blue">Transform your marketing with the power of artificial intelligence.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-brand-blue hover:text-brand-red transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-blue hover:text-brand-red transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-blue hover:text-brand-red transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="text-brand-blue hover:text-brand-red transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-white">Product</h3>
            <ul className="space-y-2 text-brand-blue">
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-white">Company</h3>
            <ul className="space-y-2 text-brand-blue">
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-white">Support</h3>
            <ul className="space-y-2 text-brand-blue">
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brand-red transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-blue/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-brand-blue text-sm">© 2024 ADmyBRAND AI Suite. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-brand-blue hover:text-brand-red text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-brand-blue hover:text-brand-red text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-brand-blue hover:text-brand-red text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
