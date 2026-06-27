"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  // Do not show the public navbar in the admin section
  if (pathname.startsWith("/admin") || pathname.startsWith("/book")) {
    return null
  }

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-300">
      <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 shadow-lg flex h-16 md:h-20 items-center justify-between px-6 md:px-10 rounded-full mx-auto w-full transition-all duration-500">
        <div className="flex items-center gap-2 font-bold text-2xl tracking-tight">
          <Link href="/">
            <span className="text-white">DreamHills</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-8 font-medium text-sm">
          <Link href="/" className="relative text-white/90 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">Home</Link>
          <Link href="/villa" className="relative text-white/90 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">The Villa</Link>
          <Link href="/about" className="relative text-white/90 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">Our Story</Link>
          <Link href="/faq" className="relative text-white/90 hover:text-primary transition-colors after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-primary after:transition-all hover:after:w-full">FAQ</Link>
        </nav>
        <div className="flex items-center gap-6">
          <Link href="/contact" className="hidden lg:block text-sm font-medium text-white/90 hover:text-primary transition-colors">Contact</Link>
          <Button className="hidden sm:inline-flex rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all px-6 py-2 h-auto text-sm font-bold border-none">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
