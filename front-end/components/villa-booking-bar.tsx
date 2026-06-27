"use client"

import { Button } from "@/components/ui/button"
import { Calendar, Users, ArrowRight } from "lucide-react"

export function VillaBookingBar() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between border border-white/20 shadow-2xl backdrop-blur-2xl bg-white/70 rounded-[2rem] p-2 md:pl-6 mx-auto w-full max-w-4xl transition-all duration-300 hover:bg-white/80">
      
      <div className="flex items-center w-full md:w-auto flex-1 divide-x divide-slate-300/50">
        
        {/* Check In */}
        <button className="flex-1 flex items-center space-x-3 px-4 md:px-6 py-3 rounded-full hover:bg-white/50 transition-colors text-left group">
          <Calendar className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-wider uppercase text-slate-800">Check In</span>
            <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Select Date</span>
          </div>
        </button>

        {/* Check Out */}
        <button className="flex-1 flex items-center space-x-3 px-4 md:px-6 py-3 rounded-full hover:bg-white/50 transition-colors text-left group">
          <Calendar className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-wider uppercase text-slate-800">Check Out</span>
            <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Select Date</span>
          </div>
        </button>

        {/* Guests */}
        <button className="flex-1 flex items-center space-x-3 px-4 md:px-6 py-3 rounded-full hover:bg-white/50 transition-colors text-left group">
          <Users className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-xs tracking-wider uppercase text-slate-800">Guests</span>
            <span className="text-sm font-medium text-slate-500 whitespace-nowrap">Add Guests</span>
          </div>
        </button>

      </div>

      <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4">
        <Button className="w-full md:w-auto rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all h-14 px-8 text-base font-semibold">
          Check Availability <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>

    </div>
  )
}
