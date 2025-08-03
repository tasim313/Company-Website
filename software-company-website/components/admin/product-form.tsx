"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useFormStatus } from "react-dom"
import type { products } from "@/lib/data" // Import type for existing products

interface ProductFormProps {
  action: (formData: FormData) => void
  initialData?: (typeof products)[0] // Use the type from lib/data
}

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? "Saving..." : "Save Product"}
    </Button>
  )
}

export default function ProductForm({ action, initialData }: ProductFormProps) {
  return (
    <form action={action} className="space-y-6 p-6 bg-card rounded-lg shadow-sm">
      {initialData && <input type="hidden" name="originalSlug" value={initialData.slug} />}

      <h2 className="text-2xl font-bold mb-4">{initialData ? "Edit Product" : "Add New Product"}</h2>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
          Product Name
        </label>
        <Input id="name" name="name" required defaultValue={initialData?.name || ""} />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-foreground mb-1">
          Description
        </label>
        <Textarea id="description" name="description" required defaultValue={initialData?.description || ""} rows={4} />
      </div>

      <div>
        <label htmlFor="features" className="block text-sm font-medium text-foreground mb-1">
          Features (comma-separated)
        </label>
        <Input
          id="features"
          name="features"
          required
          defaultValue={initialData?.features.join(", ") || ""}
          placeholder="Feature 1, Feature 2, Feature 3"
        />
      </div>

      <div>
        <label htmlFor="technologies" className="block text-sm font-medium text-foreground mb-1">
          Technologies (comma-separated)
        </label>
        <Input
          id="technologies"
          name="technologies"
          required
          defaultValue={initialData?.technologies.join(", ") || ""}
          placeholder="React, Node.js, PostgreSQL"
        />
      </div>

      <div>
        <label htmlFor="screenshots" className="block text-sm font-medium text-foreground mb-1">
          Screenshot URLs (comma-separated)
        </label>
        <Input
          id="screenshots"
          name="screenshots"
          required
          defaultValue={initialData?.screenshots.join(", ") || ""}
          placeholder="/placeholder.svg?height=400&width=600, /another.png"
        />
        <p className="text-xs text-muted-foreground mt-1">
          For real images, you'd upload them to a storage service and use their URLs here.
        </p>
      </div>

      <div>
        <label htmlFor="livePreview" className="block text-sm font-medium text-foreground mb-1">
          Live Preview URL
        </label>
        <Input id="livePreview" name="livePreview" defaultValue={initialData?.livePreview || "#"} />
      </div>

      <div>
        <label htmlFor="pricing" className="block text-sm font-medium text-foreground mb-1">
          Pricing
        </label>
        <Input id="pricing" name="pricing" required defaultValue={initialData?.pricing || ""} />
      </div>

      {/* Case Study Fields */}
      <h3 className="text-xl font-bold mt-8 mb-4">Case Study Details (Optional)</h3>
      <div>
        <label htmlFor="caseStudyTitle" className="block text-sm font-medium text-foreground mb-1">
          Case Study Title
        </label>
        <Input id="caseStudyTitle" name="caseStudyTitle" defaultValue={initialData?.caseStudy?.title || ""} />
      </div>
      <div>
        <label htmlFor="caseStudyProblem" className="block text-sm font-medium text-foreground mb-1">
          Problem
        </label>
        <Textarea id="caseStudyProblem" name="caseStudyProblem" defaultValue={initialData?.caseStudy?.problem || ""} />
      </div>
      <div>
        <label htmlFor="caseStudySolution" className="block text-sm font-medium text-foreground mb-1">
          Solution
        </label>
        <Textarea
          id="caseStudySolution"
          name="caseStudySolution"
          defaultValue={initialData?.caseStudy?.solution || ""}
        />
      </div>
      <div>
        <label htmlFor="caseStudyResult" className="block text-sm font-medium text-foreground mb-1">
          Result
        </label>
        <Textarea id="caseStudyResult" name="caseStudyResult" defaultValue={initialData?.caseStudy?.result || ""} />
      </div>
      <div>
        <label htmlFor="caseStudyMetrics" className="block text-sm font-medium text-foreground mb-1">
          Metrics (comma-separated, e.g., "30% Efficiency Boost")
        </label>
        <Input
          id="caseStudyMetrics"
          name="caseStudyMetrics"
          defaultValue={initialData?.caseStudy?.metrics.join(", ") || ""}
        />
      </div>
      <div>
        <label htmlFor="caseStudyClientTestimonial" className="block text-sm font-medium text-foreground mb-1">
          Client Testimonial
        </label>
        <Textarea
          id="caseStudyClientTestimonial"
          name="caseStudyClientTestimonial"
          defaultValue={initialData?.caseStudy?.clientTestimonial || ""}
        />
      </div>
      <div>
        <label htmlFor="caseStudyClientName" className="block text-sm font-medium text-foreground mb-1">
          Client Name & Title
        </label>
        <Input
          id="caseStudyClientName"
          name="caseStudyClientName"
          defaultValue={initialData?.caseStudy?.clientName || ""}
        />
      </div>

      <SubmitButton />
    </form>
  )
}
