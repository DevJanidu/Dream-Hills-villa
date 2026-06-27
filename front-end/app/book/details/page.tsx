"use client"

import { useState, useLayoutEffect, useRef } from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronLeft, Star, Shield, Check } from "lucide-react"
import "../luxury.css"

const addons = [
  {
    id: "airport",
    label: "Airport Transfer",
    description: "Private luxury SUV pickup from the airport",
    price: 150,
    priceLabel: "$150",
    icon: "✈️",
  },
  {
    id: "chef",
    label: "Private Chef",
    description: "Breakfast and dinner crafted by a professional chef",
    price: 1200,
    priceLabel: "$300/day",
    icon: "👨‍🍳",
  },
  {
    id: "cleaning",
    label: "Daily Housekeeping",
    description: "Fresh linens and full housekeeping service",
    price: 400,
    priceLabel: "$100/day",
    icon: "🏡",
  },
]

export default function GuestDetailsPage() {
  const [selectedAddons, setSelectedAddons] = useState<Record<string, boolean>>({})
  const formRef = useRef<HTMLDivElement>(null)
  const btnRef = useRef<HTMLButtonElement>(null)

  const toggleAddon = (id: string) => {
    setSelectedAddons((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const addonTotal = addons.reduce((sum, a) => sum + (selectedAddons[a.id] ? a.price : 0), 0)
  const grandTotal = 6600 + addonTotal

  useLayoutEffect(() => {
    let mounted = true
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      if (!mounted) return
      const { gsap } = await import("gsap")
      const { ScrollTrigger } = await import("gsap/ScrollTrigger")
      gsap.registerPlugin(ScrollTrigger)
      if (!mounted) return

      ctx = gsap.context(() => {
        gsap.from(".page-hero", { opacity: 0, y: 40, duration: 0.9, ease: "power3.out", immediateRender: true })

        gsap.from(".form-section", {
          opacity: 0,
          y: 30,
          stagger: 0.12,
          duration: 0.7,
          ease: "power2.out",
          immediateRender: true,
          scrollTrigger: { trigger: ".form-wrap", start: "top 80%" },
        })

        if (btnRef.current) {
          const btn = btnRef.current
          const onEnter = () => gsap.to(btn, { scale: 1.03, duration: 0.2, ease: "power1.out" })
          const onLeave = () => gsap.to(btn, { scale: 1,    duration: 0.2, ease: "power1.out" })
          const onDown  = () => gsap.to(btn, { scale: 0.97, duration: 0.1 })
          const onUp    = () => gsap.to(btn, { scale: 1.03, duration: 0.1 })
          btn.addEventListener("mouseenter", onEnter)
          btn.addEventListener("mouseleave", onLeave)
          btn.addEventListener("mousedown",  onDown)
          btn.addEventListener("mouseup",    onUp)
        }

        document.querySelectorAll<HTMLInputElement>(".luxury-input").forEach((input) => {
          input.addEventListener("focus", () => gsap.to(input, { scale: 1.01, duration: 0.2, ease: "power1.out" }))
          input.addEventListener("blur",  () => gsap.to(input, { scale: 1,    duration: 0.2, ease: "power1.out" }))
        })
      })
    }

    init()
    return () => { mounted = false; ctx?.revert() }
  }, [])

  return (
    <div className="luxury-page-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <Link
          href="/book"
          className="inline-flex items-center text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
          style={{ color: "#222222" }}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to dates
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left Column: Form */}
          <div className="flex-1 max-w-2xl form-wrap" ref={formRef}>
            <h1 className="text-3xl font-bold mb-2 page-hero" style={{ color: "#222222" }}>
              Confirm your details
            </h1>
            <p className="mb-8 page-hero" style={{ color: "#717171" }}>
              Let us know a bit about you so we can prepare for your arrival
            </p>

            <div className="space-y-8">
              {/* Guest Info Section */}
              <div className="form-glass-card p-6 form-section">
                <h2 className="text-lg font-bold mb-5" style={{ color: "#222222" }}>
                  Your Information
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                      First name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                      Last name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="luxury-input"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="john.doe@example.com"
                    className="luxury-input"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                    Phone number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="luxury-input"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                    Special requests (optional)
                  </label>
                  <textarea
                    placeholder="Any special arrangements, dietary requirements, or arrival notes..."
                    rows={3}
                    className="luxury-input"
                    style={{ height: "auto", resize: "none" }}
                  />
                </div>
              </div>

              {/* Add-ons Section */}
              <div className="form-section">
                <h2 className="text-lg font-bold mb-2" style={{ color: "#222222" }}>
                  Enhance your stay
                </h2>
                <p className="text-sm mb-5" style={{ color: "#717171" }}>
                  Optional add-ons to make your experience unforgettable
                </p>
                <div className="space-y-3">
                  {addons.map((addon) => {
                    const isActive = selectedAddons[addon.id]
                    return (
                      <div
                        key={addon.id}
                        className={`addon-card ${isActive ? "active" : ""}`}
                        onClick={() => toggleAddon(addon.id)}
                      >
                        <div className="flex items-start gap-4">
                          <div
                            className={`luxury-checkbox mt-0.5 shrink-0 ${isActive ? "checked" : ""}`}
                            style={{
                              width: 22,
                              height: 22,
                              borderRadius: 6,
                              border: isActive ? "2px solid #FF385C" : "2px solid #DDDDDD",
                              background: isActive ? "#FF385C" : "#fff",
                              position: "relative",
                              flexShrink: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            {isActive && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-lg leading-none">{addon.icon}</span>
                              <h4 className="font-semibold text-sm" style={{ color: "#222222" }}>
                                {addon.label}
                              </h4>
                            </div>
                            <p className="text-xs mt-1" style={{ color: "#717171" }}>
                              {addon.description}
                            </p>
                          </div>
                          <div className="font-bold text-sm shrink-0" style={{ color: isActive ? "#FF385C" : "#222222" }}>
                            {addon.priceLabel}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pricing Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="sticky top-28 pricing-card p-6">
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
              <h3 className="text-base font-bold mb-4" style={{ color: "#222222" }}>Price details</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="underline" style={{ color: "#717171" }}>$1,250 × 4 nights</span>
                  <span className="font-medium" style={{ color: "#222222" }}>$5,000</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline" style={{ color: "#717171" }}>Cleaning fee</span>
                  <span className="font-medium" style={{ color: "#222222" }}>$250</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline" style={{ color: "#717171" }}>DreamHills service fee</span>
                  <span className="font-medium" style={{ color: "#222222" }}>$750</span>
                </div>
                <div className="flex justify-between">
                  <span className="underline" style={{ color: "#717171" }}>Taxes</span>
                  <span className="font-medium" style={{ color: "#222222" }}>$600</span>
                </div>
                {Object.values(selectedAddons).some(Boolean) && (
                  <>
                    <Separator className="my-2" />
                    {addons.filter((a) => selectedAddons[a.id]).map((a) => (
                      <div key={a.id} className="flex justify-between text-xs">
                        <span style={{ color: "#717171" }}>{a.label}</span>
                        <span className="font-medium" style={{ color: "#FF385C" }}>+${a.price}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>

              <Separator className="my-5" />

              <div className="flex justify-between font-bold text-base mb-5" style={{ color: "#222222" }}>
                <span>Total (USD)</span>
                <span className="price-value">${grandTotal.toLocaleString()}</span>
              </div>

              <Link href="/book/checkout" className="block">
                <button ref={btnRef} className="reserve-btn">
                  Continue to Payment
                </button>
              </Link>

              <div className="flex items-center justify-center gap-1.5 mt-4">
                <Shield className="w-3.5 h-3.5" style={{ color: "#717171" }} />
                <span className="text-xs" style={{ color: "#717171" }}>Protected by DreamHills Cover</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
