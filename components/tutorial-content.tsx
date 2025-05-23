import type { ReactNode } from "react"

interface TutorialContentProps {
  children: ReactNode
}

export function TutorialContent({ children }: TutorialContentProps) {
  return <div className="max-w-4xl mx-auto px-4 py-8 md:px-8 md:py-12">{children}</div>
}
