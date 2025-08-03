import ServiceForm from "@/components/admin/service-form"
import { getServiceById } from "@/lib/admin-data-store"
import { updateServiceAction } from "@/actions/service-actions"
import { notFound } from "next/navigation"

interface EditServicePageProps {
  params: {
    id: string
  }
}

export default function EditServicePage({ params }: EditServicePageProps) {
  const service = getServiceById(params.id)

  if (!service) {
    notFound()
  }

  const updateActionWithId = updateServiceAction.bind(null, params.id)

  return (
    <div className="container px-0 py-0">
      <ServiceForm action={updateActionWithId} initialData={service} />
    </div>
  )
}
