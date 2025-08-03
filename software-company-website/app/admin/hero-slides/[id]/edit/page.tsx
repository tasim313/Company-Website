import HeroSlideForm from "@/components/admin/hero-slide-form"
import { getHeroSlideById } from "@/lib/admin-data-store"
import { updateHeroSlideAction } from "@/actions/hero-slide-actions"
import { notFound } from "next/navigation"

interface EditHeroSlidePageProps {
  params: {
    id: string
  }
}

export default function EditHeroSlidePage({ params }: EditHeroSlidePageProps) {
  const slide = getHeroSlideById(params.id)

  if (!slide) {
    notFound()
  }

  const updateActionWithId = updateHeroSlideAction.bind(null, params.id)

  return (
    <div className="container px-0 py-0">
      <HeroSlideForm action={updateActionWithId} initialData={slide} />
    </div>
  )
}
