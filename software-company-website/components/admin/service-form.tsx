"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from "react-dom"
import type { getServices } from "@/lib/admin-data-store" // Import type for Service

interface ServiceFormProps {
  action: (formData: FormData) => void
  initialData?: ReturnType<typeof getServices>[0]
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Service"}
    </Button>
  )
}

export default function ServiceForm({ action, initialData }: ServiceFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      {initialData && <input type="hidden" name="id" value={initialData.id} />}

      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Service" : "Add New Service"}</h2>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-foreground mb-1">
          Service Title
        </label>
        <Input id="title" name="title" required defaultValue={initialData?.title || ""} />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
          Description
        </label>
        <Textarea id="description" name="description" required defaultValue={initialData?.description || ""} rows={4} />
      </div>

      <div>
        <label htmlFor="icon" className="block text-sm font-medium text-foreground mb-1">
          Icon Name (from Lucide React)
        </label>
        <Input
          id="icon"
          name="icon"
          required
          defaultValue={initialData?.icon || "Code"}
          placeholder="e.g., Code, Lightbulb, Cloud, Shield, Smartphone, GitFork"
        />
        <p className="text-xs text-muted-foreground mt-1">
          Use a valid icon name from{" "}
          <a href="https://lucide.dev/icons/" target="_blank" rel="noopener noreferrer" className="underline">
            Lucide React
          </a>
          .
        </p>
      </div>

      <SubmitButton />
    </form>
  )
}
