"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from "react-dom"
import type { getAboutContent } from "@/lib/admin-data-store" // Import type for AboutContent

interface AboutContentFormProps {
  action: (formData: FormData) => void
  initialData: ReturnType<typeof getAboutContent>
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save About Content"}
    </Button>
  )
}

export default function AboutContentForm({ action, initialData }: AboutContentFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Edit About Us Page Content</h2>

      <div>
        <label htmlFor="companyOverview" className="block text-sm font-medium text-foreground mb-1">
          Company Overview (HTML/Markdown supported)
        </label>
        <Textarea
          id="companyOverview"
          name="companyOverview"
          required
          defaultValue={initialData?.companyOverview || ""}
          rows={8}
        />
      </div>

      <div>
        <label htmlFor="missionVision" className="block text-sm font-medium text-foreground mb-1">
          Mission & Vision (HTML/Markdown supported)
        </label>
        <Textarea
          id="missionVision"
          name="missionVision"
          required
          defaultValue={initialData?.missionVision || ""}
          rows={6}
        />
      </div>

      <div>
        <label htmlFor="history" className="block text-sm font-medium text-foreground mb-1">
          Company Timeline / History (HTML/Markdown supported)
        </label>
        <Textarea id="history" name="history" required defaultValue={initialData?.history || ""} rows={6} />
      </div>

      <div>
        <label htmlFor="coreValues" className="block text-sm font-medium text-foreground mb-1">
          Core Values / Principles (HTML/Markdown supported)
        </label>
        <Textarea id="coreValues" name="coreValues" required defaultValue={initialData?.coreValues || ""} rows={6} />
      </div>

      <div>
        <label htmlFor="achievements" className="block text-sm font-medium text-foreground mb-1">
          Achievements & Recognition (HTML/Markdown supported)
        </label>
        <Textarea
          id="achievements"
          name="achievements"
          required
          defaultValue={initialData?.achievements || ""}
          rows={6}
        />
      </div>

      <div>
        <label htmlFor="partnerships" className="block text-sm font-medium text-foreground mb-1">
          Partnerships / Affiliations (HTML/Markdown supported)
        </label>
        <Textarea
          id="partnerships"
          name="partnerships"
          required
          defaultValue={initialData?.partnerships || ""}
          rows={4}
        />
      </div>

      <div>
        <label htmlFor="globalPresence" className="block text-sm font-medium text-foreground mb-1">
          Global Presence / Office Locations (HTML/Markdown supported)
        </label>
        <Textarea
          id="globalPresence"
          name="globalPresence"
          required
          defaultValue={initialData?.globalPresence || ""}
          rows={4}
        />
      </div>

      <h3 className="text-xl font-bold mt-8 mb-4">Call to Action</h3>
      <div>
        <label htmlFor="ctaText" className="block text-sm font-medium text-foreground mb-1">
          CTA Text
        </label>
        <Input id="ctaText" name="ctaText" required defaultValue={initialData?.ctaText || ""} />
      </div>
      <div>
        <label htmlFor="ctaHref" className="block text-sm font-medium text-foreground mb-1">
          CTA Link (e.g., /products)
        </label>
        <Input id="ctaHref" name="ctaHref" required defaultValue={initialData?.ctaHref || ""} />
      </div>

      <SubmitButton />
    </form>
  )
}
