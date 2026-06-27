import { ScrollReveal } from "@/components/scroll-reveal"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative w-full h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Malibu Coastline" 
            className="w-full h-full object-cover brightness-[0.7]"
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <ScrollReveal animation="fade-up">
            <span className="text-blue-300 font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight drop-shadow-xl mb-6">
              A Vision of Luxury
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed max-w-2xl mx-auto">
              Where the majestic cliffs of Malibu meet unparalleled architectural design.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-10" />
      </section>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-16 w-full space-y-32">
        
        {/* The Beginning */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal animation="fade-up">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group h-[400px] md:h-[600px] ring-1 ring-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Interior Design" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={200}>
            <div className="max-w-xl">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">01 — The Beginning</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">Born from the landscape.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  DreamHills was founded with a single, uncompromising vision: to create a sanctuary where ultra-luxury effortlessly harmonizes with raw nature. 
                </p>
                <p>
                  When we first stood on this cliffside overlooking the Pacific Ocean, we knew the architecture had to be subservient to the view. Every angle, every window, and every material choice was meticulously planned to draw the outside in.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* The Architecture */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          <ScrollReveal animation="fade-up" delay={200} className="order-2 md:order-1">
            <div className="max-w-xl md:ml-auto">
              <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-4 block">02 — The Architecture</span>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">Crafted for the senses.</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-light">
                <p>
                  Designed by an award-winning architectural firm, the villa utilizes locally sourced stone, sustainable timber, and massive expanses of glass.
                </p>
                <p>
                  The result is a structure that feels grounded yet weightless. From the infinity edge pool that seemingly drops into the ocean, to the sunken fire pit lounge, every space was designed to foster connection—both with your loved ones and with the environment.
                </p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" className="order-1 md:order-2">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl relative group h-[400px] md:h-[600px] ring-1 ring-slate-200">
              <img 
                src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Architecture" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] ease-out"
              />
            </div>
          </ScrollReveal>
        </section>

        {/* Bento Gallery */}
        <section className="py-12 border-t border-slate-200 pt-24">
          <ScrollReveal animation="fade-up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">A legacy of design.</h2>
              <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-light">The details that make DreamHills truly unique, captured in moments.</p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="scale-up" delay={200}>
            <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
              <div className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden shadow-lg group relative cursor-pointer h-[300px] md:h-auto">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Detail 1" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-lg group relative cursor-pointer h-[250px] md:h-auto">
                <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Detail 2" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
              <div className="rounded-[2rem] overflow-hidden shadow-lg group relative cursor-pointer h-[250px] md:h-auto">
                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Detail 3" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            </div>
          </ScrollReveal>
        </section>

      </main>
    </div>
  )
}
