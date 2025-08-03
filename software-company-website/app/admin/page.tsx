import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  getProducts,
  getTestimonials,
  getBlogPosts,
  getHeroSlides,
  getServices,
  getClientLogos,
  getTechLogos,
} from "@/lib/admin-data-store" // Added new imports
import { Package, MessageSquare, Newspaper, Users, ImageIcon, Settings, LayoutGrid, Code } from "lucide-react" // Added new icons

export default function AdminDashboardPage() {
  const products = getProducts()
  const testimonials = getTestimonials()
  const blogPosts = getBlogPosts()
  const heroSlides = getHeroSlides()
  const services = getServices()
  const clientLogos = getClientLogos() // Get client logos count
  const techLogos = getTechLogos() // Get tech logos count

  // Placeholder for other data types
  const teamMembersCount = 4 // Assuming 4 initial members from team page
  const jobListingsCount = 3 // Assuming 3 initial listings from careers page

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Products</CardTitle>
          <Package className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{products.length}</div>
          <p className="text-xs text-muted-foreground">Manage your software solutions</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Services</CardTitle>
          <Settings className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{services.length}</div>
          <p className="text-xs text-muted-foreground">Offerings to your clients</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Hero Slides</CardTitle>
          <ImageIcon className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{heroSlides.length}</div>
          <p className="text-xs text-muted-foreground">Dynamic homepage content</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Client Logos</CardTitle>
          <LayoutGrid className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{clientLogos.length}</div>
          <p className="text-xs text-muted-foreground">Companies you've worked with</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Tech Logos</CardTitle>
          <Code className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{techLogos.length}</div>
          <p className="text-xs text-muted-foreground">Technologies you use</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Testimonials</CardTitle>
          <MessageSquare className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{testimonials.length}</div>
          <p className="text-xs text-muted-foreground">Client feedback and success stories</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Blog Posts</CardTitle>
          <Newspaper className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{blogPosts.length}</div>
          <p className="text-xs text-muted-foreground">Latest insights and articles</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Team Members</CardTitle>
          <Users className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{teamMembersCount}</div>
          <p className="text-xs text-muted-foreground">Meet the experts behind our work</p>
        </CardContent>
      </Card>
      {/* Add more cards for other content types like Job Listings */}
    </div>
  )
}
