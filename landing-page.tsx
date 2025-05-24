import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Instagram, Mail, FileText } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          filter: "brightness(0.3) sepia(0.2) saturate(1.2)",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-4 py-12">
          <div className="text-center max-w-2xl mx-auto">
            {/* Brand Name */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 font-serif tracking-tight">
              La Roche
              <span className="block text-amber-400">Triple</span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide">
              Website under construction
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed max-w-lg mx-auto">
              Our triple-fermented brew is aging to perfection. In the meantime, stay tuned.
            </p>

            {/* Email Subscription */}
            {/* <div className="max-w-md mx-auto mb-8">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/30 border-amber-400/30 text-white placeholder:text-gray-400 focus:border-amber-400 focus:ring-amber-400/20"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-black font-semibold px-8 py-2 transition-colors">
                  Notify Me
                </Button>
              </div>
            </div> */}
          </div>
        </main>

        {/* Footer */}
        <footer className="relative z-10 border-t border-gray-800/50 bg-black/20 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-4 py-8">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors">
                <Mail className="w-4 h-4" />
                Contact
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors">
                <Instagram className="w-4 h-4" />
                Instagram
              </a>
              <a href="#" className="flex items-center gap-2 text-gray-400 hover:text-amber-400 transition-colors">
                <FileText className="w-4 h-4" />
                Terms
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center mt-6 pt-6 border-t border-gray-800/30">
              <p className="text-gray-500 text-sm">
                © {new Date().getFullYear()} La Roche Triple. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
