import Image from "next/image"

export default function TeamPage() {
  const teamMembers = [
    { name: "Jane Doe", title: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
    { name: "John Smith", title: "CTO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Emily White", title: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
    { name: "David Green", title: "Head of Marketing", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">Meet Our Team</h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Behind every great software solution is a team of dedicated and talented individuals.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm">
            <Image
              src={member.image || "/placeholder.svg"}
              alt={member.name}
              width={150}
              height={150}
              className="rounded-full mb-4 object-cover aspect-square"
            />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-muted-foreground text-sm">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
