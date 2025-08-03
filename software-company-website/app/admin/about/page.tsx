import AboutContentForm from "@/components/admin/about-content-form"
import { getAboutContent } from "@/lib/admin-data-store"
import { updateAboutContentAction } from "@/actions/about-actions"

export default function AdminAboutPage() {
  const aboutContent = getAboutContent()

  return (
    <div className="container px-0 py-0">
      <AboutContentForm action={updateAboutContentAction} initialData={aboutContent} />
    </div>
  )
}
