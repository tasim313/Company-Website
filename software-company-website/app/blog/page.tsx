import BlogPostCard from "@/components/blog-post-card"
import { blogPosts } from "@/lib/data"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function BlogPage() {
  // In a real app, you'd handle filtering/searching here with state or server actions
  const allCategories = Array.from(new Set(blogPosts.map((p) => p.category)))
  const allTags = Array.from(new Set(blogPosts.flatMap((p) => p.tags)))

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Insights & Blog</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Stay up-to-date with the latest trends in software, technology, and business.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 items-center">
        <div className="relative col-span-full md:col-span-2 lg:col-span-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search articles..."
            className="w-full pl-10 pr-4 py-2 rounded-md border"
            // Add onChange handler for real-time search
          />
        </div>
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <select
            className="w-full px-4 py-2 rounded-md border bg-background text-foreground"
            // Add onChange handler for filtering by category
          >
            <option value="">Filter by Category</option>
            {allCategories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        {/* You could add another select for tags if needed */}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      {/* Newsletter Subscription (Placeholder) */}
      <section className="w-full py-12 mt-16 bg-muted rounded-lg">
        <div className="container px-4 md:px-6 text-center space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Subscribe to Our Newsletter</h2>
          <p className="max-w-[700px] mx-auto text-muted-foreground md:text-xl/relaxed">
            Get the latest insights, product updates, and industry news directly in your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit">Subscribe</Button>
          </form>
          <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>
    </div>
  )
}
