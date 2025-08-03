import ProductForm from "@/components/admin/product-form"
import { createProductAction } from "@/actions/product-actions"

export default function NewProductPage() {
  return (
    <div className="container px-0 py-0">
      <ProductForm action={createProductAction} />
    </div>
  )
}
