import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tag } from "lucide-react" // Using Tag icon for technology tags

interface ProductCardProps {
  product: {
    slug: string
    name: string
    description: string
    technologies: string[]
  }
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}`} className="block h-full">
      <Card className="flex flex-col h-full hover:shadow-lg transition-shadow duration-200 ease-in-out">
        <CardHeader>
          <CardTitle>{product.name}</CardTitle>
          <CardDescription className="line-clamp-3">{product.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2 mt-2">
            {product.technologies.map((tech, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
              >
                <Tag className="mr-1 h-3 w-3" />
                {tech}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
