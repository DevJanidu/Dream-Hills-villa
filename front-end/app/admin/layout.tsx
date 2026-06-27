"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, CalendarDays, Users, Settings, FileText, Menu, LogOut, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const navigation = [
  { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Bookings", href: "/admin/bookings", icon: CalendarDays },
  { name: "Guests", href: "/admin/guests", icon: Users },
  { name: "Content (CMS)", href: "/admin/cms", icon: FileText },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Do not show sidebar on the login page
  if (pathname === "/admin/login") {
    return <>{children}</>
  }

  const NavLinks = () => (
    <nav className="flex flex-col gap-2 mt-8">
      {navigation.map((item) => {
        const isActive = pathname.startsWith(item.href)
        return (
          <Link key={item.name} href={item.href}>
            <span
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors font-medium ${
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </span>
          </Link>
        )
      })}
    </nav>
  )

  return (
    <div className="flex min-h-screen bg-white">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 border-r bg-white px-6 py-8">
        <Link href="/admin/dashboard" className="flex items-center gap-2 font-bold text-2xl tracking-tight text-[#FF385C]">
          DreamHills
        </Link>
        <NavLinks />
        
        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground">
            <LogOut className="w-5 h-5 mr-3" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile & Desktop Header */}
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-white px-4 md:px-8">
          <div className="flex items-center gap-4 lg:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-md text-sm font-medium hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 -ml-2">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 p-6">
                <SheetTitle className="font-bold text-2xl tracking-tight text-[#FF385C] mb-6">
                  DreamHills
                </SheetTitle>
                <NavLinks />
                <div className="mt-8">
                  <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-foreground px-4 py-3">
                    <LogOut className="w-5 h-5 mr-3" />
                    Logout
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
            <Link href="/admin/dashboard" className="font-bold text-xl tracking-tight text-[#FF385C]">
              DreamHills
            </Link>
          </div>
          
          <div className="hidden lg:block">
            {/* Breadcrumb or Page Title could go here */}
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5 text-muted-foreground" />
              <span className="absolute top-2 right-2.5 w-2 h-2 rounded-full bg-primary"></span>
            </Button>
            <Avatar className="h-9 w-9 border">
              <AvatarImage src="https://i.pravatar.cc/150?u=admin" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
