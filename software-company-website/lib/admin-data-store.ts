// lib/admin-data-store.ts
// This is a simple in-memory store for demonstration purposes.
// In a real application, you would replace this with a persistent database.

import { products as initialProducts, testimonials as initialTestimonials, blogPosts as initialBlogPosts } from "./data"

// --- Interfaces ---
interface Product {
  slug: string
  name: string
  description: string
  features: string[]
  technologies: string[]
  screenshots: string[]
  livePreview: string
  pricing: string
  caseStudy?: {
    title: string
    problem: string
    solution: string
    result: string
    metrics: string[]
    clientTestimonial: string
    clientName: string
  }
}

interface Testimonial {
  quote: string
  author: string
  title: string
}

interface BlogPost {
  slug: string
  title: string
  category: string
  tags: string[]
  date: string
  content: string
}

interface HeroSlide {
  id: string // Unique ID for slides
  title: string
  description: string
  cta1Text: string
  cta1Href: string
  cta2Text: string
  cta2Href: string
  image: string // URL to the background image
}

interface Service {
  id: string
  title: string
  description: string
  icon: string // Lucide icon name or URL to an image
}

interface AboutContent {
  companyOverview: string
  missionVision: string
  history: string
  coreValues: string
  achievements: string
  partnerships: string
  globalPresence: string
  ctaText: string
  ctaHref: string
}

interface ClientLogo {
  id: string
  name: string
  imageUrl: string
}

interface TechLogo {
  id: string
  name: string
  imageUrl: string
}

interface ContactInfo {
  email: string
  phone: string
  address: string
  mapEmbedUrl?: string // Optional: for embedding a map
}

// --- In-Memory Stores ---
const productStore = new Map<string, Product>(initialProducts.map((p) => [p.slug, p]))
const testimonialStore = new Map<number, Testimonial>(initialTestimonials.map((t, i) => [i, t])) // Using index as ID for simplicity
const blogPostStore = new Map<string, BlogPost>(initialBlogPosts.map((b) => [b.slug, b]))

// Initial Hero Slides (from components/hero-section.tsx)
const initialHeroSlides: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Building the Future of Software",
    description:
      "We craft cutting-edge software solutions that drive growth, enhance efficiency, and transform businesses.",
    cta1Text: "Book a Demo",
    cta1Href: "/contact",
    cta2Text: "Explore Our Solutions",
    cta2Href: "/products",
    image: "/placeholder.svg?height=800&width=1600",
  },
  {
    id: "slide-2",
    title: "Innovate with AI & Machine Learning",
    description: "Unlock deep insights and automate processes with our advanced AI-powered analytics engines.",
    cta1Text: "Learn About AI",
    cta1Href: "/products/ai-powered-analytics",
    cta2Text: "Get a Quote",
    cta2Href: "/contact",
    image: "/placeholder.svg?height=800&width=1600",
  },
  {
    id: "slide-3",
    title: "Scalable Solutions for Enterprise",
    description: "From custom SaaS platforms to robust ERP systems, we build for performance and reliability.",
    cta1Text: "View Enterprise Solutions",
    cta1Href: "/products/saas-platform",
    cta2Text: "Our Case Studies",
    cta2Href: "/products",
    image: "/placeholder.svg?height=800&width=1600",
  },
  {
    id: "slide-4",
    title: "Your Vision, Our Expertise",
    description: "Partner with us to turn your complex ideas into powerful, user-friendly software applications.",
    cta1Text: "Start Your Project",
    cta1Href: "/contact",
    cta2Text: "Meet Our Team",
    cta2Href: "/team",
    image: "/placeholder.svg?height=800&width=1600",
  },
]
const heroSlideStore = new Map<string, HeroSlide>(initialHeroSlides.map((s) => [s.id, s]))

// Initial Services (from app/services/page.tsx)
const initialServices: Service[] = [
  {
    id: "service-1",
    title: "Custom Software Development",
    description: "Tailored software solutions built from the ground up to meet your unique business requirements.",
    icon: "Code",
  },
  {
    id: "service-2",
    title: "AI & Machine Learning Solutions",
    description: "Leverage artificial intelligence for data analysis, automation, and predictive insights.",
    icon: "Lightbulb",
  },
  {
    id: "service-3",
    title: "Cloud Consulting & Migration",
    description: "Expert guidance and seamless migration to scalable and secure cloud infrastructures.",
    icon: "Cloud",
  },
  {
    id: "service-4",
    title: "Cybersecurity Consulting",
    description: "Protect your assets with robust security strategies and implementation services.",
    icon: "Shield",
  },
  {
    id: "service-5",
    title: "Mobile App Development",
    description: "Crafting intuitive and high-performance mobile applications for iOS and Android platforms.",
    icon: "Smartphone", // Changed to a more specific icon
  },
  {
    id: "service-6",
    title: "DevOps & Automation",
    description: "Streamline your development and operations with continuous integration and delivery pipelines.",
    icon: "GitFork", // Changed to a more specific icon
  },
]
const serviceStore = new Map<string, Service>(initialServices.map((s) => [s.id, s]))

// Initial About Content
const initialAboutContent: AboutContent = {
  companyOverview: `
    <p>We are a leading software company specializing in scalable, AI-driven solutions for various industries. Founded in 2010 by a team of visionary engineers, our mission is to revolutionize how businesses operate by providing cutting-edge technology that automates complex processes and delivers actionable insights.</p>
    <p>Our target customers range from small startups to large enterprise corporations across healthcare, finance, and education. Our unique selling proposition lies in our automation-first approach, ensuring our solutions not only solve immediate problems but also provide long-term efficiency and competitive advantage.</p>
  `,
  missionVision: `
    <h3>Mission:</h3>
    <p>To empower businesses globally with innovative, reliable, and scalable software solutions that drive growth and foster digital transformation.</p>
    <h3>Vision:</h3>
    <p>To be the most trusted partner in software development, recognized for our commitment to excellence, innovation, and client success.</p>
  `,
  history: `
    <p><strong>2010:</strong> Company founded by Jane Doe and John Smith with a focus on custom web applications.</p>
    <p><strong>2015:</strong> Launched our first SaaS product, gaining significant traction in the enterprise market.</p>
    <p><strong>2018:</strong> Expanded into AI and Machine Learning, developing proprietary analytics engines.</p>
    <p><strong>2022:</strong> Opened international offices, establishing a global presence.</p>
    <p><strong>Present:</strong> Continuously innovating and expanding our portfolio to meet evolving market demands.</p>
  `,
  coreValues: `
    <ul>
      <li><strong>Innovation:</strong> Constantly seeking new and better ways to solve problems.</li>
      <li><strong>Integrity:</strong> Operating with honesty, transparency, and ethical conduct.</li>
      <li><strong>Excellence:</strong> Delivering high-quality solutions that exceed expectations.</li>
      <li><strong>Collaboration:</strong> Fostering teamwork and strong partnerships.</li>
      <li><strong>Customer Success:</strong> Prioritizing our clients' goals and long-term success.</li>
    </ul>
  `,
  achievements: `
    <ul>
      <li>Awarded "Best Software Innovator 2023" by Tech Magazine.</li>
      <li>ISO 27001 Certified for Information Security Management.</li>
      <li>Successfully delivered over 100 enterprise-level projects.</li>
      <li>Achieved an average of 95% performance boost for client systems.</li>
    </ul>
  `,
  partnerships: `
    <p>Proud partners with leading technology providers:</p>
    <ul>
      <li>AWS (Amazon Web Services) - Cloud Solutions</li>
      <li>Microsoft Azure - Enterprise Cloud Services</li>
      <li>Google Cloud Platform - AI & Data Analytics</li>
      <li>Stripe - Payment Processing Integration</li>
    </ul>
  `,
  globalPresence: `
    <p>Headquartered in Silicon Valley, USA, with development centers and client support offices in:</p>
    <ul>
      <li>London, UK</li>
      <li>Berlin, Germany</li>
      <li>Bangalore, India</li>
      <li>Sydney, Australia</li>
    </ul>
  `,
  ctaText: "Explore Our Products",
  ctaHref: "/products",
}
let aboutContentStore: AboutContent = initialAboutContent // Using a single object for about content

// Initial Client Logos (from app/page.tsx)
const initialClientLogos: ClientLogo[] = [
  { id: "client-1", name: "Client Logo 1", imageUrl: "/placeholder.svg?height=60&width=180" },
  { id: "client-2", name: "Client Logo 2", imageUrl: "/placeholder.svg?height=60&width=180" },
  { id: "client-3", name: "Client Logo 3", imageUrl: "/placeholder.svg?height=60&width=180" },
  { id: "client-4", name: "Client Logo 4", imageUrl: "/placeholder.svg?height=60&width=180" },
  { id: "client-5", name: "Client Logo 5", imageUrl: "/placeholder.svg?height=60&width=180" },
]
const clientLogoStore = new Map<string, ClientLogo>(initialClientLogos.map((l) => [l.id, l]))

// Initial Tech Logos (from app/page.tsx)
const initialTechLogos: TechLogo[] = [
  { id: "tech-1", name: "React Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
  { id: "tech-2", name: "Node.js Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
  { id: "tech-3", name: "Python Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
  { id: "tech-4", name: "AWS Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
  { id: "tech-5", name: "PostgreSQL Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
  { id: "tech-6", name: "Firebase Logo", imageUrl: "/placeholder.svg?height=80&width=80" },
]
const techLogoStore = new Map<string, TechLogo>(initialTechLogos.map((l) => [l.id, l]))

// Initial Contact Info
const initialContactInfo: ContactInfo = {
  email: "info@softwareco.com",
  phone: "+1 (555) 123-4567",
  address: "123 Tech Lane, Innovation City, CA 90210",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0189000000003!2d-122.0842496846811!3d37.42199997982501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb24f00000001%3A0x123456789abcdef0!2sGoogleplex!5e0!3m2!1sen!2sus!4v1678901234567!5m2!1sen!2sus", // Example Google Maps embed URL
}
let contactInfoStore: ContactInfo = initialContactInfo

// --- Product Functions (from previous response) ---
export function getProducts(): Product[] {
  return Array.from(productStore.values())
}

export function getProductBySlug(slug: string): Product | undefined {
  return productStore.get(slug)
}

export function addProduct(product: Product): Product {
  if (productStore.has(product.slug)) {
    throw new Error(`Product with slug '${product.slug}' already exists.`)
  }
  productStore.set(product.slug, product)
  return product
}

export function updateProduct(slug: string, updatedProduct: Product): Product {
  if (!productStore.has(slug) && slug !== updatedProduct.slug) {
    throw new Error(`Product with slug '${slug}' not found.`)
  }
  // If slug changes, delete old entry and add new
  if (slug !== updatedProduct.slug) {
    productStore.delete(slug)
  }
  productStore.set(updatedProduct.slug, updatedProduct)
  return updatedProduct
}

export function deleteProduct(slug: string): boolean {
  return productStore.delete(slug)
}

// --- Testimonial Functions (Placeholder - implement similarly) ---
export function getTestimonials(): Testimonial[] {
  return Array.from(testimonialStore.values())
}

// --- Blog Post Functions (Placeholder - implement similarly) ---
export function getBlogPosts(): BlogPost[] {
  return Array.from(blogPostStore.values())
}

// --- Hero Slide Functions ---
export function getHeroSlides(): HeroSlide[] {
  return Array.from(heroSlideStore.values())
}

export function getHeroSlideById(id: string): HeroSlide | undefined {
  return heroSlideStore.get(id)
}

export function addHeroSlide(slide: HeroSlide): HeroSlide {
  if (heroSlideStore.has(slide.id)) {
    throw new Error(`Hero slide with ID '${slide.id}' already exists.`)
  }
  heroSlideStore.set(slide.id, slide)
  return slide
}

export function updateHeroSlide(id: string, updatedSlide: HeroSlide): HeroSlide {
  if (!heroSlideStore.has(id)) {
    throw new Error(`Hero slide with ID '${id}' not found.`)
  }
  heroSlideStore.set(id, updatedSlide)
  return updatedSlide
}

export function deleteHeroSlide(id: string): boolean {
  return heroSlideStore.delete(id)
}

// --- Service Functions ---
export function getServices(): Service[] {
  return Array.from(serviceStore.values())
}

export function getServiceById(id: string): Service | undefined {
  return serviceStore.get(id)
}

export function addService(service: Service): Service {
  if (serviceStore.has(service.id)) {
    throw new Error(`Service with ID '${service.id}' already exists.`)
  }
  serviceStore.set(service.id, service)
  return service
}

export function updateService(id: string, updatedService: Service): Service {
  if (!serviceStore.has(id)) {
    throw new Error(`Service with ID '${id}' not found.`)
  }
  serviceStore.set(id, updatedService)
  return updatedService
}

export function deleteService(id: string): boolean {
  return serviceStore.delete(id)
}

// --- About Content Functions ---
export function getAboutContent(): AboutContent {
  return aboutContentStore
}

export function updateAboutContent(content: AboutContent): AboutContent {
  aboutContentStore = content
  return aboutContentStore
}

// --- Client Logo Functions ---
export function getClientLogos(): ClientLogo[] {
  return Array.from(clientLogoStore.values())
}

export function getClientLogoById(id: string): ClientLogo | undefined {
  return clientLogoStore.get(id)
}

export function addClientLogo(logo: ClientLogo): ClientLogo {
  if (clientLogoStore.has(logo.id)) {
    throw new Error(`Client logo with ID '${logo.id}' already exists.`)
  }
  clientLogoStore.set(logo.id, logo)
  return logo
}

export function updateClientLogo(id: string, updatedLogo: ClientLogo): ClientLogo {
  if (!clientLogoStore.has(id)) {
    throw new Error(`Client logo with ID '${id}' not found.`)
  }
  clientLogoStore.set(id, updatedLogo)
  return updatedLogo
}

export function deleteClientLogo(id: string): boolean {
  return clientLogoStore.delete(id)
}

// --- Tech Logo Functions ---
export function getTechLogos(): TechLogo[] {
  return Array.from(techLogoStore.values())
}

export function getTechLogoById(id: string): TechLogo | undefined {
  return techLogoStore.get(id)
}

export function addTechLogo(logo: TechLogo): TechLogo {
  if (techLogoStore.has(logo.id)) {
    throw new Error(`Tech logo with ID '${logo.id}' already exists.`)
  }
  techLogoStore.set(logo.id, logo)
  return logo
}

export function updateTechLogo(id: string, updatedLogo: TechLogo): TechLogo {
  if (!techLogoStore.has(id)) {
    throw new Error(`Tech logo with ID '${id}' not found.`)
  }
  techLogoStore.set(id, updatedLogo)
  return updatedLogo
}

export function deleteTechLogo(id: string): boolean {
  return techLogoStore.delete(id)
}

// --- Contact Info Functions ---
export function getContactInfo(): ContactInfo {
  return contactInfoStore
}

export function updateContactInfo(info: ContactInfo): ContactInfo {
  contactInfoStore = info
  return contactInfoStore
}
