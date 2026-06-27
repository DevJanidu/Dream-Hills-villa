import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedAccordion } from "@/components/animated-accordion"
import { Search } from "lucide-react"

export default function FAQPage() {
  const bookingFaqs = [
    {
      question: "What time is check-in and check-out?",
      answer: "Check-in is at 3:00 PM and check-out is at 11:00 AM. Early check-in or late check-out may be available upon request, subject to availability."
    },
    {
      question: "What is your cancellation policy?",
      answer: "We offer a full refund for cancellations made up to 30 days before check-in. Cancellations made within 30 days are non-refundable, but we will do our best to re-book the dates and offer a partial credit."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No. The price you see includes the nightly rate, taxes, and a standard cleaning fee. Any additional concierge services (like a private chef) are billed separately."
    }
  ]

  const amenitiesFaqs = [
    {
      question: "Are pets allowed?",
      answer: "Yes! We are a pet-friendly property. We welcome well-behaved pets with a small additional cleaning fee of $150 per stay."
    },
    {
      question: "Is the pool heated?",
      answer: "Yes, the infinity pool is heated year-round to a comfortable 84°F (29°C) at no extra charge to you."
    },
    {
      question: "Do you have high-speed internet?",
      answer: "Absolutely. We offer ultra-fast fiber internet (352 Mbps) ensuring you can stream 4K video or hold video conferences without a hitch."
    }
  ]

  const areaFaqs = [
    {
      question: "How far is the beach?",
      answer: "The nearest private beach access is a scenic 5-minute drive down the hill. We provide beach towels, chairs, and umbrellas for your convenience."
    },
    {
      question: "Are there good restaurants nearby?",
      answer: "Yes, Malibu boasts some of the best dining in California. World-renowned restaurants like Nobu Malibu and Geoffrey's are just a 15-minute drive from the villa."
    }
  ]

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">

      {/* Header Section */}
      <section className="bg-slate-900 pt-32 pb-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal animation="fade-up">
            <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
              How can we help?
            </h1>
            <p className="text-xl text-slate-300 font-light mb-10">
              Find answers to common questions about your stay at DreamHills.
            </p>
            
            {/* Decorative Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input 
                type="text" 
                className="block w-full pl-12 pr-4 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white/20 transition-all backdrop-blur-md" 
                placeholder="Search for answers..."
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ Content */}
      <main className="max-w-4xl mx-auto px-4 md:px-8 py-20 w-full space-y-12">
        
        <ScrollReveal animation="fade-up">
          <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Booking & Cancellation</h2>
            <AnimatedAccordion items={bookingFaqs} />
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Amenities & Property</h2>
            <AnimatedAccordion items={amenitiesFaqs} />
          </section>
        </ScrollReveal>

        <ScrollReveal animation="fade-up">
          <section className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">Local Area</h2>
            <AnimatedAccordion items={areaFaqs} />
          </section>
        </ScrollReveal>

        {/* Contact CTA */}
        <ScrollReveal animation="fade-up">
          <div className="mt-12 text-center p-12 bg-blue-50 rounded-[2rem] border border-blue-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
            <p className="text-slate-600 mb-8">Our concierge team is available 24/7 to assist you with anything you need.</p>
            <a href="/contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
              Contact Us
            </a>
          </div>
        </ScrollReveal>

      </main>
    </div>
  )
}
