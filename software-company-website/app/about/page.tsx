import { getAboutContent } from "@/lib/admin-data-store"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  const aboutContent = getAboutContent()

  return (
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">About Us</h1>
        <p className="max-w-[900px] mx-auto text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
          Learn more about our journey, values, and what drives us.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-12">
        {/* Company Overview */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Company Overview</h2>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: aboutContent.companyOverview }}
          />
        </section>

        {/* Mission & Vision */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Mission & Vision</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: aboutContent.missionVision }} />
        </section>

        {/* Company Timeline / History */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Company Timeline / History</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: aboutContent.history }} />
        </section>

        {/* Core Values / Principles */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Core Values / Principles</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: aboutContent.coreValues }} />
        </section>

        {/* Achievements & Recognition */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Achievements & Recognition</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: aboutContent.achievements }} />
        </section>

        {/* Partnerships / Affiliations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Partnerships / Affiliations</h2>
          <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: aboutContent.partnerships }} />
        </section>

        {/* Global Presence / Office Locations */}
        <section className="space-y-4">
          <h2 className="text-3xl font-bold">Global Presence / Office Locations</h2>
          <div
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: aboutContent.globalPresence }}
          />
        </section>

        {/* Call to Action */}
        <section className="text-center pt-8 border-t mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <Button asChild size="lg">
            <Link href={aboutContent.ctaHref}>{aboutContent.ctaText}</Link>
          </Button>
        </section>
      </div>
    </div>
  )
}
