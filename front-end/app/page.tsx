import { VillaBookingBar } from "@/components/villa-booking-bar"
import { AirbnbListingCard } from "@/components/airbnb-listing-card"
import { FeaturedSpaceSlider } from "@/components/featured-space-slider"
import { HeroSlider } from "@/components/hero-slider"
import { Button } from "@/components/ui/button"
import { Wifi, Waves, MapPin, Users, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center">
        <HeroSlider />
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-[-10vh]">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-6 tracking-tight max-w-3xl animate-in fade-in zoom-in-95 slide-in-from-bottom-12 duration-1000 ease-out fill-mode-both">
            Escape to your private sanctuary in the hills.
          </h1>
          <div className="w-full max-w-4xl mx-auto mt-8 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 ease-out fill-mode-both">
            <VillaBookingBar />
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

      {/* Featured Spaces (Modern Bento/Hover Cards) */}
      <section className="py-24 px-4 md:px-8 w-full bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-emerald-100/30 rounded-full blur-[100px] -z-10 -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">Villa Tour</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight leading-tight">
                Explore the Spaces
              </h2>
              <p className="text-slate-600 mt-4 text-lg md:text-xl font-light">
                Every corner designed for unparalleled luxury and comfort. Discover the meticulously crafted environments within Dream Hills.
              </p>
            </div>
            <Link href="/villa" className="group inline-flex items-center justify-center px-6 py-3 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 shrink-0">
              View full gallery <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
            {/* Main Featured Space - Spans 2 cols on lg screens */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 lg:col-span-2 cursor-pointer ring-1 ring-black/5 hover:ring-blue-400/50 hover:ring-2">
              <FeaturedSpaceSlider />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300 pointer-events-none z-10"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end pointer-events-none z-10">
                <div className="flex flex-col items-start justify-end h-full">
                  <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">Primary Bedroom</span>
                  <h3 className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out text-4xl font-extrabold text-white mb-3">The Grand Suite</h3>
                  <p className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out text-white/90 line-clamp-2 max-w-xl text-lg font-light">
                    Wake up to panoramic ocean views in a king-sized bed, featuring a spa-like en-suite bathroom and a private sprawling balcony.
                  </p>
                </div>
              </div>
            </div>

            {/* Standard Space */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ring-1 ring-black/5 hover:ring-blue-400/50 hover:ring-2">
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Infinity Pool & Deck" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex flex-col items-start justify-end h-full">
                  <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">Outdoor Living</span>
                  <h3 className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out text-2xl font-bold text-white mb-2">Infinity Pool</h3>
                  <p className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out text-white/80 line-clamp-2 text-sm font-light">
                    Seamlessly blending into the horizon with luxury sun loungers and an alfresco dining area.
                  </p>
                </div>
              </div>
            </div>

            {/* Standard Space */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ring-1 ring-black/5 hover:ring-blue-400/50 hover:ring-2">
              <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Chef's Kitchen" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex flex-col items-start justify-end h-full">
                  <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">Indoor Living</span>
                  <h3 className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out text-2xl font-bold text-white mb-2">Chef's Kitchen</h3>
                  <p className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out text-white/80 line-clamp-2 text-sm font-light">
                    State-of-the-art appliances, grand marble island, and fully equipped for culinary excellence.
                  </p>
                </div>
              </div>
            </div>

            {/* Spans 2 cols on lg screens */}
            <div className="group relative rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 lg:col-span-2 cursor-pointer hidden md:block ring-1 ring-black/5 hover:ring-blue-400/50 hover:ring-2">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Living Area" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="flex flex-col items-start justify-end h-full">
                  <span className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-white bg-white/20 backdrop-blur-md rounded-full border border-white/30">Entertainment</span>
                  <h3 className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-out text-3xl font-bold text-white mb-2">Sunken Lounge</h3>
                  <p className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150 ease-out text-white/80 line-clamp-2 max-w-lg font-light">
                    A beautifully appointed open-plan living room featuring floor-to-ceiling windows and designer furnishings.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 sm:hidden flex justify-center">
            <Button variant="outline" className="w-full rounded-full py-6 text-base font-medium border-slate-300 text-slate-700">
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
