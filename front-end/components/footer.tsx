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
    <footer className="border-t bg-secondary/30 mt-auto w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">Support</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:underline">Help Center</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact Us</Link></li>
              <li><Link href="/faq" className="hover:underline">Cancellation Options</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:underline">About Us</Link></li>
              <li><Link href="/careers" className="hover:underline">Careers</Link></li>
              <li><Link href="/investors" className="hover:underline">Investors</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-foreground text-sm">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/terms" className="hover:underline">Terms of Service</Link></li>
              <li><Link href="/privacy" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:underline">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© 2024 DreamHills Villa, Inc. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <span className="hover:underline cursor-pointer font-semibold text-foreground">English (US)</span>
            <span className="hover:underline cursor-pointer font-semibold text-foreground">$ USD</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
