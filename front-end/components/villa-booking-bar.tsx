"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, ArrowRight } from "lucide-react"

export function VillaBookingBar() {
  return (
    <div className="bg-white/10 backdrop-blur-xl border border-white/20 flex flex-col md:flex-row items-center justify-between rounded-[2.5rem] p-3 md:pl-8 mx-auto w-full max-w-4xl transition-all duration-500 shadow-xl hover:shadow-2xl hover:bg-white/20 group">
      
      <div className="flex items-center w-full md:w-auto flex-1 divide-x divide-white/20">
        
        {/* Check In */}
        <button className="flex-1 flex items-center justify-center md:justify-start space-x-3 md:space-x-4 px-4 md:px-6 py-4 rounded-full hover:bg-white/10 transition-colors text-left group/btn">
          <Calendar className="w-6 h-6 text-primary group-hover/btn:scale-110 group-hover/btn:rotate-[-5deg] transition-all shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-[11px] tracking-widest uppercase text-white/90">Check In</span>
            <span className="text-sm font-semibold text-white/70 whitespace-nowrap">Select Date</span>
          </div>
        </button>

        {/* Check Out */}
        <button className="flex-1 flex items-center justify-center md:justify-start space-x-3 md:space-x-4 px-4 md:px-6 py-4 rounded-full hover:bg-white/10 transition-colors text-left group/btn">
          <Calendar className="w-6 h-6 text-primary group-hover/btn:scale-110 group-hover/btn:rotate-[-5deg] transition-all shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-[11px] tracking-widest uppercase text-white/90">Check Out</span>
            <span className="text-sm font-semibold text-white/70 whitespace-nowrap">Select Date</span>
          </div>
        </button>

        {/* Guests */}
        <button className="flex-1 flex items-center justify-center md:justify-start space-x-3 md:space-x-4 px-4 md:px-6 py-4 rounded-full hover:bg-white/10 transition-colors text-left group/btn">
          <Users className="w-6 h-6 text-primary group-hover/btn:scale-110 group-hover/btn:rotate-[-5deg] transition-all shrink-0" />
          <div className="flex flex-col">
            <span className="font-bold text-[11px] tracking-widest uppercase text-white/90">Guests</span>
            <span className="text-sm font-semibold text-white/70 whitespace-nowrap">Add Guests</span>
          </div>
        </button>

      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-6">
        <Button className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1 transition-all h-16 px-10 text-lg font-bold">
          Check Availability <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

    </div>
  )
}
