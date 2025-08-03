import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle, MapPin } from "lucide-react"
import Link from "next/link"

export default function AdminCareersPage() {
  const jobListings = [
    {
      id: "1",
      title: "Senior Full-Stack Developer",
      location: "Remote",
      description: "We are looking for a passionate Senior Full-Stack Developer to join our growing engineering team.",
    },
    {
      id: "2",
      title: "Product Manager",
      location: "New York, NY",
      description: "Seeking an experienced Product Manager to lead our next generation of AI products.",
    },
    {
      id: "3",
      title: "UI/UX Designer",
      location: "San Francisco, CA",
      description: "Join our design team to create intuitive and beautiful user experiences.",
    },
  ]

  return (
    <div className="container px-0 py-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Job Listings</h2>
        <Button asChild>
          <Link href="/admin/careers/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Job
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobListings.map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <CardTitle className="text-lg line-clamp-2">{job.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {job.location}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground line-clamp-3">{job.description}</p>
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
        **Note:** Job listing management is a placeholder. You would implement forms and server actions similar to
        products.
      </p>
    </div>
  )
}
