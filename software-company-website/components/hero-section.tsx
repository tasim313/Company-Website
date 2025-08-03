"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import type { getHeroSlides } from "@/lib/admin-data-store" // Import type for HeroSlide

interface HeroSectionProps {
  slides: ReturnType<typeof getHeroSlides>
}

export default function HeroSection({ slides }: HeroSectionProps) {
  return (
    <section className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] flex items-center justify-center text-center bg-background overflow-hidden">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 6000, // Adjust slide duration
            stopOnInteraction: false,
          }),
        ]}
        className="w-full h-full"
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id || index} className="h-full">
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={slide.image || "/placeholder.svg?height=800&width=1600&query=hero background"}
                  alt={`Hero Slide ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  quality={80}
                  className="absolute inset-0 z-0"
                />
                <div className="absolute inset-0 bg-black opacity-60" /> {/* Overlay for text readability */}
                <div className="relative z-10 px-4 md:px-6 max-w-4xl mx-auto space-y-6 text-white">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto">{slide.description}</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button asChild size="lg" className="px-8 py-3 text-lg">
                      <Link href={slide.cta1Href}>{slide.cta1Text}</Link>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="px-8 py-3 text-lg border-gray-400 text-gray-200 hover:bg-gray-700 hover:text-white bg-transparent"
                    >
                      <Link href={slide.cta2Href}>{slide.cta2Text}</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white" />
      </Carousel>
    </section>
  )
}
