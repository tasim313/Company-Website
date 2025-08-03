"use server"

import { addClientLogo, updateClientLogo, deleteClientLogo } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid"

export async function createClientLogoAction(formData: FormData) {
  const name = formData.get("name") as string
  const imageUrl = formData.get("imageUrl") as string

  const newLogo = {
    id: uuidv4(),
    name,
    imageUrl,
  }

  try {
    addClientLogo(newLogo)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/client-logos") // Revalidate admin list
    redirect("/admin/client-logos")
  } catch (error: any) {
    console.error("Error creating client logo:", error.message)
    throw new Error("Failed to create client logo: " + error.message)
  }
}

export async function updateClientLogoAction(originalId: string, formData: FormData) {
  const name = formData.get("name") as string
  const imageUrl = formData.get("imageUrl") as string
  const id = formData.get("id") as string // Should be originalId

  const updatedLogo = {
    id,
    name,
    imageUrl,
  }

  try {
    updateClientLogo(originalId, updatedLogo)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/client-logos") // Revalidate admin list
    redirect("/admin/client-logos")
  } catch (error: any) {
    console.error("Error updating client logo:", error.message)
    throw new Error("Failed to update client logo: " + error.message)
  }
}

export async function deleteClientLogoAction(id: string) {
  try {
    deleteClientLogo(id)
    revalidatePath("/") // Revalidate homepage
    revalidatePath("/admin/client-logos") // Revalidate admin list
  } catch (error: any) {
    console.error("Error deleting client logo:", error.message)
    throw new Error("Failed to delete client logo: " + error.message)
  }
}
