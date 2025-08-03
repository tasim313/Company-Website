"use server"

import { addService, updateService, deleteService } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { v4 as uuidv4 } from "uuid"

export async function createServiceAction(formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const icon = formData.get("icon") as string // Assuming this is a Lucide icon name

  const newService = {
    id: uuidv4(),
    title,
    description,
    icon,
  }

  try {
    addService(newService)
    revalidatePath("/services") // Revalidate public services page
    revalidatePath("/admin/services") // Revalidate admin list
    redirect("/admin/services")
  } catch (error: any) {
    console.error("Error creating service:", error.message)
    throw new Error("Failed to create service: " + error.message)
  }
}

export async function updateServiceAction(originalId: string, formData: FormData) {
  const title = formData.get("title") as string
  const description = formData.get("description") as string
  const icon = formData.get("icon") as string
  const id = formData.get("id") as string // Should be originalId

  const updatedService = {
    id,
    title,
    description,
    icon,
  }

  try {
    updateService(originalId, updatedService)
    revalidatePath("/services") // Revalidate public services page
    revalidatePath("/admin/services") // Revalidate admin list
    redirect("/admin/services")
  } catch (error: any) {
    console.error("Error updating service:", error.message)
    throw new Error("Failed to update service: " + error.message)
  }
}

export async function deleteServiceAction(id: string) {
  try {
    deleteService(id)
    revalidatePath("/services") // Revalidate public services page
    revalidatePath("/admin/services") // Revalidate admin list
  } catch (error: any) {
    console.error("Error deleting service:", error.message)
    throw new Error("Failed to delete service: " + error.message)
  }
}
