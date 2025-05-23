"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface SidebarSection {
  title: string
  href: string
  active?: boolean
}

interface RelatedTutorial {
  title: string
  href: string
}

interface TutorialSidebarProps {
  tutorialTitle: string
  sections: SidebarSection[]
  relatedTutorials: RelatedTutorial[]
}

export function TutorialSidebar({ tutorialTitle, sections: initialSections, relatedTutorials }: TutorialSidebarProps) {
  const [sections, setSections] = useState(initialSections)

  // Set up intersection observer for scroll spy
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    // Create an observer for each section
    initialSections.forEach((section) => {
      const sectionId = section.href.replace("#", "")
      const element = document.getElementById(sectionId)

      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                // Update active section
                setSections((prevSections) =>
                  prevSections.map((s) => ({
                    ...s,
                    active: s.href === section.href,
                  })),
                )
              }
            })
          },
          { threshold: 0.2, rootMargin: "-100px 0px -50% 0px" },
        )

        observer.observe(element)
        observers.push(observer)
      }
    })

    // Clean up observers on unmount
    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [initialSections])

  return (
    <aside className="w-64 shrink-0 border-r border-gray-800 bg-[#0d1117]">
      <div className="sticky top-16 h-[calc(100vh-4rem)] p-6 overflow-auto">
        <h2 className="text-base font-medium text-white mb-4">In this tutorial</h2>
        <nav className="space-y-1 mb-8">
          {sections.map((section) => (
            <Link
              key={section.title}
              href={section.href}
              className={cn(
                "block px-3 py-2 text-sm rounded-md transition-colors",
                section.active
                  ? "bg-[#161b22] text-white font-medium"
                  : "text-gray-400 hover:text-white hover:bg-[#161b22]",
              )}
            >
              {section.title}
            </Link>
          ))}
        </nav>

        <h2 className="text-base font-medium text-white mb-4">Related Tutorials</h2>
        <nav className="space-y-1">
          {relatedTutorials.map((tutorial) => (
            <Link
              key={tutorial.title}
              href={tutorial.href}
              className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:text-white hover:bg-[#161b22] transition-colors"
            >
              {tutorial.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
