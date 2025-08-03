import { notFound } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Briefcase, MapPin, ArrowLeft } from "lucide-react"

// Mock data for a single job listing
const jobDetails = {
  "1": {
    title: "Senior Full-Stack Developer",
    location: "Remote",
    description: `
      <p>We are seeking a highly skilled and motivated Senior Full-Stack Developer to join our dynamic engineering team. You will be responsible for designing, developing, and maintaining robust and scalable web applications.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Lead the design and development of new features across the full stack (frontend and backend).</li>
        <li>Write clean, maintainable, and efficient code.</li>
        <li>Collaborate with product managers, designers, and other engineers to define and implement new features.</li>
        <li>Participate in code reviews and mentor junior developers.</li>
        <li>Ensure the performance, quality, and responsiveness of applications.</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>5+ years of experience in full-stack web development.</li>
        <li>Proficiency in React, Node.js, and a modern database (e.g., PostgreSQL, MongoDB).</li>
        <li>Strong understanding of RESTful APIs and microservices architecture.</li>
        <li>Experience with cloud platforms (AWS, Azure, GCP) and CI/CD pipelines.</li>
        <li>Excellent problem-solving and communication skills.</li>
      </ul>
    `,
  },
  "2": {
    title: "Product Manager",
    location: "New York, NY",
    description: `
      <p>We are looking for an experienced Product Manager to drive the strategy, roadmap, and execution for our AI-powered analytics products.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Define product vision, strategy, and roadmap based on market research, customer needs, and business goals.</li>
        <li>Translate product strategy into detailed requirements and prototypes.</li>
        <li>Work closely with engineering, design, and marketing teams throughout the product lifecycle.</li>
        <li>Monitor product performance and identify opportunities for improvement.</li>
        <li>Stay up-to-date with industry trends and competitive landscape.</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of product management experience, preferably with AI/ML products.</li>
        <li>Strong analytical and problem-solving skills.</li>
        <li>Excellent communication and interpersonal skills.</li>
        <li>Ability to work in a fast-paced, agile environment.</li>
        <li>Technical background or strong understanding of software development processes.</li>
      </ul>
    `,
  },
  "3": {
    title: "UI/UX Designer",
    location: "San Francisco, CA",
    description: `
      <p>Join our creative team as a UI/UX Designer and help us craft intuitive and visually appealing user experiences for our software products.</p>
      <h3>Responsibilities:</h3>
      <ul>
        <li>Conduct user research and usability testing to understand user needs and behaviors.</li>
        <li>Create wireframes, prototypes, and high-fidelity mockups.</li>
        <li>Design intuitive and engaging user interfaces for web and mobile applications.</li>
        <li>Collaborate with product managers and developers to ensure design feasibility and implementation.</li>
        <li>Maintain and evolve our design system and brand guidelines.</li>
      </ul>
      <h3>Requirements:</h3>
      <ul>
        <li>3+ years of experience in UI/UX design.</li>
        <li>Proficiency with design tools (e.g., Figma, Sketch, Adobe XD).</li>
        <li>Strong portfolio showcasing your UI/UX design skills and process.</li>
        <li>Understanding of user-centered design principles and best practices.</li>
        <li>Excellent communication and collaboration skills.</li>
      </ul>
    `,
  },
}

interface CareerDetailPageProps {
  params: {
    id: string
  }
}

export default function CareerDetailPage({ params }: CareerDetailPageProps) {
  const job = jobDetails[params.id as keyof typeof jobDetails]

  if (!job) {
    notFound()
  }

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl mx-auto space-y-8">
        <Button asChild variant="outline" className="mb-8 bg-transparent">
          <Link href="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Careers
          </Link>
        </Button>

        <header className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">{job.title}</h1>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-5 w-5" />
            <span>{job.location}</span>
          </div>
        </header>

        <div className="prose prose-lg max-w-none mx-auto">
          {" "}
          {/* Removed dark:prose-invert */}
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
        </div>

        <div className="flex justify-center pt-8 border-t mt-8">
          <Button size="lg">
            <Briefcase className="mr-2 h-5 w-5" />
            Apply for this Position
          </Button>
        </div>
      </div>
    </div>
  )
}
