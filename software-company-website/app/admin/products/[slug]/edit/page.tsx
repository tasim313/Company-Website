import ProductForm from "@/components/admin/product-form"
import { getProductBySlug } from "@/lib/admin-data-store"
import { updateProductAction } from "@/actions/product-actions"
import { notFound } from "next/navigation"

interface EditProductPageProps {
  params: {
    slug: string
  }
}

export default function EditProductPage({ params }: EditProductPageProps) {
  const product = getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  // Bind the original slug to the server action for update
  const updateActionWithSlug = updateProductAction.bind(null, params.slug)

  return (
    <div className="container px-0 py-0">
      <ProductForm action={updateActionWithSlug} initialData={product} />
    </div>
  )
}
