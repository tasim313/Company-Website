import ServiceForm from "@/components/admin/service-form"
import { createServiceAction } from "@/actions/service-actions"

export default function NewServicePage() {
  return (
    <div className="container px-0 py-0">
      <ServiceForm action={createServiceAction} />
    </div>
  )
}
