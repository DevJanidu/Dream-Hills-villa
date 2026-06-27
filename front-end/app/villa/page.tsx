import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Heart, Share, Star, MapPin, Grid, Check } from "lucide-react"
import Link from "next/link"

export default function VillaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Minimal Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary text-2xl tracking-tight">
            <span className="text-[#FF385C]">DreamHills</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/book">
              <Button variant="airbnbPrimary" className="hidden sm:inline-flex rounded-full">
                Check Availability
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-6 pb-20 w-full">
        {/* Title & Actions */}
        <div className="mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight mb-2">
            The Grand Horizon Villa
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center text-sm font-semibold text-foreground space-x-1">
              <Star className="w-4 h-4 fill-foreground" />
              <span>4.96 ·</span>
              <a href="#reviews" className="underline hover:text-muted-foreground transition-colors">128 reviews</a>
              <span className="text-muted-foreground mx-1">·</span>
              <div className="flex items-center hover:underline cursor-pointer">
                <MapPin className="w-4 h-4 mr-1" />
                <span>Malibu, California, United States</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 text-sm font-semibold">
              <button className="flex items-center hover:bg-secondary rounded-lg px-2 py-1 transition-colors">
                <Share className="w-4 h-4 mr-2" /> Share
              </button>
              <button className="flex items-center hover:bg-secondary rounded-lg px-2 py-1 transition-colors">
                <Heart className="w-4 h-4 mr-2" /> Save
              </button>
            </div>
          </div>
        </div>

        {/* Media Grid */}
        <div className="relative rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-2 h-[400px] md:h-[50vh] min-h-[400px] mb-12">
          <div className="md:col-span-2 md:row-span-2 w-full h-full relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Villa Exterior" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block w-full h-full relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block w-full h-full relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pool Area" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block w-full h-full relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <div className="hidden md:block w-full h-full relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Living Room" className="w-full h-full object-cover group-hover:brightness-95 transition-all" />
          </div>
          <Button variant="airbnbOutline" className="absolute bottom-4 right-4 bg-white font-semibold">
            <Grid className="w-4 h-4 mr-2" /> Show all photos
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start pb-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-semibold text-foreground">Entire villa hosted by Alexander</h2>
                <p className="text-base text-foreground mt-1">10 guests · 5 bedrooms · 6 beds · 5.5 baths</p>
              </div>
              <div className="w-14 h-14 rounded-full bg-secondary overflow-hidden shrink-0 ml-4">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Host" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Description */}
            <div className="py-8 border-b border-border text-foreground">
              <h3 className="text-xl font-semibold mb-4">About this space</h3>
              <p className="leading-relaxed mb-4 text-lg">
                Experience unparalleled luxury in this stunning 5-bedroom villa perched on the cliffs of Malibu. With sweeping ocean views from almost every room, an infinity pool that seems to drop directly into the Pacific, and world-class amenities, DreamHills offers a getaway you will never forget.
              </p>
              <p className="leading-relaxed mb-4 text-lg">
                The space features a state-of-the-art chef's kitchen, an expansive outdoor dining area with a fire pit, and a private cinema room. 
              </p>
              <Button variant="link" className="px-0 font-semibold text-foreground underline text-lg">
                Show more <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Amenities */}
            <div className="py-8 border-b border-border">
              <h3 className="text-xl font-semibold mb-6 text-foreground">What this place offers</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Ocean view</div>
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Private outdoor pool</div>
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Fast wifi – 352 Mbps</div>
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Dedicated workspace</div>
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Free driveway parking</div>
                <div className="flex items-center text-lg text-foreground"><Check className="w-6 h-6 mr-4 text-muted-foreground"/> Pets allowed</div>
              </div>
              <Button variant="airbnbOutline" className="mt-8 font-semibold w-full sm:w-auto">
                Show all 45 amenities
              </Button>
            </div>
            
            {/* Location (Map Placeholder) */}
            <div className="py-8 border-b border-border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Where you'll be</h3>
              <p className="mb-6 text-foreground">Malibu, California, United States</p>
              <div className="w-full h-[400px] bg-secondary rounded-xl flex items-center justify-center overflow-hidden border">
                <p className="text-muted-foreground flex flex-col items-center">
                  <MapPin className="w-8 h-8 mb-2" />
                  Interactive Map Placeholder
                </p>
              </div>
            </div>
          </div>

          {/* Booking Sticky Sidebar */}
          <div className="hidden lg:block relative">
            <div className="sticky top-28 border rounded-2xl shadow-xl p-6 bg-white">
              <div className="flex justify-between items-baseline mb-6">
                <div className="text-2xl font-bold text-foreground">
                  $1,250 <span className="text-base font-normal text-muted-foreground">night</span>
                </div>
                <div className="text-sm font-semibold flex items-center underline">
                  <Star className="w-3.5 h-3.5 mr-1 fill-foreground" /> 4.96
                </div>
              </div>
              
              <div className="border border-border rounded-lg mb-4">
                <div className="flex border-b border-border">
                  <div className="w-1/2 p-3 border-r border-border">
                    <label className="text-[10px] uppercase font-bold text-foreground">Check-in</label>
                    <div className="text-sm text-muted-foreground mt-1">Add date</div>
                  </div>
                  <div className="w-1/2 p-3">
                    <label className="text-[10px] uppercase font-bold text-foreground">Checkout</label>
                    <div className="text-sm text-muted-foreground mt-1">Add date</div>
                  </div>
                </div>
                <div className="p-3">
                  <label className="text-[10px] uppercase font-bold text-foreground">Guests</label>
                  <div className="text-sm text-foreground mt-1">1 guest</div>
                </div>
              </div>
              
              <Link href="/book" className="w-full block">
                <Button variant="airbnbPrimary" className="w-full py-6 text-lg">
                  Check availability
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

function ChevronRight(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
  )
}
