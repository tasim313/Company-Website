import HeroSlideForm from "@/components/admin/hero-slide-form"
import { createHeroSlideAction } from "@/actions/hero-slide-actions"

export default function NewHeroSlidePage() {
  return (
    <div className="container px-0 py-0">
      <HeroSlideForm action={createHeroSlideAction} />
    </div>
  )
}
