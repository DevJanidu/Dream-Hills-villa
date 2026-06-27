"use client"

import { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { ChevronLeft, Lock, Star, Shield, CreditCard, Check, Landmark, Phone, Upload, SmartphoneNfc, Wallet, Bitcoin } from "lucide-react"
import "../luxury.css"

export default function CheckoutPage() {
  const btnRef = useRef<HTMLButtonElement>(null)
  const [agreed, setAgreed] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bank" | "call" | "paypal" | "applepay" | "crypto">("card")

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

                {/* Payment Method Selector */}
                <div className="flex flex-col gap-3 mb-6">
                  <div
                    onClick={() => setPaymentMethod("card")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "card" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "card" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <CreditCard className="w-5 h-5" style={{ color: paymentMethod === "card" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "card" ? "#222222" : "#717171" }}>Credit or debit card</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("bank")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "bank" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "bank" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <Landmark className="w-5 h-5" style={{ color: paymentMethod === "bank" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "bank" ? "#222222" : "#717171" }}>Bank transfer</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("call")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "call" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "call" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <Phone className="w-5 h-5" style={{ color: paymentMethod === "call" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "call" ? "#222222" : "#717171" }}>Reserve through a call</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("paypal")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "paypal" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "paypal" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <Wallet className="w-5 h-5" style={{ color: paymentMethod === "paypal" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "paypal" ? "#222222" : "#717171" }}>PayPal</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("applepay")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "applepay" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "applepay" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <SmartphoneNfc className="w-5 h-5" style={{ color: paymentMethod === "applepay" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "applepay" ? "#222222" : "#717171" }}>Apple Pay / Google Pay</span>
                  </div>

                  <div
                    onClick={() => setPaymentMethod("crypto")}
                    className="flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all"
                    style={{
                      background: paymentMethod === "crypto" ? "rgba(255,56,92,0.04)" : "#fff",
                      border: paymentMethod === "crypto" ? "1.5px solid #FF385C" : "1.5px solid #DDDDDD"
                    }}
                  >
                    <Bitcoin className="w-5 h-5" style={{ color: paymentMethod === "crypto" ? "#FF385C" : "#717171" }} />
                    <span className="text-sm font-semibold" style={{ color: paymentMethod === "crypto" ? "#222222" : "#717171" }}>Cryptocurrency</span>
                  </div>
                </div>

                {paymentMethod === "card" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
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
                )}

                {paymentMethod === "bank" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="p-4 rounded-xl text-sm" style={{ background: "#F7F7F7", color: "#717171" }}>
                      <p className="mb-2"><strong style={{ color: "#222222" }}>Bank Name:</strong> DreamHills Bank</p>
                      <p className="mb-2"><strong style={{ color: "#222222" }}>Account Name:</strong> Dream Hills Resort</p>
                      <p className="mb-2"><strong style={{ color: "#222222" }}>Account Number:</strong> 1234 5678 9101 1121</p>
                      <p><strong style={{ color: "#222222" }}>Swift Code:</strong> DHRSUS33</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                        Upload Payment Receipt
                      </label>
                      <div className="border-2 border-dashed rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition-colors" style={{ borderColor: "#DDDDDD", backgroundColor: "#fff" }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#F7F7F7"} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#fff"}>
                        <Upload className="w-6 h-6 mb-2" style={{ color: "#717171" }} />
                        <span className="text-sm font-semibold mb-1" style={{ color: "#222222" }}>Click to upload</span>
                        <span className="text-xs" style={{ color: "#717171" }}>SVG, PNG, JPG or PDF (max. 5MB)</span>
                        <input type="file" className="hidden" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === "call" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="p-4 rounded-xl text-sm" style={{ background: "#F7F7F7", color: "#717171" }}>
                      <p className="mb-2">Prefer to book over the phone? Our reservation specialists are available 24/7 to assist you with your booking.</p>
                      <p className="text-lg font-bold mt-4" style={{ color: "#222222" }}>+1 (800) 123-4567</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                        Or request a callback
                      </label>
                      <input
                        type="text"
                        placeholder="Your phone number"
                        className="luxury-input luxury-input-lg"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === "paypal" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="p-6 rounded-xl text-center border" style={{ borderColor: "#DDDDDD", background: "#fff" }}>
                      <Wallet className="w-8 h-8 mx-auto mb-3" style={{ color: "#717171" }} />
                      <p className="text-sm mb-4" style={{ color: "#717171" }}>You will be redirected to PayPal to complete your secure payment.</p>
                      <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80" style={{ background: "#0070BA", color: "#fff" }}>
                        Connect PayPal
                      </button>
                    </div>
                  </div>
                )}

                {paymentMethod === "applepay" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="p-6 rounded-xl text-center border" style={{ borderColor: "#DDDDDD", background: "#fff" }}>
                      <SmartphoneNfc className="w-8 h-8 mx-auto mb-3" style={{ color: "#717171" }} />
                      <p className="text-sm mb-4" style={{ color: "#717171" }}>Pay quickly and securely with your mobile wallet.</p>
                      <button className="px-6 py-2 rounded-lg text-sm font-semibold transition-opacity hover:opacity-80 flex items-center justify-center mx-auto" style={{ background: "#000", color: "#fff" }}>
                        <SmartphoneNfc className="w-4 h-4 mr-2" />
                        Pay with Apple / Google Pay
                      </button>
                    </div>
                  </div>
                )}

                {paymentMethod === "crypto" && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="p-4 rounded-xl text-sm" style={{ background: "#F7F7F7", color: "#717171" }}>
                      <p className="mb-2">Send cryptocurrency directly to our secure wallet. Supported coins: BTC, ETH, USDC.</p>
                      <p className="mt-4"><strong style={{ color: "#222222" }}>Wallet Address:</strong></p>
                      <p className="font-mono mt-1 text-xs break-all" style={{ color: "#222222" }}>0x1234567890abcdef1234567890abcdef12345678</p>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#717171" }}>
                        Transaction Hash (optional)
                      </label>
                      <input
                        type="text"
                        placeholder="0x..."
                        className="luxury-input luxury-input-lg"
                      />
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-2 mt-6 p-3 rounded-xl" style={{ background: "#F7F7F7" }}>
                  <Lock className="w-4 h-4 shrink-0" style={{ color: "#717171" }} />
                  <p className="text-xs" style={{ color: "#717171" }}>
                    Your information is encrypted with 256-bit SSL and never stored on our servers.
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
                    {paymentMethod === "card" && "Confirm and pay"}
                    {paymentMethod === "bank" && "Confirm booking"}
                    {paymentMethod === "call" && "Request reservation"}
                    {paymentMethod === "paypal" && "Proceed with PayPal"}
                    {paymentMethod === "applepay" && "Confirm and pay"}
                    {paymentMethod === "crypto" && "Confirm crypto payment"}
                    {" — $6,600"}
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
