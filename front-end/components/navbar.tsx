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
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-2 font-bold text-primary text-2xl tracking-tight">
          <Link href="/">
            <span className="text-[#FF385C]">DreamHills</span>
          </Link>
        </div>
        <nav className="hidden md:flex gap-6 font-medium text-sm">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <Link href="/villa" className="hover:text-primary transition-colors">The Villa</Link>
          <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
          <Button variant="outline" className="hidden sm:inline-flex rounded-full border-slate-300">
            Book Now
          </Button>
        </div>
      </div>
    </header>
  )
}
