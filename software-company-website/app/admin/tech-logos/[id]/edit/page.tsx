import TechLogoForm from "@/components/admin/tech-logo-form"
import { getTechLogoById } from "@/lib/admin-data-store"
import { updateTechLogoAction } from "@/actions/tech-logo-actions"
import { notFound } from "next/navigation"

interface EditTechLogoPageProps {
  params: {
    id: string
  }
}

export default function EditTechLogoPage({ params }: EditTechLogoPageProps) {
  const logo = getTechLogoById(params.id)

  if (!logo) {
    notFound()
  }

  const updateActionWithId = updateTechLogoAction.bind(null, params.id)

  return (
    <div className="container px-0 py-0">
      <TechLogoForm action={updateActionWithId} initialData={logo} />
    </div>
  )
}
