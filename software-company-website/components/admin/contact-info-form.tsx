"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from "react-dom"
import type { getContactInfo } from "@/lib/admin-data-store"

interface ContactInfoFormProps {
  action: (formData: FormData) => void
  initialData: ReturnType<typeof getContactInfo>
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Contact Info"}
    </Button>
  )
}

export default function ContactInfoForm({ action, initialData }: ContactInfoFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold mb-4">Edit Contact Information</h2>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
          Email Address
        </label>
        <Input id="email" name="email" type="email" required defaultValue={initialData?.email || ""} />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
          Phone Number
        </label>
        <Input id="phone" name="phone" required defaultValue={initialData?.phone || ""} />
      </div>

      <div>
        <label htmlFor="address" className="block text-sm font-medium text-foreground mb-1">
          Address
        </label>
        <Textarea id="address" name="address" required defaultValue={initialData?.address || ""} rows={3} />
      </div>

      <div>
        <label htmlFor="mapEmbedUrl" className="block text-sm font-medium text-foreground mb-1">
          Map Embed URL (Optional)
        </label>
        <Input
          id="mapEmbedUrl"
          name="mapEmbedUrl"
          defaultValue={initialData?.mapEmbedUrl || ""}
          placeholder="e.g., from Google Maps 'Embed a map' feature"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Paste the `src` attribute from an iframe embed code (e.g., from Google Maps).
        </p>
      </div>

      <SubmitButton />
    </form>
  )
}
