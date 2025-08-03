import { notFound } from "next/navigation"
import { blogPosts } from "@/lib/data"
import Link from "next/link"
import { CalendarDays, Tag, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

interface BlogPostDetailPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostDetailPage({ params }: BlogPostDetailPageProps) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <article className="max-w-3xl mx-auto space-y-8">
        <Button asChild variant="outline" className="mb-8 bg-transparent">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <header className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">{post.title}</h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground text-sm">
            <div className="flex items-center gap-1">
              <CalendarDays className="h-4 w-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <span>Category: {post.category}</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tag}
              </span>
            ))}
          </div>
        </header>
        <div className="prose prose-lg dark:prose-invert max-w-none mx-auto">
          {/* Dangerously set inner HTML for blog content. In a real app, consider a markdown renderer. */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        <footer className="flex justify-center pt-8 border-t mt-8">
          <Button asChild variant="outline">
            <Link href="/blog">Back to Blog</Link>
          </Button>
        </footer>
      </article>
    </div>
  )
}
