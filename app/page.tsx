import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { TutorialSection } from "@/components/tutorial-section"
import { Footer } from "@/components/footer"
import { RequestSection } from "@/components/request-section"
import { tutorialSections } from "./data/tutorial-section"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      {tutorialSections.map((section, index) => (
        <TutorialSection key={index} {...section} id={index === 0 ? "GettingStarted" : undefined} />
      ))}
      <RequestSection />
      <Footer />
    </main>
  )
}
