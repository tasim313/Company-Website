import ClientLogoForm from "@/components/admin/client-logo-form"
import { getClientLogoById } from "@/lib/admin-data-store"
import { updateClientLogoAction } from "@/actions/client-logo-actions"
import { notFound } from "next/navigation"

interface EditClientLogoPageProps {
  params: {
    id: string
  }
}

export default function EditClientLogoPage({ params }: EditClientLogoPageProps) {
  const logo = getClientLogoById(params.id)

  if (!logo) {
    notFound()
  }

  const updateActionWithId = updateClientLogoAction.bind(null, params.id)

  return (
    <div className="container px-0 py-0">
      <ClientLogoForm action={updateActionWithId} initialData={logo} />
    </div>
  )
}
