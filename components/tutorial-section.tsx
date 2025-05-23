"use client"

import {
  GitBranchIcon,
  PlusIcon,
  GitMergeIcon,
  UsersIcon,
  GitPullRequestIcon,
  AlertCircleIcon,
  LayoutGridIcon,
  ZapIcon,
  FileIcon,
  TerminalIcon,
} from "lucide-react"
import Link from "next/link"

export interface TutorialItem {
  title: string
  icon: string
  description: string
  items: string[]
  link?: string
  comingSoon?: boolean
}

export interface TutorialSectionProps {
  title: string
  icon: string
  sections: TutorialItem[]
  id?: string
}

export function TutorialSection({ title, icon, sections, id }: TutorialSectionProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "git-branch":
        return <GitBranchIcon className="h-6 w-6" />
      case "plus":
        return <PlusIcon className="h-6 w-6" />
      case "git-merge":
        return <GitMergeIcon className="h-6 w-6" />
      case "users":
        return <UsersIcon className="h-6 w-6" />
      case "git-pull-request":
        return <GitPullRequestIcon className="h-6 w-6" />
      case "alert-circle":
        return <AlertCircleIcon className="h-6 w-6" />
      case "layout-grid":
        return <LayoutGridIcon className="h-6 w-6" />
      case "zap":
        return <ZapIcon className="h-6 w-6" />
      case "file":
        return <FileIcon className="h-6 w-6" />
      case "terminal":
        return <TerminalIcon className="h-6 w-6" />
      default:
        return <GitBranchIcon className="h-6 w-6" />
    }
  }

  return (
    <section id={id} className="w-full py-16 bg-[#0d1117]">
      <div className="container px-4 md:px-6">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-[#161b22] p-2 rounded-lg">{getIcon(icon)}</div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative flex flex-col space-y-4 rounded-xl border border-gray-800 bg-gradient-to-b from-[#161b22] to-[#0d1117] p-6 transition-all duration-300 hover:border-gray-700 hover:shadow-lg hover:shadow-purple-900/5"
            >
              {section.comingSoon && (
                <div className="absolute top-4 right-4 rounded-full bg-gradient-to-r from-amber-600 to-amber-800 px-3 py-1 text-xs font-medium text-white shadow-lg">
                  Coming Soon
                </div>
              )}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#0d1117] group-hover:bg-gradient-to-br group-hover:from-purple-600 group-hover:to-blue-600 transition-all duration-300">
                  {getIcon(section.icon)}
                </div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>
              <p className="text-sm text-gray-400">{section.description}</p>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-sm text-gray-400">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-4">
                <Link
                  href={section.link || "#"}
                  className="inline-flex items-center text-sm font-medium text-purple-400 transition-colors hover:text-purple-300 group-hover:text-white"
                >
                  Read Tutorial
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
