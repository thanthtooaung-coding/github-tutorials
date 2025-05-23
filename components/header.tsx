"use client"

import Link from "next/link"
import { GitHubIcon } from "./icons"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { Menu } from "lucide-react"

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-gray-800 bg-[#0d1117]/95 backdrop-blur-md transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <GitHubIcon className="h-6 w-6 text-white" />
          <span className="text-lg font-medium text-white">GitHub Tutorials</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-white hover:text-gray-300 transition-colors">
            Home
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Features
          </Link>
          <Link href="/tutorials" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Tutorials
          </Link>
          <Link href="#" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            API
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            asChild
            variant="outline"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md border border-gray-700 bg-[#161b22] px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1c2128] hover:border-gray-600"
          >
            <Link href="https://github.com/thanthtooaung-coding/github-tutorials">
              <GitHubIcon className="mr-2 h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161b22] border-b border-gray-800 animate-in slide-in-from-top-5 duration-300">
          <div className="container py-4 px-4 flex flex-col space-y-4">
            <Link
              href="/"
              className="text-sm font-medium text-white py-2 px-4 rounded-md hover:bg-[#1c2128]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-300 py-2 px-4 rounded-md hover:bg-[#1c2128] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/tutorials"
              className="text-sm font-medium text-gray-300 py-2 px-4 rounded-md hover:bg-[#1c2128] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-300 py-2 px-4 rounded-md hover:bg-[#1c2128] hover:text-white"
              onClick={() => setMobileMenuOpen(false)}
            >
              API
            </Link>
            <Button
              asChild
              variant="outline"
              className="w-full justify-center rounded-md border border-gray-700 bg-[#161b22] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1c2128] hover:border-gray-600"
            >
              <Link href="https://github.com/thanthtooaung-coding/github-tutorials">
                <GitHubIcon className="mr-2 h-4 w-4" />
                View on GitHub
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
