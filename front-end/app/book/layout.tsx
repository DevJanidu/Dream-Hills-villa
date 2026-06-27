import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen" style={{ background: "radial-gradient(ellipse at 20% 10%, #FFF0F3 0%, #FAFAFA 60%, #F5F5F5 100%)" }}>
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/villa" className="flex items-center text-sm font-semibold hover:opacity-70 transition-opacity p-2 rounded-full">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="font-bold text-xl tracking-tight text-[#FF385C]">
            DreamHills
          </Link>
          <div className="w-9"></div>
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
