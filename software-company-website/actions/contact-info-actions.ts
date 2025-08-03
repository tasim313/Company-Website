"use server"

import { updateContactInfo } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateContactInfoAction(formData: FormData) {
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const address = formData.get("address") as string
  const mapEmbedUrl = formData.get("mapEmbedUrl") as string

  const updatedInfo = {
    email,
    phone,
    address,
    mapEmbedUrl: mapEmbedUrl || undefined, // Allow mapEmbedUrl to be optional
  }

  try {
    updateContactInfo(updatedInfo)
    revalidatePath("/contact") // Revalidate public contact page
    revalidatePath("/admin/contact-info") // Revalidate admin contact page
    redirect("/admin/contact-info")
  } catch (error: any) {
    console.error("Error updating contact info:", error.message)
    throw new Error("Failed to update contact info: " + error.message)
  }
}
