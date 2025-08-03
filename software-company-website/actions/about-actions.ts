"use server"

import { updateAboutContent } from "@/lib/admin-data-store"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function updateAboutContentAction(formData: FormData) {
  const companyOverview = formData.get("companyOverview") as string
  const missionVision = formData.get("missionVision") as string
  const history = formData.get("history") as string
  const coreValues = formData.get("coreValues") as string
  const achievements = formData.get("achievements") as string
  const partnerships = formData.get("partnerships") as string
  const globalPresence = formData.get("globalPresence") as string
  const ctaText = formData.get("ctaText") as string
  const ctaHref = formData.get("ctaHref") as string

  const updatedContent = {
    companyOverview,
    missionVision,
    history,
    coreValues,
    achievements,
    partnerships,
    globalPresence,
    ctaText,
    ctaHref,
  }

  try {
    updateAboutContent(updatedContent)
    revalidatePath("/about") // Revalidate public about page
    revalidatePath("/admin/about") // Revalidate admin about page
    redirect("/admin/about")
  } catch (error: any) {
    console.error("Error updating about content:", error.message)
    throw new Error("Failed to update about content: " + error.message)
  }
}
