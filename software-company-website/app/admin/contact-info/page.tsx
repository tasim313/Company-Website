import ContactInfoForm from "@/components/admin/contact-info-form"
import { getContactInfo } from "@/lib/admin-data-store"
import { updateContactInfoAction } from "@/actions/contact-info-actions"

export default function AdminContactInfoPage() {
  const contactInfo = getContactInfo()

  return (
    <div className="container px-0 py-0">
      <ContactInfoForm action={updateContactInfoAction} initialData={contactInfo} />
    </div>
  )
}
