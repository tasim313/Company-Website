"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from "react-dom"
import type { getHeroSlides } from "@/lib/admin-data-store" // Import type for HeroSlide

interface HeroSlideFormProps {
  action: (formData: FormData) => void
  initialData?: ReturnType<typeof getHeroSlides>[0]
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Slide"}
    </Button>
  )
}

export default function HeroSlideForm({ action, initialData }: HeroSlideFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      {initialData && <input type="hidden" name="id" value={initialData.id} />}

      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Hero Slide" : "Add New Hero Slide"}</h2>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1">
          Title
        </label>
        <Input id="title" name="title" required defaultValue={initialData?.title || ""} />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
          Description
        </label>
        <Textarea id="description" name="description" required defaultValue={initialData?.description || ""} rows={3} />
      </div>

      <div>
        <label htmlFor="cta1Text" className="block text-sm font-medium text-foreground mb-1">
          CTA 1 Text
        </label>
        <Input id="cta1Text" name="cta1Text" required defaultValue={initialData?.cta1Text || ""} />
      </div>
      <div>
        <label htmlFor="cta1Href" className="block text-sm font-medium text-foreground mb-1">
          CTA 1 Link (e.g., /contact)
        </label>
        <Input id="cta1Href" name="cta1Href" required defaultValue={initialData?.cta1Href || ""} />
      </div>

      <div>
        <label htmlFor="cta2Text" className="block text-sm font-medium text-foreground mb-1">
          CTA 2 Text
        </label>
        <Input id="cta2Text" name="cta2Text" required defaultValue={initialData?.cta2Text || ""} />
      </div>
      <div>
        <label htmlFor="cta2Href" className="block text-sm font-medium text-foreground mb-1">
          CTA 2 Link (e.g., /products)
        </label>
        <Input id="cta2Href" name="cta2Href" required defaultValue={initialData?.cta2Href || ""} />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-foreground mb-1">
          Background Image URL
        </label>
        <Input
          id="image"
          name="image"
          required
          defaultValue={initialData?.image || "/placeholder.svg?height=800&width=1600"}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Use placeholder.svg for generated images or a real URL for uploaded images.
        </p>
      </div>

      <SubmitButton />
    </form>
  )
}
