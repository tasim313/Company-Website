"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "12345" // For demonstration purposes only!

export async function loginAction(prevState: any, formData: FormData) {
  const username = formData.get("username") as string
  const password = formData.get("password") as string

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    cookies().set("isAuthenticated", "true", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24, // 1 day
      path: "/",
    })
    revalidatePath("/admin")
    redirect("/admin")
  } else {
    return { message: "Invalid username or password." }
  }
}

export async function logoutAction() {
  // Explicitly set maxAge to 0 to ensure immediate expiration
  cookies().set("isAuthenticated", "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 0, // Immediately expire the cookie
    path: "/",
  })
  revalidatePath("/") // Revalidate homepage to reflect logout state
  revalidatePath("/admin") // Revalidate admin pages
  redirect("/login") // Redirect to login page
}

/**
 * Checks if the user is authenticated based on the presence of the
 * `isAuthenticated` cookie.
 *
 * @returns {boolean} True if the user is authenticated, false otherwise.
 */
// export function isAuthenticated(): boolean {
//   return !!cookies().get("isAuthenticated")?.value;
// }

export async function isAuthenticated(): Promise<boolean> {
  return cookies().get("isAuthenticated")?.value === "true"
}