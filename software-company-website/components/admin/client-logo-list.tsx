"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { deleteClientLogoAction } from "@/actions/client-logo-actions"
import { Trash2, Edit } from "lucide-react"
import { useFormStatus } from "react-dom"
import Image from "next/image"
import type { getClientLogos } from "@/lib/admin-data-store"

interface ClientLogoListProps {
  logos: ReturnType<typeof getClientLogos>
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

export default function ClientLogoList({ logos }: ClientLogoListProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Client Logos</h2>
        <Button asChild>
          <Link href="/admin/client-logos/new">Add New Logo</Link>
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
                  src={logo.imageUrl || "/placeholder.svg?height=60&width=180&query=client logo"}
                  alt={logo.name}
                  width={100}
                  height={30}
                  className="object-contain"
                />
              </TableCell>
              <TableCell className="font-medium">{logo.name}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href={`/admin/client-logos/${logo.id}/edit`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <form action={deleteClientLogoAction.bind(null, logo.id)}>
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
