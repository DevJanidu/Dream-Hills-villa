"use client"

import { useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { Calendar, MapPin, Users, Mail, ArrowRight } from "lucide-react"
import "../luxury.css"

export default function SuccessPage() {
  const iconRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useLayoutEffect(() => {
    let mounted = true
    let ctx: { revert: () => void } | null = null

    const init = async () => {
      if (!mounted) return
      const { gsap } = await import("gsap")
      if (!mounted) return

      ctx = gsap.context(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

        if (iconRef.current) {
          tl.from(iconRef.current, {
            scale: 0,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            immediateRender: true,
          })
          const check = iconRef.current.querySelector("svg")
          if (check) {
            tl.from(check, { scale: 0.5, opacity: 0, duration: 0.4, ease: "back.out(2)" }, "-=0.2")
          }
        }

        tl.from(".success-text", {
          opacity: 0, y: 24, stagger: 0.12, duration: 0.6, immediateRender: true,
        }, "-=0.2")

        tl.from(".success-card", {
          opacity: 0, y: 30, duration: 0.6, immediateRender: true,
        }, "-=0.3")

        tl.from(".detail-item", {
          opacity: 0, x: -12, stagger: 0.08, duration: 0.4, immediateRender: true,
        }, "-=0.3")

        tl.from(".success-cta", {
          opacity: 0, y: 20, stagger: 0.1, duration: 0.5, immediateRender: true,
        }, "-=0.2")
      })
    }

    init()
    return () => { mounted = false; ctx?.revert() }
  }, [])

  return (
    <div className="luxury-page-bg min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 md:px-8 py-16 flex flex-col items-center text-center">

        {/* Success Icon */}
        <div
          ref={iconRef}
          className="success-ring mb-8"
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, rgba(255,56,92,0.12) 0%, rgba(215,59,83,0.06) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r="22" stroke="#FF385C" strokeWidth="2.5" fill="rgba(255,56,92,0.08)" />
            <path
              d="M14 24.5L21 31.5L34 17"
              stroke="#FF385C"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Headline */}
        <div className="success-text mb-2">
          <p className="text-sm font-semibold tracking-widest uppercase mb-3" style={{ color: "#FF385C" }}>
            Booking Confirmed
          </p>
        </div>
        <h1 className="text-4xl font-bold mb-4 success-text" style={{ color: "#222222" }}>
          You're going to Malibu! 🌴
        </h1>
        <p className="text-lg mb-10 success-text max-w-md" style={{ color: "#717171" }}>
          Your reservation at The Grand Horizon Villa is confirmed. We've sent a receipt and arrival guide to your email.
        </p>

        {/* Booking Card */}
        <div className="success-card w-full pricing-card p-6 text-left mb-8">
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="w-full sm:w-40 h-32 rounded-xl overflow-hidden shrink-0">
              <img
                src="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Villa"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "#FF385C" }}>
                  Booking ID: #DH-49210
                </p>
                <h2 className="text-xl font-bold mt-1" style={{ color: "#222222" }}>
                  The Grand Horizon Villa
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="detail-item flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#FFF0F3" }}>
                    <Calendar className="w-4 h-4" style={{ color: "#FF385C" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#222222" }}>Aug 15 – Aug 19</p>
                    <p className="text-xs mt-0.5" style={{ color: "#717171" }}>Check-in at 3:00 PM</p>
                  </div>
                </div>
                <div className="detail-item flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#FFF0F3" }}>
                    <MapPin className="w-4 h-4" style={{ color: "#FF385C" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#222222" }}>Malibu, California</p>
                    <p className="text-xs mt-0.5" style={{ color: "#717171" }}>United States</p>
                  </div>
                </div>
                <div className="detail-item flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#FFF0F3" }}>
                    <Users className="w-4 h-4" style={{ color: "#FF385C" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#222222" }}>2 guests</p>
                    <p className="text-xs mt-0.5" style={{ color: "#717171" }}>Entire villa</p>
                  </div>
                </div>
                <div className="detail-item flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "#FFF0F3" }}>
                    <Mail className="w-4 h-4" style={{ color: "#FF385C" }} />
                  </div>
                  <div>
                    <p className="font-bold text-sm" style={{ color: "#222222" }}>$6,600 total</p>
                    <p className="text-xs mt-0.5" style={{ color: "#717171" }}>Payment processed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="success-cta w-full p-5 rounded-2xl mb-8 text-left" style={{ background: "#F7F7F7" }}>
          <p className="text-sm font-bold mb-3" style={{ color: "#222222" }}>What happens next?</p>
          <ul className="space-y-2">
            {[
              "You'll receive a confirmation email with your full itinerary",
              "72 hours before check-in, we'll send your arrival instructions and door code",
              "Our concierge team is available 24/7 for any questions",
            ].map((step) => (
              <li key={step} className="flex items-start gap-2.5 text-sm" style={{ color: "#717171" }}>
                <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ background: "#FF385C" }} />
                {step}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <Link href="/" className="success-cta">
            <button
              className="w-full sm:w-auto px-8 font-semibold text-sm"
              style={{
                height: 52,
                border: "1.5px solid #DDDDDD",
                borderRadius: 12,
                background: "#fff",
                color: "#222222",
                cursor: "pointer",
              }}
            >
              Back to home
            </button>
          </Link>
          <Link href="/villa" className="success-cta">
            <button className="reserve-btn w-full sm:w-auto px-8 flex items-center justify-center gap-2">
              View villa details
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
