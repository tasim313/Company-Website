import HeroSlideList from "@/components/admin/hero-slide-list"
import { getHeroSlides } from "@/lib/admin-data-store"

export default function AdminHeroSlidesPage() {
  const slides = getHeroSlides()
  return (
    <div className="container px-0 py-0">
      <HeroSlideList slides={slides} />
    </div>
  )
}
