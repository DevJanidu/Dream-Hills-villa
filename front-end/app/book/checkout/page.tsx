"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronLeft, Lock, Star, Shield, CreditCard, Check } from "lucide-react"
import "../luxury.css"

export default function CheckoutPage() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [agreed, setAgreed] = useState(false)

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
          href="/book/details"
          className="inline-flex items-center text-sm font-semibold mb-8 hover:opacity-70 transition-opacity"
          style={{ color: "#222222" }}
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to details
        </Link>

        <div className="flex flex-col lg:flex-row gap-12">

          {/* Left: Payment Form */}
          <div className="flex-1 max-w-2xl form-wrap">
            <h1 className="text-3xl font-bold mb-2 page-hero" style={{ color: "#222222" }}>
              Confirm and pay
            </h1>
            <p className="mb-8 page-hero" style={{ color: "#717171" }}>
              Your reservation is almost complete. Review and pay securely.
            </p>

            <div className="space-y-6">
              {/* Trip Summary */}
              <div className="form-glass-card p-6 form-section">
                <h2 className="text-base font-bold mb-4" style={{ color: "#222222" }}>Your trip</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold" style={{ color: "#717171" }}>Dates</p>
                    <p className="font-semibold mt-1" style={{ color: "#222222" }}>Aug 15 – Aug 19</p>
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: "#717171" }}>Guests</p>
                    <p className="font-semibold mt-1" style={{ color: "#222222" }}>2 guests</p>
                  </div>
                </div>
              </div>

              {/* Payment Details */}
              <div className="form-glass-card p-6 form-section">
                <h2 className="text-base font-bold mb-4" style={{ color: "#222222" }}>
                  Pay with
                </h2>

                {/* Card type selector */}
                <div className="flex items-center gap-3 p-3 rounded-xl mb-4" style={{ background: "rgba(255,56,92,0.04)", border: "1.5px solid #FF385C" }}>
                  <CreditCard className="w-5 h-5" style={{ color: "#FF385C" }} />
                  <span className="text-sm font-semibold" style={{ color: "#222222" }}>Credit or debit card</span>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                      Card number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="luxury-input luxury-input-lg"
                      maxLength={19}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                        Expiration date
                      </label>
                      <input
                        type="text"
                        placeholder="MM / YY"
                        className="luxury-input"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="•••"
                        className="luxury-input"
                        maxLength={4}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                      ZIP / Postal code
                    </label>
                    <input
                      type="text"
                      placeholder="90210"
                      className="luxury-input"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                      Name on card
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-4 p-3 rounded-xl" style={{ background: "#F7F7F7" }}>
                  <Lock className="w-4 h-4 shrink-0" style={{ color: "#717171" }} />
                  <p className="text-xs" style={{ color: "#717171" }}>
                    Your payment info is encrypted with 256-bit SSL and never stored on our servers.
                  </p>
                </div>
              </div>

              {/* Cancellation Policy */}
              <div className="form-section p-6" style={{ background: "#F7F7F7", borderRadius: 16 }}>
                <h2 className="text-base font-bold mb-2" style={{ color: "#222222" }}>Cancellation policy</h2>
                <p className="text-sm leading-relaxed" style={{ color: "#717171" }}>
                  <span className="font-semibold" style={{ color: "#222222" }}>Free cancellation before Aug 1.</span>{" "}
                  After that, the reservation is non-refundable. Review the full policy before booking.
                </p>
              </div>

              {/* Agreement + CTA */}
              <div className="form-section">
                <div
                  className="flex items-start gap-3 mb-6 p-4 rounded-xl cursor-pointer"
                  style={{ border: "1.5px solid #DDDDDD", borderRadius: 12, background: "#fff" }}
                  onClick={() => setAgreed(!agreed)}
                >
                  <div
                    style={{
                      width: 22,
                      height: 22,
                      borderRadius: 6,
                      border: agreed ? "2px solid #FF385C" : "2px solid #DDDDDD",
                      background: agreed ? "#FF385C" : "#fff",
                      flexShrink: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: 2,
                    }}
                  >
                    {agreed && <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />}
                  </div>
                  <p className="text-xs leading-relaxed" style={{ color: "#717171" }}>
                    By selecting the button below, I agree to the Host's House Rules, DreamHills's Rebooking and Refund Policy, and that DreamHills can charge my payment method if I'm responsible for damage. I agree to pay the total amount shown, which includes Service Fees.
                  </p>
                </div>

                <Link href="/book/success" className="block">
                  <button ref={btnRef} className="reserve-btn" style={{ opacity: agreed ? 1 : 0.6 }}>
                    <Lock className="w-4 h-4 inline-block mr-2 -mt-0.5" />
                    Confirm and pay — $6,600
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right: Pricing Summary */}
          <div className="w-full lg:w-[400px]">
            <div className="sticky top-28 pricing-card p-6">
              <div className="flex space-x-4 mb-5">
                <div className="w-24 h-20 rounded-xl overflow-hidden shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Villa"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: "#222222" }}>The Grand Horizon Villa</h3>
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
                {[
                  { label: "$1,250 × 4 nights", value: "$5,000" },
                  { label: "Cleaning fee", value: "$250" },
                  { label: "DreamHills service fee", value: "$750" },
                  { label: "Taxes", value: "$600" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between">
                    <span className="underline" style={{ color: "#717171" }}>{row.label}</span>
                    <span className="font-medium" style={{ color: "#222222" }}>{row.value}</span>
                  </div>
                ))}
              </div>

              <Separator className="my-5" />
              <div className="flex justify-between font-bold text-base mb-5" style={{ color: "#222222" }}>
                <span>Total (USD)</span>
                <span className="price-value">$6,600</span>
              </div>

              <div className="flex items-center justify-center gap-1.5 mt-2">
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
