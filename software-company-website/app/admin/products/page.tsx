import ProductList from "@/components/admin/product-list"
import { getProducts } from "@/lib/admin-data-store"

export default function AdminProductsPage() {
  const products = getProducts()

  return (
    <div className="container px-0 py-0">
      <ProductList products={products} />
    </div>
  )
}
