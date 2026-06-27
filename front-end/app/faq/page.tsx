import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary text-2xl tracking-tight">
            <span className="text-[#FF385C]">DreamHills</span>
          </Link>
          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/villa" className="hover:text-primary transition-colors">The Villa</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
            <Link href="/faq" className="text-primary transition-colors font-bold">FAQ</Link>
          </nav>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">Frequently Asked Questions</h1>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">What time is check-in and check-out?</h3>
            <p className="text-muted-foreground leading-relaxed">Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Are pets allowed?</h3>
            <p className="text-muted-foreground leading-relaxed">Yes! We are a pet-friendly property. A small additional cleaning fee applies.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Is the pool heated?</h3>
            <p className="text-muted-foreground leading-relaxed">Yes, the infinity pool is heated year-round to a comfortable 84°F (29°C).</p>
          </div>
        </div>
      </main>
    </div>
  )
}
