import ClientLogoForm from "@/components/admin/client-logo-form"
import { createClientLogoAction } from "@/actions/client-logo-actions"

export default function NewClientLogoPage() {
  return (
    <div className="container px-0 py-0">
      <ClientLogoForm action={createClientLogoAction} />
    </div>
  )
}
