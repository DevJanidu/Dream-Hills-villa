"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Footer() {
  const pathname = usePathname()

  // Do not show the public footer in the admin section
  if (pathname.startsWith("/admin") || pathname.startsWith("/book")) {
    return null
  }

  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden w-full mt-auto">
      {/* Subtle Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="font-extrabold text-3xl tracking-tight text-white drop-shadow-sm">DreamHills</span>
            </Link>
            <p className="text-white/60 font-light leading-relaxed max-w-xs text-sm">
              Experience the pinnacle of coastal luxury. A bespoke sanctuary designed for those who appreciate the extraordinary.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Support</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><Link href="/faq" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Help Center</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Contact Us</Link></li>
              <li><Link href="/faq" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Cancellation Options</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><Link href="/about" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>About Us</Link></li>
              <li><Link href="/careers" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Careers</Link></li>
              <li><Link href="/investors" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Investors</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white text-sm uppercase tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60 font-medium">
              <li><Link href="/terms" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors flex items-center group"><span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>Cookie Policy</Link></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-white/40 font-medium">
          <p>© 2026 lycolabs Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <span className="hover:text-white transition-colors cursor-pointer tracking-wide">English (US)</span>
            <span className="hover:text-white transition-colors cursor-pointer tracking-wide">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
