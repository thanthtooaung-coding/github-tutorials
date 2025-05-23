import { BookOpenIcon } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="w-full py-20 md:py-32 bg-[#0d1117] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMThjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTE4IDBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bS0xOCAxOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMTggMGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0xOGMwLTIuMjA5LTEuNzkxLTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-30 blur-xl"></div>
            <div className="relative bg-[#161b22] rounded-full p-4">
              <BookOpenIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-3 duration-500">
            GitHub Tutorials
          </h1>
          <p className="max-w-[700px] text-gray-400 md:text-xl animate-in fade-in slide-in-from-bottom-5 duration-700">
            Step-by-step guides to help you master GitHub and Git with detailed instructions and examples.
          </p>
          <div className="flex flex-wrap gap-4 justify-center animate-in fade-in slide-in-from-bottom-7 duration-1000">
            <Link
              href="#GettingStarted"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gradient-to-r from-purple-600 to-blue-600 px-8 text-sm font-medium text-white shadow-lg shadow-purple-900/20 transition-transform hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-700 bg-[#161b22] px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#1c2128] hover:border-gray-600"
            >
              Browse Tutorials
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
