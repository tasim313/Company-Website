"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { deleteServiceAction } from "@/actions/service-actions"
import { Trash2, Edit } from "lucide-react"
import { useFormStatus } from "react-dom"
import * as LucideIcons from "lucide-react" // Import all icons
import type { getServices } from "@/lib/admin-data-store" // Import type for Service

interface ServiceListProps {
  services: ReturnType<typeof getServices>
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

export default function ServiceList({ services }: ServiceListProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Services</h2>
        <Button asChild>
          <Link href="/admin/services/new">Add New Service</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Icon</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {services.map((service) => {
            const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle // Fallback icon
            return (
              <TableRow key={service.id}>
                <TableCell>
                  <IconComponent className="h-6 w-6 text-primary" />
                </TableCell>
                <TableCell className="font-medium">{service.title}</TableCell>
                <TableCell className="text-muted-foreground line-clamp-2 max-w-xs">{service.description}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button asChild variant="outline" size="icon">
                      <Link href={`/admin/services/${service.id}/edit`}>
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Link>
                    </Button>
                    <form action={deleteServiceAction.bind(null, service.id)}>
                      <DeleteButton id={service.id} />
                    </form>
                  </div>
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
