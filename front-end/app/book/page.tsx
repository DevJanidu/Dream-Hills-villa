"use client"

import { useState, useLayoutEffect, useEffect, useRef } from "react"
import { Calendar } from "@/components/ui/calendar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { addDays, differenceInCalendarDays, format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Star, Shield } from "lucide-react"
import "./luxury.css"

const NIGHTLY_RATE = 1250
const CLEANING_FEE = 250
const SERVICE_FEE_RATE = 0.15
const TAX_RATE = 0.12

export default function AvailabilityPage() {
  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 4),
  })
  const [bookedDates, setBookedDates] = useState<Date[]>([])

  useEffect(() => {
    const fetchAvailability = async () => {
      try {
        const start = format(new Date(), "yyyy-MM-dd")
        const end = format(addDays(new Date(), 365), "yyyy-MM-dd")
        const res = await fetch(`http://localhost:8080/api/v1/bookings/availability?startDate=${start}&endDate=${end}`)
        if (res.ok) {
          const json = await res.json()
          if (json.success && json.data?.bookedDates) {
            setBookedDates(json.data.bookedDates.map((d: string) => new Date(d)))
          }
        }
      } catch (e) {
        console.error("Failed to fetch availability", e)
      }
    }
    fetchAvailability()
  }, [])

  const pageRef = useRef<HTMLDivElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const pricingRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)
  const totalRef = useRef<HTMLSpanElement>(null)

  const nights = date?.from && date?.to
    ? Math.max(1, differenceInCalendarDays(date.to, date.from))
    : 0

  const baseTotal = nights * NIGHTLY_RATE
  const serviceFee = Math.round(baseTotal * SERVICE_FEE_RATE)
  const taxes = Math.round(baseTotal * TAX_RATE)
  const grandTotal = baseTotal + CLEANING_FEE + serviceFee + taxes

  useLayoutEffect(() => {
    let ctx: { revert: () => void } | null = null
    let mounted = true

    const init = async () => {
      if (!mounted) return
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)
      if (!mounted) return

      ctx = gsap.context(() => {
        // Page hero entrance
        gsap.from(".page-hero", {
          opacity: 0,
          y: 40,
          duration: 0.9,
          ease: "power3.out",
          immediateRender: true,
        })

        // Calendar panel entrance
        if (calendarRef.current) {
          gsap.from(calendarRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            delay: 0.15,
            ease: "power2.out",
            immediateRender: true,
          })
        }

        // Pricing card entrance
        if (pricingRef.current) {
          gsap.from(pricingRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.7,
            delay: 0.25,
            ease: "power2.out",
            immediateRender: true,
          })
        }

        // Reserve button hover/click
        if (btnRef.current) {
          const btn = btnRef.current
          const onEnter = () => gsap.to(btn, { scale: 1.03, duration: 0.2, ease: "power1.out" })
          const onLeave = () => gsap.to(btn, { scale: 1, duration: 0.2, ease: "power1.out" })
          const onDown  = () => gsap.to(btn, { scale: 0.97, duration: 0.1 })
          const onUp    = () => gsap.to(btn, { scale: 1.03, duration: 0.1 })
          btn.addEventListener("mouseenter", onEnter)
          btn.addEventListener("mouseleave", onLeave)
          btn.addEventListener("mousedown",  onDown)
          btn.addEventListener("mouseup",    onUp)
        }
      })
    }

    init()
    return () => {
      mounted = false
      ctx?.revert()
    }
  }, [])

  useLayoutEffect(() => {
    let mounted = true
    let ctx: { revert: () => void } | null = null
    const animate = async () => {
      if (!totalRef.current || !mounted) return
      const { gsap } = await import("gsap")
      if (!mounted) return
      ctx = gsap.context(() => {
        gsap.from(totalRef.current!, {
          opacity: 0.3,
          y: -8,
          duration: 0.4,
          ease: "power2.out",
        })
      })
    }
    animate()
    return () => { mounted = false; ctx?.revert() }
  }, [grandTotal])

  return (
    <div className="luxury-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12" ref={pageRef}>
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Calendar & Selection */}
          <div className="flex-1 page-hero">
            <h1 className="text-3xl font-bold mb-2" style={{ color: "#222222" }}>
              Select your dates
            </h1>
            <p className="mb-8" style={{ color: "#717171" }}>
              Add your travel dates for exact pricing
            </p>

            <div ref={calendarRef} className="calendar-luxury-panel p-8 md:p-10">
              <Calendar
                mode="range"
                defaultMonth={date?.from}
                startMonth={new Date()}
                disabled={(date) => {
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0))
                  const isBooked = bookedDates.some(
                    (bookedDate) =>
                      bookedDate.getDate() === date.getDate() &&
                      bookedDate.getMonth() === date.getMonth() &&
                      bookedDate.getFullYear() === date.getFullYear()
                  )
                  return isPast || isBooked
                }}
                selected={date}
                onSelect={setDate}
                numberOfMonths={1}
                className="p-0 w-full flex justify-center [&_.rdp-months]:flex-col [&_.rdp-months]:md:flex-row [&_.rdp-months]:gap-8 [&_.rdp-cell]:p-0"
              />
              {date?.from && date?.to && (
                <div className="mt-6 pt-6 border-t border-[#EEEEEE] flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "#717171" }}>
                      Check-in
                    </p>
                    <p className="font-bold text-lg" style={{ color: "#222222" }}>
                      {format(date.from, "MMM d, yyyy")}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-[#EEEEEE]" />
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: "#717171" }}>
                      Check-out
                    </p>
                    <p className="font-bold text-lg" style={{ color: "#222222" }}>
                      {format(date.to, "MMM d, yyyy")}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-[#EEEEEE]" />
                  <div className="text-right">
                    <p className="text-sm font-semibold" style={{ color: "#717171" }}>
                      Duration
                    </p>
                    <p className="font-bold text-lg" style={{ color: "#222222" }}>
                      {nights} {nights === 1 ? "night" : "nights"}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Pricing Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="sticky top-28 pricing-card p-6" ref={pricingRef}>
              {/* Villa Info */}
              <div className="flex space-x-4 mb-5">
                <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "#222222" }}>
                    The Grand Horizon Villa
                  </h3>
                  <p className="text-xs mt-1" style={{ color: "#717171" }}>Entire villa</p>
                  <p className="text-xs font-semibold flex items-center mt-1.5" style={{ color: "#222222" }}>
                    <Star className="w-3 h-3 mr-1 fill-current" style={{ color: "#FF385C" }} />
                    4.96 · <span className="ml-1 font-normal" style={{ color: "#717171" }}>128 reviews</span>
                  </p>
                </div>
              </div>

              <Separator className="mb-5" />

              <h3 className="text-base font-bold mb-4" style={{ color: "#222222" }}>
                Price details
              </h3>

              {nights > 0 ? (
                <div className="space-y-3 text-sm" style={{ color: "#222222" }}>
                  <div className="flex justify-between">
                    <span className="underline" style={{ color: "#717171" }}>
                      ${NIGHTLY_RATE.toLocaleString()} × {nights} {nights === 1 ? "night" : "nights"}
                    </span>
                    <span className="font-medium">${baseTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline" style={{ color: "#717171" }}>Cleaning fee</span>
                    <span className="font-medium">${CLEANING_FEE}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline" style={{ color: "#717171" }}>DreamHills service fee</span>
                    <span className="font-medium">${serviceFee.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline" style={{ color: "#717171" }}>Taxes</span>
                    <span className="font-medium">${taxes.toLocaleString()}</span>
                  </div>
                </div>
              ) : (
                <p className="text-sm" style={{ color: "#717171" }}>Select dates to see pricing</p>
              )}

              <Separator className="my-5" />

              <div className="flex justify-between font-bold text-base mb-5" style={{ color: "#222222" }}>
                <span>Total (USD)</span>
                <span ref={totalRef} className="price-value">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>

              <Link href="/book/details" className="block">
                <button ref={btnRef} className="reserve-btn">
                  Reserve
                </button>
              </Link>

              <p className="text-center text-xs mt-3" style={{ color: "#717171" }}>
                You won't be charged yet
              </p>

              <div className="flex items-center justify-center gap-1.5 mt-4">
                <Shield className="w-3.5 h-3.5" style={{ color: "#717171" }} />
                <span className="text-xs" style={{ color: "#717171" }}>
                  Protected by DreamHills Cover
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
