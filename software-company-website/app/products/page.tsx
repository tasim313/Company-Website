import ProductCard from "@/components/product-card"
import { products } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function ProductsPage() {
  // In a real app, you'd handle filtering/searching here with state or server actions
  const allTechnologies = Array.from(new Set(products.flatMap((p) => p.technologies)))

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Software Solutions</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore our range of cutting-edge software products and services designed to meet your business needs.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="relative col-span-full md:col-span-2 lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-md border"
            // Add onChange handler for real-time search
          />
        </div>
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <select
            className="w-full px-4 py-2 rounded-md border bg-background text-foreground"
            // Add onChange handler for filtering by technology
          >
            <option value="">Filter by Technology</option>
            {allTechnologies.map((tech) => (
              <option key={tech} value={tech}>
                {tech}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  )
}
