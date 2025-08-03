import * as LucideIcons from "lucide-react" // Import all icons as a namespace
import { getServices } from "@/lib/admin-data-store" // Import from admin store

export default function ServicesPage() {
  const services = getServices()

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Our Services</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We offer a comprehensive suite of software services designed to accelerate your business.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] || LucideIcons.HelpCircle // Fallback icon
          return (
            <div key={service.id} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
              <IconComponent className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
