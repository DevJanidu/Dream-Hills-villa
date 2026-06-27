import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { 
  Heart, 
  Share, 
  Star, 
  MapPin, 
  Grid, 
  Check, 
  Waves, 
  Wifi, 
  Car, 
  Coffee, 
  Dog, 
  Monitor,
  ChevronRight
} from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"

export default function VillaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50/80 relative overflow-hidden">
      
      {/* Ambient Background Orbs for Glass Effect */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-300/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-emerald-300/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[10%] w-[40%] h-[40%] bg-amber-200/20 rounded-full blur-[120px]"></div>
      </div>

      <main className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-32 pb-24 w-full">
        
        {/* Title & Actions */}
        <ScrollReveal animation="fade-up">
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
              The Grand Horizon Villa
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center text-sm font-semibold text-slate-700 space-x-1 bg-white/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/60 shadow-sm">
                <Star className="w-5 h-5 fill-primary text-primary" />
                <span className="text-base text-slate-900 ml-1">4.96</span>
                <span className="text-slate-400 mx-2">·</span>
                <a href="#reviews" className="underline hover:text-primary transition-colors text-slate-600">128 reviews</a>
                <span className="text-slate-400 mx-2">·</span>
                <div className="flex items-center hover:text-primary cursor-pointer text-slate-600 transition-colors">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Malibu, California</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold">
                <button className="flex items-center bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:bg-white hover:text-primary rounded-full px-5 py-2.5 transition-all hover:scale-105 active:scale-95 text-slate-700">
                  <Share className="w-4 h-4 mr-2" /> Share
                </button>
                <button className="flex items-center bg-white/40 backdrop-blur-md border border-white/60 shadow-sm hover:bg-white hover:text-primary rounded-full px-5 py-2.5 transition-all hover:scale-105 active:scale-95 text-slate-700">
                  <Heart className="w-4 h-4 mr-2" /> Save
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Media Gallery (Bento Style) */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="relative rounded-[2.5rem] overflow-hidden grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[60vh] min-h-[500px] mb-16 shadow-2xl ring-1 ring-white/60">
            <div className="md:col-span-2 md:row-span-2 w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Villa Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pool Area" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Living Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <Button variant="outline" className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-xl hover:bg-white text-slate-900 border border-white/60 shadow-xl hover:shadow-2xl hover:scale-105 transition-all font-bold rounded-full px-8 py-6">
              <Grid className="w-5 h-5 mr-3" /> Show all photos
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8 md:space-y-12">
            
            <ScrollReveal animation="fade-up">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2.5rem] p-8 md:p-10 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 hover:bg-white/50 transition-colors duration-500">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Entire villa hosted by Alexander</h2>
                  <p className="text-lg text-slate-700 mt-2 font-medium">10 guests <span className="mx-2 text-slate-400">|</span> 5 bedrooms <span className="mx-2 text-slate-400">|</span> 6 beds <span className="mx-2 text-slate-400">|</span> 5.5 baths</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 ring-4 ring-white shadow-lg">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Host" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2.5rem] p-8 md:p-10 hover:bg-white/50 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">About this space</h3>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed font-light">
                  <p>
                    Experience unparalleled luxury in this stunning 5-bedroom villa perched on the cliffs of Malibu. With sweeping ocean views from almost every room, an infinity pool that seems to drop directly into the Pacific, and world-class amenities, DreamHills offers a getaway you will never forget.
                  </p>
                  <p>
                    The space features a state-of-the-art chef's kitchen, an expansive outdoor dining area with a fire pit, and a private cinema room. 
                  </p>
                </div>
                <Button variant="link" className="px-0 mt-6 font-semibold text-primary hover:text-primary/80 text-lg group">
                  Show more <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Amenities */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2.5rem] p-8 md:p-10 hover:bg-white/50 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 tracking-tight">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Waves className="w-6 h-6 text-primary"/>
                    </div>
                    Private ocean-view pool
                  </div>
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Wifi className="w-6 h-6 text-primary"/>
                    </div>
                    Ultra-fast WiFi (352 Mbps)
                  </div>
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Monitor className="w-6 h-6 text-primary"/>
                    </div>
                    Dedicated workspace
                  </div>
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Car className="w-6 h-6 text-primary"/>
                    </div>
                    Free driveway parking
                  </div>
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Coffee className="w-6 h-6 text-primary"/>
                    </div>
                    Gourmet coffee station
                  </div>
                  <div className="flex items-center text-lg text-slate-800 font-medium group cursor-default bg-white/50 backdrop-blur-md rounded-2xl p-4 shadow-sm border border-white/40 hover:bg-white/80 transition-all">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm group-hover:scale-110 transition-transform">
                      <Dog className="w-6 h-6 text-primary"/>
                    </div>
                    Pets allowed
                  </div>
                </div>
                <Button variant="outline" className="mt-8 font-bold rounded-2xl px-8 py-6 text-base bg-white/50 backdrop-blur-md border border-white/60 shadow-sm hover:bg-white hover:text-primary transition-all w-full sm:w-auto">
                  Show all 45 amenities
                </Button>
              </div>
            </ScrollReveal>
            
            {/* Map Section */}
            <ScrollReveal animation="fade-up">
              <div className="bg-white/40 backdrop-blur-2xl border border-white/60 shadow-xl rounded-[2.5rem] p-8 md:p-10 hover:bg-white/50 transition-colors duration-500">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 tracking-tight">Where you'll be</h3>
                <p className="mb-6 text-slate-700 text-lg">Malibu, California, United States</p>
                <div className="w-full h-[450px] bg-white/50 backdrop-blur-md rounded-3xl flex items-center justify-center overflow-hidden border border-white/80 relative group cursor-pointer shadow-inner">
                  {/* Subtle map background pattern */}
                  <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <MapPin className="w-14 h-14 text-primary relative z-10 drop-shadow-xl" />
                      <div className="absolute inset-0 bg-primary/40 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="mt-4 font-bold text-slate-800 bg-white/90 backdrop-blur-xl px-6 py-3 rounded-full shadow-lg border border-white">View interactive map</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="hidden lg:block relative">
            <ScrollReveal animation="scale-up" delay={200}>
              <div className="sticky top-28 bg-white/60 backdrop-blur-3xl border border-white/80 shadow-2xl rounded-[2.5rem] p-8 ring-1 ring-white/50">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-4xl font-extrabold text-slate-900 tracking-tight">$1,250</span>
                    <span className="text-lg font-medium text-slate-500 ml-1">/ night</span>
                  </div>
                  <div className="text-sm font-bold flex items-center bg-white/80 shadow-sm border border-white/60 text-primary px-4 py-1.5 rounded-full">
                    <Star className="w-4 h-4 mr-1.5 fill-primary text-primary" /> 4.96
                  </div>
                </div>
                
                <div className="border border-white/60 rounded-2xl mb-6 overflow-hidden bg-white/50 backdrop-blur-md shadow-inner focus-within:ring-2 focus-within:ring-primary transition-shadow">
                  <div className="flex border-b border-white/60">
                    <div className="w-1/2 p-4 border-r border-white/60 hover:bg-white/80 cursor-pointer transition-colors group">
                      <label className="text-[11px] uppercase font-bold text-slate-600 tracking-wider group-hover:text-primary transition-colors">Check-in</label>
                      <div className="text-sm text-slate-800 mt-1 font-semibold">Add date</div>
                    </div>
                    <div className="w-1/2 p-4 hover:bg-white/80 cursor-pointer transition-colors group">
                      <label className="text-[11px] uppercase font-bold text-slate-600 tracking-wider group-hover:text-primary transition-colors">Checkout</label>
                      <div className="text-sm text-slate-800 mt-1 font-semibold">Add date</div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-white/80 cursor-pointer transition-colors group">
                    <label className="text-[11px] uppercase font-bold text-slate-600 tracking-wider group-hover:text-primary transition-colors">Guests</label>
                    <div className="text-sm text-slate-900 mt-1 font-bold">1 guest</div>
                  </div>
                </div>
                
                <Link href="/book" className="w-full block">
                  <Button className="w-full py-7 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                    Check availability
                  </Button>
                </Link>

                <p className="text-center text-sm text-slate-500 mt-6 font-medium">You won't be charged yet</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>

      {/* Mobile Sticky Booking Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/80 backdrop-blur-3xl border-t border-white/60 lg:hidden flex items-center justify-between shadow-[0_-20px_40px_rgba(0,0,0,0.1)] animate-in slide-in-from-bottom-24 duration-700">
        <div className="flex flex-col">
          <div className="flex items-baseline space-x-1">
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">$1,250</span>
            <span className="text-sm font-medium text-slate-500">/ night</span>
          </div>
          <span className="text-xs font-bold text-slate-500 underline underline-offset-2">Oct 12 - 17</span>
        </div>
        <Link href="/book">
          <Button className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 px-8 py-6 text-base font-bold transition-all active:scale-95">
            Reserve
          </Button>
        </Link>
      </div>

    </div>
  )
}
