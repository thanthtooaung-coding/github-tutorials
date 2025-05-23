import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TutorialSection } from "@/components/tutorial-section"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { tutorialSections } from "../data/tutorial-section"

export default function TutorialsPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <Link href="/" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back to Home
        </Link>

        <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-8">
          GitHub Tutorials
        </h1>

        <p className="text-gray-300 max-w-3xl mb-12">
          Browse my comprehensive collection of GitHub tutorials to help you master Git and GitHub. From beginner to
          advanced topics, we've got you covered.
        </p>

        {tutorialSections.map((section, index) => (
          <TutorialSection key={index} {...section} />
        ))}
      </div>
      <Footer />
    </main>
  )
}
