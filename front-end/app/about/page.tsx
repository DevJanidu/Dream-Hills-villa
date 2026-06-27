import Link from "next/link"

export default function AboutPage() {
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
            <Link href="/about" className="text-primary transition-colors font-bold">Our Story</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </nav>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-24 w-full">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">Our Story</h1>
        <div className="prose prose-lg">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            DreamHills was founded with a single vision: to create a sanctuary where luxury meets nature.
          </p>
          <p className="text-foreground leading-relaxed mb-6">
            Nestled in the pristine hills of Malibu, our villa was architecturally designed to blend seamlessly with the surrounding landscape while offering world-class amenities. From the infinity edge pool that mirrors the Pacific Ocean to the locally sourced materials used throughout the interior, every detail has been thoughtfully curated.
          </p>
        </div>
      </main>
    </div>
  )
}
