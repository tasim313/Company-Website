"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useFormStatus } from "react-dom"
import type { getClientLogos } from "@/lib/admin-data-store"

interface ClientLogoFormProps {
  action: (formData: FormData) => void
  initialData?: ReturnType<typeof getClientLogos>[0]
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Logo"}
    </Button>
  )
}

export default function ClientLogoForm({ action, initialData }: ClientLogoFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      {initialData && <input type="hidden" name="id" value={initialData.id} />}

      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Client Logo" : "Add New Client Logo"}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
          Client Name
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
          defaultValue={initialData?.imageUrl || "/placeholder.svg?height=60&width=180"}
        />
        <p className="text-xs text-muted-foreground mt-1">
          Use placeholder.svg for generated images or a real URL for uploaded images.
        </p>
      </div>

      <SubmitButton />
    </form>
  )
}
