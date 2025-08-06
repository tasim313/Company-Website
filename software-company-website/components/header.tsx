import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, LogIn, LogOut } from "lucide-react" // Added LogIn, LogOut icons
import { isAuthenticated, logoutAction } from "@/actions/auth-actions" // Import auth functions

export default function Header() {
  const loggedIn = isAuthenticated() // Check authentication statusit 

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b bg-background">
      <Link href="/" className="mr-6 flex items-center" prefetch={false}>
        <span className="text-xl font-bold">ScriptPark</span>
      </Link>
      <nav className="hidden md:flex gap-6 lg:gap-8 ml-auto">
        <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="/team" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Team
        </Link>
        <Link href="/careers" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Careers
        </Link>
        <Link href="/products" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Products
        </Link>
        <Link href="/services" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Services
        </Link>
        <Link href="/blog" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Blog
        </Link>
        
      </nav>
      <div className="ml-auto hidden md:flex items-center gap-4">
        <Button asChild>
          <Link href="/contact">Contact Us</Link>
        </Button>
        
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="ml-auto md:hidden bg-transparent">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right">
          <div className="grid gap-6 p-6">
            <Link href="/" className="flex items-center" prefetch={false}>
              <span className="text-xl font-bold">SoftwareCo</span>
            </Link>
            <nav className="grid gap-4">
              <Link href="/about" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                About
              </Link>
              <Link href="/team" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Team
              </Link>
              <Link href="/careers" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Careers
              </Link>
              <Link
                href="/products"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Products
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium hover:underline underline-offset-4"
                prefetch={false}
              >
                Services
              </Link>
              <Link href="/blog" className="text-lg font-medium hover:underline underline-offset-4" prefetch={false}>
                Blog
              </Link>
              
              <Button asChild className="w-full mt-4">
                <Link href="/contact">Contact Us</Link>
              </Button>
              
            </nav>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  )
}
