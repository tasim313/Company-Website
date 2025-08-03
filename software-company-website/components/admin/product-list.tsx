"use client"

import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { deleteProductAction } from "@/actions/product-actions"
import { Trash2, Edit } from "lucide-react"
import { useFormStatus } from "react-dom"
import type { products } from "@/lib/data" // Import type for existing products

interface ProductListProps {
  products: typeof products // Use the type from lib/data
}

function DeleteButton({ slug }: { slug: string }) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" variant="destructive" size="icon" disabled={pending}>
      {pending ? <span className="animate-spin">⚙️</span> : <Trash2 className="h-4 w-4" />}
      <span className="sr-only">Delete</span>
    </Button>
  )
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="bg-card p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Products</h2>
        <Button asChild>
          <Link href="/admin/products/new">Add New Product</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Technologies</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.slug}>
              <TableCell className="font-medium">{product.name}</TableCell>
              <TableCell className="text-muted-foreground line-clamp-2 max-w-xs">{product.description}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {product.technologies.map((tech, idx) => (
                    <span key={idx} className="text-xs bg-secondary px-2 py-0.5 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex justify-end gap-2">
                  <Button asChild variant="outline" size="icon">
                    <Link href={`/admin/products/${product.slug}/edit`}>
                      <Edit className="h-4 w-4" />
                      <span className="sr-only">Edit</span>
                    </Link>
                  </Button>
                  <form action={deleteProductAction.bind(null, product.slug)}>
                    <DeleteButton slug={product.slug} />
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
