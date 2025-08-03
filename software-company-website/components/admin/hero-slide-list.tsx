"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { deleteHeroSlideAction } from "@/actions/hero-slide-actions"
import { Trash2, Edit } from "lucide-react"
import { useFormStatus } from "react-dom"
import type { getHeroSlides } from "@/lib/admin-data-store" // Import type for HeroSlide

interface HeroSlideListProps {
  slides: ReturnType<typeof getHeroSlides>
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

export default function HeroSlideList({ slides }: HeroSlideListProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Hero Slides</h2>
        <Button asChild>
          <Link href="/admin/hero-slides/new">Add New Slide</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {slides.map((slide) => (
            <TableRow key={slide.id}>
              <TableCell className="font-medium">{slide.title}</TableCell>
              <TableCell className="text-muted-foreground line-clamp-2 max-w-xs">{slide.description}</TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href={`/admin/hero-slides/${slide.id}/edit`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <form action={deleteHeroSlideAction.bind(null, slide.id)}>
                    <DeleteButton id={slide.id} />
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
