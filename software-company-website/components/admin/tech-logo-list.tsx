"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { deleteTechLogoAction } from "@/actions/tech-logo-actions"
import { Trash2, Edit } from "lucide-react"
import { useFormStatus } from "react-dom"
import Image from "next/image"
import type { getTechLogos } from "@/lib/admin-data-store"

interface TechLogoListProps {
  logos: ReturnType<typeof getTechLogos>
}

function DeleteButton({ id }: { id: string }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" variant="destructive" size="icon" disabled={pending}>
      {pending ? <span className="animate-spin">⚙️</span> : <Trash2 className="h-4 w-4" />}
      <span className="sr-only">Delete</span>
    </Button>
  )
}

export default function TechLogoList({ logos }: TechLogoListProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Technology Logos</h2>
        <Button asChild>
          <Link href="/admin/tech-logos/new">Add New Logo</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Image</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {logos.map((logo) => (
            <TableRow key={logo.id}>
              <TableCell>
                <Image
                  src={logo.imageUrl || "/placeholder.svg?height=80&width=80&query=tech logo"}
                  alt={logo.name}
                  width={50}
                  height={50}
                  className="object-contain"
                />
              </TableCell>
              <TableCell className="font-medium">{logo.name}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href={`/admin/tech-logos/${logo.id}/edit`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <form action={deleteTechLogoAction.bind(null, logo.id)}>
                    <DeleteButton id={logo.id} />
                  </form>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
