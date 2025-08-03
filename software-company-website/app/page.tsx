import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { getHeroSlides, getProducts, getTestimonials, getClientLogos, getTechLogos } from "@/lib/admin-data-store" // Import new data sources
import { CheckCircle, Code, Lightbulb, Rocket } from "lucide-react"

export default function HomePage() {
  const currentHeroSlides = getHeroSlides()
  const currentProducts = getProducts()
  const currentTestimonials = getTestimonials()
  const currentClientLogos = getClientLogos() // Fetch dynamic client logos
  const currentTechLogos = getTechLogos() // Fetch dynamic tech logos

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection slides={currentHeroSlides} />
        {/* Client Logos Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl text-muted-foreground mb-8">
              Trusted by Leading Companies Worldwide
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
              {currentClientLogos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.imageUrl || "/placeholder.svg?height=60&width=180&query=client logo"}
                  alt={logo.name}
                  width={180}
                  height={60}
                  className="mx-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              ))}
            </div>
          </div>
        </section>
        {/* Features Section (High-level company features) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Capabilities</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Empowering Your Business with Cutting-Edge Solutions
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We combine deep industry expertise with innovative technology to deliver software that drives real
                business value.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Lightbulb className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Strategic Innovation</h3>
                <p className="text-muted-foreground">
                  We help you identify opportunities and build innovative solutions that set you apart.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Code className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Expert Development</h3>
                <p className="text-muted-foreground">
                  Our team of seasoned engineers delivers robust, scalable, and high-performance software.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <Rocket className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Rapid Deployment</h3>
                <p className="text-muted-foreground">
                  Leveraging agile methodologies and DevOps, we ensure fast and reliable delivery.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
                <CheckCircle className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">Continuous Support</h3>
                <p className="text-muted-foreground">
                  We provide ongoing support and maintenance to ensure your software evolves with your needs.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonial Carousel Section */}
        <TestimonialCarousel testimonials={currentTestimonials} />
        {/* Technology Stack Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6 text-center">
            <div className="flex flex-col items-center justify-center space-y-4 mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Tech Stack</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Built on Modern & Robust Technologies
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We leverage the latest and most effective tools to build high-quality, scalable, and maintainable
                software.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
              {currentTechLogos.map((logo) => (
                <Image
                  key={logo.id}
                  src={logo.imageUrl || "/placeholder.svg?height=80&width=80&query=tech logo"}
                  alt={logo.name}
                  width={80}
                  height={80}
                  className="mx-auto"
                />
              ))}
            </div>
          </div>
        </section>
        {/* Case Studies / Portfolio Section (Highlighting a few) */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Success Stories</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Real Results, Real Impact</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Explore how our solutions have driven tangible improvements for our clients.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProducts.slice(0, 3).map((product) => (
                <div key={product.slug} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={product.screenshots[0] || "/placeholder.svg?height=400&width=600&query=case study image"}
                    alt={`${product.name} Case Study`}
                    width={600}
                    height={400}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.caseStudy?.title || product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {product.caseStudy?.problem || product.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.caseStudy?.metrics?.map((metric, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Read Full Case Study &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button asChild size="lg">
                <Link href="/products">View All Case Studies</Link>
              </Button>
            </div>
          </div>
        </section>
        {/* Call to Action Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-[800px] mx-auto text-lg md:text-xl">
              Let's discuss your project and build the software that drives your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="px-8 py-3 text-lg bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="px-8 py-3 text-lg border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
