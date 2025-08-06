import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header" // Import the new Header component

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ScriptPark - Modern Software Solutions",
  description: "Crafting cutting-edge software solutions for your business.",
    generator: 'scriptpark'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header /> {/* Add the Header component here */}
        {children}
      </body>
    </html>
  )
}
