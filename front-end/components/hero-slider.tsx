"use client"

import * as React from "react"

const heroImages = [
  "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
]

export function HeroSlider() {
  const [currentIndex, setCurrentIndex] = React.useState(0)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 6000) // 6 seconds per slide
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
      {heroImages.map((img, idx) => {
        const isActive = idx === currentIndex
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Luxury Villa Hero ${idx + 1}`}
              // The cinematic zoom (Ken Burns effect) happens over 12 seconds
              className={`w-full h-full object-cover brightness-[0.60] transition-transform duration-[12000ms] ease-linear ${
                isActive ? "scale-110" : "scale-100"
              }`}
            />
          </div>
        )
      })}
      
      {/* Smooth richer gradients to make text and the booking bar pop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none z-20" />
      
      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-30">
        {heroImages.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-700 shadow-sm ${
              idx === currentIndex ? 'w-10 bg-white' : 'w-4 bg-white/40 cursor-pointer hover:bg-white/60'
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </div>
  )
}
