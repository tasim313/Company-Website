import type React from "react"
import Link from "next/link"
import {
  Home,
  Package,
  Users,
  Newspaper,
  Briefcase,
  MessageSquare,
  ImageIcon,
  Settings,
  LayoutGrid,
  Code,
  LogOut,
  PhoneCall,
} from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { MenuIcon } from "lucide-react"
import { isAuthenticated, logoutAction } from "@/actions/auth-actions" // Import auth functions
import { redirect } from "next/navigation"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  // Protect admin routes
  if (!isAuthenticated()) {
    redirect("/login")
  }

  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-20 items-center border-b px-6">
            <Link href="/admin" className="flex items-center gap-2 font-semibold">
              <span className="text-xl">Admin Panel</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2">
            <nav className="grid items-start px-4 text-sm font-medium">
              <Link
                href="/admin"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Home className="h-4 w-4" />
                Dashboard
              </Link>
              <Link
                href="/admin/products"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Package className="h-4 w-4" />
                Products
              </Link>
              <Link
                href="/admin/services"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Settings className="h-4 w-4" /> {/* Using Settings for Services */}
                Services
              </Link>
              <Link
                href="/admin/hero-slides"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <ImageIcon className="h-4 w-4" /> {/* Using ImageIcon for Hero Slides */}
                Hero Slides
              </Link>
              <Link
                href="/admin/client-logos"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <LayoutGrid className="h-4 w-4" /> {/* Using LayoutGrid for Client Logos */}
                Client Logos
              </Link>
              <Link
                href="/admin/tech-logos"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Code className="h-4 w-4" /> {/* Using Code for Tech Logos */}
                Tech Stack Logos
              </Link>
              <Link
                href="/admin/testimonials"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <MessageSquare className="h-4 w-4" />
                Testimonials
              </Link>
              <Link
                href="/admin/blog"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Newspaper className="h-4 w-4" />
                Blog Posts
              </Link>
              <Link
                href="/admin/team"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Users className="h-4 w-4" />
                Team Members
              </Link>
              <Link
                href="/admin/careers"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Briefcase className="h-4 w-4" />
                Job Listings
              </Link>
              <Link
                href="/admin/about"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <Home className="h-4 w-4" /> {/* Reusing Home for About */}
                About Us Content
              </Link>
              <Link
                href="/admin/contact-info"
                className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                prefetch={false}
              >
                <PhoneCall className="h-4 w-4" /> {/* New icon for Contact Info */}
                Contact Info
              </Link>
            </nav>
          </div>
          <div className="mt-auto p-4 border-t">
            <form action={logoutAction}>
              <Button type="submit" variant="ghost" className="w-full justify-start text-destructive">
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-20 items-center gap-4 border-b bg-background px-4 md:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="shrink-0 md:hidden bg-transparent">
                <MenuIcon className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="flex flex-col">
              <Link href="/admin" className="flex items-center gap-2 text-lg font-semibold">
                <span>Admin Panel</span>
              </Link>
              <nav className="grid gap-2 text-lg font-medium">
                <Link
                  href="/admin"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5" />
                  Dashboard
                </Link>
                <Link
                  href="/admin/products"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Package className="h-5 w-5" />
                  Products
                </Link>
                <Link
                  href="/admin/services"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Settings className="h-5 w-5" />
                  Services
                </Link>
                <Link
                  href="/admin/hero-slides"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <ImageIcon className="h-5 w-5" />
                  Hero Slides
                </Link>
                <Link
                  href="/admin/client-logos"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <LayoutGrid className="h-5 w-5" />
                  Client Logos
                </Link>
                <Link
                  href="/admin/tech-logos"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Code className="h-5 w-5" />
                  Tech Stack Logos
                </Link>
                <Link
                  href="/admin/testimonials"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <MessageSquare className="h-5 w-5" />
                  Testimonials
                </Link>
                <Link
                  href="/admin/blog"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Newspaper className="h-5 w-5" />
                  Blog Posts
                </Link>
                <Link
                  href="/admin/team"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Users className="h-5 w-5" />
                  Team Members
                </Link>
                <Link
                  href="/admin/careers"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Briefcase className="h-5 w-5" />
                  Job Listings
                </Link>
                <Link
                  href="/admin/about"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <Home className="h-5 w-5" />
                  About Us Content
                </Link>
                <Link
                  href="/admin/contact-info"
                  className="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <PhoneCall className="h-5 w-5" />
                  Contact Info
                </Link>
              </nav>
              <div className="mt-auto pt-4 border-t">
                <form action={logoutAction}>
                  <Button type="submit" variant="ghost" className="w-full justify-start text-destructive">
                    <LogOut className="h-5 w-5 mr-2" />
                    Logout
                  </Button>
                </form>
              </div>
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
          {/* Add user menu/logout here */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">{children}</main>
      </div>
    </div>
  )
}
