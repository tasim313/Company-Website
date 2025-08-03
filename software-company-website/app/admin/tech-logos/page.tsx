import TechLogoList from "@/components/admin/tech-logo-list"
import { getTechLogos } from "@/lib/admin-data-store"

export default function AdminTechLogosPage() {
  const logos = getTechLogos()
  return (
    <div className="container px-0 py-0">
      <TechLogoList logos={logos} />
    </div>
  )
}
