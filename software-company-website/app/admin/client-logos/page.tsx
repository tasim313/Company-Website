import ClientLogoList from "@/components/admin/client-logo-list"
import { getClientLogos } from "@/lib/admin-data-store"

export default function AdminClientLogosPage() {
  const logos = getClientLogos()
  return (
    <div className="container px-0 py-0">
      <ClientLogoList logos={logos} />
    </div>
  )
}
