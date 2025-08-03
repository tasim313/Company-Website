import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { products } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { CheckCircle, ExternalLink, DollarSign, BookOpen } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface ProductDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const product = products.find((p) => p.slug === params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image Gallery */}
        <div className="lg:col-span-1">
          <Carousel className="w-full max-w-full mx-auto">
            <CarouselContent>
              {product.screenshots.map((src, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Image
                      src={src || "/placeholder.svg"}
                      alt={`Screenshot ${index + 1} of ${product.name}`}
                      width={800}
                      height={500}
                      className="w-full h-auto object-cover rounded-lg shadow-md"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>

        {/* Product Details */}
        <div className="lg:col-span-1 space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.description}</p>

          {/* Features List */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Key Features</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-muted-foreground">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="inline-flex items-center rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing & CTA */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Pricing</h2>
            <div className="flex items-center gap-2 text-2xl font-semibold">
              <DollarSign className="h-6 w-6 text-primary" />
              {product.pricing}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {product.livePreview && (
                <Button asChild size="lg">
                  <Link href={product.livePreview} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Live Preview
                  </Link>
                </Button>
              )}
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
          </div>

          {/* Case Study Link */}
          {product.caseStudy && (
            <div className="space-y-2 border-t pt-6 mt-6">
              <h2 className="text-2xl font-bold">Case Study</h2>
              <p className="text-muted-foreground">
                Read how {product.caseStudy.clientName.split(",")[0]} achieved {product.caseStudy.metrics.join(" and ")}{" "}
                with our {product.name}.
              </p>
              <Button asChild variant="link" className="px-0">
                <Link href={`/products/${product.slug}#case-study`}>
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Full Case Study
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Full Case Study Section (if available) */}
      {product.caseStudy && (
        <section id="case-study" className="mt-16 py-12 md:py-24 lg:py-32 bg-gray-50 rounded-lg">
          {" "}
          {/* Changed from dark:bg-gray-950 */}
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Client Success Story</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{product.caseStudy.title}</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                A deep dive into the challenges, solutions, and remarkable results.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:col-span-1 lg:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold">The Challenge</h3>
                <p className="text-muted-foreground">{product.caseStudy.problem}</p>
              </div>
              <div className="md:col-span-1 lg:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold">Our Solution</h3>
                <p className="text-muted-foreground">{product.caseStudy.solution}</p>
              </div>
              <div className="md:col-span-2 lg:col-span-1 space-y-4">
                <h3 className="text-2xl font-bold">The Results</h3>
                <ul className="space-y-2 text-muted-foreground">
                  {product.caseStudy.metrics.map((metric, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
                <blockquote className="text-lg italic border-l-4 border-primary pl-4 mt-4">
                  &ldquo;{product.caseStudy.clientTestimonial}&rdquo;
                  <footer className="mt-2 text-sm font-semibold not-italic">- {product.caseStudy.clientName}</footer>
                </blockquote>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
