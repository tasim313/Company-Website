import Image from "next/image"
import { Card, CardContent, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlusCircle } from "lucide-react"
import Link from "next/link"

export default function AdminTeamPage() {
  const teamMembers = [
    { name: "Jane Doe", title: "CEO & Founder", image: "/placeholder.svg?height=200&width=200" },
    { name: "John Smith", title: "CTO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Emily White", title: "Lead Developer", image: "/placeholder.svg?height=200&width=200" },
    { name: "David Green", title: "Head of Marketing", image: "/placeholder.svg?height=200&width=200" },
  ]

  return (
    <div className="container px-0 py-0">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Team Members</h2>
        <Button asChild>
          <Link href="/admin/team/new">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Member
          </Link>
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <Card key={index}>
            <CardContent className="flex flex-col items-center p-6">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mb-4 object-cover aspect-square"
              />
              <CardTitle className="text-lg">{member.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{member.title}</p>
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
        **Note:** Team member management is a placeholder. You would implement forms and server actions similar to
        products.
      </p>
    </div>
  )
}
