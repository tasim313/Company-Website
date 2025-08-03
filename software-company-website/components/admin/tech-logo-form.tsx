"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import type { getTechLogos } from "@/lib/admin-data-store"

interface TechLogoFormProps {
  action: (formData: FormData) => void
  initialData?: ReturnType<typeof getTechLogos>[0]
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Logo"}
    </Button>
  )
}

export default function TechLogoForm({ action, initialData }: TechLogoFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      {initialData && <input type="hidden" name="id" value={initialData.id} />}

      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Tech Logo" : "Add New Tech Logo"}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
          Technology Name
        </label>
        <Input id="name" name="name" required defaultValue={initialData?.name || ""} />
      </div>

      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-foreground mb-1">
          Image URL
        </label>
        <Input
          id="imageUrl"
          name="imageUrl"
          required
          defaultValue={initialData?.imageUrl || "/placeholder.svg?height=80&width=80"}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Use placeholder.svg for generated images or a real URL for uploaded images.
        </p>
      </div>

      <SubmitButton />
    </form>
  )
}
