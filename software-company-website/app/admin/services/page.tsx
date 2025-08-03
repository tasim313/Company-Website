import ServiceList from "@/components/admin/service-list"
import { getServices } from "@/lib/admin-data-store"

export default function AdminServicesPage() {
  const services = getServices()
  return (
    <div className="container px-0 py-0">
      <ServiceList services={services} />
    </div>
  )
}
