import TechLogoForm from "@/components/admin/tech-logo-form"
import { createTechLogoAction } from "@/actions/tech-logo-actions"

export default function NewTechLogoPage() {
  return (
    <div className="container px-0 py-0">
      <TechLogoForm action={createTechLogoAction} />
    </div>
  )
}
