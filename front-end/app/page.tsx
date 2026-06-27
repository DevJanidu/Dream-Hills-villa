import { AirbnbSearchBar } from "@/components/airbnb-search-bar"
import { AirbnbListingCard } from "@/components/airbnb-listing-card"
import { Button } from "@/components/ui/button"
import { Wifi, Waves, MapPin, Users, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (Placeholder) */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 font-bold text-primary text-2xl tracking-tight">
            <span className="text-[#FF385C]">DreamHills</span>
          </div>
          <nav className="hidden md:flex gap-6 font-medium text-sm">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/villa" className="hover:text-primary transition-colors">The Villa</Link>
            <Link href="/about" className="hover:text-primary transition-colors">Our Story</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/contact" className="text-sm font-medium hover:underline">Contact</Link>
            <Button variant="airbnbOutline" className="hidden sm:inline-flex rounded-full">
              Book Now
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Luxury Villa Hero" 
            className="w-full h-full object-cover brightness-[0.85]"
          />
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-[-10vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 tracking-tight max-w-3xl">
            Escape to your private sanctuary in the hills.
          </h1>
          <div className="w-full max-w-4xl mx-auto mt-8">
            <AirbnbSearchBar />
          </div>
        </div>
      </section>

      {/* Quick Highlights */}
      <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border/50">
          <div className="flex flex-col items-center text-center px-4 space-y-3">
            <Waves className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Private Pool</h3>
            <p className="text-sm text-muted-foreground">Infinity edge with ocean views</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 space-y-3">
            <Wifi className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">High-Speed Wi-Fi</h3>
            <p className="text-sm text-muted-foreground">Work remotely without interruptions</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 space-y-3">
            <Users className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Sleeps 10</h3>
            <p className="text-sm text-muted-foreground">5 luxurious bedrooms</p>
          </div>
          <div className="flex flex-col items-center text-center px-4 space-y-3">
            <MapPin className="w-8 h-8 text-primary" />
            <h3 className="font-semibold text-lg text-foreground">Prime Location</h3>
            <p className="text-sm text-muted-foreground">10 mins from the pristine beaches</p>
          </div>
        </div>
      </section>

      {/* Featured Spaces / Similar Listings (Airbnb Style) */}
      <section className="py-16 px-4 md:px-8 bg-secondary/30 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-semibold text-foreground tracking-tight">Explore the Spaces</h2>
              <p className="text-muted-foreground mt-2 text-lg">Every corner designed for luxury and comfort.</p>
            </div>
            <Link href="/villa" className="hidden sm:flex items-center text-primary font-semibold hover:underline">
              View full gallery <ChevronRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AirbnbListingCard 
              image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              location="The Grand Suite"
              rating={5.0}
              distance="Primary Bedroom"
              dates="King Bed • En-suite • Balcony"
              price={0}
            />
            <AirbnbListingCard 
              image="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              location="Infinity Pool & Deck"
              rating={4.9}
              distance="Outdoor Living"
              dates="Sun Loungers • BBQ • Dining"
              price={0}
            />
            <AirbnbListingCard 
              image="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              location="Chef's Kitchen"
              rating={4.8}
              distance="Indoor Living"
              dates="Fully Equipped • Island Seating"
              price={0}
            />
          </div>
          
          <div className="mt-8 sm:hidden flex justify-center">
            <Button variant="airbnbOutline" className="w-full">
              View full gallery
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-foreground tracking-tight">What our guests say</h2>
          <div className="flex items-center justify-center mt-4 space-x-2 text-xl font-semibold">
            <Star className="w-6 h-6 fill-primary text-primary" />
            <span>4.96</span>
            <span className="text-muted-foreground font-normal text-lg">· 128 reviews</span>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="p-6 rounded-2xl border bg-card">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Sarah" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">Sarah Jenkins</h4>
                <p className="text-sm text-muted-foreground">August 2024</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              "Absolutely breathtaking. The pictures don't even do it justice. The pool area is perfect for morning coffee and sunset cocktails. We didn't want to leave!"
            </p>
          </div>
          
          <div className="p-6 rounded-2xl border bg-card">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-secondary overflow-hidden">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="David" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">David Chen</h4>
                <p className="text-sm text-muted-foreground">June 2024</p>
              </div>
            </div>
            <p className="text-foreground leading-relaxed">
              "The perfect family getaway. The house was spotless, the amenities were top-notch, and the host was incredibly responsive. We'll definitely be booking again."
            </p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="airbnbOutline">Show all 128 reviews</Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-secondary/30 mt-auto">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
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
    </div>
  )
}

function Star(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}
