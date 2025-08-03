"use server"

import { addHeroSlide, updateHeroSlide, deleteHeroSlide } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid" // For generating unique IDs

export async function createHeroSlideAction(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const cta1Text = formData.get("cta1Text") as string
  const cta1Href = formData.get("cta1Href") as string
  const cta2Text = formData.get("cta2Text") as string
  const cta2Href = formData.get("cta2Href") as string
  const image = formData.get("image") as string

  const newSlide = {
    id: uuidv4(), // Generate a unique ID
    title,
    description,
    cta1Text,
    cta1Href,
    cta2Text,
    cta2Href,
    image,
  }

  try {
    addHeroSlide(newSlide)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/hero-slides") // Revalidate admin list
    redirect("/admin/hero-slides")
  } catch (error: any) {
    console.error("Error creating hero slide:", error.message)
    throw new Error("Failed to create hero slide: " + error.message)
  }
}

export async function updateHeroSlideAction(originalId: string, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const cta1Text = formData.get("cta1Text") as string
  const cta1Href = formData.get("cta1Href") as string
  const cta2Text = formData.get("cta2Text") as string
  const cta2Href = formData.get("cta2Href") as string
  const image = formData.get("image") as string
  const id = formData.get("id") as string // Get the ID from the form (should be originalId)

  const updatedSlide = {
    id,
    title,
    description,
    cta1Text,
    cta1Href,
    cta2Text,
    cta2Href,
    image,
  }

  try {
    updateHeroSlide(originalId, updatedSlide)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/hero-slides") // Revalidate admin list
    redirect("/admin/hero-slides")
  } catch (error: any) {
    console.error("Error updating hero slide:", error.message)
    throw new Error("Failed to update hero slide: " + error.message)
  }
}

export async function deleteHeroSlideAction(id: string) {
  try {
    deleteHeroSlide(id)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/hero-slides") // Revalidate admin list
  } catch (error: any) {
    console.error("Error deleting hero slide:", error.message)
    throw new Error("Failed to delete hero slide: " + error.message)
  }
}
