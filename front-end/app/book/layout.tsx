import Link from "next/link"
import { ChevronLeft } from "lucide-react"

export default function BookLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
          <Link href="/villa" className="flex items-center text-sm font-semibold hover:underline bg-secondary p-2 rounded-full transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </Link>
          <Link href="/" className="font-bold text-primary text-xl tracking-tight">
            <span className="text-[#FF385C]">DreamHills</span>
          </Link>
          <div className="w-9"></div> {/* Spacer for centering */}
        </div>
      </header>
      <main className="flex-1">
        {children}
      </main>
    </div>
  )
}
