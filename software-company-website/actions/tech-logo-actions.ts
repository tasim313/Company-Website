"use server"

import { addTechLogo, updateTechLogo, deleteTechLogo } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid"

export async function createTechLogoAction(formData: FormData) {
  const name = formData.get("name") as string
  const imageUrl = formData.get("imageUrl") as string

  const newLogo = {
    id: uuidv4(),
    name,
    imageUrl,
  }

  try {
    addTechLogo(newLogo)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/tech-logos") // Revalidate admin list
    redirect("/admin/tech-logos")
  } catch (error: any) {
    console.error("Error creating tech logo:", error.message)
    throw new Error("Failed to create tech logo: " + error.message)
  }
}

export async function updateTechLogoAction(originalId: string, formData: FormData) {
  const name = formData.get("name") as string
  const imageUrl = formData.get("imageUrl") as string
  const id = formData.get("id") as string // Should be originalId

  const updatedLogo = {
    id,
    name,
    imageUrl,
  }

  try {
    updateTechLogo(originalId, updatedLogo)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/tech-logos") // Revalidate admin list
    redirect("/admin/tech-logos")
  } catch (error: any) {
    console.error("Error updating tech logo:", error.message)
    throw new Error("Failed to update tech logo: " + error.message)
  }
}

export async function deleteTechLogoAction(id: string) {
  try {
    deleteTechLogo(id)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/tech-logos") // Revalidate admin list
  } catch (error: any) {
    console.error("Error deleting tech logo:", error.message)
    throw new Error("Failed to delete tech logo: " + error.message)
  }
}
