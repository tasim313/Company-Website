import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"
import { getContactInfo } from "@/lib/admin-data-store" // Import dynamic contact info

export default function ContactPage() {
  const contactInfo = getContactInfo() // Fetch dynamic contact info

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Contact Us</h1>
        <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Have a question or want to start a project? Reach out to us!
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
        {/* Contact Form */}
        <div className="bg-card p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <Input id="name" placeholder="Your Name" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <Input id="email" type="email" placeholder="your@example.com" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                Subject
              </label>
              <Input id="subject" placeholder="Project Inquiry, Support, etc." />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <Textarea id="message" placeholder="Tell us about your needs..." rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-card p-8 rounded-lg shadow-sm space-y-6">
          <h2 className="text-2xl font-bold mb-6">Our Contact Information</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">{contactInfo.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">{contactInfo.phone}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="h-6 w-6 text-primary shrink-0" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-muted-foreground">{contactInfo.address}</p>
              </div>
            </div>
          </div>
          {/* Map Placeholder / Embed */}
          {contactInfo.mapEmbedUrl ? (
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src={contactInfo.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Our Location"
              ></iframe>
            </div>
          ) : (
            <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
              [Map Placeholder]
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
