import Link from "next/link"
import { GitHubIcon } from "./icons"

export function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#0d1117] py-12">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <GitHubIcon className="h-6 w-6 text-white" />
              <span className="text-lg font-medium bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                GitHub Tutorials
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Comprehensive guides and tutorials to help you master GitHub and Git.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Community
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Licenses
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-800 pt-8 md:flex-row">
          <p className="text-sm text-gray-400">© 2025 Thant Htoo Aung. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white">
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
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
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
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white">
              <GitHubIcon className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
