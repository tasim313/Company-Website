import { getTestimonials } from "@/lib/admin-data-store"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function AdminTestimonialsPage() {
  const testimonials = getTestimonials()

  return (
    <div className="container px-0 py-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Testimonials</h2>
        <Button asChild>
          <Link href="/admin/testimonials/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Testimonial
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-lg">{testimonial.author}</CardTitle>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </CardHeader>
            <CardContent>
              <blockquote className="text-muted-foreground italic line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="flex justify-end gap-2 mt-4">
                <Button variant="outline" size="sm">
                  Edit
                </Button>
                <Button variant="destructive" size="sm">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <p className="mt-8 text-muted-foreground">
        **Note:** Testimonial management is a placeholder. You would implement forms and server actions similar to
        products.
      </p>
    </div>
  )
}
