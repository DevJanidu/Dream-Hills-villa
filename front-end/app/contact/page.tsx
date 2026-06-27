"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Luxury Villa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
      </div>

      <main className="relative z-10 flex-grow flex items-center justify-center pt-32 pb-24 w-full px-4 min-h-screen">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left Column - Contact Info */}
          <ScrollReveal animation="fade-right">
            <div className="space-y-10 md:space-y-12 mb-12 lg:mb-0">
              <div>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Get in Touch</span>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                  Craft your <br className="hidden md:block" />perfect stay.
                </h1>
                <p className="text-lg md:text-xl text-white/80 font-light max-w-md leading-relaxed">
                  Our concierge team is available 24/7 to assist with your reservation, special requests, and bespoke experiences.
                </p>
              </div>

              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">Email</p>
                    <p className="text-lg md:text-xl text-white font-medium group-hover:text-primary transition-colors">hello@dreamhills.com</p>
                  </div>
                </div>
                
                {/* Phone */}
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">Phone</p>
                    <p className="text-lg md:text-xl text-white font-medium group-hover:text-primary transition-colors">+1 (310) 555-0199</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-center space-x-6 group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-primary group-hover:border-primary group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-white/60 font-bold uppercase tracking-widest mb-1">Location</p>
                    <p className="text-lg md:text-xl text-white font-medium group-hover:text-primary transition-colors">Malibu, California, USA</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right Column - Form */}
          <ScrollReveal animation="fade-left" delay={200}>
            <div className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden ring-1 ring-white/10 hover:ring-white/30 transition-all duration-700">
              {/* Subtle inner glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -z-10 translate-x-1/2 -translate-y-1/2"></div>
              
              <h2 className="text-2xl font-bold text-white mb-8">Send us a message</h2>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2 group">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-white/70 block ml-2 group-focus-within:text-primary transition-colors">Name</label>
                  <Input 
                    placeholder="John Doe" 
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:bg-white/20 focus:border-white/40 focus-visible:ring-1 focus-visible:ring-primary/50 px-6 transition-all" 
                  />
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-white/70 block ml-2 group-focus-within:text-primary transition-colors">Email</label>
                  <Input 
                    placeholder="john@example.com" 
                    type="email" 
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-2xl focus:bg-white/20 focus:border-white/40 focus-visible:ring-1 focus-visible:ring-primary/50 px-6 transition-all" 
                  />
                </div>
                
                <div className="space-y-2 group">
                  <label className="text-[11px] font-bold uppercase tracking-widest text-white/70 block ml-2 group-focus-within:text-primary transition-colors">Message</label>
                  <textarea 
                    className="w-full min-h-[150px] rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-white shadow-sm placeholder:text-white/40 focus-visible:outline-none focus:bg-white/20 focus:border-white/40 focus-visible:ring-1 focus-visible:ring-primary/50 transition-all resize-none" 
                    placeholder="How can we assist you?"
                  ></textarea>
                </div>
                
                <Button className="w-full h-16 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all mt-4 group">
                  Send Message <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>
          </ScrollReveal>

        </div>
      </main>
    </div>
  )
}
