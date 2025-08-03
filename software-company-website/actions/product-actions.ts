"use server"

import { addProduct, updateProduct, deleteProduct } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

// Helper to generate a slug from a name
function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove non-alphanumeric characters except spaces and hyphens
    .trim()
    .replace(/\s+/g, "-") // Replace spaces with hyphens
}

export async function createProductAction(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const features = (formData.get("features") as string).split(",").map((f) => f.trim())
  const technologies = (formData.get("technologies") as string).split(",").map((t) => t.trim())
  const screenshots = (formData.get("screenshots") as string).split(",").map((s) => s.trim())
  const livePreview = formData.get("livePreview") as string
  const pricing = formData.get("pricing") as string

  // Case Study fields (optional)
  const caseStudyTitle = formData.get("caseStudyTitle") as string
  const caseStudyProblem = formData.get("caseStudyProblem") as string
  const caseStudySolution = formData.get("caseStudySolution") as string
  const caseStudyResult = formData.get("caseStudyResult") as string
  const caseStudyMetrics = (formData.get("caseStudyMetrics") as string)?.split(",").map((m) => m.trim()) || []
  const caseStudyClientTestimonial = formData.get("caseStudyClientTestimonial") as string
  const caseStudyClientName = formData.get("caseStudyClientName") as string

  const slug = generateSlug(name)

  const newProduct = {
    slug,
    name,
    description,
    features,
    technologies,
    screenshots,
    livePreview,
    pricing,
    caseStudy: caseStudyTitle
      ? {
          title: caseStudyTitle,
          problem: caseStudyProblem,
          solution: caseStudySolution,
          result: caseStudyResult,
          metrics: caseStudyMetrics,
          clientTestimonial: caseStudyClientTestimonial,
          clientName: caseStudyClientName,
        }
      : undefined,
  }

  try {
    addProduct(newProduct)
    revalidatePath("/products") // Revalidate public product pages
    revalidatePath("/admin/products") // Revalidate admin product list
    redirect("/admin/products")
  } catch (error: any) {
    console.error("Error creating product:", error.message)
    // In a real app, you'd handle this error more gracefully, e.g., return it to the form
    throw new Error("Failed to create product: " + error.message)
  }
}

export async function updateProductAction(originalSlug: string, formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const features = (formData.get("features") as string).split(",").map((f) => f.trim())
  const technologies = (formData.get("technologies") as string).split(",").map((t) => t.trim())
  const screenshots = (formData.get("screenshots") as string).split(",").map((s) => s.trim())
  const livePreview = formData.get("livePreview") as string
  const pricing = formData.get("pricing") as string

  // Case Study fields (optional)
  const caseStudyTitle = formData.get("caseStudyTitle") as string
  const caseStudyProblem = formData.get("caseStudyProblem") as string
  const caseStudySolution = formData.get("caseStudySolution") as string
  const caseStudyResult = formData.get("caseStudyResult") as string
  const caseStudyMetrics = (formData.get("caseStudyMetrics") as string)?.split(",").map((m) => m.trim()) || []
  const caseStudyClientTestimonial = formData.get("caseStudyClientTestimonial") as string
  const caseStudyClientName = formData.get("caseStudyClientName") as string

  const newSlug = generateSlug(name) // Generate new slug based on potentially updated name

  const updatedProduct = {
    slug: newSlug, // Use the new slug
    name,
    description,
    features,
    technologies,
    screenshots,
    livePreview,
    pricing,
    caseStudy: caseStudyTitle
      ? {
          title: caseStudyTitle,
          problem: caseStudyProblem,
          solution: caseStudySolution,
          result: caseStudyResult,
          metrics: caseStudyMetrics,
          clientTestimonial: caseStudyClientTestimonial,
          clientName: caseStudyClientName,
        }
      : undefined,
  }

  try {
    updateProduct(originalSlug, updatedProduct)
    revalidatePath("/products") // Revalidate public product pages
    revalidatePath("/admin/products") // Revalidate admin product list
    revalidatePath(`/products/${originalSlug}`) // Revalidate old product detail page
    revalidatePath(`/products/${newSlug}`) // Revalidate new product detail page
    redirect("/admin/products")
  } catch (error: any) {
    console.error("Error updating product:", error.message)
    throw new Error("Failed to update product: " + error.message)
  }
}

export async function deleteProductAction(slug: string) {
  try {
    deleteProduct(slug)
    revalidatePath("/products") // Revalidate public product pages
    revalidatePath("/admin/products") // Revalidate admin product list
    revalidatePath(`/products/${slug}`) // Revalidate deleted product detail page
  } catch (error: any) {
    console.error("Error deleting product:", error.message)
    throw new Error("Failed to delete product: " + error.message)
  }
}
