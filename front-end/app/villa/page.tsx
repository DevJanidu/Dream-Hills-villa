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
    <div className="flex flex-col min-h-screen bg-slate-50/50">

      <main className="max-w-7xl mx-auto px-4 md:px-8 pt-8 pb-24 w-full">
        
        {/* Title & Actions */}
        <ScrollReveal animation="fade-up">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              The Grand Horizon Villa
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center text-sm font-semibold text-slate-700 space-x-1">
                <Star className="w-5 h-5 fill-blue-600 text-blue-600" />
                <span className="text-base text-slate-900">4.96</span>
                <span className="text-slate-400 mx-1">·</span>
                <a href="#reviews" className="underline hover:text-blue-600 transition-colors text-slate-600">128 reviews</a>
                <span className="text-slate-400 mx-1">·</span>
                <div className="flex items-center hover:text-blue-600 cursor-pointer text-slate-600 transition-colors">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>Malibu, California</span>
                </div>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold">
                <button className="flex items-center hover:bg-slate-200/60 rounded-full px-4 py-2 transition-all hover:scale-105 active:scale-95 text-slate-700">
                  <Share className="w-4 h-4 mr-2" /> Share
                </button>
                <button className="flex items-center hover:bg-slate-200/60 rounded-full px-4 py-2 transition-all hover:scale-105 active:scale-95 text-slate-700">
                  <Heart className="w-4 h-4 mr-2" /> Save
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Media Gallery (Bento Style) */}
        <ScrollReveal animation="scale-up" delay={100}>
          <div className="relative rounded-3xl overflow-hidden grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-3 h-[50vh] min-h-[500px] mb-16 shadow-2xl ring-1 ring-slate-200">
            <div className="md:col-span-2 md:row-span-2 w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Villa Exterior" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Bedroom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Pool Area" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kitchen" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <div className="hidden md:block w-full h-full relative group cursor-pointer overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Living Room" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>
            <Button variant="outline" className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md hover:bg-white text-slate-900 border-none shadow-lg hover:shadow-xl hover:scale-105 transition-all font-semibold rounded-full px-6">
              <Grid className="w-4 h-4 mr-2" /> Show all photos
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 relative">
          
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            <ScrollReveal animation="fade-up">
              <div className="flex justify-between items-start pb-8 border-b border-slate-200">
                <div>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Entire villa hosted by Alexander</h2>
                  <p className="text-lg text-slate-600 mt-2 font-medium">10 guests <span className="mx-2 text-slate-300">|</span> 5 bedrooms <span className="mx-2 text-slate-300">|</span> 6 beds <span className="mx-2 text-slate-300">|</span> 5.5 baths</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-slate-100 overflow-hidden shrink-0 ml-6 ring-4 ring-white shadow-md">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80" alt="Host" className="w-full h-full object-cover" />
                </div>
              </div>
            </ScrollReveal>

            {/* Description */}
            <ScrollReveal animation="fade-up">
              <div className="pb-8 border-b border-slate-200">
                <h3 className="text-2xl font-bold mb-6 text-slate-900 tracking-tight">About this space</h3>
                <div className="space-y-4 text-lg text-slate-600 leading-relaxed font-light">
                  <p>
                    Experience unparalleled luxury in this stunning 5-bedroom villa perched on the cliffs of Malibu. With sweeping ocean views from almost every room, an infinity pool that seems to drop directly into the Pacific, and world-class amenities, DreamHills offers a getaway you will never forget.
                  </p>
                  <p>
                    The space features a state-of-the-art chef's kitchen, an expansive outdoor dining area with a fire pit, and a private cinema room. 
                  </p>
                </div>
                <Button variant="link" className="px-0 mt-4 font-semibold text-blue-600 hover:text-blue-700 text-lg group">
                  Show more <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Amenities */}
            <ScrollReveal animation="fade-up">
              <div className="pb-8 border-b border-slate-200">
                <h3 className="text-2xl font-bold mb-8 text-slate-900 tracking-tight">What this place offers</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8">
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Waves className="w-5 h-5 text-blue-600"/>
                    </div>
                    Private ocean-view pool
                  </div>
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Wifi className="w-5 h-5 text-blue-600"/>
                    </div>
                    Ultra-fast WiFi (352 Mbps)
                  </div>
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Monitor className="w-5 h-5 text-blue-600"/>
                    </div>
                    Dedicated workspace
                  </div>
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Car className="w-5 h-5 text-blue-600"/>
                    </div>
                    Free driveway parking
                  </div>
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Coffee className="w-5 h-5 text-blue-600"/>
                    </div>
                    Gourmet coffee station
                  </div>
                  <div className="flex items-center text-lg text-slate-700 group cursor-default">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 group-hover:scale-110 transition-all">
                      <Dog className="w-5 h-5 text-blue-600"/>
                    </div>
                    Pets allowed
                  </div>
                </div>
                <Button variant="outline" className="mt-8 font-semibold rounded-full px-8 py-6 text-base hover:bg-slate-100 hover:text-slate-900 border-slate-300">
                  Show all 45 amenities
                </Button>
              </div>
            </ScrollReveal>
            
            {/* Map Section */}
            <ScrollReveal animation="fade-up">
              <div className="pb-8">
                <h3 className="text-2xl font-bold mb-2 text-slate-900 tracking-tight">Where you'll be</h3>
                <p className="mb-6 text-slate-600 text-lg">Malibu, California, United States</p>
                <div className="w-full h-[450px] bg-slate-100 rounded-3xl flex items-center justify-center overflow-hidden border border-slate-200 relative group cursor-pointer">
                  {/* Subtle map background pattern */}
                  <div className="absolute inset-0 opacity-5"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative">
                      <MapPin className="w-12 h-12 text-blue-600 relative z-10 drop-shadow-md" />
                      <div className="absolute inset-0 bg-blue-400 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="mt-4 font-semibold text-slate-700 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">View interactive map</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="hidden lg:block relative">
            <ScrollReveal animation="scale-up" delay={200}>
              <div className="sticky top-28 rounded-3xl shadow-2xl p-8 bg-white/80 backdrop-blur-xl border border-white ring-1 ring-slate-100/50">
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <span className="text-3xl font-extrabold text-slate-900 tracking-tight">$1,250</span>
                    <span className="text-lg font-medium text-slate-500 ml-1">/ night</span>
                  </div>
                  <div className="text-sm font-semibold flex items-center bg-slate-100 px-3 py-1 rounded-full">
                    <Star className="w-4 h-4 mr-1.5 fill-blue-600 text-blue-600" /> 4.96
                  </div>
                </div>
                
                <div className="border border-slate-200 rounded-2xl mb-6 overflow-hidden bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-600 transition-shadow">
                  <div className="flex border-b border-slate-200">
                    <div className="w-1/2 p-4 border-r border-slate-200 hover:bg-slate-50 cursor-pointer transition-colors group">
                      <label className="text-[11px] uppercase font-bold text-slate-800 tracking-wider group-hover:text-blue-600 transition-colors">Check-in</label>
                      <div className="text-sm text-slate-500 mt-1 font-medium">Add date</div>
                    </div>
                    <div className="w-1/2 p-4 hover:bg-slate-50 cursor-pointer transition-colors group">
                      <label className="text-[11px] uppercase font-bold text-slate-800 tracking-wider group-hover:text-blue-600 transition-colors">Checkout</label>
                      <div className="text-sm text-slate-500 mt-1 font-medium">Add date</div>
                    </div>
                  </div>
                  <div className="p-4 hover:bg-slate-50 cursor-pointer transition-colors group">
                    <label className="text-[11px] uppercase font-bold text-slate-800 tracking-wider group-hover:text-blue-600 transition-colors">Guests</label>
                    <div className="text-sm text-slate-900 mt-1 font-medium">1 guest</div>
                  </div>
                </div>
                
                <Link href="/book" className="w-full block">
                  <Button className="w-full py-7 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all">
                    Check availability
                  </Button>
                </Link>

                <p className="text-center text-sm text-slate-500 mt-6 font-medium">You won't be charged yet</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </main>
    </div>
  )
}
