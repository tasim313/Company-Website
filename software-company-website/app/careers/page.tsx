import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin } from "lucide-react"

export default function CareersPage() {
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
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Careers at SoftwareCo</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Join our innovative team and help us build the future of software.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {jobListings.map((job) => (
          <div key={job.id} className="bg-card p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-2xl font-bold">{job.title}</h2>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>{job.location}</span>
            </div>
            <p className="text-muted-foreground">{job.description}</p>
            <Button asChild>
              <Link href={`/careers/${job.id}`}>
                <Briefcase className="mr-2 h-5 w-5" />
                Apply Now
              </Link>
            </Button>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-muted-foreground">Don't see a role for you? Send us your resume!</p>
        <Button asChild variant="link">
          <Link href="/contact">Contact Us</Link>
        </Button>
      </div>
    </div>
  )
}
